const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all story files
const allFiles = execSync(
  'find src/components -name "*.stories.tsx" -type f',
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Found ${allFiles.length} story files to standardize\n`);

const warningText = `⚠️ **Figma Description Missing** - Please add a description in Figma for this component.`;

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

allFiles.forEach((filePath, index) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    let updatedContent = content;

    // Skip if already has the exact warning text
    if (content.includes(warningText)) {
      console.log(`${index + 1}/${allFiles.length} SKIP: ${path.basename(filePath)} - Already has Figma warning`);
      skipCount++;
      return;
    }

    // Skip if has a custom description (not just the warning)
    if (content.includes('docs: {') && content.includes('description: {') && content.includes('component:')) {
      const hasCustomDesc = !content.includes('Figma Description Missing');
      if (hasCustomDesc) {
        console.log(`${index + 1}/${allFiles.length} SKIP: ${path.basename(filePath)} - Has custom description`);
        skipCount++;
        return;
      }
    }

    // Check if file has 'parameters' section
    if (!content.includes('parameters: {')) {
      console.log(`${index + 1}/${allFiles.length} SKIP: ${path.basename(filePath)} - No parameters section (unusual structure)`);
      skipCount++;
      return;
    }

    // Pattern 1: Has parameters with docs.description already (update it)
    if (content.match(/parameters:\s*\{[^}]*docs:\s*\{[^}]*description:\s*\{[^}]*component:/s)) {
      // Replace existing description
      updatedContent = content.replace(
        /(docs:\s*\{\s*description:\s*\{\s*component:\s*['"`])[^'"`]*(['"`])/s,
        `$1${warningText}$2`
      );

      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        console.log(`${index + 1}/${allFiles.length} UPDATED: ${path.basename(filePath)} - Updated existing description`);
        successCount++;
        return;
      }
    }

    // Pattern 2: Has parameters with docs but no description section
    if (content.match(/parameters:\s*\{[^}]*docs:\s*\{/s) && !content.includes('description: {')) {
      // Add description after docs: {
      updatedContent = content.replace(
        /(docs:\s*\{)\s*\n/s,
        `$1\n      description: {\n        component:\n          '${warningText}',\n      },\n`
      );

      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        console.log(`${index + 1}/${allFiles.length} UPDATED: ${path.basename(filePath)} - Added description to existing docs`);
        successCount++;
        return;
      }
    }

    // Pattern 3: Has parameters but no docs section at all
    if (content.includes('parameters: {') && !content.includes('docs: {')) {
      // Find where to insert docs section
      // Insert after layout line if it exists
      if (content.match(/parameters:\s*\{\s*layout:\s*['"`][^'"`]*['"`],/s)) {
        updatedContent = content.replace(
          /(parameters:\s*\{\s*layout:\s*['"`][^'"`]*['"`],)\s*\n/s,
          `$1\n    docs: {\n      description: {\n        component:\n          '${warningText}',\n      },\n    },\n`
        );
      } else {
        // Insert at the beginning of parameters
        updatedContent = content.replace(
          /(parameters:\s*\{)\s*\n/s,
          `$1\n    layout: 'centered',\n    docs: {\n      description: {\n        component:\n          '${warningText}',\n      },\n    },\n`
        );
      }

      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        console.log(`${index + 1}/${allFiles.length} UPDATED: ${path.basename(filePath)} - Added docs section`);
        successCount++;
        return;
      }
    }

    console.log(`${index + 1}/${allFiles.length} SKIP: ${path.basename(filePath)} - Could not determine pattern`);
    skipCount++;

  } catch (error) {
    console.error(`${index + 1}/${allFiles.length} ERROR: ${path.basename(filePath)} - ${error.message}`);
    errorCount++;
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total files: ${allFiles.length}`);
console.log(`Updated: ${successCount}`);
console.log(`Skipped: ${skipCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`\nExpected result: ${allFiles.length - errorCount} files should have Figma warning`);
