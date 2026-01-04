/**
 * Test Figma Variables API
 * Check if Variables API is accessible and what data it returns
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function testVariablesAPI() {
  try {
    console.log('🔍 Testing Figma Variables API...\n');

    // Test Variables endpoint
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    console.log('✅ Variables API accessible!\n');
    console.log('Response structure:');
    console.log('- Top-level keys:', Object.keys(response.data).join(', '));

    if (response.data.meta && response.data.meta.variables) {
      const variables = Object.values(response.data.meta.variables);
      console.log(`\n📊 Found ${variables.length} variables`);

      if (variables.length > 0) {
        console.log('\n🔎 First 3 variables:');
        variables.slice(0, 3).forEach((v, i) => {
          console.log(`\n${i + 1}. ${v.name}`);
          console.log('   ID:', v.id);
          console.log('   Type:', v.resolvedType);
          console.log(
            '   valuesByMode:',
            JSON.stringify(v.valuesByMode).slice(0, 100)
          );
        });
      }

      // Show variable collections
      if (response.data.meta.variableCollections) {
        const collections = Object.values(
          response.data.meta.variableCollections
        );
        console.log(`\n📚 Found ${collections.length} variable collections:`);
        collections.forEach((c) => {
          console.log(`   - ${c.name} (${c.modes.length} modes)`);
          c.modes.forEach((m) => console.log(`     → Mode: ${m.name}`));
        });
      }
    }
  } catch (error) {
    console.error('❌ Variables API Error:');
    console.error(
      '   Status:',
      error.response?.status,
      error.response?.statusText
    );
    console.error('   Message:', error.response?.data?.err || error.message);

    if (error.response?.status === 403) {
      console.error('\n💡 This might mean:');
      console.error(
        "   1. Your Figma file doesn't have Variables (need Enterprise plan)"
      );
      console.error('   2. Access token lacks permissions');
      console.error("   3. File doesn't use Variables feature");
    }
  }
}

testVariablesAPI();
