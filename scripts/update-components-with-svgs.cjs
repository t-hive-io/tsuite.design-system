const fs = require('fs');
const path = require('path');

// Load metadata
const metadata = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../src/assets/icons/metadata.json'),
    'utf8'
  )
);

// Load figma docs to get component to Figma name mapping
const figmaDocs = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/figma-docs.json'), 'utf8')
);

// Build reverse index: Figma name -> SVG files
const figmaNameToSvgs = {};
Object.entries(metadata).forEach(([filename, data]) => {
  const figmaName = data.originalName;
  if (!figmaNameToSvgs[figmaName]) {
    figmaNameToSvgs[figmaName] = [];
  }
  figmaNameToSvgs[figmaName].push(filename);
});

console.log(`Loaded ${Object.keys(metadata).length} SVG files`);
console.log(
  `Found ${Object.keys(figmaNameToSvgs).length} unique Figma components`
);

// Find all React components
const componentsDir = path.join(__dirname, '../src/components');
const componentDirs = fs.readdirSync(componentsDir).filter((dir) => {
  const stat = fs.statSync(path.join(componentsDir, dir));
  return stat.isDirectory();
});

console.log(`Found ${componentDirs.length} React components\n`);

let updatedCount = 0;
let skippedCount = 0;

componentDirs.forEach((componentName) => {
  const componentPath = path.join(
    componentsDir,
    componentName,
    `${componentName}.tsx`
  );

  if (!fs.existsSync(componentPath)) {
    return;
  }

  const content = fs.readFileSync(componentPath, 'utf8');

  // Extract Figma component name from comment
  const match = content.match(/\* Maps to Figma component: "([^"]+)"/);
  if (!match) {
    console.log(`WARNING: ${componentName}: No Figma mapping found`);
    skippedCount++;
    return;
  }

  const figmaComponentName = match[1];

  // Find matching SVG files
  const svgFiles = figmaNameToSvgs[figmaComponentName];

  if (!svgFiles || svgFiles.length === 0) {
    console.log(
      `WARNING: ${componentName} (${figmaComponentName}): No SVG files found`
    );
    skippedCount++;
    return;
  }

  console.log(
    `OK: ${componentName} (${figmaComponentName}): Found ${svgFiles.length} SVG variant(s)`
  );
  updatedCount++;

  // Log the SVG files for manual inspection
  svgFiles.forEach((svg) => {
    console.log(`   - ${svg}.svg`);
  });
});

console.log(`\nSummary:`);
console.log(`   OK: ${updatedCount} components with SVGs`);
console.log(`   WARNING: ${skippedCount} components without SVGs`);
