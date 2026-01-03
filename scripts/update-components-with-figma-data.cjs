const fs = require('fs');
const path = require('path');

// Load the mapping data
const mappingFile = path.join(__dirname, '../component-figma-mapping.json');
const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf-8'));

console.log('\n🔄 Updating components with Figma properties and SVG icons\n');
console.log('='.repeat(80));

const updates = [];

// Process each successfully found component
mapping.results.forEach(result => {
  if (result.status !== 'found') return;
  
  const { folder, figmaName, output } = result;
  
  // Parse properties from output
  const properties = [];
  const propertyRegex = /Property: (.+?)\n   - Type: VARIANT\n   - Default: (.+?)\n   - Options: (.+?)(?=\n\n|🔢)/gs;
  let match;
  
  while ((match = propertyRegex.exec(output)) !== null) {
    const [, name, defaultValue, optionsStr] = match;
    const options = optionsStr.split(', ').map(s => s.trim());
    properties.push({ name, defaultValue, options });
  }
  
  // Parse variants
  const variants = [];
  const variantRegex = /\d+\.\s+(.+?)(?=\n|$)/g;
  const variantsSection = output.split('🔢 Variants')[1];
  if (variantsSection) {
    while ((match = variantRegex.exec(variantsSection)) !== null) {
      variants.push(match[1].trim());
    }
  }
  
  updates.push({
    folder,
    figmaName,
    properties,
    variants
  });
});

// Print summary
console.log(`\n✅ Found ${updates.length} components to update:\n`);
updates.forEach(u => {
  console.log(`📦 ${u.folder} (${u.figmaName})`);
  u.properties.forEach(p => {
    console.log(`   - ${p.name}: ${p.options.length} options`);
  });
  console.log(`   - ${u.variants.length} total variants\n`);
});

// Save updates to JSON for reference
const updatesFile = path.join(__dirname, '../component-updates.json');
fs.writeFileSync(updatesFile, JSON.stringify(updates, null, 2));
console.log(`💾 Update data saved to: component-updates.json\n`);
