/**
 * Analyze Figma parameter coverage in story files
 * Shows how many components have figma parameter with/without URL
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
  console.log('📊 Analyzing Figma parameter coverage...\n');

  const srcDir = path.join(__dirname, '../src');
  const storyFiles = findStoryFiles(srcDir);

  let totalFiles = 0;
  let withFigmaParam = 0;
  let withFigmaUrl = 0;
  let withDesignParam = 0;
  let withDesignUrl = 0;
  let withBoth = 0;

  const filesWithFigmaUrl = [];
  const filesWithoutFigma = [];
  const filesWithBoth = [];

  storyFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.relative(srcDir, filePath);

    totalFiles++;

    const hasFigmaParam = /figma:\s*\{/.test(content);
    const hasDesignParam = /design:\s*\{/.test(content);
    const hasFigmaUrl = /figma:\s*\{[\s\S]*?url:/.test(content);
    const hasDesignUrl = /design:\s*\{[\s\S]*?url:/.test(content);

    if (hasFigmaParam) withFigmaParam++;
    if (hasDesignParam) withDesignParam++;
    if (hasFigmaUrl) {
      withFigmaUrl++;
      filesWithFigmaUrl.push(fileName);
    }
    if (hasDesignUrl) withDesignUrl++;

    if (hasFigmaParam && hasDesignParam) {
      withBoth++;
      filesWithBoth.push(fileName);
    }

    if (!hasFigmaParam && !hasDesignParam) {
      filesWithoutFigma.push(fileName);
    }
  });

  console.log('═══════════════════════════════════════════════════');
  console.log('📈 SUMMARY');
  console.log('═══════════════════════════════════════════════════');
  console.log(`Total story files:              ${totalFiles}`);
  console.log(`\n🎨 Figma Integration:`);
  console.log(`  With 'figma' parameter:       ${withFigmaParam} (${Math.round((withFigmaParam / totalFiles) * 100)}%)`);
  console.log(`  With 'figma.url':             ${withFigmaUrl} (${Math.round((withFigmaUrl / totalFiles) * 100)}%)`);
  console.log(`\n🎯 Design Integration:`);
  console.log(`  With 'design' parameter:      ${withDesignParam} (${Math.round((withDesignParam / totalFiles) * 100)}%)`);
  console.log(`  With 'design.url':            ${withDesignUrl} (${Math.round((withDesignUrl / totalFiles) * 100)}%)`);
  console.log(`\n⚠️  Issues:`);
  console.log(`  With BOTH figma & design:     ${withBoth}`);
  console.log(`  With NO Figma integration:    ${filesWithoutFigma.length}`);
  console.log('═══════════════════════════════════════════════════');

  if (filesWithFigmaUrl.length > 0) {
    console.log(`\n✅ Files with figma.url (${filesWithFigmaUrl.length}):`);
    filesWithFigmaUrl.slice(0, 10).forEach((file) => {
      console.log(`   - ${file}`);
    });
    if (filesWithFigmaUrl.length > 10) {
      console.log(`   ... and ${filesWithFigmaUrl.length - 10} more`);
    }
  }

  if (filesWithBoth.length > 0) {
    console.log(`\n⚠️  Files with BOTH figma and design parameters (${filesWithBoth.length}):`);
    filesWithBoth.forEach((file) => {
      console.log(`   - ${file}`);
    });
    console.log(`\n   💡 Run 'npm run figma:inject-urls' to consolidate these`);
  }

  if (filesWithoutFigma.length > 0) {
    console.log(`\n❌ Files without any Figma integration (${filesWithoutFigma.length}):`);
    filesWithoutFigma.slice(0, 10).forEach((file) => {
      console.log(`   - ${file}`);
    });
    if (filesWithoutFigma.length > 10) {
      console.log(`   ... and ${filesWithoutFigma.length - 10} more`);
    }
  }

  console.log('\n');
}

main();
