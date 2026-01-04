/**
 * List all components in Figma file
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function listComponents() {
  try {
    console.log('🔍 Fetching components from Figma...\n');

    // Get file data
    const fileResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    console.log(`📄 File: ${fileResponse.data.name}\n`);

    // Get components
    const componentsResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const components = componentsResponse.data.meta.components;
    console.log(`✅ Found ${components.length} components:\n`);

    // Group by type/category
    const grouped = {};
    components.forEach((comp) => {
      const name = comp.name;
      const category = name.split('/')[0] || 'Other';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push({
        name: name,
        description: comp.description || '',
        key: comp.key,
      });
    });

    // Display grouped
    Object.keys(grouped)
      .sort()
      .forEach((category) => {
        console.log(`\n📦 ${category} (${grouped[category].length})`);
        console.log('─'.repeat(50));
        grouped[category].forEach((comp) => {
          console.log(`  • ${comp.name}`);
          if (comp.description) {
            console.log(`    ${comp.description}`);
          }
        });
      });

    console.log(`\n\n📊 Total: ${components.length} components`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

listComponents();
