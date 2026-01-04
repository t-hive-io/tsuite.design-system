const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all story files missing the Figma description warning
const missingFiles = execSync(
  'grep -L "Figma Description Missing" src/components/**/*.stories.tsx',
  { encoding: 'utf-8' }
)
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(
  `Found ${missingFiles.length} files missing Figma description warning\n`
);

const warningText = `⚠️ **Figma Description Missing** - Please add a description in Figma for this component.`;

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

missingFiles.forEach((filePath, index) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Check if file has a docs.description.component section
    if (content.includes('docs: {') && content.includes('description: {')) {
      // Already has docs.description structure, skip (might have different warning)
      console.log(
        `${index + 1}/${missingFiles.length} SKIP: ${path.basename(
          filePath
        )} - Already has docs.description`
      );
      skipCount++;
      return;
    }

    // Pattern 1: Has docs but no description
    if (content.includes('docs: {')) {
      const updatedContent = content.replace(
        /(\s+docs: \{)\n/,
        `$1\n      description: {\n        component:\n          '${warningText}',\n      },\n`
      );

      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        console.log(
          `${index + 1}/${missingFiles.length} UPDATED: ${path.basename(
            filePath
          )} - Added description to existing docs`
        );
        successCount++;
        return;
      }
    }

    // Pattern 2: Has parameters but no docs
    if (content.includes('parameters: {')) {
      const updatedContent = content
        .replace(/(\s+parameters: \{)\n(\s+layout: )/, `$1\n$2`)
        .replace(
          /(\s+parameters: \{\n\s+layout: [^,]+,)\n/,
          `$1\n    docs: {\n      description: {\n        component:\n          '${warningText}',\n      },\n    },\n`
        );

      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        console.log(
          `${index + 1}/${missingFiles.length} UPDATED: ${path.basename(
            filePath
          )} - Added docs section`
        );
        successCount++;
        return;
      }
    }

    // Pattern 3: No parameters section at all (rare)
    console.log(
      `${index + 1}/${missingFiles.length} SKIP: ${path.basename(
        filePath
      )} - Unusual structure, needs manual review`
    );
    skipCount++;
  } catch (error) {
    console.error(
      `${index + 1}/${missingFiles.length} ERROR: ${path.basename(
        filePath
      )} - ${error.message}`
    );
    errorCount++;
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total files: ${missingFiles.length}`);
console.log(`Updated: ${successCount}`);
console.log(`Skipped: ${skipCount}`);
console.log(`Errors: ${errorCount}`);
