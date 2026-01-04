/**
 * Inject Figma Design URLs into Storybook Stories
 * Automatically adds design.url parameter to all story files based on figma-docs.json
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Load Figma documentation data
const figmaDocsPath = path.join(__dirname, '../src/figma-docs.json');
if (!fs.existsSync(figmaDocsPath)) {
  console.error(
    '❌ figma-docs.json not found. Run `npm run figma:docs` first.'
  );
  process.exit(1);
}

const figmaDocs = JSON.parse(fs.readFileSync(figmaDocsPath, 'utf-8'));

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

// Extract component name from story file
function getComponentNameFromStory(content) {
  // Look for title: 'Components/...' or 'Foundation/...' or any other pattern
  const titleMatch = content.match(
    /title:\s*['"](?:Components\/|Foundation\/)?([^'"]+)['"]/
  );
  if (titleMatch) {
    return titleMatch[1];
  }
  return null;
}

// Check if file already has design parameter with URL or figma parameter with url
function hasDesignUrl(content) {
  return (
    /design:\s*\{[\s\S]*?url:/m.test(content) ||
    /figma:\s*\{[\s\S]*?url:/m.test(content)
  );
}

// Inject or update design URL in story file
function injectDesignUrl(content, figmaUrl) {
  // Check if figma parameter exists (preferred structure)
  const hasFigmaParam = /figma:\s*\{/.test(content);
  const hasDesignParam = /design:\s*\{/.test(content);

  // If both exist, remove design and add URL to figma
  if (hasFigmaParam && hasDesignParam) {
    // Remove the design parameter completely (with proper handling of commas and newlines)
    let updatedContent = content.replace(
      /,\s*\n?\s*design:\s*\{[\s\S]*?\},?\s*\n?/m,
      ',\n'
    );

    // Add URL to figma parameter if it doesn't have one
    if (!/figma:\s*\{[\s\S]*?url:/m.test(updatedContent)) {
      updatedContent = updatedContent.replace(
        /(figma:\s*\{[\s\S]*?)(,?\s*\})/m,
        `$1,\n      url: '${figmaUrl}'$2`
      );
    }
    return updatedContent;
  }

  if (hasFigmaParam) {
    // Check if figma parameter already has url
    if (/figma:\s*\{[\s\S]*?url:/m.test(content)) {
      // Update existing URL in figma parameter
      return content.replace(
        /(figma:\s*\{[\s\S]*?url:\s*)['"][^'"]*['"]/m,
        `$1'${figmaUrl}'`
      );
    } else {
      // Add URL to existing figma parameter (after other properties)
      return content.replace(
        /(figma:\s*\{[\s\S]*?)(,?\s*\})/m,
        `$1,\n      url: '${figmaUrl}'$2`
      );
    }
  }

  // Check if design parameter exists

  if (hasDesignParam) {
    // Design parameter exists, check if it has URL
    if (hasDesignUrl(content)) {
      // Update existing URL
      return content.replace(
        /(design:\s*\{[\s\S]*?url:\s*)['"][^'"]*['"]/m,
        `$1'${figmaUrl}'`
      );
    } else {
      // Add URL to existing design parameter
      return content.replace(
        /(design:\s*\{)/,
        `$1\n      type: 'figma',\n      url: '${figmaUrl}',`
      );
    }
  } else {
    // No design or figma parameter, add design after docs parameter or in parameters
    const hasDocsParam = /docs:\s*\{/.test(content);

    if (hasDocsParam) {
      // Add design after docs
      return content.replace(
        /(docs:\s*\{[\s\S]*?\},)/m,
        `$1\n    design: {\n      type: 'figma',\n      url: '${figmaUrl}',\n    },`
      );
    } else {
      // Add design in parameters block
      return content.replace(
        /(parameters:\s*\{)/,
        `$1\n    design: {\n      type: 'figma',\n      url: '${figmaUrl}',\n    },`
      );
    }
  }
}

// Main execution
function main() {
  console.log('🔗 Injecting Figma design URLs into story files...\n');

  const srcDir = path.join(__dirname, '../src');
  const storyFiles = findStoryFiles(srcDir);

  let updatedCount = 0;
  let skippedCount = 0;
  let notFoundCount = 0;

  storyFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const componentName = getComponentNameFromStory(content);

    if (!componentName) {
      console.log(
        `⚠️  Could not extract component name from: ${path.basename(filePath)}`
      );
      skippedCount++;
      return;
    }

    // Find matching Figma doc - try exact match and partial matches
    let figmaDoc = null;

    // Try exact match first
    if (figmaDocs[componentName]) {
      figmaDoc = figmaDocs[componentName];
    } else {
      // Try to find partial match
      const componentBaseName = componentName
        .split('/')
        .pop()
        .split(':')[0]
        .trim();
      Object.entries(figmaDocs).forEach(([key, doc]) => {
        const docBaseName = key.split('/').pop();
        if (
          docBaseName === componentBaseName ||
          componentBaseName.includes(docBaseName)
        ) {
          figmaDoc = doc;
        }
      });
    }

    // If no match in figma-docs.json, try to extract componentId from existing figma parameter
    let figmaUrl = figmaDoc?.figmaUrl;

    if (!figmaUrl) {
      // Try to extract componentId or pageId from the story file's figma parameter
      const componentIdMatch = content.match(/componentId:\s*['"]([^'"]+)['"]/);
      const pageIdMatch = content.match(/pageId:\s*['"]([^'"]+)['"]/);

      if (componentIdMatch) {
        const componentId = componentIdMatch[1].replace(':', '-');
        figmaUrl = `https://www.figma.com/design/${
          process.env.FIGMA_FILE_KEY || 'XKxVlFf9TfWBHosOInkJXA'
        }/T-Suite-Design-System?node-id=${componentId}`;
        console.log(`🔧 ${componentName} (generated URL from componentId)`);
      } else if (pageIdMatch) {
        const pageId = pageIdMatch[1].replace(':', '-');
        figmaUrl = `https://www.figma.com/design/${
          process.env.FIGMA_FILE_KEY || 'XKxVlFf9TfWBHosOInkJXA'
        }/T-Suite-Design-System?node-id=${pageId}`;
        console.log(`🔧 ${componentName} (generated URL from pageId)`);
      } else {
        console.log(`⏭️  No Figma URL found for: ${componentName}`);
        notFoundCount++;
        return;
      }
    }

    // Check if already has the correct URL in the right place (figma parameter)
    const hasBothParams =
      /figma:\s*\{/.test(content) && /design:\s*\{/.test(content);
    const hasUrlInFigmaParam =
      /figma:\s*\{[\s\S]*?url:/m.test(content) && content.includes(figmaUrl);

    if (hasUrlInFigmaParam && !hasBothParams) {
      console.log(`✓  ${componentName} (already up-to-date)`);
      skippedCount++;
      return;
    }

    // Inject or update the design URL
    const updatedContent = injectDesignUrl(content, figmaUrl);

    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      console.log(`✅ ${componentName}`);
      updatedCount++;
    } else {
      console.log(`⚠️  Could not update: ${componentName}`);
      skippedCount++;
    }
  });

  console.log('\n📊 Summary:');
  console.log(`   ✅ Updated: ${updatedCount}`);
  console.log(`   ⏭️  Skipped: ${skippedCount}`);
  console.log(`   ❓ Not found in Figma: ${notFoundCount}`);
  console.log(`   📁 Total story files: ${storyFiles.length}`);
  console.log('\n🎉 Done! Restart Storybook to see Figma links.');
}

main();
