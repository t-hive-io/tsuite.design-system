/**
 * Check Button component description in Figma
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const BUTTON_NODE_ID = '1428:9176';

async function checkComponentDetails() {
  try {
    console.log('🔍 Checking Button component details in Figma...\n');
    
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN },
      }
    );

    const componentSets = response.data.componentSets || {};
    const componentSetData = componentSets[BUTTON_NODE_ID];
    
    console.log('📦 Component: Buttons');
    console.log('🆔 ID:', BUTTON_NODE_ID);
    console.log('\n📝 Description:');
    
    if (componentSetData && componentSetData.description) {
      console.log('✅ FOUND!');
      console.log('---');
      console.log(componentSetData.description);
      console.log('---\n');
      console.log('🎉 Perfect! This description can now be used in Storybook!');
    } else {
      console.log('❌ EMPTY');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkComponentDetails();
