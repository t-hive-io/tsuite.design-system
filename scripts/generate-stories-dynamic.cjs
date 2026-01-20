/**
 * Generate Dynamic Story Files from Figma Structure
 * 
 * This script generates .stories.tsx files directly from Figma API
 * Run: npm run figma:generate-stories
 * 
 * Benefits:
 * - Automatically creates stories based on Figma pages and components
 * - Stories always match Figma structure
 * - Single source of truth from Figma
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

const outputDir = path.join(__dirname, '../src/generated-stories');
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

// Only generate stories from this page (or null for all pages)
const FILTER_PAGE = '❖ Tooltips'; // Generate only Tooltips

/**
 * Fetch Figma file structure
 */
async function fetchFigmaStructure() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/files/${FIGMA_FILE_KEY}?depth=10`, // Increased depth to get nested components
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Fetch detailed component nodes
 */
async function fetchComponentDetails(nodeIds) {
  return new Promise((resolve, reject) => {
    const ids = nodeIds.join(',');
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(ids)}`,
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Delay for rate limiting
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Recursively find all COMPONENT_SET nodes
 * Only COMPONENT_SET nodes have componentPropertyDefinitions and generate argTypes
 */
function findComponents(node, pageName, results = []) {
  if (node.type === 'COMPONENT_SET') {
    results.push({ node, pageName });
  }
  
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(child => findComponents(child, pageName, results));
  }
  
  return results;
}

/**
 * Normalize page name (category)
 */
const normalizePageName = (pageName) => {
  if (!pageName) return 'Uncategorized';
  return pageName.replace(/^❖\s*/, '').trim();
};

/**
 * Generate Storybook story ID (how Storybook generates IDs from titles)
 * This matches Storybook's internal ID generation logic
 */
const generateStoryId = (category, name) => {
  // Storybook converts title to lowercase, replaces spaces with dashes, 
  // removes special chars, and creates the ID
  const fullTitle = `Components/${category}/${name}`;
  return fullTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dash
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
};

/**
 * Sanitize component name for filename
 * Preserves trailing underscores and hyphens to avoid collisions
 */
const sanitizeFilename = (name) => {
  // First, preserve trailing underscores by replacing with a marker
  let hasTrailingUnderscore = name.endsWith('_');
  let hasTrailingHyphen = name.endsWith('-');
  
  let result = name
    .replace(/[–—]/g, '-')
    .replace(/:/g, '-')
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9-_]/g, '');
  
  // Restore trailing markers
  if (hasTrailingUnderscore && !result.endsWith('_')) {
    result += '_';
  }
  if (hasTrailingHyphen && !result.endsWith('-')) {
    result += '-';
  }
  
  return result;
};

/**
 * Sanitize component name for variable
 */
const sanitizeVariableName = (name) => {
  let varName = name
    .replace(/[–—]/g, '-')
    .replace(/:/g, '-')
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9_]/g, '');

  // Prepend underscore if starts with number
  if (/^[0-9]/.test(varName)) {
    varName = '_' + varName;
  }
  
  // If empty after sanitization, use generic name
  if (!varName) {
    varName = 'Component';
  }

  return varName;
};

/**
 * Convert property name to camelCase
 */
const toCamelCase = (str) => {
  let result = str
    .replace(/#\d+:\d+/g, '') // Remove Figma IDs
    .trim()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\s+/g, '');
  
  // Prepend underscore if starts with number
  if (/^[0-9]/.test(result)) {
    result = '_' + result;
  }
  
  return result || 'property';
};

/**
 * Extract properties from component
 */
const extractProperties = (componentPropertyDefinitions) => {
  if (!componentPropertyDefinitions) return { variantProps: {}, booleanProps: {} };

  const variantProps = {};
  const booleanProps = {};

  Object.entries(componentPropertyDefinitions).forEach(([propName, propDef]) => {
    const camelName = toCamelCase(propName);

    if (propDef.type === 'VARIANT') {
      const options = propDef.variantOptions || [];
      variantProps[camelName] = {
        type: 'select',
        options: options.map(opt => opt.toLowerCase().replace(/\s+/g, '-')),
        defaultValue: propDef.defaultValue?.toLowerCase().replace(/\s+/g, '-') || options[0]?.toLowerCase().replace(/\s+/g, '-'),
      };
    } else if (propDef.type === 'BOOLEAN') {
      booleanProps[camelName] = {
        type: 'boolean',
        defaultValue: propDef.defaultValue === true,
      };
    }
  });

  return { variantProps, booleanProps };
};

/**
 * Generate story content for component
 */
const generateStoryContent = ({ name, id, pageName, componentPropertyDefinitions, titleSuffix }) => {
  const category = normalizePageName(pageName);
  const componentName = sanitizeFilename(name);
  const componentVarName = sanitizeVariableName(name);
  const componentPath = path.join(__dirname, '../src/components', componentName);
  const hasReactComponent = fs.existsSync(componentPath);

  const { variantProps, booleanProps } = extractProperties(componentPropertyDefinitions);
  
  // Read CSS file if it exists to show in docs
  let cssContent = '';
  const cssPath = path.join(componentPath, `${componentName}.css`);
  if (fs.existsSync(cssPath)) {
    cssContent = fs.readFileSync(cssPath, 'utf-8');
  }
  
  // Add suffix to title if provided (for duplicate names)
  const titleName = titleSuffix ? `${name} (${titleSuffix})` : name;

  if (hasReactComponent) {
    // Generate argTypes from properties
    const argTypes = {};
    Object.entries(variantProps).forEach(([propName, prop]) => {
      argTypes[propName] = {
        control: 'select',
        options: prop.options,
        description: `${propName} variant`,
      };
    });
    Object.entries(booleanProps).forEach(([propName, prop]) => {
      argTypes[propName] = {
        control: 'boolean',
        description: `${propName} toggle`,
      };
    });
    
    // Hide utility props (className, style, etc) and Content props from controls
    argTypes.className = { table: { disable: true } };
    argTypes.style = { table: { disable: true } };
    // Hide any *Content props (used for conditional boolean content)
    Object.keys(booleanProps).forEach(propName => {
      argTypes[`${propName}Content`] = { table: { disable: true } };
    });

    // Generate default args
    const defaultArgs = {};
    Object.entries(variantProps).forEach(([propName, prop]) => {
      defaultArgs[propName] = prop.defaultValue;
    });
    Object.entries(booleanProps).forEach(([propName, prop]) => {
      defaultArgs[propName] = prop.defaultValue;
    });

    const argsString = Object.keys(defaultArgs).length > 0 
      ? `\n  args: ${JSON.stringify(defaultArgs, null, 4).replace(/"([^"]+)":/g, '$1:')},`
      : '';

    const argTypesString = Object.keys(argTypes).length > 0
      ? `\n  argTypes: ${JSON.stringify(argTypes, null, 4).replace(/"([^"]+)":/g, '$1:')},`
      : '';

    // CSS documentation will be added via parameters instead of JSDoc

    return `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentVarName} } from '../../components/${componentName}';

/**
 * ${titleName}
 * 
 * **AUTO-GENERATED** from Figma structure
 * 
 * Figma ID: ${id}
 */

const meta = {
  title: 'Components/${category}/${titleName}',
  component: ${componentVarName},
  parameters: {
    layout: 'centered',${cssContent ? `
    docs: {
      description: {
        component: \`
## CSS Styling

The UX design team defined these styles in Figma. You can copy and customize them:

<details>
<summary><strong>View CSS Code</strong></summary>

\\\`\\\`\\\`css
${cssContent.trim()}
\\\`\\\`\\\`

</details>

### Usage Example

\\\`\\\`\\\`tsx
import { ${componentVarName} } from '@tsuite/design-system';
import '@tsuite/design-system/dist/${componentName}.css';

<${componentVarName} arrowPlacement="top-center" />
\\\`\\\`\\\`
\`
      }
    },` : ''}
  },
  tags: ['autodocs'],${argTypesString}
} satisfies Meta<typeof ${componentVarName}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {${argsString}
};
`;
  } else {
    // Component not yet generated
    return `import type { Meta, StoryObj } from '@storybook/react';

/**
 * ${titleName}
 * 
 * **AUTO-GENERATED** from Figma structure
 * Component not yet generated
 * Figma ID: ${id}
 */

const ${componentVarName}Preview = () => (
  <div style={{ 
    padding: '40px', 
    textAlign: 'center',
    background: '#f8f9fa',
    borderRadius: '8px',
  }}>
    <div style={{ marginBottom: '20px', fontSize: '48px' }}>⚠️</div>
    <h3 style={{ margin: '0 0 12px 0', color: '#212529' }}>Component Not Generated</h3>
    <p style={{ margin: '0', color: '#6c757d' }}>
      Run <code style={{ 
        padding: '2px 8px', 
        background: '#e9ecef', 
        borderRadius: '4px',
        color: '#d63384',
      }}>npm run figma:generate-components</code> to generate React component
    </p>
  </div>
);

const meta = {
  title: 'Components/${category}/${titleName}',
  component: ${componentVarName}Preview,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ${componentVarName}Preview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`;
  }
};

/**
 * Main generation function
 */
const main = async () => {
  console.log('🔄 Fetching Figma structure...');
  
  if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
    console.error('❌ Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN');
    process.exit(1);
  }

  const figmaData = await fetchFigmaStructure();
  
  console.log('🗑️  Cleaning output directory...');
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  let generated = 0;
  let skipped = 0;

  console.log('✨ Generating story files from Figma pages...');
  if (FILTER_PAGE) {
    console.log(`   Filtering by page: ${FILTER_PAGE}`);
  }
  
  // Collect all component IDs that need detailed fetching
  const componentIds = [];
  const componentMap = new Map();
  
  figmaData.document.children.forEach(page => {
    if (!page.children || page.children.length === 0) return;
    if (FILTER_PAGE && page.name !== FILTER_PAGE) return;
    
    // Recursively find all components in the page
    const components = findComponents(page, page.name);
    console.log(`📄 ${page.name}: found ${components.length} components`);
    
    components.forEach(({ node }) => {
      componentIds.push(node.id);
      componentMap.set(node.id, { page, component: node });
    });
  });

  console.log(`\n🔍 Fetching detailed properties for ${componentIds.length} components...`);
  
  // Fetch component details in batches (rate limit: 2 req/s, so batch of ~50 at a time)
  const batchSize = 50;
  const detailedComponents = {};
  
  for (let i = 0; i < componentIds.length; i += batchSize) {
    const batch = componentIds.slice(i, i + batchSize);
    console.log(`   Batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(componentIds.length / batchSize)}: fetching ${batch.length} components...`);
    
    const details = await fetchComponentDetails(batch);
    Object.assign(detailedComponents, details.nodes);
    
    // Rate limit delay (500ms = 2 req/s)
    if (i + batchSize < componentIds.length) {
      await delay(500);
    }
  }

  console.log('\n📝 Generating stories...');
  
  // First pass: Track all components and detect story ID collisions (not just name collisions)
  const storyIdTracker = new Map(); // Map of storyId -> components[]
  
  componentMap.forEach((data, componentId) => {
    const { page, component } = data;
    const category = normalizePageName(page.name);
    const storyId = generateStoryId(category, component.name);
    
    if (!storyIdTracker.has(storyId)) {
      storyIdTracker.set(storyId, []);
    }
    storyIdTracker.get(storyId).push({ componentId, data, originalName: component.name });
  });
  
  // Second pass: Generate stories with unique titles for colliding story IDs
  const filenameTracker = new Map(); // Map of category -> Set of filenames
  
  componentMap.forEach((data, componentId) => {
    const { page, component } = data;
    const detailedComponent = detailedComponents[componentId]?.document;
    
    const category = normalizePageName(page.name);
    const categoryDir = path.join(outputDir, category);

    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Initialize filename tracker for this category
    if (!filenameTracker.has(category)) {
      filenameTracker.set(category, new Set());
    }
    
    // Determine title suffix based on story ID collisions
    const storyId = generateStoryId(category, component.name);
    const duplicates = storyIdTracker.get(storyId);
    let titleSuffix = null;
    
    if (duplicates.length > 1) {
      // Find this component's position in the duplicates list
      const position = duplicates.findIndex(d => d.componentId === componentId) + 1;
      titleSuffix = position;
    }
    
    let componentName = sanitizeFilename(component.name);
    let filename = `${componentName}.stories.tsx`;
    let filepath = path.join(categoryDir, filename);
    
    // Handle filename collisions by adding numeric suffix
    let counter = 2;
    while (filenameTracker.get(category).has(filename)) {
      filename = `${componentName}-${counter}.stories.tsx`;
      filepath = path.join(categoryDir, filename);
      counter++;
    }
    
    filenameTracker.get(category).add(filename);
    
    const content = generateStoryContent({
      name: component.name,
      id: component.id,
      pageName: page.name,
      componentPropertyDefinitions: detailedComponent?.componentPropertyDefinitions || {},
      titleSuffix
    });

    fs.writeFileSync(filepath, content, 'utf-8');
    generated++;
    
    const suffix = titleSuffix ? ` (duplicate ${titleSuffix})` : '';
    console.log(`  ✅ ${component.name}${suffix}`);
  });

  console.log('');
  console.log('✅ Story generation complete!');
  console.log(`   Generated: ${generated} story files`);
  console.log(`   Skipped: ${skipped} non-component nodes`);
  console.log(`   Output: ${outputDir}`);
};

// Run
main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
