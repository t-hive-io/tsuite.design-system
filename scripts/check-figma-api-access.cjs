/**
 * Check Figma API Access
 * Test which Figma API endpoints are accessible with current token
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function checkAPIAccess() {
  console.log('🔍 Checking Figma API Access...\n');
  console.log('File Key:', FIGMA_FILE_KEY);
  console.log(
    'Token:',
    FIGMA_ACCESS_TOKEN ? `${FIGMA_ACCESS_TOKEN.substring(0, 10)}...` : 'NOT SET'
  );
  console.log('\n' + '='.repeat(60) + '\n');

  const endpoints = [
    {
      name: 'File Info',
      url: `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      description: 'Basic file information',
    },
    {
      name: 'File Styles',
      url: `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/styles`,
      description: 'Color, text, and effect styles',
    },
    {
      name: 'Local Variables',
      url: `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
      description: 'Variables (Organization/Enterprise feature)',
    },
    {
      name: 'Published Variables',
      url: `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/published`,
      description: 'Published variables from libraries',
    },
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`📡 Testing: ${endpoint.name}`);
      console.log(`   Description: ${endpoint.description}`);

      const response = await axios.get(endpoint.url, {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      });

      console.log(`   ✅ SUCCESS - Status: ${response.status}`);

      // Show response structure
      const data = response.data;
      if (data.meta) {
        if (data.meta.variables) {
          const varCount = Object.keys(data.meta.variables).length;
          console.log(`   📊 Found ${varCount} variables`);

          if (varCount > 0) {
            const firstVar = Object.values(data.meta.variables)[0];
            console.log(
              `   🔎 Sample: "${firstVar.name}" (${firstVar.resolvedType})`
            );
          }
        }
        if (data.meta.variableCollections) {
          const colCount = Object.keys(data.meta.variableCollections).length;
          console.log(`   📚 Found ${colCount} variable collections`);

          if (colCount > 0) {
            const firstCol = Object.values(data.meta.variableCollections)[0];
            console.log(
              `   📦 Collection: "${firstCol.name}" with ${firstCol.modes.length} mode(s)`
            );
            firstCol.modes.forEach((mode) => {
              console.log(`      → Mode: "${mode.name}" (ID: ${mode.modeId})`);
            });
          }
        }
        if (data.meta.styles) {
          console.log(`   🎨 Found ${data.meta.styles.length} styles`);
        }
      }
    } catch (error) {
      if (error.response) {
        console.log(
          `   ❌ FAILED - Status: ${error.response.status} ${error.response.statusText}`
        );
        console.log(
          `   💬 Error: ${
            error.response.data?.err ||
            error.response.data?.message ||
            'Unknown error'
          }`
        );
      } else {
        console.log(`   ❌ FAILED - ${error.message}`);
      }
    }

    console.log(''); // Empty line between tests
  }

  console.log('='.repeat(60));
  console.log('\n💡 Next Steps:');
  console.log(
    '   - If Variables API returned 403: Check if Variables are enabled in Figma file'
  );
  console.log(
    '   - If Variables API returned 404: File might not have any Variables yet'
  );
  console.log(
    '   - If Variables API succeeded: You can use Variables instead of Styles!'
  );
}

checkAPIAccess();
