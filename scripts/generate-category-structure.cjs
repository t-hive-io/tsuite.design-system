require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN || process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

// Mapping from folder names to Figma page names and IDs
const categoryPages = [
  { folder: 'Accordion', pageId: '5193:36784', components: 3, variants: 8 },
  { folder: 'Badge', pageId: '5168:44095', components: 1, variants: 3 },
  { folder: 'Banner', pageId: '5248:20526', components: 1, variants: 1 },
  { folder: 'BottomBars', pageId: '5168:44729', components: 2, variants: 4 },
  { folder: 'BreadCrumbs', pageId: '5170:45474', components: 0, variants: 0 },
  { folder: 'Button', pageId: '5170:45280', components: 3, variants: 36 },
  { folder: 'CanvasObjects', pageId: '5170:45525', components: 16, variants: 89 },
  { folder: 'Card', pageId: '5171:45784', components: 8, variants: 40 },
  { folder: 'CheckboxRadio', pageId: '5172:38133', components: 2, variants: 5 },
  { folder: 'ChipsTags', pageId: '5172:38144', components: 3, variants: 15 },
  { folder: 'Cursor', pageId: '5172:38151', components: 0, variants: 0 },
  { folder: 'DataTable', pageId: '5194:45461', components: 4, variants: 10 },
  { folder: 'Dialogs', pageId: '5175:37036', components: 4, variants: 10 },
  { folder: 'Divider', pageId: '5182:37137', components: 1, variants: 2 },
  { folder: 'Icon', pageId: '5193:37078', components: 153, variants: 623 },
  { folder: 'Illustrations', pageId: '5246:38377', components: 2, variants: 12 },
  { folder: 'Input', pageId: '5193:38949', components: 2, variants: 46 },
  { folder: 'LargeComponents', pageId: '5193:39157', components: 6, variants: 16 },
  { folder: 'Menus', pageId: '5193:45251', components: 3, variants: 26 },
  { folder: 'ProgressIndicators', pageId: '5193:45265', components: 2, variants: 9 },
  { folder: 'PropertyPanels', pageId: null, components: 11, variants: 154 },
  { folder: 'RackingData', pageId: null, components: 1, variants: 16 },
  { folder: 'Slider', pageId: '5194:45447', components: 1, variants: 2 },
  { folder: 'Switch', pageId: '5194:45454', components: 1, variants: 2 },
  { folder: 'Tabs', pageId: '5194:45468', components: 1, variants: 2 },
  { folder: 'ToolRail', pageId: '5194:45487', components: 4, variants: 12 },
  { folder: 'Tooltip', pageId: '5194:45501', components: 1, variants: 12 },
  { folder: 'TreeView', pageId: '5200:798', components: 4, variants: 26 },
  { folder: 'UIShellHeader', pageId: '5236:21014', components: 1, variants: 2 },
  { folder: 'UIShellRightPanel', pageId: '5236:21016', components: 16, variants: 88 },
];

// Convert PascalCase to readable title
function toTitle(str) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^./, s => s.toUpperCase());
}

// Convert Figma property name to valid JS identifier
function toPropertyName(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^(\d)/, '_$1');
}

// Convert Figma component name to valid component name
function toComponentName(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^(\d)/, '_$1')
    .replace(/^./, s => s.toUpperCase());
}

async function getComponentsFromPage(pageId) {
  console.log(`\n📥 Fetching components from page ${pageId}...`);
  
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${pageId}`;
  
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      },
      timeout: 10000
    });

    const node = response.data.nodes[pageId];
    if (!node) {
      console.log(`❌ Page ${pageId} not found`);
      return [];
    }

    const components = [];
    
    function traverse(node) {
      if (node.type === 'COMPONENT_SET') {
        const componentSetProps = node.componentPropertyDefinitions || {};
        const variants = node.children || [];
        
        // Extract variant IDs from children
        const variantIds = variants
          .filter(child => child.type === 'COMPONENT')
          .map(child => child.id);
        
        components.push({
          id: node.id,
          name: node.name,
          type: 'COMPONENT_SET',
          properties: componentSetProps,
          variantCount: variants.length,
          variantIds: variantIds, // Add variant IDs for SVG matching
        });
      }
      
      if (node.children) {
        node.children.forEach(child => traverse(child));
      }
    }

    traverse(node.document);
    
    console.log(`✅ Found ${components.length} component sets`);
    return components;
  } catch (error) {
    console.error(`❌ Error fetching page ${pageId}:`, error.message);
    return [];
  }
}

function findSvgFiles(component) {
  const iconsDir = path.join(__dirname, '../src/assets/icons');
  
  try {
    const files = fs.readdirSync(iconsDir);
    const svgFiles = files.filter(file => file.endsWith('.svg'));
    
    // Try matching with variant IDs first (more specific)
    if (component.variantIds && component.variantIds.length > 0) {
      const variantMatches = svgFiles.filter(file => {
        return component.variantIds.some(variantId => {
          const formattedId = variantId.replace(':', '-');
          return file.includes(`--${formattedId}.svg`);
        });
      });
      
      if (variantMatches.length > 0) {
        return variantMatches;
      }
    }
    
    // Fallback: Try component set ID with base pattern
    const componentId = component.id || component;
    const baseId = componentId.replace(':', '-').substring(0, 7);
    const pattern = new RegExp(`--${baseId}\\d+\\.svg$`);
    
    return svgFiles.filter(file => pattern.test(file));
  } catch (error) {
    console.error(`Error reading icons directory:`, error.message);
    return [];
  }
}

function generateStoryFile(category, component, svgFiles, displayName = component.name) {
  const componentName = toComponentName(component.name);
  const categoryTitle = toTitle(category.folder);
  
  // Generate imports for SVG files with unique names
  const importMap = new Map();
  const imports = svgFiles.map(file => {
    const fullName = file.replace('.svg', ''); // Keep ID for uniqueness
    const importName = toComponentName(fullName);
    importMap.set(file, importName);
    return `import ${importName} from '../../assets/icons/${file}?react';`;
  }).join('\n');

  // Extract property definitions
  const properties = Object.entries(component.properties || {});
  const hasProperties = properties.length > 0;
  
  let propertyType = '';
  let componentLogic = '';
  let argTypes = '';
  let defaultArgs = '';
  let stories = '';

  if (hasProperties) {
    // Generate TypeScript interface
    const propTypes = properties.map(([key, prop]) => {
      if (prop.type === 'VARIANT') {
        const options = prop.variantOptions || [];
        const optionsStr = options.map(o => `'${o}'`).join(' | ');
        return `  ${toPropertyName(key)}?: ${optionsStr || 'string'};`;
      }
      return `  ${toPropertyName(key)}?: boolean;`;
    }).join('\n');
    
    propertyType = `{\n${propTypes}\n}`;

    // Generate component logic
    if (svgFiles.length > 1) {
      const conditionals = properties.map(([key, prop]) => {
        const propName = toPropertyName(key);
        if (prop.type === 'VARIANT' && prop.variantOptions) {
          return prop.variantOptions.map(option => {
            const matchingSvg = svgFiles.find(f => 
              f.toLowerCase().includes(option.toLowerCase().replace(/[^a-z0-9]/g, ''))
            );
            if (matchingSvg) {
              const importName = importMap.get(matchingSvg); // Use importMap for unique names
              return `  if (${propName} === '${option}') return <${importName} />;`;
            }
            return null;
          }).filter(Boolean).join('\n');
        } else {
          const trueSvg = svgFiles.find(f => 
            f.toLowerCase().includes('true') || 
            f.toLowerCase().includes('expanded') ||
            f.toLowerCase().includes('checked') ||
            f.toLowerCase().includes('on')
          );
          const falseSvg = svgFiles.find(f => 
            f.toLowerCase().includes('false') || 
            f.toLowerCase().includes('collapsed') ||
            f.toLowerCase().includes('unchecked') ||
            f.toLowerCase().includes('off')
          );
          if (trueSvg && falseSvg) {
            const trueImport = importMap.get(trueSvg); // Use importMap
            const falseImport = importMap.get(falseSvg); // Use importMap
            return `  return ${propName} ? <${trueImport} /> : <${falseImport} />;`;
          }
        }
        return '';
      }).filter(Boolean).join('\n');
      
      componentLogic = `{\n${conditionals}\n  return <${importMap.get(svgFiles[0])} />;\n}`;
    } else {
      componentLogic = `<${importMap.get(svgFiles[0])} />`;
    }

    // Generate argTypes
    argTypes = properties.map(([key, prop]) => {
      const propName = toPropertyName(key);
      if (prop.type === 'VARIANT') {
        const options = prop.variantOptions || [];
        return `    ${propName}: {
      control: 'select',
      options: [${options.map(o => `'${o}'`).join(', ')}],
      description: 'Matches Figma "${key}" property',
    },`;
      }
      return `    ${propName}: {
      control: 'boolean',
      description: 'Matches Figma "${key}" property',
    },`;
    }).join('\n');

    // Generate default args
    defaultArgs = properties.map(([key, prop]) => {
      const propName = toPropertyName(key);
      if (prop.type === 'VARIANT') {
        const defaultValue = prop.defaultValue || (prop.variantOptions && prop.variantOptions[0]) || '';
        return `    ${propName}: '${defaultValue}',`;
      }
      return `    ${propName}: false,`;
    }).join('\n');

    // Generate stories for each variant
    const generatedStoryNames = new Set();
    stories = properties.flatMap(([key, prop], propIndex) => {
      const propName = toPropertyName(key);
      if (prop.type === 'VARIANT' && prop.variantOptions) {
        return prop.variantOptions.slice(0, 4).map(option => {
          let baseName = option.replace(/[^a-zA-Z0-9]/g, '');
          // Ensure story name doesn't start with digit
          if (/^\d/.test(baseName)) {
            baseName = `_${baseName}`;
          }
          
          // Always prepend property name to avoid collisions with common values like "True", "False", "Default"
          let storyName = `${propName}${baseName}`;
          
          // Handle remaining duplicates
          let counter = 1;
          while (generatedStoryNames.has(storyName)) {
            storyName = `${propName}${baseName}${counter}`;
            counter++;
          }
          generatedStoryNames.add(storyName);
          
          return `
export const ${storyName}: Story = { 
  args: {
    ${propName}: '${option}',
  },
};`;
        });
      } else {
        // For boolean properties, use property name in story name to avoid duplicates
        const trueName = `${propName}True`;
        const falseName = `${propName}False`;
        generatedStoryNames.add(trueName);
        generatedStoryNames.add(falseName);
        
        return [`
export const ${trueName}: Story = { 
  args: {
    ${propName}: true,
  },
};`,
`
export const ${falseName}: Story = { 
  args: {
    ${propName}: false,
  },
};`];
      }
    }).slice(0, 6).join('\n');
  } else {
    propertyType = '';
    componentLogic = `<${importMap.get(svgFiles[0])} />`; // Use importMap
    argTypes = '';
    defaultArgs = '';
    stories = `
export const Default: Story = {};`;
  }

  // Generate component function signature
  let componentFunction = '';
  if (hasProperties) {
    const destructure = properties.map(([key]) => toPropertyName(key)).join(', ');
    const defaultValuesObj = properties.map(([key, prop]) => {
      const propName = toPropertyName(key);
      if (prop.type === 'VARIANT') {
        const defaultValue = prop.defaultValue || (prop.variantOptions && prop.variantOptions[0]) || '';
        return `    ${propName}: '${defaultValue}'`;
      }
      return `    ${propName}: false`;
    }).join(',\n');
    
    // Check if componentLogic is a block statement (starts with {) or expression
    const isBlock = componentLogic.trim().startsWith('{');
    if (isBlock) {
      componentFunction = `const ${componentName} = ({ ${destructure} }: ${propertyType} = {\n${defaultValuesObj}\n  }) => ${componentLogic};`;
    } else {
      componentFunction = `const ${componentName} = ({ ${destructure} }: ${propertyType} = {\n${defaultValuesObj}\n  }) => {
  return ${componentLogic};
};`;
    }
  } else {
    componentFunction = `const ${componentName} = () => {
  return ${componentLogic};
};`;
  }

  return `import type { Meta, StoryObj } from '@storybook/react';
${imports}

${componentFunction}

const meta = {
  title: '3. Component Category Pages/${categoryTitle}/${displayName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '${category.pageId}',
      componentId: '${component.id}',
      figmaComponent: '${component.name}',
    },
  },
  tags: ['autodocs'],${hasProperties ? `
  argTypes: {
${argTypes}
  },
  args: {
${defaultArgs}
  },` : ''}
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;
${stories}
`;
}

async function generateCategoryStructure(category) {
  if (!category.pageId || category.components === 0) {
    console.log(`⏭️  Skipping ${category.folder} (no components)`);
    return;
  }

  console.log(`\n${'='.repeat(80)}`);
  console.log(`📦 Processing ${category.folder}...`);
  console.log(`${'='.repeat(80)}`);

  const components = await getComponentsFromPage(category.pageId);
  
  if (components.length === 0) {
    console.log(`⚠️  No components found for ${category.folder}`);
    return;
  }

  const targetDir = path.join(__dirname, '../src/components', category.folder);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let generatedCount = 0;
  const usedFileNames = new Map(); // Track used filenames to handle duplicates

  for (const component of components) {
    console.log(`\n  📝 ${component.name}`);
    
    // Find matching SVG files - pass full component object
    const svgFiles = findSvgFiles(component);
    
    if (svgFiles.length === 0) {
      console.log(`    ⚠️  No SVG files found for component ${component.id}`);
      if (component.variantIds && component.variantIds.length > 0) {
        console.log(`    🔍 Tried variant IDs: ${component.variantIds.slice(0, 3).map(id => id.replace(':', '-')).join(', ')}${component.variantIds.length > 3 ? '...' : ''}`);
      }
      continue;
    }

    console.log(`    ✅ Found ${svgFiles.length} SVG files`);

    // Determine safe filename and display name for title
    let safeFileName = component.name.replace(/[^a-zA-Z0-9]/g, '').replace(/^(\d)/, '_$1');
    let displayName = component.name;
    
    // Handle duplicate filenames by appending component ID suffix
    if (usedFileNames.has(safeFileName)) {
      const idSuffix = component.id.replace(':', '').substring(0, 6);
      safeFileName = `${safeFileName}_${idSuffix}`;
      displayName = `${component.name} (${idSuffix})`; // Make title unique too
      console.log(`    ⚠️  Duplicate name detected, using: ${safeFileName}`);
    }
    usedFileNames.set(safeFileName, true);
    
    // Generate story file with display name
    const storyContent = generateStoryFile(category, component, svgFiles, displayName);
    
    const storyPath = path.join(targetDir, `${safeFileName}.stories.tsx`);

    fs.writeFileSync(storyPath, storyContent, 'utf8');
    console.log(`    💾 Created ${safeFileName}.stories.tsx`);
    generatedCount++;
  }

  console.log(`\n✅ Generated ${generatedCount} story files for ${category.folder}`);
}

async function main() {
  console.log('🚀 Generating Component Category Structure...\n');

  const targetCategories = process.argv.slice(2);

  if (targetCategories.length > 0) {
    console.log(`📋 Processing specific categories: ${targetCategories.join(', ')}\n`);
    for (const categoryName of targetCategories) {
      const category = categoryPages.find(c => c.folder.toLowerCase() === categoryName.toLowerCase());
      if (category) {
        await generateCategoryStructure(category);
      } else {
        console.log(`❌ Category '${categoryName}' not found`);
      }
    }
  } else {
    console.log(`📋 Processing all ${categoryPages.length} categories\n`);
    for (const category of categoryPages) {
      await generateCategoryStructure(category);
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('✅ Done!');
  console.log('='.repeat(80));
}

main().catch(console.error);
