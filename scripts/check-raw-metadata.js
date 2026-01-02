/**
 * Check all metadata and fields for Button component
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const BUTTON_NODE_ID = '1428:9176';

async function checkAllMetadata() {
  try {
    console.log('🔍 Checking ALL metadata for Button component...\n');
    
    // Method 1: Get node directly
    const nodeResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes`,
      {
        params: { ids: BUTTON_NODE_ID },
        headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN },
      }
    );

    console.log('📦 RAW NODE DATA:');
    console.log(JSON.stringify(nodeResponse.data.nodes[BUTTON_NODE_ID], null, 2));
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

checkAllMetadata();
