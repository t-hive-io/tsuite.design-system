/**
 * Get info about a specific Figma node
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const NODE_ID = process.argv[2] || process.env.NODE_ID || '3797:54268';

async function getNodeInfo() {
  const output = [];
  const log = (msg) => {
    console.log(msg);
    output.push(msg);
  };

  try {
    log(`🔍 Fetching node ${NODE_ID}...\n`);

    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(
        NODE_ID
      )}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const nodeData = response.data.nodes[NODE_ID];

    if (!nodeData) {
      log('❌ Node not found');
      return;
    }

    log('✅ Node found!\n');
    log('Node info:');
    log('  Name: ' + nodeData.document.name);
    log('  Type: ' + nodeData.document.type);
    log('  ID: ' + nodeData.document.id);

    // Check if it's in components list
    log('\n🔍 Checking if this is a component...\n');

    const componentsResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const component = componentsResponse.data.meta.components.find(
      (c) => c.node_id === NODE_ID
    );

    if (component) {
      log('✅ This IS a component!');
      log('  Name: ' + component.name);
      log(
        '  Containing frame: ' + (component.containing_frame?.name || 'None')
      );
      log('  Page: ' + (component.containing_frame?.pageName || 'Unknown'));
      if (component.containing_frame?.containingComponentSet?.name) {
        log(
          '  Component set: ' +
            component.containing_frame.containingComponentSet.name
        );
        log(
          '  Component set nodeId: ' +
            component.containing_frame.containingComponentSet.nodeId
        );
      }
      if (component.containing_frame?.containingStateGroup?.name) {
        log(
          '  State group: ' +
            component.containing_frame.containingStateGroup.name
        );
        log(
          '  State group nodeId: ' +
            component.containing_frame.containingStateGroup.nodeId
        );
      }
      log('  Key: ' + component.key);

      if (component.containing_frame?.name !== 'Icons') {
        log('\n⚠️  WARNING: This component is NOT in "Icons" component set!');
        log(
          '   Current location: ' +
            (component.containing_frame?.name || 'No frame')
        );
        log(
          '   To export this icon, move it to "Icons" component set in Figma'
        );
      }
    } else {
      log('❌ This is NOT a component (might be an instance or regular node)');
      log('💡 Only components in "Icons" component set are exported');
    }

    const outFile = `node-check-result-${NODE_ID.replace(/[:/\\]/g, '_')}.txt`;
    fs.writeFileSync(outFile, output.join('\n'));
    log(`\n✅ Results saved to ${outFile}`);
  } catch (error) {
    log('Error: ' + error.message);
    if (error.response) {
      log('Response: ' + JSON.stringify(error.response.data));
    }
    const outFile = `node-check-result-${NODE_ID.replace(/[:/\\]/g, '_')}.txt`;
    fs.writeFileSync(outFile, output.join('\n'));
  }
}

getNodeInfo();
