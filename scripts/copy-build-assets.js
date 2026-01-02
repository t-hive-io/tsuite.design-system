/**
 * Copy assets (CSS, tokens, styles) to dist folder after TypeScript compilation
 */

const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠️  Source ${src} does not exist, skipping...`);
    return;
  }
  
  fs.mkdirSync(dest, { recursive: true });
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  ✓ ${destPath}`);
    }
  }
}

console.log('📦 Copying build assets to dist/...\n');

// Copy tokens
console.log('Copying tokens...');
copyDir('src/tokens', 'dist/tokens');

// Copy styles
console.log('\nCopying styles...');
copyDir('src/styles', 'dist/styles');

// Copy CSS files from components
console.log('\nCopying component CSS files...');
const componentsDir = 'src/components';
const distComponentsDir = 'dist/components';

if (fs.existsSync(componentsDir)) {
  const components = fs.readdirSync(componentsDir);
  
  for (let component of components) {
    const componentSrc = path.join(componentsDir, component);
    const componentDist = path.join(distComponentsDir, component);
    
    if (fs.statSync(componentSrc).isDirectory()) {
      const files = fs.readdirSync(componentSrc);
      
      for (let file of files) {
        if (file.endsWith('.css')) {
          const srcFile = path.join(componentSrc, file);
          const destFile = path.join(componentDist, file);
          fs.copyFileSync(srcFile, destFile);
          console.log(`  ✓ ${destFile}`);
        }
      }
    }
  }
}

console.log('\n✅ Build assets copied successfully!');
