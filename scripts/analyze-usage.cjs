/**
 * Analyze component usage in Figma file
 * Counts how many instances of each component exist
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function analyzeComponentUsage() {
  try {
    console.log('Analyzing component usage in Figma file...\n');

    // Get full file structure
    console.log('Fetching file structure (this may take a moment)...');
    const fileResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const document = fileResponse.data.document;

    // Get component definitions
    const componentsResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const components = componentsResponse.data.meta.components;
    console.log(`Found ${components.length} component definitions\n`);

    // Create a map to count instances - use node_id instead of key
    const usageCount = {};
    const componentMap = {};
    const componentSetMap = {};

    components.forEach((comp) => {
      usageCount[comp.node_id] = 0;
      componentMap[comp.node_id] = comp.name;
      componentSetMap[comp.node_id] = comp.containing_frame?.name || comp.name;
    });

    // Traverse the document tree and count instances
    console.log('Counting component instances...\n');
    traverseNode(document, usageCount, false);

    // Check for unknown component IDs
    if (usageCount['_unknown']) {
      console.log(
        `Warning: Found ${usageCount['_unknown'].length} instances of unknown components`
      );
      console.log('Sample unknown IDs:', usageCount['_unknown'].slice(0, 5));
      console.log('Sample known keys:', Object.keys(componentMap).slice(0, 5));
      console.log('');
      delete usageCount['_unknown'];
    }

    // Sort by usage count
    const sortedComponents = Object.entries(usageCount)
      .map(([nodeId, count]) => ({
        name: componentMap[nodeId],
        componentSet: componentSetMap[nodeId],
        count: count,
        nodeId: nodeId,
      }))
      .sort((a, b) => b.count - a.count);

    // Display results
    console.log('='.repeat(80));
    console.log('TOP 50 MOST USED COMPONENTS');
    console.log('='.repeat(80));
    console.log('');

    const top50 = sortedComponents.slice(0, 50);
    top50.forEach((comp, index) => {
      const bar = '#'.repeat(Math.min(50, Math.floor(comp.count / 50)));
      const componentSet =
        comp.componentSet !== comp.name ? ` [${comp.componentSet}]` : '';
      console.log(
        `${(index + 1).toString().padStart(3)}. ${comp.name.padEnd(
          50
        )}${componentSet}`
      );
      console.log(`     ${comp.count.toString().padStart(5)} uses ${bar}`);
    });

    console.log('');
    console.log('='.repeat(80));
    console.log('STATISTICS');
    console.log('='.repeat(80));
    console.log(`Total components: ${components.length}`);
    console.log(
      `Components with instances: ${
        sortedComponents.filter((c) => c.count > 0).length
      }`
    );
    console.log(
      `Unused components: ${
        sortedComponents.filter((c) => c.count === 0).length
      }`
    );
    console.log(
      `Most used: ${sortedComponents[0].name} (${sortedComponents[0].count} instances)`
    );

    const totalInstances = sortedComponents.reduce(
      (sum, c) => sum + c.count,
      0
    );
    console.log(`Total instances: ${totalInstances}`);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

function traverseNode(node, usageCount, debug = false) {
  // Check if this node is a component instance
  if (node.type === 'INSTANCE' && node.componentId) {
    if (debug) {
      console.log(
        'Found instance:',
        node.name,
        'componentId:',
        node.componentId
      );
    }
    if (usageCount.hasOwnProperty(node.componentId)) {
      usageCount[node.componentId]++;
    } else {
      // Track unknown component IDs
      if (!usageCount['_unknown']) usageCount['_unknown'] = [];
      if (!usageCount['_unknown'].includes(node.componentId)) {
        usageCount['_unknown'].push(node.componentId);
      }
    }
  }

  // Recursively traverse children
  if (node.children) {
    node.children.forEach((child) => traverseNode(child, usageCount, debug));
  }
}

analyzeComponentUsage();
