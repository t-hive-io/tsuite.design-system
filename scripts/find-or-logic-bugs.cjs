const fs = require('fs');
const path = require('path');

// Find all .stories.tsx files
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

// Analyze a story file for OR logic bugs
function analyzeStoryFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');

  // Extract component name
  const componentMatch = content.match(/const (\w+) = \(/);
  const componentName = componentMatch ? componentMatch[1] : 'Unknown';

  // Extract properties from type definition
  const properties = [];
  const typeDefMatch = content.match(/\}: \{([^}]+)\} = \{/s);
  if (typeDefMatch) {
    const typeDef = typeDefMatch[1];
    const propMatches = typeDef.matchAll(/(\w+)\?:\s*([^;]+);/g);
    for (const match of propMatches) {
      const propName = match[1];
      const propType = match[2].trim();
      const options = propType.match(/'([^']+)'/g)?.map((s) => s.replace(/'/g, '')) || [];
      properties.push({ name: propName, options });
    }
  }

  // Skip if less than 2 properties (cannot have OR logic bug)
  if (properties.length < 2) {
    return null;
  }

  // Check for OR logic pattern (separate if statements without &&)
  const functionBody = content.match(/\) => \{([\s\S]*?)^};/m);
  if (!functionBody) {
    return null;
  }

  const body = functionBody[1];

  // Count if statements
  const ifStatements = body.match(/if \(/g) || [];
  const ifStatementsCount = ifStatements.length;

  // Check for AND logic (&&)
  const andLogicCount = (body.match(/&&/g) || []).length;

  // Heuristic: If we have multiple properties and multiple if statements
  // but few/no && operators, likely has OR logic bug
  const hasOrLogicBug = properties.length >= 2 && ifStatementsCount >= 2 && andLogicCount < ifStatementsCount / 2;

  // Extract all if conditions
  const conditions = [];
  const ifMatches = body.matchAll(/if \(([^)]+)\)/g);
  for (const match of ifMatches) {
    conditions.push(match[1].trim());
  }

  return {
    componentName,
    filePath: relativePath,
    propertyCount: properties.length,
    properties: properties.map((p) => p.name),
    ifStatementsCount,
    andLogicCount,
    hasOrLogicBug,
    conditions,
  };
}

// Main execution
function main() {
  console.log('🔍 Scanning for OR logic bugs in .stories.tsx files...\n');

  const componentsDir = path.join(process.cwd(), 'src', 'components');
  const storyFiles = findStoryFiles(componentsDir);

  console.log(`Found ${storyFiles.length} story files\n`);

  const results = storyFiles
    .map(analyzeStoryFile)
    .filter((result) => result !== null)
    .sort((a, b) => b.propertyCount - a.propertyCount);

  // Group by bug status
  const withBugs = results.filter((r) => r.hasOrLogicBug);
  const withoutBugs = results.filter((r) => !r.hasOrLogicBug);

  console.log('═══════════════════════════════════════════════════════════');
  console.log(`🐛 COMPONENTS WITH POTENTIAL OR LOGIC BUGS: ${withBugs.length}`);
  console.log('═══════════════════════════════════════════════════════════\n');

  withBugs.forEach((result) => {
    console.log(`❌ ${result.componentName}`);
    console.log(`   File: ${result.filePath}`);
    console.log(`   Properties: ${result.properties.join(', ')} (${result.propertyCount} total)`);
    console.log(`   If statements: ${result.ifStatementsCount}, AND operators: ${result.andLogicCount}`);
    console.log(`   Sample conditions:`);
    result.conditions.slice(0, 3).forEach((cond) => {
      console.log(`     - ${cond}`);
    });
    console.log('');
  });

  console.log('═══════════════════════════════════════════════════════════');
  console.log(`✅ COMPONENTS WITH PROPER AND LOGIC: ${withoutBugs.length}`);
  console.log('═══════════════════════════════════════════════════════════\n');

  withoutBugs.slice(0, 10).forEach((result) => {
    console.log(`✅ ${result.componentName} (${result.propertyCount} properties)`);
  });

  if (withoutBugs.length > 10) {
    console.log(`   ... and ${withoutBugs.length - 10} more\n`);
  }

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('📊 SUMMARY');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`Total multi-property components: ${results.length}`);
  console.log(`Components with potential bugs: ${withBugs.length} (${Math.round((withBugs.length / results.length) * 100)}%)`);
  console.log(`Components already fixed: ${withoutBugs.length} (${Math.round((withoutBugs.length / results.length) * 100)}%)`);
  console.log('═══════════════════════════════════════════════════════════\n');

  // Write results to file
  const outputPath = path.join(process.cwd(), 'OR-LOGIC-BUGS-REPORT.md');
  let markdown = '# OR Logic Bugs Report\n\n';
  markdown += `Generated: ${new Date().toISOString()}\n\n`;
  markdown += `## Summary\n\n`;
  markdown += `- **Total multi-property components**: ${results.length}\n`;
  markdown += `- **Components with potential OR logic bugs**: ${withBugs.length}\n`;
  markdown += `- **Components with proper AND logic**: ${withoutBugs.length}\n\n`;

  markdown += `## Components with OR Logic Bugs (${withBugs.length})\n\n`;
  withBugs.forEach((result) => {
    markdown += `### ${result.componentName}\n\n`;
    markdown += `- **File**: [\`${result.filePath}\`](${result.filePath})\n`;
    markdown += `- **Properties**: ${result.properties.join(', ')} (${result.propertyCount} total)\n`;
    markdown += `- **If statements**: ${result.ifStatementsCount}\n`;
    markdown += `- **AND operators**: ${result.andLogicCount}\n`;
    markdown += `- **Sample conditions**:\n`;
    result.conditions.slice(0, 5).forEach((cond) => {
      markdown += `  - \`${cond}\`\n`;
    });
    markdown += '\n';
  });

  fs.writeFileSync(outputPath, markdown);
  console.log(`✅ Report written to: ${outputPath}\n`);
}

main();
