/**
 * Generate React components from Figma component definitions
 * Reads figma-docs.json and creates .tsx component files
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const smartGenerator = require('./smart-component-generator.cjs');


const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

const figmaDocsPath = path.join(__dirname, '../src/figma-docs.json');
const componentsDir = path.join(__dirname, '../src/components');

// Figma component types we can generate code for
const SUPPORTED_TYPES = ['COMPONENT', 'COMPONENT_SET'];

/**
 * Normalize component name to valid React component name
 */
function normalizeComponentName(name) {
  // Remove special characters, capitalize first letter
  let normalized = name
    .replace(/[–—]/g, '-')
    .replace(/:/g, '-')
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9]/g, '');
  
  // Ensure starts with uppercase
  normalized = normalized.charAt(0).toUpperCase() + normalized.slice(1);
  
  // Validate: must start with letter
  if (/^\d/.test(normalized)) {
    console.warn(`⚠️  Invalid component name "${name}" - must start with a letter. Please rename in Figma.`);
    return null; // Skip this component
  }
  
  // Handle reserved keywords
  const reservedKeywords = ['delete', 'return', 'switch', 'default'];
  if (reservedKeywords.includes(normalized.toLowerCase())) {
    normalized = normalized + 'Component';
  }
  
  return normalized;
}

/**
 * Fetch component node details from Figma with full structure
 */
async function fetchComponentNode(nodeId) {
  try {
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${nodeId}&depth=10`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );
    
    return response.data.nodes[nodeId];
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers['retry-after'] || 'unknown';
      const resetTime = error.response.headers['x-ratelimit-reset'] || 'unknown';
      console.error(`⏱️  Rate limit hit! Retry after: ${retryAfter}s, Reset time: ${resetTime}`);
    }
    console.error(`Failed to fetch node ${nodeId}:`, error.message);
    return null;
  }
}

/**
 * Convert Figma color to CSS rgba
 */
function figmaColorToCSS(color) {
  if (!color) return 'transparent';
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const a = color.a !== undefined ? color.a : 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Extract CSS styles from Figma node
 */
function extractStyles(node) {
  const styles = {};
  
  // Layout
  if (node.absoluteBoundingBox) {
    styles.width = `${Math.round(node.absoluteBoundingBox.width)}px`;
    styles.height = `${Math.round(node.absoluteBoundingBox.height)}px`;
  }
  
  // Background
  if (node.fills && node.fills.length > 0 && node.fills[0].visible !== false) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID') {
      styles.backgroundColor = figmaColorToCSS(fill.color);
    }
  }
  
  // Border
  if (node.strokes && node.strokes.length > 0 && node.strokes[0].visible !== false) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID') {
      styles.borderColor = figmaColorToCSS(stroke.color);
      styles.borderWidth = `${node.strokeWeight || 1}px`;
      styles.borderStyle = 'solid';
    }
  }
  
  // Corner radius
  if (node.cornerRadius !== undefined) {
    styles.borderRadius = `${node.cornerRadius}px`;
  }
  
  // Padding (from auto layout)
  if (node.paddingLeft !== undefined) {
    styles.paddingLeft = `${node.paddingLeft}px`;
    styles.paddingRight = `${node.paddingRight || node.paddingLeft}px`;
    styles.paddingTop = `${node.paddingTop || node.paddingLeft}px`;
    styles.paddingBottom = `${node.paddingBottom || node.paddingLeft}px`;
  }
  
  // Gap (from auto layout)
  if (node.itemSpacing !== undefined) {
    styles.gap = `${node.itemSpacing}px`;
  }
  
  // Layout mode (auto layout)
  if (node.layoutMode) {
    styles.display = 'flex';
    styles.flexDirection = node.layoutMode === 'HORIZONTAL' ? 'row' : 'column';
    
    // Alignment
    if (node.primaryAxisAlignItems) {
      const alignment = {
        'MIN': 'flex-start',
        'CENTER': 'center',
        'MAX': 'flex-end',
        'SPACE_BETWEEN': 'space-between'
      }[node.primaryAxisAlignItems];
      if (alignment) {
        styles.justifyContent = alignment;
      }
    }
    
    if (node.counterAxisAlignItems) {
      const alignment = {
        'MIN': 'flex-start',
        'CENTER': 'center',
        'MAX': 'flex-end'
      }[node.counterAxisAlignItems];
      if (alignment) {
        styles.alignItems = alignment;
      }
    }
  }
  
  // Typography
  if (node.style) {
    if (node.style.fontFamily) styles.fontFamily = node.style.fontFamily;
    if (node.style.fontSize) styles.fontSize = `${node.style.fontSize}px`;
    if (node.style.fontWeight) styles.fontWeight = node.style.fontWeight;
    if (node.style.lineHeightPx) styles.lineHeight = `${node.style.lineHeightPx}px`;
    if (node.style.letterSpacing) styles.letterSpacing = `${node.style.letterSpacing}px`;
    if (node.style.textAlignHorizontal) {
      styles.textAlign = node.style.textAlignHorizontal.toLowerCase();
    }
  }
  
  // Text color
  if (node.fills && node.fills.length > 0 && node.type === 'TEXT') {
    const fill = node.fills[0];
    if (fill.type === 'SOLID') {
      styles.color = figmaColorToCSS(fill.color);
    }
  }
  
  // Effects (shadows)
  if (node.effects && node.effects.length > 0) {
    const shadows = node.effects
      .filter(e => e.visible !== false && (e.type === 'DROP_SHADOW' || e.type === 'INNER_SHADOW'))
      .map(e => {
        const color = figmaColorToCSS(e.color);
        const x = e.offset?.x || 0;
        const y = e.offset?.y || 0;
        const blur = e.radius || 0;
        const spread = e.spread || 0;
        const inset = e.type === 'INNER_SHADOW' ? 'inset ' : '';
        return `${inset}${x}px ${y}px ${blur}px ${spread}px ${color}`;
      });
    if (shadows.length > 0) {
      styles.boxShadow = shadows.join(', ');
    }
  }
  
  // Opacity
  if (node.opacity !== undefined && node.opacity !== 1) {
    styles.opacity = node.opacity;
  }
  
  return styles;
}

/**
 * Generate JSX from Figma node tree
 */
function generateJSXFromNode(node, depth = 0, componentName = '') {
  if (!node || node.visible === false) return '';
  
  const indent = '  '.repeat(depth + 2);
  const className = `tsuite-${componentName.toLowerCase()}__${node.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
  
  // Handle different node types
  switch (node.type) {
    case 'TEXT':
      return `${indent}<div className="${className}">
${indent}  {/* ${node.name} */}
${indent}  ${node.characters || 'Text'}
${indent}</div>`;
    
    case 'VECTOR':
    case 'BOOLEAN_OPERATION':
    case 'STAR':
    case 'ELLIPSE':
    case 'RECTANGLE':
      // For shapes, use a placeholder div that can be replaced with SVG later
      return `${indent}<div className="${className}" aria-hidden="true" />`;
    
    case 'FRAME':
    case 'GROUP':
    case 'INSTANCE':
    case 'COMPONENT':
      const children = node.children || [];
      const childrenJSX = children
        .filter(child => child.visible !== false)
        .map(child => generateJSXFromNode(child, depth + 1, componentName))
        .filter(jsx => jsx)
        .join('\n');
      
      if (!childrenJSX) {
        return `${indent}<div className="${className}" />`;
      }
      
      return `${indent}<div className="${className}">
${childrenJSX}
${indent}</div>`;
    
    default:
      return '';
  }
}

/**
 * Generate CSS from node tree
 */
function generateCSSFromNode(node, componentName, cssRules = {}) {
  if (!node || node.visible === false) return cssRules;
  
  const className = `.tsuite-${componentName.toLowerCase()}__${node.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
  const styles = extractStyles(node);
  
  if (Object.keys(styles).length > 0) {
    cssRules[className] = styles;
  }
  
  // Recurse through children
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(child => {
      generateCSSFromNode(child, componentName, cssRules);
    });
  }
  
  return cssRules;
}

/**
 * Format CSS rules object to CSS string
 */
function formatCSSRules(cssRules) {
  let css = '';
  
  for (const [selector, styles] of Object.entries(cssRules)) {
    css += `${selector} {\n`;
    for (const [property, value] of Object.entries(styles)) {
      // Convert camelCase to kebab-case
      const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
      css += `  ${cssProperty}: ${value};\n`;
    }
    css += `}\n\n`;
  }
  
  return css;
}

/**
 * Extract props from Figma component, separating variants from boolean props
 */
function extractPropsFromVariants(node) {
  const booleanProps = {};
  const variantProps = {};
  
  if (node.document && node.document.children) {
    const variantProperties = node.document.componentPropertyDefinitions || {};
    
    Object.entries(variantProperties).forEach(([propName, propDef]) => {
      if (propDef.type === 'VARIANT') {
        // Variant properties will be used to generate separate components
        variantProps[propName] = {
          type: propDef.type,
          defaultValue: propDef.defaultValue,
          variantOptions: propDef.variantOptions || [],
        };
      } else {
        // Boolean and other properties become actual component props
        booleanProps[propName] = {
          type: propDef.type,
          defaultValue: propDef.defaultValue,
          variantOptions: propDef.variantOptions || [],
        };
      }
    });
  }
  
  return { booleanProps, variantProps };
}

/**
 * Generate TypeScript interface for component props
 */
function generatePropsInterface(componentName, props, extraPropDefs = '') {
  if (Object.keys(props).length === 0 && !extraPropDefs) {
    return `export interface ${componentName}Props {
  className?: string;
  style?: React.CSSProperties;
}`;
  }
  
  const propLines = Object.entries(props).map(([name, config]) => {
    // Clean prop name: Remove Figma IDs (#xxxx:xx) and convert to camelCase
    let cleanName = name
      .replace(/#\d+:\d+/g, '') // Remove Figma IDs like #6044:13
      .trim();
    
    // Convert to camelCase: "Arrow placement" -> "arrowPlacement"
    const propName = cleanName
      .split(/\s+/)
      .map((word, index) => {
        word = word.toLowerCase();
        if (index > 0) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
      })
      .join('');
    
    if (config.type === 'VARIANT') {
      // Convert variant options to kebab-case
      const options = config.variantOptions
        .map(opt => `'${opt.toLowerCase().replace(/\s+/g, '-')}'`)
        .join(' | ');
      return `  ${propName}?: ${options};`;
    } else if (config.type === 'BOOLEAN') {
      return `  ${propName}?: boolean;`;
    } else {
      return `  ${propName}?: string;`;
    }
  }).join('\n');
  
  return `export interface ${componentName}Props {
${propLines}${extraPropDefs ? '\n' + extraPropDefs : ''}
  className?: string;
  style?: React.CSSProperties;
}`;
}

/**
 * Generate React component code with dynamic structure from Figma
 */
function generateComponentCode(componentName, props, figmaUrl, description, nodeData) {
  // Try smart generation first
  const analysis = smartGenerator.analyzeComponentStructure(nodeData);
  const smartJSX = analysis ? smartGenerator.generateSmartJSX(analysis, componentName) : null;
  const additionalProps = analysis ? smartGenerator.extractAdditionalProps(analysis) : { propDefs: '', defaultValues: '' };
  
  const propsInterface = generatePropsInterface(componentName, props, additionalProps.propDefs);
  
  const propDefaults = Object.entries(props).map(([name, config]) => {
    // Clean prop name: Remove Figma IDs and convert to camelCase (same as interface)
    let cleanName = name
      .replace(/#\d+:\d+/g, '')
      .trim();
    
    const propName = cleanName
      .split(/\s+/)
      .map((word, index) => {
        word = word.toLowerCase();
        if (index > 0) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
      })
      .join('');
    
    let defaultValue = config.defaultValue || (config.variantOptions && config.variantOptions[0]);
    // Convert to kebab-case for variant options
    if (config.type === 'VARIANT') {
      defaultValue = defaultValue.toLowerCase().replace(/\s+/g, '-');
    }
    // Boolean props should not have quotes
    if (config.type === 'BOOLEAN') {
      return `${propName} = ${defaultValue}`;
    }
    return `${propName} = '${defaultValue}'`;
  }).join(',\n  ');
  
  // Use smart JSX if available, otherwise fallback to Figma structure
  let componentJSX = smartJSX;
  if (!componentJSX && nodeData && nodeData.document && nodeData.document.children) {
    // Find the first variant or use the component itself
    const firstVariant = nodeData.document.children[0] || nodeData.document;
    componentJSX = generateJSXFromNode(firstVariant, 0, componentName);
  }
  
  // Fallback to placeholder if no structure found
  if (!componentJSX) {
    componentJSX = `      <div className="tsuite-${componentName.toLowerCase()}__content">
        ${componentName}
      </div>`;
  }
  
  return `import React from 'react';
import './${componentName}.css';

${propsInterface}

/**
 * ${componentName}
 * 
 * ${description || 'Component generated from Figma'}
 * 
 * @see {@link ${figmaUrl}|View in Figma}
 */
export const ${componentName}: React.FC<${componentName}Props> = ({
  ${propDefaults ? propDefaults + ',' : ''}
  ${additionalProps.defaultValues}
  className = '',
  style = {},
}) => {
  return (
${componentJSX}
  );
};

${componentName}.displayName = '${componentName}';
`;
}

/**
 * Generate CSS file with dynamic styles from Figma
 */
function generateComponentCSS(componentName, nodeData) {
  // Try smart CSS generation first
  const analysis = smartGenerator.analyzeComponentStructure(nodeData);
  const smartCSS = analysis ? smartGenerator.generateSmartCSS(analysis, componentName) : null;
  
  if (smartCSS) {
    return smartCSS;
  }
  
  // Fallback to old generation
  let cssContent = `.tsuite-${componentName.toLowerCase()} {
  /* Container styles */
  position: relative;
  display: inline-block;
}

`;
  
  // Generate CSS from Figma structure
  if (nodeData && nodeData.document && nodeData.document.children) {
    const firstVariant = nodeData.document.children[0] || nodeData.document;
    const cssRules = generateCSSFromNode(firstVariant, componentName);
    cssContent += formatCSSRules(cssRules);
  }
  
  return cssContent;
}

/**
 * Generate index.ts barrel export
 */
function generateIndexExport(componentName) {
  return `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}';
`;
}

/**
 * Main generation function
 */
async function generateComponents() {
  console.log('🎨 Generating React components from Figma...\n');
  
  if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
    console.error('❌ Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN');
    console.error('   Set them in .env file');
    process.exit(1);
  }
  
  // Read figma docs
  if (!fs.existsSync(figmaDocsPath)) {
    console.error('❌ figma-docs.json not found. Run npm run figma:docs first');
    process.exit(1);
  }
  
  const figmaDocs = JSON.parse(fs.readFileSync(figmaDocsPath, 'utf-8'));
  
  // Create components directory
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  let generated = 0;
  let skipped = 0;
  const FILTER_PAGE = '❖ Tooltips'; // TEST: Only Tooltips first
  
  // Process each component
  for (const [name, data] of Object.entries(figmaDocs)) {
    // Filter by page
    if (FILTER_PAGE && data.pageName !== FILTER_PAGE) {
      continue;
    }
    
    // Fetch detailed node info from Figma
    const nodeData = await fetchComponentNode(data.id);
    
    if (!nodeData) {
      console.log(`  ⚠️  Could not fetch data from ${name}`);
      skipped++;
      continue;
    }
    
    // Extract props from variants
    const { booleanProps, variantProps } = extractPropsFromVariants(nodeData);
    
    // Check if this is a component set with variants
    const hasVariants = Object.keys(variantProps).length > 0;
    
    if (hasVariants) {
      // Generate ONE component with variant props
      const componentName = normalizeComponentName(name);
      
      // Skip invalid names
      if (!componentName) {
        skipped++;
        continue;
      }
      
      // Skip if already exists
      const componentDir = path.join(componentsDir, componentName);
      if (fs.existsSync(componentDir)) {
        console.log(`⏭️  Skipping ${componentName} (already exists)`);
        skipped++;
        continue;
      }
      
      console.log(`🔨 Generating ${componentName} (with ${Object.keys(variantProps).length} variant props)...`);
      
      // Create component directory
      fs.mkdirSync(componentDir, { recursive: true });
      
      // Merge variant props and boolean props
      const allProps = { ...variantProps, ...booleanProps };
      
      // Generate component files with all props (variants + booleans)
      const componentCode = generateComponentCode(
        componentName,
        allProps,
        data.figmaUrl,
        data.description,
        nodeData
      );
      
      const cssCode = generateComponentCSS(componentName, nodeData);
      const indexCode = generateIndexExport(componentName);
      
      // Write files
      fs.writeFileSync(
        path.join(componentDir, `${componentName}.tsx`),
        componentCode
      );
      
      fs.writeFileSync(
        path.join(componentDir, `${componentName}.css`),
        cssCode
      );
      
      fs.writeFileSync(
        path.join(componentDir, 'index.ts'),
        indexCode
      );
      
      generated++;
      
      // Rate limit: 60s delay for overnight safe generation
      await new Promise(resolve => setTimeout(resolve, 60000));
    } else {
      // No variants - generate single component
      const componentName = normalizeComponentName(name);
      
      // Skip invalid names
      if (!componentName) {
        skipped++;
        continue;
      }
      
      // Skip if already exists
      const componentDir = path.join(componentsDir, componentName);
      if (fs.existsSync(componentDir)) {
        console.log(`⏭️  Skipping ${componentName} (already exists)`);
        skipped++;
        continue;
      }
      
      console.log(`🔨 Generating ${componentName}...`);
      
      // Create component directory
      fs.mkdirSync(componentDir, { recursive: true });
      
      // Generate component files
      const componentCode = generateComponentCode(
        componentName,
        booleanProps,
        data.figmaUrl,
        data.description,
        nodeData
      );
      
      const cssCode = generateComponentCSS(componentName, nodeData);
      const indexCode = generateIndexExport(componentName);
      
      // Write files
      fs.writeFileSync(
        path.join(componentDir, `${componentName}.tsx`),
        componentCode
      );
      
      fs.writeFileSync(
        path.join(componentDir, `${componentName}.css`),
        cssCode
      );
      
      fs.writeFileSync(
        path.join(componentDir, 'index.ts'),
        indexCode
      );
      
      generated++;
      
      // Rate limit: 60s delay for overnight safe generation
      await new Promise(resolve => setTimeout(resolve, 60000));
    }
  }
  
  console.log(`\n✅ Component generation complete!`);
  console.log(`   Generated: ${generated} components`);
  console.log(`   Skipped: ${skipped} (already exist)`);
  console.log(`   Output: ${componentsDir}`);
}

generateComponents().catch(error => {
  console.error('❌ Generation failed:', error);
  process.exit(1);
});
