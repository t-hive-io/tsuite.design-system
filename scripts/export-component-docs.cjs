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
    let withDescriptionCount = 0;

    Object.entries(componentSets).forEach(([id, data]) => {
      // Generate Figma URL for this component
      const figmaUrl = `https://www.figma.com/design/${FIGMA_FILE_KEY}/T-Suite-Design-System?node-id=${id.replace(':', '-')}`;

      componentDocs[data.name] = {
        id: id,
        name: data.name,
        description: data.description || '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
        documentationLinks: data.documentationLinks || [],
        figmaUrl: figmaUrl,
      };

      if (data.description) {
        withDescriptionCount++;
        console.log(`✅ ${data.name} (with description)`);
      } else {
        console.log(`⚠️  ${data.name} (no description)`);
      }
    });
    
    console.log(`\n📊 Found ${withDescriptionCount} components with descriptions out of ${Object.keys(componentSets).length} total`);
    
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
