require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
  console.error('❌ Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN in .env');
  console.log('Create a .env file with:');
  console.log('FIGMA_FILE_KEY=your_file_key');
  console.log('FIGMA_ACCESS_TOKEN=your_token');
  process.exit(1);
}

const FIGMA_API = 'https://api.figma.com/v1';

function findAllComponents(node, components = [], path = '', page = '') {
  const currentPath = path ? `${path} > ${node.name}` : node.name;
  const currentPage = node.type === 'CANVAS' ? node.name : page;
  
  if (node.type === 'COMPONENT_SET') {
    // Extract property names from component set
    const propertyNames = node.componentPropertyDefinitions ? 
      Object.keys(node.componentPropertyDefinitions) : [];
    
    components.push({
      type: 'COMPONENT_SET',
      id: node.id,
      name: node.name,
      description: node.description || '',
      path: currentPath,
      page: currentPage,
      childCount: node.children?.length || 0,
      width: Math.round(node.absoluteBoundingBox?.width || 0),
      height: Math.round(node.absoluteBoundingBox?.height || 0),
      properties: propertyNames,
      documentationUrl: node.documentationLinks?.[0]?.uri || ''
    });
  } else if (node.type === 'COMPONENT') {
    // Extract variant properties for individual components
    const variantProps = {};
    if (node.name && node.name.includes('=')) {
      // Parse variant properties from name (e.g., "State=Default, Type=Primary")
      const parts = node.name.split(',').map(p => p.trim());
      parts.forEach(part => {
        const [key, value] = part.split('=').map(s => s.trim());
        if (key && value) {
          variantProps[key] = value;
        }
      });
    }
    
    components.push({
      type: 'COMPONENT',
      id: node.id,
      name: node.name,
      description: node.description || '',
      path: currentPath,
      page: currentPage,
      parent: path,
      width: Math.round(node.absoluteBoundingBox?.width || 0),
      height: Math.round(node.absoluteBoundingBox?.height || 0),
      variantProperties: variantProps,
      documentationUrl: node.documentationLinks?.[0]?.uri || ''
    });
  }
  
  if (node.children) {
    node.children.forEach(child => findAllComponents(child, components, currentPath, currentPage));
  }
  
  return components;
}

async function main() {
  try {
    console.log('📥 Fetching Figma file structure...\n');
    
    const response = await axios.get(`${FIGMA_API}/files/${FIGMA_FILE_KEY}`, {
      headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN }
    });
    
    const components = findAllComponents(response.data.document);
    
    // Group by type
    const componentSets = components.filter(c => c.type === 'COMPONENT_SET');
    const individualComponents = components.filter(c => c.type === 'COMPONENT');
    
    console.log('='.repeat(120));
    console.log('FIGMA FILE STRUCTURE');
    console.log('='.repeat(120));
    console.log(`File: ${response.data.name}`);
    console.log(`Total Component Sets: ${componentSets.length}`);
    console.log(`Total Individual Components: ${individualComponents.length}`);
    console.log('='.repeat(120));
    
    if (componentSets.length > 0) {
      console.log('\n📦 COMPONENT SETS (with variants):');
      console.log('='.repeat(150));
      console.log(
        'Name'.padEnd(40) + 
        'Variants'.padEnd(10) + 
        'Size (W×H)'.padEnd(15) + 
        'Page'.padEnd(25) + 
        'Properties'.padEnd(35) + 
        'ID'
      );
      console.log('-'.repeat(150));
      
      componentSets.forEach(cs => {
        const name = cs.name.length > 38 ? cs.name.substring(0, 35) + '...' : cs.name;
        const size = `${cs.width}×${cs.height}`;
        const pageName = cs.page.length > 23 ? cs.page.substring(0, 20) + '...' : cs.page;
        const props = cs.properties.length > 0 ? cs.properties.join(', ') : '';
        const propsDisplay = props.length > 33 ? props.substring(0, 30) + '...' : props;
        
        console.log(
          name.padEnd(40) + 
          cs.childCount.toString().padEnd(10) + 
          size.padEnd(15) + 
          pageName.padEnd(25) + 
          propsDisplay.padEnd(35) + 
          cs.id
        );
      });
    }
    
    console.log('\n\n🔧 INDIVIDUAL COMPONENTS:');
    console.log('='.repeat(150));
    console.log(
      'Name'.padEnd(40) + 
      'Size (W×H)'.padEnd(15) + 
      'Page'.padEnd(25) + 
      'Variant Properties'.padEnd(40) + 
      'ID'
    );
    console.log('-'.repeat(150));
    
    individualComponents.slice(0, 100).forEach(comp => {
      const name = comp.name.length > 38 ? comp.name.substring(0, 35) + '...' : comp.name;
      const size = `${comp.width}×${comp.height}`;
      const pageName = comp.page.length > 23 ? comp.page.substring(0, 20) + '...' : comp.page;
      
      // Format variant properties
      const variantPropsArr = Object.entries(comp.variantProperties).map(([k, v]) => `${k}=${v}`);
      const variantPropsStr = variantPropsArr.join(', ');
      const variantDisplay = variantPropsStr.length > 38 ? variantPropsStr.substring(0, 35) + '...' : variantPropsStr;
      
      console.log(
        name.padEnd(40) + 
        size.padEnd(15) + 
        pageName.padEnd(25) + 
        variantDisplay.padEnd(40) + 
        comp.id
      );
    });
    
    if (individualComponents.length > 100) {
      console.log(`\n... and ${individualComponents.length - 100} more individual components`);
    }
    
    console.log('\n' + '='.repeat(120));
    console.log(`\n✅ Total: ${components.length} components (${componentSets.length} sets + ${individualComponents.length} individual)`);
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    process.exit(1);
  }
}

main();
