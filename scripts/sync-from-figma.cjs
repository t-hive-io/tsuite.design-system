#!/usr/bin/env node

/**
 * Master Figma Sync Orchestrator
 * 
 * This script performs a complete synchronization between Figma and the codebase:
 * 1. Compares Figma components (from figma-docs.json) with existing story files
 * 2. Identifies NEW components → generates story files
 * 3. Identifies REMOVED components → deletes story files
 * 4. Identifies CHANGED components → updates story files
 * 5. Regenerates Icon Gallery
 * 6. Reports all changes made
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// ============================================================================
// CONFIGURATION
// ============================================================================

const FIGMA_DOCS_PATH = path.join(__dirname, '../src/figma-docs.json');
const STORIES_DIR = path.join(__dirname, '../src/components');
const ICON_GALLERY_PATH = path.join(__dirname, '../src/IconGallery.stories.tsx');

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function loadFigmaDocs() {
  if (!fs.existsSync(FIGMA_DOCS_PATH)) {
    throw new Error(`Figma docs not found at ${FIGMA_DOCS_PATH}`);
  }
  return JSON.parse(fs.readFileSync(FIGMA_DOCS_PATH, 'utf-8'));
}

function getAllStoryFiles() {
  return glob.sync('**/*.stories.tsx', {
    cwd: STORIES_DIR,
    absolute: true,
  });
}

function extractComponentIdFromStory(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/componentId:\s*['"](\d+:\d+)['"]/);
  return match ? match[1] : null;
}

function extractFigmaComponentFromStory(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/figmaComponent:\s*['"]([^'"]+)['"]/);
  return match ? match[1] : null;
}

function sanitizeComponentName(name) {
  // Convert to valid filename and component name
  // Remove special chars, hyphens at start, spaces
  return name
    .replace(/[^a-zA-Z0-9_\s]/g, '') // Remove special chars except underscore and space
    .trim()
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/^[0-9_]+/, '') // Remove leading numbers/underscores
    .replace(/_{2,}/g, '_') // Replace multiple underscores with single
    || 'Component'; // Fallback if empty
}

function getFolderNameFromPageName(pageName) {
  if (!pageName) return 'Uncategorized';
  
  // Remove ❖ symbol
  let folder = pageName.replace(/^❖\s*/, '');
  
  // Convert to PascalCase folder name
  folder = folder
    .split(/[\s\/]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  return folder;
}

// ============================================================================
// DIFF ANALYSIS
// ============================================================================

function analyzeDiff(figmaDocs, storyFiles) {
  console.log('\n🔍 Analyzing differences between Figma and codebase...\n');
  
  // Build maps
  const figmaComponents = new Map();
  Object.entries(figmaDocs).forEach(([name, data]) => {
    figmaComponents.set(data.id, { name, ...data });
  });
  
  const existingStories = new Map();
  storyFiles.forEach(filePath => {
    const componentId = extractComponentIdFromStory(filePath);
    if (componentId) {
      existingStories.set(componentId, filePath);
    }
  });
  
  // Find differences
  const newComponents = [];
  const changedComponents = [];
  const removedComponents = [];
  
  // Check for new and changed components
  figmaComponents.forEach((component, id) => {
    if (!existingStories.has(id)) {
      newComponents.push(component);
    } else {
      changedComponents.push({
        component,
        storyPath: existingStories.get(id),
      });
    }
  });
  
  // Check for removed components
  existingStories.forEach((storyPath, id) => {
    if (!figmaComponents.has(id)) {
      removedComponents.push({
        id,
        storyPath,
        figmaComponent: extractFigmaComponentFromStory(storyPath),
      });
    }
  });
  
  return { newComponents, changedComponents, removedComponents };
}

// ============================================================================
// STORY FILE GENERATION
// ============================================================================

function generateStoryContent(component) {
  const { name, id, pageName, description, figmaUrl } = component;
  const componentName = sanitizeComponentName(name);
  const folderName = getFolderNameFromPageName(pageName);
  const categoryName = pageName ? pageName.replace(/^❖\s*/, '') : 'Uncategorized';
  
  return `import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const ${componentName} = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p><strong>${name}</strong></p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/${categoryName}/${name}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: ${JSON.stringify(description || '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.')},
      },
    },
    figma: {
      componentId: '${id}',
      figmaComponent: '${name}',
      url: '${figmaUrl}',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
`;
}

function createStoryFile(component) {
  const { name, pageName } = component;
  const componentName = sanitizeComponentName(name);
  const folderName = getFolderNameFromPageName(pageName);
  
  const storyDir = path.join(STORIES_DIR, folderName);
  const storyPath = path.join(storyDir, `${componentName}.stories.tsx`);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(storyDir)) {
    fs.mkdirSync(storyDir, { recursive: true });
  }
  
  // Generate and write story content
  const content = generateStoryContent(component);
  fs.writeFileSync(storyPath, content, 'utf-8');
  
  return storyPath;
}

// ============================================================================
// STORY FILE UPDATE
// ============================================================================

function updateStoryFile(storyPath, component) {
  let content = fs.readFileSync(storyPath, 'utf-8');
  let updated = false;
  
  const { name, pageName, description, figmaUrl } = component;
  const categoryName = pageName ? pageName.replace(/^❖\s*/, '') : 'Uncategorized';
  
  // Update title (category part only)
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch) {
    const currentTitle = titleMatch[1];
    const titleParts = currentTitle.split('/');
    
    if (titleParts.length >= 3 && titleParts[1] !== categoryName) {
      const newTitle = [titleParts[0], categoryName, ...titleParts.slice(2)].join('/');
      content = content.replace(
        /title:\s*['"][^'"]+['"]/,
        `title: '${newTitle}'`
      );
      updated = true;
    }
  }
  
  // Update description
  if (description) {
    const descValue = description || '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.';
    const newDescValue = JSON.stringify(descValue);
    
    // Match component description with proper multiline string support
    const descRegex = /component:\s*["'][\s\S]*?["'](?=,?\s*\n\s*})/;
    const descMatch = content.match(descRegex);
    
    if (descMatch) {
      const newDesc = `component:\n          ${newDescValue}`;
      const currentDescValue = descMatch[0].match(/["']([\s\S]*?)["'](?=,?\s*\n\s*})/)?.[1];
      
      if (currentDescValue !== descValue) {
        content = content.replace(descRegex, newDesc);
        updated = true;
      }
    }
  }
  
  // Update Figma URL
  if (figmaUrl) {
    content = content.replace(
      /url:\s*['"][^'"]*['"]/,
      `url: '${figmaUrl}'`
    );
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(storyPath, content, 'utf-8');
  }
  
  return updated;
}

// ============================================================================
// STORY FILE DELETION
// ============================================================================

function deleteStoryFile(storyPath) {
  if (fs.existsSync(storyPath)) {
    fs.unlinkSync(storyPath);
    
    // Try to remove empty parent directory
    const dir = path.dirname(storyPath);
    try {
      const files = fs.readdirSync(dir);
      if (files.length === 0) {
        fs.rmdirSync(dir);
      }
    } catch (e) {
      // Directory not empty or other error, ignore
    }
  }
}

// ============================================================================
// ICON GALLERY REGENERATION
// ============================================================================

function regenerateIconGallery(figmaDocs) {
  console.log('\n🎨 Regenerating Icon Gallery...\n');
  
  // Find all icon components
  const icons = Object.entries(figmaDocs)
    .filter(([name, data]) => {
      const pageName = data.pageName || '';
      return pageName.toLowerCase().includes('icon');
    })
    .map(([name, data]) => ({
      name,
      id: data.id,
      url: data.figmaUrl,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  const content = `import type { Meta, StoryObj } from '@storybook/react';

/**
 * Icon Gallery - Auto-generated from Figma
 * 
 * This gallery showcases all icons available in the design system.
 * Total icons: ${icons.length}
 */

const IconGallery = () => (
  <div style={{ padding: '20px' }}>
    <h1>Icon Gallery</h1>
    <p>Total icons: ${icons.length}</p>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
      gap: '20px',
      marginTop: '20px'
    }}>
      ${icons.map(icon => `
      <div style={{ 
        border: '1px solid #e0e0e0', 
        padding: '10px', 
        textAlign: 'center',
        borderRadius: '4px'
      }}>
        <div style={{ fontSize: '12px', marginTop: '8px', wordBreak: 'break-word' }}>
          ${icon.name}
        </div>
      </div>`).join('')}
    </div>
  </div>
);

const meta = {
  title: 'Foundation/Icon Gallery',
  component: IconGallery,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete gallery of all icons in the design system, automatically synchronized from Figma.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;
  
  fs.writeFileSync(ICON_GALLERY_PATH, content, 'utf-8');
  console.log(`   ✅ Icon Gallery regenerated with ${icons.length} icons`);
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function main() {
  console.log('🔄 Starting Figma → Codebase Sync...\n');
  console.log('=' .repeat(60));
  
  try {
    // Load Figma data
    console.log('📦 Loading Figma documentation...');
    const figmaDocs = loadFigmaDocs();
    console.log(`   Found ${Object.keys(figmaDocs).length} components in Figma\n`);
    
    // Get existing story files
    console.log('📂 Scanning existing story files...');
    const storyFiles = getAllStoryFiles();
    console.log(`   Found ${storyFiles.length} story files\n`);
    
    // Analyze differences
    const { newComponents, changedComponents, removedComponents } = analyzeDiff(figmaDocs, storyFiles);
    
    console.log('📊 Summary:');
    console.log(`   🆕 New components: ${newComponents.length}`);
    console.log(`   ✏️  Changed components: ${changedComponents.length}`);
    console.log(`   🗑️  Removed components: ${removedComponents.length}`);
    console.log('');
    
    // Process new components
    if (newComponents.length > 0) {
      console.log(`\n🆕 Creating ${newComponents.length} new story files...\n`);
      newComponents.forEach(component => {
        const storyPath = createStoryFile(component);
        console.log(`   ✅ Created: ${path.relative(process.cwd(), storyPath)}`);
      });
    }
    
    // Process changed components
    if (changedComponents.length > 0) {
      console.log(`\n✏️  Updating ${changedComponents.length} story files...\n`);
      let updatedCount = 0;
      changedComponents.forEach(({ component, storyPath }) => {
        const updated = updateStoryFile(storyPath, component);
        if (updated) {
          console.log(`   ✅ Updated: ${path.relative(process.cwd(), storyPath)}`);
          updatedCount++;
        }
      });
      console.log(`\n   ${updatedCount} files actually updated`);
    }
    
    // Process removed components
    if (removedComponents.length > 0) {
      console.log(`\n🗑️  Removing ${removedComponents.length} obsolete story files...\n`);
      removedComponents.forEach(({ storyPath, figmaComponent }) => {
        deleteStoryFile(storyPath);
        console.log(`   ✅ Deleted: ${path.relative(process.cwd(), storyPath)} (${figmaComponent})`);
      });
    }
    
    // Regenerate Icon Gallery
    regenerateIconGallery(figmaDocs);
    
    console.log('\n' + '='.repeat(60));
    console.log('✨ Sync complete!\n');
    
  } catch (error) {
    console.error('\n❌ Sync failed:', error.message);
    process.exit(1);
  }
}

main();
