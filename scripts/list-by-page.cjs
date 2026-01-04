const axios = require('axios');
require('dotenv').config();

const FIGMA_FILE_ID = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

function findAllComponents(node, components = [], path = '', page = '') {
  const currentPath = path ? `${path} > ${node.name}` : node.name;
  const currentPage = node.type === 'CANVAS' ? node.name : page;
  
  if (node.type === 'COMPONENT_SET') {
    const propertyNames = node.componentPropertyDefinitions ? 
      Object.keys(node.componentPropertyDefinitions) : [];
    
    components.push({
      type: 'COMPONENT_SET',
      id: node.id,
      name: node.name,
      page: currentPage,
      childCount: node.children?.length || 0,
      width: Math.round(node.absoluteBoundingBox?.width || 0),
      height: Math.round(node.absoluteBoundingBox?.height || 0),
      properties: propertyNames
    });
  }
  
  if (node.children) {
    node.children.forEach(child => 
      findAllComponents(child, components, currentPath, currentPage)
    );
  }
  
  return components;
}

async function main() {
  console.log('📥 Fetching Figma file structure...\n');
  
  const response = await axios.get(
    `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
    { headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN } }
  );
  
  const components = findAllComponents(response.data.document);
  const componentSets = components.filter(c => c.type === 'COMPONENT_SET');
  
  // Group by page
  const byPage = {};
  componentSets.forEach(cs => {
    if (!byPage[cs.page]) {
      byPage[cs.page] = [];
    }
    byPage[cs.page].push(cs);
  });
  
  // Sort pages and display
  const pages = Object.keys(byPage).sort();
  
  console.log('='.repeat(150));
  console.log('FIGMA COMPONENTS ORGANIZED BY PAGE');
  console.log('='.repeat(150));
  console.log(`File: ${response.data.name}`);
  console.log(`Total Pages: ${pages.length}`);
  console.log(`Total Component Sets: ${componentSets.length}`);
  console.log('='.repeat(150));
  
  pages.forEach(page => {
    const pageComponents = byPage[page];
    const totalVariants = pageComponents.reduce((sum, c) => sum + c.childCount, 0);
    
    console.log(`\n📄 ${page}`);
    console.log(`   Components: ${pageComponents.length} | Total Variants: ${totalVariants}`);
    console.log('-'.repeat(150));
    console.log(
      '   ' + 'Name'.padEnd(45) + 
      'Variants'.padEnd(10) + 
      'Size'.padEnd(15) + 
      'Properties'.padEnd(40)
    );
    console.log('-'.repeat(150));
    
    pageComponents.forEach(cs => {
      const name = cs.name.length > 43 ? cs.name.substring(0, 40) + '...' : cs.name;
      const size = `${cs.width}×${cs.height}`;
      const props = cs.properties.join(', ');
      const propsDisplay = props.length > 38 ? props.substring(0, 35) + '...' : props;
      
      console.log(
        '   ' + name.padEnd(45) + 
        cs.childCount.toString().padEnd(10) + 
        size.padEnd(15) + 
        propsDisplay
      );
    });
  });
  
  console.log(`\n` + '='.repeat(150));
  console.log('SUMMARY BY PAGE:');
  console.log('-'.repeat(150));
  console.log('Page'.padEnd(35) + 'Components'.padEnd(15) + 'Total Variants');
  console.log('-'.repeat(150));
  
  pages.forEach(page => {
    const pageComponents = byPage[page];
    const totalVariants = pageComponents.reduce((sum, c) => sum + c.childCount, 0);
    const pageName = page.length > 33 ? page.substring(0, 30) + '...' : page;
    
    console.log(
      pageName.padEnd(35) + 
      pageComponents.length.toString().padEnd(15) + 
      totalVariants.toString()
    );
  });
  
  console.log('='.repeat(150));
}

main().catch(console.error);
