/**
 * List all components in Figma file with their containing frames
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function listAllComponents() {
  try {
    console.log('🎨 Fetching ALL components from Figma...\n');

    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const allComponents = response.data.meta.components;

    // Group by containing frame
    const groupedByFrame = {};

    allComponents.forEach((comp) => {
      const frameName = comp.containing_frame?.name || 'No Frame';
      if (!groupedByFrame[frameName]) {
        groupedByFrame[frameName] = [];
      }
      groupedByFrame[frameName].push({
        name: comp.name,
        nodeId: comp.node_id,
        description: comp.description || '',
      });
    });

    console.log(`📦 Total components: ${allComponents.length}\n`);
    console.log('📂 Components grouped by frame/set:\n');

    // Sort by count descending
    const sorted = Object.entries(groupedByFrame).sort(
      (a, b) => b[1].length - a[1].length
    );

    sorted.forEach(([frameName, components]) => {
      console.log(`\n${frameName} (${components.length} components)`);
      console.log('='.repeat(50));

      // Show first 10 component names
      components.slice(0, 10).forEach((comp) => {
        console.log(`  - ${comp.name}`);
      });

      if (components.length > 10) {
        console.log(`  ... and ${components.length - 10} more`);
      }
    });

    // Save full report to file
    const reportPath = './component-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(groupedByFrame, null, 2));
    console.log(`\n✅ Full report saved to: ${reportPath}`);

    // Search for specific icons
    console.log('\n\n🔍 Searching for "logout" and "local_parking"...\n');

    allComponents.forEach((comp) => {
      if (
        comp.name.toLowerCase().includes('logout') ||
        comp.name.toLowerCase().includes('local_parking')
      ) {
        console.log(`✅ Found: "${comp.name}"`);
        console.log(`   Frame: ${comp.containing_frame?.name || 'No Frame'}`);
        console.log(`   Node ID: ${comp.node_id}`);
        console.log('');
      }
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

listAllComponents();
