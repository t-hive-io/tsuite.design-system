/**
 * Deep check for Variables in Figma file
 * Check both local and published variables, and file structure
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

async function deepCheckVariables() {
  console.log('🔍 Deep checking for Variables in Figma file...\n');

  try {
    // 1. Check file data
    console.log('📄 Step 1: Checking main file data...');
    const fileResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const fileData = fileResponse.data;

    // Save full response to inspect
    fs.writeFileSync(
      'debug-figma-file-response.json',
      JSON.stringify(fileData, null, 2)
    );
    console.log('   ✅ File data saved to: debug-figma-file-response.json');

    // Check all possible places where variables might be
    const checks = {
      'document.variables': fileData.document?.variables,
      variables: fileData.variables,
      'meta.variables': fileData.meta?.variables,
      variableCollections: fileData.variableCollections,
      'meta.variableCollections': fileData.meta?.variableCollections,
    };

    console.log('\n📊 Checking all possible Variable locations:');
    let foundAny = false;
    for (const [path, value] of Object.entries(checks)) {
      if (value) {
        console.log(`   ✅ Found at: ${path}`);
        console.log(`      Type: ${typeof value}`);
        if (typeof value === 'object') {
          console.log(`      Keys: ${Object.keys(value).length}`);
        }
        foundAny = true;
      } else {
        console.log(`   ❌ Not at: ${path}`);
      }
    }

    if (!foundAny) {
      console.log('\n❌ No Variables found in file data structure');
    }

    // 2. Try local variables endpoint
    console.log('\n📄 Step 2: Trying /variables/local endpoint...');
    try {
      const localVarResponse = await axios.get(
        `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
        {
          headers: {
            'X-Figma-Token': FIGMA_ACCESS_TOKEN,
          },
        }
      );
      console.log('   ✅ SUCCESS! Local variables found');
      console.log(
        '   Response:',
        JSON.stringify(localVarResponse.data).substring(0, 300)
      );

      fs.writeFileSync(
        'debug-figma-variables-local.json',
        JSON.stringify(localVarResponse.data, null, 2)
      );
      console.log('   ✅ Saved to: debug-figma-variables-local.json');
    } catch (error) {
      console.log(
        `   ❌ FAILED: ${error.response?.status} ${error.response?.statusText}`
      );
      console.log(
        `   Error: ${
          error.response?.data?.err || error.response?.data?.message
        }`
      );

      if (error.response?.status === 403) {
        console.log(
          '   💡 This means: Access token lacks file_variables:read scope'
        );
      } else if (error.response?.status === 404) {
        console.log('   💡 This means: No local variables exist in this file');
      }
    }

    // 3. Try published variables endpoint
    console.log('\n📄 Step 3: Trying /variables/published endpoint...');
    try {
      const pubVarResponse = await axios.get(
        `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/published`,
        {
          headers: {
            'X-Figma-Token': FIGMA_ACCESS_TOKEN,
          },
        }
      );
      console.log('   ✅ SUCCESS! Published variables found');
      console.log(
        '   Response:',
        JSON.stringify(pubVarResponse.data).substring(0, 300)
      );

      fs.writeFileSync(
        'debug-figma-variables-published.json',
        JSON.stringify(pubVarResponse.data, null, 2)
      );
      console.log('   ✅ Saved to: debug-figma-variables-published.json');
    } catch (error) {
      console.log(
        `   ❌ FAILED: ${error.response?.status} ${error.response?.statusText}`
      );
      console.log(
        `   Error: ${
          error.response?.data?.err || error.response?.data?.message
        }`
      );

      if (error.response?.status === 403) {
        console.log('   💡 This means: Access token lacks required scope');
      } else if (error.response?.status === 404) {
        console.log('   💡 This means: No published variables from this file');
      }
    }

    console.log('\n' + '='.repeat(70));
    console.log('\n🎯 CONCLUSION:\n');
    console.log('If all endpoints returned 403:');
    console.log('  → Your access token needs file_variables:read scope');
    console.log(
      '  → Even if Variables exist, you cannot read them without this scope'
    );
    console.log('\nIf all endpoints returned 404:');
    console.log('  → No Variables have been created in this Figma file yet');
    console.log('  → You need to create Variables in Figma first');
    console.log('\nTo check manually in Figma:');
    console.log(
      '  1. Open the file: https://www.figma.com/file/' + FIGMA_FILE_KEY
    );
    console.log('  2. Right panel → Click the 4-dots icon (Local variables)');
    console.log('  3. Do you see any Variable collections there?');
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

deepCheckVariables();
