const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapping of folder names to Figma component names
const componentMapping = {
  'Accordion': 'Right bar - Expansion panel - 2',
  'Badge': 'Small badge',
  'Banner': 'Information banner',
  'BottomBars': 'Zoom menu',
  'BreadCrumbs': null, // No component sets found
  'Button': 'Buttons',
  'CanvasObjects': 'Area',
  'Card': 'Simulation card',
  'CheckboxRadio': 'Checkbox',
  'ChipsTags': 'Input chips',
  'Cursor': null, // No component sets found
  'DataTable': 'Table rows',
  'Dialogs': 'Order profile modal',
  'Divider': 'Dividers',
  'Icon': null, // 153 components - skip for now
  'Illustrations': 'Rack',
  'Input': 'Input',
  'LargeComponents': 'Floorplan card',
  'Menus': 'Dropdown menu item',
  'ProgressIndicators': 'Loading Spinner 3',
  'PropertyPanels': 'Property panel - Setup, Layout, Simulation, 3D',
  'RackingData': 'Francks racking data set',
  'Slider': 'Slider',
  'Switch': 'Switch',
  'Tabs': 'Tab item',
  'ToolRail': 'Tool rail sub',
  'Tooltip': 'Explenation tooltip',
  'TreeView': 'Layers',
  'UIShellHeader': 'Top bars',
  'UIShellRightPanel': 'Reference image'
};

const componentsDir = path.join(__dirname, '../src/components');
const componentFolders = fs.readdirSync(componentsDir).filter(folder => {
  return fs.statSync(path.join(componentsDir, folder)).isDirectory();
});

console.log(`\n📦 Checking ${componentFolders.length} component folders\n`);
console.log('='.repeat(80));

const results = [];

componentFolders.forEach((folder, index) => {
  const figmaName = componentMapping[folder];
  
  if (!figmaName) {
    console.log(`\n[${index + 1}/${componentFolders.length}] ${folder}`);
    console.log('   ⏭️  Skipped (no Figma component)');
    results.push({ folder, status: 'skipped', reason: 'No component sets found' });
    return;
  }
  
  console.log(`\n[${index + 1}/${componentFolders.length}] ${folder} → "${figmaName}"`);
  console.log('-'.repeat(80));
  
  try {
    const output = execSync(`node scripts/get-component-properties.js "${figmaName}"`, {
      encoding: 'utf-8',
      cwd: path.join(__dirname, '..')
    });
    
    console.log(output);
    
    // Parse if component was found
    if (output.includes('✅ Found component')) {
      results.push({ folder, figmaName, status: 'found', output });
    } else if (output.includes('❌ Component')) {
      results.push({ folder, figmaName, status: 'not-found', output });
    }
  } catch (error) {
    console.error(`Error checking ${folder}:`, error.message);
    results.push({ folder, figmaName, status: 'error', error: error.message });
  }
});

console.log('\n');
console.log('='.repeat(80));
console.log('📊 SUMMARY');
console.log('='.repeat(80));

const found = results.filter(r => r.status === 'found');
const notFound = results.filter(r => r.status === 'not-found');
const skipped = results.filter(r => r.status === 'skipped');
const errors = results.filter(r => r.status === 'error');

console.log(`\n✅ Found in Figma: ${found.length}`);
found.forEach(r => console.log(`   - ${r.folder} (${r.figmaName})`));

console.log(`\n❌ Not found in Figma: ${notFound.length}`);
notFound.forEach(r => console.log(`   - ${r.folder} (${r.figmaName})`));

console.log(`\n⏭️  Skipped: ${skipped.length}`);
skipped.forEach(r => console.log(`   - ${r.folder} (${r.reason})`));

if (errors.length > 0) {
  console.log(`\n⚠️  Errors: ${errors.length}`);
  errors.forEach(r => console.log(`   - ${r.folder}: ${r.error}`));
}

console.log('\n');

// Save results to JSON file
const resultsFile = path.join(__dirname, '../component-figma-mapping.json');
fs.writeFileSync(resultsFile, JSON.stringify({ componentMapping, results }, null, 2));
console.log(`💾 Results saved to: component-figma-mapping.json\n`);
