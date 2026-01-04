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
    const stat = fs.statSync(componentSrc);

    if (stat.isDirectory()) {
      const cssFiles = fs
        .readdirSync(componentSrc)
        .filter((f) => f.endsWith('.css'));

      if (cssFiles.length > 0) {
        const componentDest = path.join(distComponentsDir, component);
        fs.mkdirSync(componentDest, { recursive: true });

        for (let cssFile of cssFiles) {
          const srcPath = path.join(componentSrc, cssFile);
          const destPath = path.join(componentDest, cssFile);
          fs.copyFileSync(srcPath, destPath);
          console.log(`  ✓ ${destPath}`);
        }
      }
    }
  }
}

// Copy CSS files from icons
console.log('\nCopying icon CSS files...');
const iconsDir = 'src/icons';
const distIconsDir = 'dist/icons';

if (fs.existsSync(iconsDir)) {
  const icons = fs.readdirSync(iconsDir);

  for (let icon of icons) {
    const iconSrc = path.join(iconsDir, icon);
    const stat = fs.statSync(iconSrc);

    if (stat.isDirectory()) {
      const cssFiles = fs
        .readdirSync(iconSrc)
        .filter((f) => f.endsWith('.css'));

      if (cssFiles.length > 0) {
        const iconDest = path.join(distIconsDir, icon);
        fs.mkdirSync(iconDest, { recursive: true });

        for (let cssFile of cssFiles) {
          const srcPath = path.join(iconSrc, cssFile);
          const destPath = path.join(iconDest, cssFile);
          fs.copyFileSync(srcPath, destPath);
          console.log(`  ✓ ${destPath}`);
        }
      }
    }
  }
}

console.log('\n✅ Build assets copied successfully!');
