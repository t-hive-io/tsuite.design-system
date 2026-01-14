/**
 * Sync Figma component names to Storybook story files
 * Updates title and figmaComponent in .stories.tsx files to match figma-docs.json
 */

const fs = require('fs');
const path = require('path');

// Load figma-docs.json
const figmaDocsPath = path.join(__dirname, '../src/figma-docs.json');
const figmaDocs = JSON.parse(fs.readFileSync(figmaDocsPath, 'utf-8'));

// Recursively find all .stories.tsx files
function findStoryFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findStoryFiles(filePath, fileList);
    } else if (file.endsWith('.stories.tsx') || file.endsWith('.stories.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function updateStoryFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;

  // Find figma componentId in the file
  const componentIdMatch = content.match(/componentId:\s*['"](\d+:\d+)['"]/);
  if (!componentIdMatch) {
    return { updated: false, reason: 'No componentId found' };
  }

  const componentId = componentIdMatch[1];

  // Find matching Figma component by ID
  const figmaComponent = Object.entries(figmaDocs).find(
    ([, data]) => data.id === componentId
  );

  if (!figmaComponent) {
    return { updated: false, reason: 'No matching Figma component found' };
  }

  const [figmaName, figmaData] = figmaComponent;
  
  // Use page name if available, otherwise fall back to component name
  // Remove ❖ symbol from page names for cleaner navigation
  let displayName = figmaData.pageName || figmaName;
  displayName = displayName.replace(/^❖\s*/, '');

  // Extract current title from meta
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (!titleMatch) {
    return { updated: false, reason: 'No title found in meta' };
  }

  const currentTitle = titleMatch[1];
  
  // Extract the title parts: "Components/CategoryName/ComponentName"
  // e.g., "Components/Input/InputText" or "Components/Icon/add"
  const titleParts = currentTitle.split('/');
  
  // For stories, we want to keep the actual component name but update the category
  // So if we have "Components/Input/InputText", we want "Components/❖ Inputs/InputText"
  // Only update the MIDDLE part (category), not the last part (component name)
  
  if (titleParts.length < 3) {
    return { updated: false, reason: 'Title structure unexpected (needs at least 3 parts)' };
  }
  
  const currentCategoryName = titleParts[1]; // e.g., "Input", "Icon", "Button"
  const componentName = titleParts.slice(2).join('/'); // Keep everything after category
  
  // Build new title: keep first part (Components), replace category with page name, keep component name
  const newTitle = [titleParts[0], displayName, ...titleParts.slice(2)].join('/');

  // Update title in meta
  if (currentTitle !== newTitle) {
    content = content.replace(
      /title:\s*['"]([^'"]+)['"]/,
      `title: '${newTitle}'`
    );
    updated = true;
  }

  // Update figmaComponent field with display name
  const figmaComponentMatch = content.match(/figmaComponent:\s*['"]([^'"]+)['"]/);
  if (figmaComponentMatch && figmaComponentMatch[1] !== displayName) {
    content = content.replace(
      /figmaComponent:\s*['"]([^'"]+)['"]/,
      `figmaComponent: '${displayName}'`
    );
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return {
      updated: true,
      oldCategory: currentCategoryName,
      newCategory: displayName,
      file: path.relative(process.cwd(), filePath),
    };
  }

  return { updated: false, reason: 'Already up to date' };
}

// Main execution
console.log('🔄 Syncing Figma component names to Storybook stories...\n');

const srcDir = path.join(__dirname, '../src');
const storyFiles = findStoryFiles(srcDir);

console.log(`📁 Found ${storyFiles.length} story files\n`);

const results = storyFiles.map(updateStoryFile);
const updatedFiles = results.filter((r) => r.updated);

if (updatedFiles.length === 0) {
  console.log('✅ All story files are already up to date!\n');
} else {
  console.log(`✅ Updated ${updatedFiles.length} story files:\n`);
  updatedFiles.forEach((result) => {
    console.log(`   📝 ${result.file}`);
    console.log(`      Category: "${result.oldCategory}" → "${result.newCategory}"`);
  });
  console.log('');
}

const notUpdated = results.filter((r) => !r.updated);
if (notUpdated.length > 0) {
  console.log(`ℹ️  ${notUpdated.length} files not updated:`);
  const reasons = {};
  notUpdated.forEach((r) => {
    reasons[r.reason] = (reasons[r.reason] || 0) + 1;
  });
  Object.entries(reasons).forEach(([reason, count]) => {
    console.log(`   - ${reason}: ${count}`);
  });
  console.log('');
}

console.log('✨ Sync complete!\n');
