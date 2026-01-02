/**
 * Sync component documentation from Figma
 * Uses Figma Code Connect to pull descriptions and props
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
  console.error('❌ Missing environment variables');
  process.exit(1);
}

async function syncComponentDocs() {
  try {
    console.log('📚 Fetching component documentation from Figma...');
    
    // Get file data
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN },
      }
    );

    const fileData = response.data;
    console.log(`✅ Connected to: ${fileData.name}`);

    // Find all component sets (components with variants)
    const componentSets = findComponentSets(fileData.document);
    
    console.log(`\n🔍 Found ${componentSets.length} component sets:`);
    componentSets.forEach(comp => {
      console.log(`  • ${comp.name} (${comp.id})`);
      if (comp.description) {
        console.log(`    📝 ${comp.description.substring(0, 80)}...`);
      }
    });

    // Save to JSON for reference
    const outputPath = path.join(__dirname, '../docs/figma-components.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(componentSets, null, 2));
    
    console.log(`\n✅ Component data saved to: ${outputPath}`);
    console.log('\n📌 Next steps:');
    console.log('1. Update .figma.tsx files with correct node-id values');
    console.log('2. Add descriptions to components in Figma');
    console.log('3. Run: npx figma connect publish');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

function findComponentSets(node, results = []) {
  if (node.type === 'COMPONENT_SET') {
    results.push({
      id: node.id,
      name: node.name,
      description: node.description || '',
      properties: Object.keys(node.componentPropertyDefinitions || {}),
    });
  }
  
  if (node.children) {
    node.children.forEach(child => findComponentSets(child, results));
  }
  
  return results;
}

syncComponentDocs();
