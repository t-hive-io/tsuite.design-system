/**
 * Smart Component Generator - Convention-based Figma to React
 * 
 * FIGMA DESIGN CONVENTIONS (följ dessa för bästa resultat):
 * 
 * 1. NAMING CONVENTIONS för TEXT nodes:
 *    - Main content text: namn som "Text", "Label", "Title"
 *    - Badges/tags: namn som "Badge", "Tag", "Shortcut", "Chip"
 *    - Avoid generic names like "Frame 1", "Group 2"
 * 
 * 2. STRUCTURE CONVENTIONS:
 *    - Use COMPONENT_SET for components with variants
 *    - Put main content in first FRAME with background color
 *    - Decorative elements (arrows, icons) in separate frames
 * 
 * 3. PROPERTY CONVENTIONS:
 *    - VARIANT props: "Placement", "Size", "Style", "Type"
 *    - BOOLEAN props: "Show [element]", "Has [feature]", "With [decoration]"
 *    - Use descriptive names, not "Property 1"
 * 
 * 4. VARIANT NAMING:
 *    - Use clear patterns: "Arrow placement=Top left" (not "Variant 1")
 *    - Consistent casing: "Top left", "Bottom right" (not "topLeft", "BOTTOM_RIGHT")
 * 
 * 5. VISUAL HIERARCHY:
 *    - Content container = first child with fills
 *    - Text elements = direct children of content container
 *    - Decorations = siblings to content container
 */

const fs = require('fs');
const path = require('path');

/**
 * Generate Figma Best Practices documentation for Storybook
 */
function generateFigmaGuidelines() {
  return `
## Figma Design Guidelines

To ensure optimal code generation, follow these conventions in Figma:

### 1. Component Structure
- **Use COMPONENT_SET** for components with multiple variants
- **Content Container**: First FRAME with background color and padding contains main content
- **Decorative Elements**: Separate frames for icons, arrows, or visual decorations

### 2. Naming Conventions

**TEXT Nodes:**
- ✅ "Text", "Label", "Title" - for main content (becomes dynamic prop)
- ✅ "Badge", "Tag", "Shortcut", "Chip" - for labels (becomes optional prop)
- ❌ "Frame 1", "Group 2" - too generic, unclear purpose

**Frames:**
- ✅ "Content", "Container", "Wrapper" - semantic names
- ✅ "Arrow", "Icon", "Decoration" - clear purpose
- ❌ "Frame 3", "Rectangle 5" - unclear what it represents

### 3. Component Properties

**VARIANT Properties:**
- ✅ "Placement" with values: "Top left", "Bottom right"
- ✅ "Size" with values: "Small", "Medium", "Large"
- ❌ "Property 1" with values: "Variant A", "Variant B"

**BOOLEAN Properties:**
- ✅ "Show badge", "Has icon", "With arrow"
- ✅ "Show [element name]" - clearly indicates what toggles
- ❌ "Toggle 1", "Option 2" - unclear what they control

### 4. Best Practices

1. **Keep it semantic** - name things by what they ARE, not what they look like
2. **Be consistent** - use same naming patterns across all components
3. **One purpose per frame** - don't mix content and decoration in same frame
4. **Use Figma variables** - for colors, spacing, typography (better for theming)

### Example: Good Tooltip Structure

\`\`\`
COMPONENT_SET: "Tooltips plain Dark"
├─ Properties:
│  ├─ "Arrow placement" (VARIANT): Top/Bottom × Left/Center/Right
│  └─ "Show shortcut" (BOOLEAN): true/false
└─ Variants:
   └─ "Arrow placement=Bottom left"
      ├─ FRAME: "Content" (background, padding, radius)
      │  ├─ TEXT: "Text" (main tooltip text)
      │  └─ TEXT: "Shortcut" (keyboard shortcut badge)
      └─ FRAME: "Arrow" (decorative triangle)
\`\`\`

This structure generates clean, maintainable React code automatically.
`;
}

/**
 * Analyze component structure and identify semantic elements
 */
function analyzeComponentStructure(nodeData) {
  if (!nodeData.document || nodeData.document.type !== 'COMPONENT_SET') {
    return null;
  }

  const componentSet = nodeData.document;
  const variants = componentSet.children || [];
  
  if (variants.length === 0) return null;

  // Extract props from componentPropertyDefinitions
  const props = componentSet.componentPropertyDefinitions || {};
  
  // Analyze first variant as template
  const firstVariant = variants[0];
  
  // Find all TEXT nodes across all variants
  const textNodes = new Map();
  const findTextNodes = (node, path = []) => {
    if (node.type === 'TEXT' && node.characters) {
      const key = [...path, node.name].join('.');
      if (!textNodes.has(key)) {
        textNodes.set(key, {
          name: node.name,
          characters: node.characters,
          style: node.style
        });
      }
    }
    if (node.children) {
      node.children.forEach(child => findTextNodes(child, [...path, node.name]));
    }
  };
  
  findTextNodes(firstVariant);
  
  // Identify content container (usually first FRAME with fills and padding)
  const contentContainer = findContentContainer(firstVariant);
  
  return {
    componentSet,
    variants,
    props,
    textNodes: Array.from(textNodes.values()),
    contentContainer,
    hasMultipleVariants: variants.length > 1
  };
}

/**
 * Find the main content container (box with background)
 */
function findContentContainer(node, depth = 0) {
  if (depth > 3) return null;
  
  if (node.type === 'FRAME' && node.fills && node.fills.length > 0) {
    // Check if it has text children
    const hasText = hasTextDescendants(node);
    if (hasText) return node;
  }
  
  if (node.children) {
    for (const child of node.children) {
      const found = findContentContainer(child, depth + 1);
      if (found) return found;
    }
  }
  
  return null;
}

/**
 * Check if node has TEXT descendants
 */
function hasTextDescendants(node) {
  if (node.type === 'TEXT') return true;
  if (node.children) {
    return node.children.some(child => hasTextDescendants(child));
  }
  return false;
}

/**
 * Generate smart JSX based on component analysis
 */
function generateSmartJSX(analysis, componentName) {
  if (!analysis) return null;
  
  const { props, textNodes, contentContainer } = analysis;
  const cn = componentName.toLowerCase();
  
  // Extract variant prop (first VARIANT type prop)
  const variantProp = Object.entries(props).find(([_, config]) => config.type === 'VARIANT');
  const variantPropName = variantProp ? variantProp[0].replace(/#\d+:\d+/g, '').trim()
    .split(/\s+/).map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('') : null;
  
  // Extract boolean props
  const booleanProps = Object.entries(props)
    .filter(([_, config]) => config.type === 'BOOLEAN')
    .map(([name]) => name.replace(/#\d+:\d+/g, '').trim()
      .split(/\s+/).map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(''));
  
  // Generate dynamic class names
  const variantClass = variantPropName ? ` tsuite-${cn}--\${${variantPropName}}` : '';
  
  // Convert text nodes to props with semantic names
  const getTextPropName = (index, total) => {
    if (total === 1) return 'text';
    if (index === 0) return 'text';
    if (index === 1) return 'shortcutLabel';
    return `text${index + 1}`;
  };
  
  const textPropsJSX = textNodes.map((node, index) => {
    const propName = getTextPropName(index, textNodes.length);
    return `<div className="tsuite-${cn}__text${index > 0 ? '-' + (index + 1) : ''}">{${propName}}</div>`;
  }).join('\n          ');
  
  // Handle boolean conditional elements
  const hasConditionals = booleanProps.length > 0;
  
  let jsx = `    <div className={\`tsuite-${cn}${variantClass}\${className ? ' ' + className : ''}\`} style={style}>
      <div className={\`tsuite-${cn}__container${variantPropName ? ` tsuite-${cn}__${variantPropName}--\${${variantPropName}}` : ''}\`}>
        <div className="tsuite-${cn}__content">
`;

  // Add text elements (hardcoded from Figma) - but skip conditional text
  // If we have boolean props, assume last text nodes are for conditionals
  const numConditionalTexts = booleanProps.length;
  const staticTextCount = Math.max(1, textNodes.length - numConditionalTexts);
  
  textNodes.slice(0, staticTextCount).forEach((node, index) => {
    jsx += `          <div className="tsuite-${cn}__text${index > 0 ? '-' + (index + 1) : ''}">${node.characters}</div>\n`;
  });
  
  // Add conditional elements
  booleanProps.forEach((propName, index) => {
    const elementName = propName.replace(/([A-Z])/g, '-$1').toLowerCase();
    jsx += `          {${propName} && (\n            <div className="tsuite-${cn}__${elementName}">{${propName}Content}</div>\n          )}\n`;
  });
  
  jsx += `        </div>
      </div>
    </div>`;
  
  return jsx;
}

/**
 * Extract additional props needed (text, conditional content)
 */
function extractAdditionalProps(analysis) {
  if (!analysis) return { propDefs: '', defaultValues: '' };
  
  const { textNodes, props } = analysis;
  const booleanProps = Object.entries(props)
    .filter(([_, config]) => config.type === 'BOOLEAN')
    .map(([name]) => name.replace(/#\d+:\d+/g, '').trim()
      .split(/\s+/).map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(''));
  
  let propDefs = [];
  let defaultValues = [];
  
  // Only generate props for boolean conditional content (not text)
  // Use text from Figma for conditional content defaults
  const numConditionalTexts = booleanProps.length;
  const staticTextCount = Math.max(1, textNodes.length - numConditionalTexts);
  const conditionalTexts = textNodes.slice(staticTextCount);
  
  // Boolean conditional content props
  booleanProps.forEach((propName, index) => {
    propDefs.push(`${propName}Content?: string | React.ReactNode;`);
    const defaultText = conditionalTexts[index] ? conditionalTexts[index].characters : propName.charAt(0).toUpperCase();
    defaultValues.push(`${propName}Content = '${defaultText}'`);
  });
  
  return {
    propDefs: propDefs.length > 0 ? '  ' + propDefs.join('\n  ') : '',
    defaultValues: defaultValues.length > 0 ? defaultValues.join(',\n  ') + ',' : ''
  };
}

/**
 * Generate smart CSS with variant support
 */
function generateSmartCSS(analysis, componentName) {
  if (!analysis) return null;
  
  const { props, contentContainer, variants, textNodes } = analysis;
  const cn = componentName.toLowerCase();
  const booleanProps = Object.entries(props)
    .filter(([_, config]) => config.type === 'BOOLEAN')
    .map(([name]) => name.replace(/#\d+:\d+/g, '').trim()
      .split(/\s+/).map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(''));
  
  // Extract colors from content container
  let bgColor = 'rgba(247, 247, 247, 1)';
  let textColor = 'rgba(34, 34, 34, 1)';
  
  if (contentContainer && contentContainer.fills) {
    const fill = contentContainer.fills[0];
    if (fill && fill.color) {
      const c = fill.color;
      bgColor = `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, ${c.a || 1})`;
    }
  }
  
  // Extract text color from first TEXT node
  const findTextColor = (node) => {
    if (node.type === 'TEXT' && node.fills && node.fills[0]) {
      const c = node.fills[0].color;
      return `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, ${c.a || 1})`;
    }
    if (node.children) {
      for (const child of node.children) {
        const color = findTextColor(child);
        if (color) return color;
      }
    }
    return null;
  };
  
  const foundTextColor = findTextColor(variants[0]);
  if (foundTextColor) textColor = foundTextColor;
  
  // Extract spacing from content container
  const padding = contentContainer && contentContainer.paddingTop ? 
    `${contentContainer.paddingTop}px ${contentContainer.paddingRight || contentContainer.paddingTop}px` : '4px 8px';
  const gap = contentContainer && contentContainer.itemSpacing ? `${contentContainer.itemSpacing}px` : '8px';
  const borderRadius = contentContainer && contentContainer.cornerRadius ? `${contentContainer.cornerRadius}px` : '4px';
  
  let css = `.tsuite-${cn} {
  position: relative;
  display: inline-flex;
}

.tsuite-${cn}__container {
  position: relative;
  display: flex;
  align-items: center;
}

.tsuite-${cn}__content {
  background-color: ${bgColor};
  padding: ${padding};
  border-radius: ${borderRadius};
  display: flex;
  gap: ${gap};
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Typography uses theme variables - see Foundation > Themes in Storybook */
.tsuite-${cn}__text {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: ${textColor};
  white-space: nowrap;
}
`;

  // Add styling for conditional elements (shortcut-key, etc) - same as text
  booleanProps.forEach(propName => {
    const elementName = propName.replace(/([A-Z])/g, '-$1').toLowerCase();
    css += `
.tsuite-${cn}__${elementName} {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: ${textColor};
  white-space: nowrap;
}
`;
  });

  css += `
/* Arrow styles for different placements */
.tsuite-${cn}__container::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Bottom arrows */
.tsuite-${cn}--bottom-left .tsuite-${cn}__container::before,
.tsuite-${cn}--bottom-center .tsuite-${cn}__container::before,
.tsuite-${cn}--bottom-right .tsuite-${cn}__container::before {
  bottom: -6px;
  border-width: 6px 6px 0 6px;
  border-color: ${bgColor} transparent transparent transparent;
}

.tsuite-${cn}--bottom-left .tsuite-${cn}__container::before {
  left: 12px;
}

.tsuite-${cn}--bottom-center .tsuite-${cn}__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-${cn}--bottom-right .tsuite-${cn}__container::before {
  right: 12px;
}

/* Top arrows */
.tsuite-${cn}--top-left .tsuite-${cn}__container::before,
.tsuite-${cn}--top-center .tsuite-${cn}__container::before,
.tsuite-${cn}--top-right .tsuite-${cn}__container::before {
  top: -6px;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent ${bgColor} transparent;
}

.tsuite-${cn}--top-left .tsuite-${cn}__container::before {
  left: 12px;
}

.tsuite-${cn}--top-center .tsuite-${cn}__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-${cn}--top-right .tsuite-${cn}__container::before {
  right: 12px;
}
`;
  
  return css;
}

module.exports = {
  analyzeComponentStructure,
  generateSmartJSX,
  extractAdditionalProps,
  generateSmartCSS,
  generateFigmaGuidelines
};
