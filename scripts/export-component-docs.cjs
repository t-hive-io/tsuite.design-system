/**
 * Export component documentation from Figma
 * Fetches descriptions for all component sets
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function exportComponentDocs() {
  try {
    console.log('📚 Fetching component documentation from Figma...\n');
    
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN },
      }
    );

    const fileData = response.data;
    const componentSets = fileData.componentSets || {};
    
    // Map component IDs to documentation
    const componentDocs = {};
    let foundCount = 0;
    
    Object.entries(componentSets).forEach(([id, data]) => {
      if (data.description) {
        componentDocs[data.name] = {
          id: id,
          name: data.name,
          description: data.description,
          documentationLinks: data.documentationLinks || [],
        };
        foundCount++;
        console.log(`✅ ${data.name}`);
      }
    });
    
    console.log(`\n📊 Found ${foundCount} components with descriptions out of ${Object.keys(componentSets).length} total`);
    
    // Save to JSON file
    const outputPath = path.join(__dirname, '../src/figma-docs.json');
    fs.writeFileSync(outputPath, JSON.stringify(componentDocs, null, 2));
    
    console.log(`\n💾 Saved to: ${outputPath}`);
    console.log('\n📌 Components can now use these descriptions in Storybook!');
    
    return componentDocs;
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

exportComponentDocs();
