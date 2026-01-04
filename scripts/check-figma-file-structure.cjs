/**
 * Check Figma File Structure
 * See if file uses Variables or just Styles
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function checkFileStructure() {
  try {
    console.log('🔍 Checking Figma file structure...\n');

    // Get full file data
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const fileData = response.data;
    console.log('📄 File:', fileData.name);
    console.log('📅 Last Modified:', fileData.lastModified);
    console.log('👤 Editor Type:', fileData.editorType);
    console.log('🔗 Version:', fileData.version);

    // Check what features the file uses
    console.log('\n📊 File Features:');

    // Check for variables in the file
    if (fileData.variables) {
      console.log('   ✅ Variables: FOUND');
      console.log('      Collections:', Object.keys(fileData.variables).length);
    } else {
      console.log('   ❌ Variables: NOT FOUND');
      console.log('      → File does not use Variables feature');
    }

    if (fileData.styles) {
      console.log('   ✅ Styles: FOUND');
      console.log('      Count:', Object.keys(fileData.styles).length);
    }

    if (fileData.components) {
      console.log('   ✅ Components: FOUND');
      console.log('      Count:', Object.keys(fileData.components).length);
    }

    // Try to access variables directly via REST API
    console.log('\n🔬 Attempting direct Variables API access...');
    try {
      const varResponse = await axios.get(
        `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
        {
          headers: {
            'X-Figma-Token': FIGMA_ACCESS_TOKEN,
          },
        }
      );
      console.log('   ✅ Variables API accessible!');
      console.log(
        '   📦 Data:',
        JSON.stringify(varResponse.data).substring(0, 200)
      );
    } catch (varError) {
      console.log('   ❌ Variables API not accessible');
      console.log(
        '   Error:',
        varError.response?.data?.err || varError.message
      );
    }

    console.log('\n💡 Conclusion:');
    if (!fileData.variables) {
      console.log('   → Your Figma file does NOT use Variables');
      console.log('   → You need to create Variables in Figma first');
      console.log('   → OR continue using Styles API (which works perfectly)');
      console.log('\n   To create Variables in Figma:');
      console.log('   1. Open your Figma file');
      console.log('   2. Right panel → Local variables');
      console.log('   3. Create a collection');
      console.log('   4. Add modes (e.g., "tmhe", "toyota")');
      console.log('   5. Add color variables with different values per mode');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

checkFileStructure();
