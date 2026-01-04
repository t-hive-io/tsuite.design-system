require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
  console.error('❌ Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN');
  process.exit(1);
}

const FIGMA_API = 'https://api.figma.com/v1';

async function fetchFigmaFile() {
  console.log('📥 Fetching Figma file data...');
  console.log('DEBUG: FILE_KEY =', FIGMA_FILE_KEY);
  console.log('DEBUG: TOKEN =', FIGMA_ACCESS_TOKEN?.substring(0, 20) + '...');
  console.log('DEBUG: URL =', `${FIGMA_API}/files/${FIGMA_FILE_KEY}`);
  const response = await axios.get(`${FIGMA_API}/files/${FIGMA_FILE_KEY}`, {
    headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN },
  });

  return response.data;
}

async function exportComponentSvgs(componentIds) {
  console.log(`📦 Exporting ${componentIds.length} components as SVG...`);

  const ids = componentIds.join(',');
  const response = await axios.get(
    `${FIGMA_API}/images/${FIGMA_FILE_KEY}?ids=${ids}&format=svg`,
    { headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN } }
  );

  return response.data.images;
}

async function downloadSvg(url, outputPath) {
  const response = await axios.get(url);
  fs.writeFileSync(outputPath, response.data);
}

function sanitizeName(name) {
  // Replace slashes with double-dash to preserve component set structure
  let safe = name.replace(/\//g, '--');
  // Replace other special chars but keep hyphens and underscores temporarily
  safe = safe.replace(/[^a-zA-Z0-9\-_]/g, '');

  // Convert to PascalCase: split on underscore, hyphen, or camelCase boundaries
  safe = safe
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  // Handle numbers at start
  if (safe && /^[0-9]/.test(safe)) {
    safe = 'Component' + safe;
  }
  return safe;
}

function findAllComponents(node, components = []) {
  if (node.type === 'COMPONENT') {
    components.push({
      id: node.id,
      name: node.name,
      description: node.description || '', // Capture description from Figma
    });
  }

  if (node.children) {
    node.children.forEach((child) => findAllComponents(child, components));
  }

  return components;
}

async function main() {
  try {
    // Fetch file structure
    const fileData = await fetchFigmaFile();

    // Find all components
    const components = findAllComponents(fileData.document);
    console.log(`✅ Found ${components.length} components in Figma`);

    // Filter components with valid names (allow / for component sets)
    const validComponents = components.filter((c) => {
      // Extract the actual name part (after / if it's a component set)
      const namePart = c.name.includes('/')
        ? c.name.split('/').slice(1).join('/')
        : c.name;
      const safeName = sanitizeName(namePart);
      return safeName && safeName.length >= 2;
    });

    console.log(`📊 ${validComponents.length} valid components to export`);

    // Export in batches (Figma API limit)
    const batchSize = 100;
    const svgDir = path.join(__dirname, '../src/assets/icons');

    if (!fs.existsSync(svgDir)) {
      fs.mkdirSync(svgDir, { recursive: true });
    }

    for (let i = 0; i < validComponents.length; i += batchSize) {
      const batch = validComponents.slice(i, i + batchSize);
      const componentIds = batch.map((c) => c.id);

      console.log(
        `\n🔄 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
          validComponents.length / batchSize
        )}...`
      );

      const svgUrls = await exportComponentSvgs(componentIds);

      // Download each SVG
      const metadata = {};
      for (const component of batch) {
        const url = svgUrls[component.id];
        if (url) {
          // Extract component set name and variant
          let componentSetName = '';
          let variantName = component.name;

          if (component.name.includes('/')) {
            const parts = component.name.split('/');
            componentSetName = sanitizeName(parts[0]);
            variantName = parts.slice(1).join('/');
          }

          const safeName = sanitizeName(variantName);

          // If no component set, use node ID to ensure uniqueness
          let filename;
          if (componentSetName) {
            filename = `${componentSetName}--${safeName}`;
          } else {
            const nodeIdSafe = component.id.replace(/:/g, '-');
            filename = `${safeName}--${nodeIdSafe}`;
          }

          const outputPath = path.join(svgDir, `${filename}.svg`);

          await downloadSvg(url, outputPath);
          console.log(`  ✅ ${component.name} → ${filename}.svg`);

          // Store metadata
          metadata[filename] = {
            name: filename,
            originalName: component.name,
            nodeId: component.id,
            componentSetName: componentSetName || null,
            description: component.description || '', // Save description to metadata
          };
        } else {
          console.log(`  ⚠️  No SVG for ${component.name}`);
        }
      }

      // Rate limiting
      if (i + batchSize < validComponents.length) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Save metadata for this batch
      const metadataPath = path.join(svgDir, 'metadata.json');
      let allMetadata = {};
      if (fs.existsSync(metadataPath)) {
        allMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      }
      Object.assign(allMetadata, metadata);
      fs.writeFileSync(metadataPath, JSON.stringify(allMetadata, null, 2));
    }

    console.log(
      `\n✨ Done! Exported ${validComponents.length} SVG icons to ${svgDir}`
    );
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
