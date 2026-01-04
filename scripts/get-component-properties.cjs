const axios = require('axios');
require('dotenv').config();

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function getComponentProperties(componentName) {
  try {
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      { headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN } }
    );
    
    function findComponent(node) {
      if (node.type === 'COMPONENT_SET' && node.name === componentName) {
        return node;
      }
      if (node.children) {
        for (const child of node.children) {
          const found = findComponent(child);
          if (found) return found;
        }
      }
      return null;
    }
    
    const component = findComponent(response.data.document);
    
    if (component) {
      console.log(`\n✅ Found component: ${component.name}`);
      console.log(`   ID: ${component.id}`);
      console.log(`   Type: ${component.type}`);
      
      if (component.componentPropertyDefinitions) {
        console.log(`\n📋 Component Properties:`);
        Object.entries(component.componentPropertyDefinitions).forEach(([key, prop]) => {
          console.log(`\n   Property: ${key}`);
          console.log(`   - Type: ${prop.type}`);
          console.log(`   - Default: ${prop.defaultValue}`);
          if (prop.variantOptions) {
            console.log(`   - Options: ${prop.variantOptions.join(', ')}`);
          }
        });
      }
      
      if (component.children) {
        console.log(`\n🔢 Variants (${component.children.length} total):`);
        component.children.forEach((variant, idx) => {
          console.log(`\n   ${idx + 1}. ${variant.name}`);
          if (variant.variantProperties) {
            Object.entries(variant.variantProperties).forEach(([key, value]) => {
              console.log(`      ${key}: ${value}`);
            });
          }
        });
      }
    } else {
      console.log(`❌ Component "${componentName}" not found`);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const componentName = process.argv[2] || 'Small badge';
console.log(`\n🔍 Looking for component: "${componentName}"`);
getComponentProperties(componentName);
