const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../src/assets/icons');
const iconsComponentsDir = path.join(__dirname, '../src/icons'); // Auto-generated icon components
const metadataPath = path.join(iconsDir, 'metadata.json');

// Load metadata if it exists
let metadata = {};
if (fs.existsSync(metadataPath)) {
  try {
    metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  } catch (error) {
    console.warn(
      '⚠️  Could not read metadata.json, descriptions will not be available'
    );
  }
}

// Delete old icon components
console.log('Removing old icon components...');
if (fs.existsSync(iconsComponentsDir)) {
  const oldDirs = fs.readdirSync(iconsComponentsDir).filter((dir) => {
    const stat = fs.statSync(path.join(iconsComponentsDir, dir));
    return stat.isDirectory();
  });
  oldDirs.forEach((dir) => {
    fs.rmSync(path.join(iconsComponentsDir, dir), {
      recursive: true,
      force: true,
    });
  });
  console.log(`Removed ${oldDirs.length} old icon components`);
} else {
  fs.mkdirSync(iconsComponentsDir, { recursive: true });
  console.log('Created icons directory');
}

// Get all actual SVG files (not metadata.json)
const svgFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith('.svg'));

// Generate new components for each SVG
let count = 0;
const seenComponents = new Set();

svgFiles.forEach((filename) => {
  const filenameWithoutExt = filename.replace('.svg', '');
  let componentName = filenameWithoutExt.split('--')[0]; // Use the sanitized name before node ID

  // Get description from metadata if available
  const metadataEntry = metadata[filenameWithoutExt] || {};
  const description = metadataEntry.description || '';
  const originalName = metadataEntry.originalName || filenameWithoutExt;

  // Remove ALL hyphens and capitalize next letter
  componentName = componentName.replace(/-+/g, '');

  // Ensure component name starts with uppercase letter
  if (/^[0-9]/.test(componentName)) {
    componentName = 'Icon' + componentName;
  }
  if (/^[a-z]/.test(componentName)) {
    componentName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);
  }

  // Skip if we already created this component (multiple SVGs map to same component)
  if (seenComponents.has(componentName)) {
    return;
  }
  seenComponents.add(componentName);

  const componentDir = path.join(iconsComponentsDir, componentName);

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });

    // Create component file
    const componentContent = `import React from 'react';
import './${componentName}.css';
import IconSvg from '../assets/icons/${filenameWithoutExt}.svg?react';

export interface ${componentName}Props {
  className?: string;
}

/**
 * ${componentName}
 * ${description ? `\n * ${description}\n * ` : ''}
 * Original name: ${originalName}
 * SVG file: ${filename}
 */
export const ${componentName}: React.FC<${componentName}Props> = ({ className }) => {
  return <IconSvg className={\`${componentName.toLowerCase()} \${className || ''}\`} />;
};
`;

    fs.writeFileSync(
      path.join(componentDir, `${componentName}.tsx`),
      componentContent
    );

    // Create CSS file
    const cssContent = `.${componentName.toLowerCase()} {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.${componentName.toLowerCase()} svg {
  width: 100%;
  height: 100%;
}
`;
    fs.writeFileSync(
      path.join(componentDir, `${componentName}.css`),
      cssContent
    );

    // Don't create story files for icons - use Icon Gallery instead

    count++;
    if (count % 100 === 0) {
      console.log(`Generated ${count} components...`);
    }
  }
});

console.log(
  `\nDone! Generated ${count} icon components from ${svgFiles.length} SVG files in src/icons/`
);
