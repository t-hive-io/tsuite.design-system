/**
 * Find components with figma parameter but missing URL
 */

const fs = require('fs');
const path = require('path');

// Find all story files
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

function main() {
  console.log(
    '🔍 Finding components with figma parameter but missing URL...\n'
  );

  const srcDir = path.join(__dirname, '../src');
  const storyFiles = findStoryFiles(srcDir);

  const missing = [];

  storyFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.relative(srcDir, filePath);

    const hasFigmaParam = /figma:\s*\{/.test(content);
    const hasFigmaUrl = /figma:\s*\{[\s\S]*?url:/.test(content);

    if (hasFigmaParam && !hasFigmaUrl) {
      // Extract component name from title
      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      const title = titleMatch ? titleMatch[1] : 'Unknown';

      // Extract figma parameter content
      const figmaMatch = content.match(/figma:\s*\{[\s\S]*?\}/);
      const figmaContent = figmaMatch ? figmaMatch[0] : '';

      missing.push({
        file: fileName,
        title: title,
        figma: figmaContent,
      });
    }
  });

  console.log(
    `Found ${missing.length} components with figma parameter but missing URL:\n`
  );

  missing.forEach((item, index) => {
    console.log(`${index + 1}. ${item.title}`);
    console.log(`   File: ${item.file}`);
    console.log(
      `   Current figma block:\n   ${item.figma.replace(/\n/g, '\n   ')}`
    );
    console.log('');
  });
}

main();
