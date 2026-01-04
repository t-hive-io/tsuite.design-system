const fs = require('fs');
const path = require('path');

// Read all story files
function findStoryFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findStoryFiles(filePath, fileList);
    } else if (file.endsWith('.stories.tsx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Extract component info from story file
function extractComponentInfo(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract component name
  const componentMatch = content.match(/const (\w+) = \(/);
  const componentName = componentMatch ? componentMatch[1] : 'Unknown';

  // Extract title/category
  const titleMatch = content.match(/title: '([^']+)'/);
  const title = titleMatch ? titleMatch[1] : 'Unknown';
  const category = title.split('/').slice(-2, -1)[0] || 'Unknown';

  // Extract properties from type definition
  const properties = [];
  const typeDefMatch = content.match(/\}: \{([^}]+)\} = \{/s);
  if (typeDefMatch) {
    const typeDef = typeDefMatch[1];
    const propMatches = typeDef.matchAll(/(\w+)\?:\s*([^;]+);/g);
    for (const match of propMatches) {
      const propName = match[1];
      const propType = match[2].trim();
      // Extract options from union type like 'Option1' | 'Option2'
      const options = propType.match(/'([^']+)'/g)?.map((s) => s.replace(/'/g, '')) || [];
      properties.push({ name: propName, options });
    }
  }

  // Extract SVG imports
  const svgImports = [];
  const importMatches = content.matchAll(/import (\w+) from '([^']+)'/g);
  for (const match of importMatches) {
    const varName = match[1];
    const importPath = match[2];
    if (importPath.includes('.svg?react')) {
      // Extract property values from filename
      // Example: Hoverfalseselectedfalse--2453-1693.svg
      const filename = path.basename(importPath, '.svg?react');
      svgImports.push({ varName, filename });
    }
  }

  // Extract if statements to map properties to SVGs
  const mappings = [];
  const ifMatches = content.matchAll(/if \(([^)]+)\)\s*return <(\w+) \/>/g);
  for (const match of ifMatches) {
    const condition = match[1];
    const svgVar = match[2];
    mappings.push({ condition, svgVar });
  }

  // Count variants (number of unique SVG imports)
  const variantCount = svgImports.length;

  return {
    componentName,
    category,
    title,
    properties,
    svgImports,
    variantCount,
    filePath: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
  };
}

// Group components by category
function groupByCategory(components) {
  const grouped = {};

  components.forEach((comp) => {
    if (!grouped[comp.category]) {
      grouped[comp.category] = [];
    }
    grouped[comp.category].push(comp);
  });

  return grouped;
}

// Generate markdown documentation
function generateMarkdown(groupedComponents) {
  let md = '# Component Properties and SVG Mappings\n\n';
  md += `_Auto-generated on ${new Date().toISOString().split('T')[0]}_\n\n`;
  md += '## Summary\n\n';

  const categories = Object.keys(groupedComponents).sort();
  let totalComponents = 0;
  let totalVariants = 0;

  categories.forEach((category) => {
    const components = groupedComponents[category];
    const categoryVariants = components.reduce((sum, c) => sum + c.variantCount, 0);
    totalComponents += components.length;
    totalVariants += categoryVariants;
    md += `- **${category}**: ${components.length} components, ${categoryVariants} variants\n`;
  });

  md += `\n**Total: ${categories.length} categories | ${totalComponents} components | ${totalVariants} variants**\n\n`;
  md += '---\n\n';

  // Detailed sections per category
  categories.forEach((category) => {
    md += `## ${category}\n\n`;

    const components = groupedComponents[category].sort((a, b) =>
      a.componentName.localeCompare(b.componentName)
    );

    components.forEach((comp) => {
      md += `### ${comp.componentName}\n\n`;
      md += `- **File**: [\`${comp.filePath}\`](${comp.filePath})\n`;
      md += `- **Variants**: ${comp.variantCount}\n`;

      if (comp.properties.length > 0) {
        md += `- **Properties**:\n`;
        comp.properties.forEach((prop) => {
          md += `  - \`${prop.name}\`: ${prop.options.length} options (${prop.options.join(', ')})\n`;
        });
      } else {
        md += `- **Properties**: None\n`;
      }

      if (comp.svgImports.length > 0) {
        md += `- **SVG Variants**:\n`;
        md += '  ```\n';
        comp.svgImports.forEach((svg) => {
          md += `  ${svg.filename}\n`;
        });
        md += '  ```\n';
      }

      md += '\n';
    });

    md += '---\n\n';
  });

  return md;
}

// Main execution
function main() {
  console.log('Scanning for .stories.tsx files...');

  const componentsDir = path.join(process.cwd(), 'src', 'components');
  const storyFiles = findStoryFiles(componentsDir);

  console.log(`Found ${storyFiles.length} story files`);

  const components = storyFiles.map(extractComponentInfo);
  const groupedComponents = groupByCategory(components);

  const markdown = generateMarkdown(groupedComponents);

  const outputPath = path.join(process.cwd(), 'COMPONENT-PROPERTIES-MAPPING.md');
  fs.writeFileSync(outputPath, markdown);

  console.log(`✅ Generated documentation: ${outputPath}`);
  console.log(`   ${Object.keys(groupedComponents).length} categories`);
  console.log(`   ${components.length} components`);
  console.log(
    `   ${components.reduce((sum, c) => sum + c.variantCount, 0)} total variants`
  );
}

main();
