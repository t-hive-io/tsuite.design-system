const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const componentsDir = path.join(__dirname, '../src/components');
const componentFolders = fs.readdirSync(componentsDir).filter(folder => {
  return fs.statSync(path.join(componentsDir, folder)).isDirectory();
});

console.log(`\n📦 Found ${componentFolders.length} component folders\n`);
console.log('='.repeat(80));

const results = [];

componentFolders.forEach((folder, index) => {
  console.log(`\n[${index + 1}/${componentFolders.length}] Checking: ${folder}`);
  console.log('-'.repeat(80));
  
  try {
    const output = execSync(`node scripts/get-component-properties.js "${folder}"`, {
      encoding: 'utf-8',
      cwd: path.join(__dirname, '..')
    });
    
    console.log(output);
    
    // Parse if component was found
    if (output.includes('✅ Found component')) {
      results.push({ folder, status: 'found', output });
    } else if (output.includes('❌ Component')) {
      results.push({ folder, status: 'not-found', output });
    }
  } catch (error) {
    console.error(`Error checking ${folder}:`, error.message);
    results.push({ folder, status: 'error', error: error.message });
  }
});

console.log('\n');
console.log('='.repeat(80));
console.log('📊 SUMMARY');
console.log('='.repeat(80));

const found = results.filter(r => r.status === 'found');
const notFound = results.filter(r => r.status === 'not-found');
const errors = results.filter(r => r.status === 'error');

console.log(`\n✅ Found in Figma: ${found.length}`);
found.forEach(r => console.log(`   - ${r.folder}`));

console.log(`\n❌ Not found in Figma: ${notFound.length}`);
notFound.forEach(r => console.log(`   - ${r.folder}`));

if (errors.length > 0) {
  console.log(`\n⚠️  Errors: ${errors.length}`);
  errors.forEach(r => console.log(`   - ${r.folder}: ${r.error}`));
}

console.log('\n');
