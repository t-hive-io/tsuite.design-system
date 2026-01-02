/**
 * Search for Button component in file structure and check description
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function searchButtons() {
  try {
    console.log('🔍 Fetching full file to search for Buttons component...\n');
    
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN },
      }
    );

    const fileData = response.data;
    console.log(`✅ File: ${fileData.name}\n`);
    
    // Search recursively for component sets named "Buttons"
    const results = [];
    findButtonComponents(fileData.document, results);
    
    if (results.length === 0) {
      console.log('❌ No Button components found');
      return;
    }
    
    console.log(`Found ${results.length} component(s) matching "Button":\n`);
    
    results.forEach((comp, idx) => {
      console.log(`${idx + 1}. ${comp.name}`);
      console.log(`   ID: ${comp.id}`);
      console.log(`   Type: ${comp.type}`);
      console.log(`   Description: ${comp.description || '(empty)'}`);
      
      if (comp.componentPropertyDefinitions) {
        const props = Object.keys(comp.componentPropertyDefinitions);
        console.log(`   Properties: ${props.join(', ')}`);
      }
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

function findButtonComponents(node, results, depth = 0) {
  if (!node) return;
  
  // Check if node name contains "Button" (case insensitive)
  if (node.name && /button/i.test(node.name)) {
    if (node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') {
      results.push({
        id: node.id,
        name: node.name,
        type: node.type,
        description: node.description || '',
        componentPropertyDefinitions: node.componentPropertyDefinitions,
      });
    }
  }
  
  // Recurse into children
  if (node.children) {
    node.children.forEach(child => findButtonComponents(child, results, depth + 1));
  }
}

searchButtons();
