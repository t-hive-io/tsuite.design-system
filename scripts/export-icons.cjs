/**
 * Figma Icon Export Script
 * Exports all icon components from Figma as SVG files
 * and generates React components automatically
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const TEST_ICON_QUERY = process.env.TEST_ICON_QUERY;
const TEST_COMPONENT_SET_NODE_ID = process.env.TEST_COMPONENT_SET_NODE_ID;

if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
  console.error('Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN');
  process.exit(1);
}

async function exportIcons() {
  try {
    console.log('🎨 Fetching components from Figma...\n');

    // Get all components
    const componentsResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const allComponents = componentsResponse.data.meta.components;

    let iconComponents;
    if (TEST_COMPONENT_SET_NODE_ID) {
      const nodeId = TEST_COMPONENT_SET_NODE_ID;
      const nodeResponse = await axios.get(
        `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(
          nodeId
        )}`,
        {
          headers: {
            'X-Figma-Token': FIGMA_ACCESS_TOKEN,
          },
        }
      );

      const nodeData = nodeResponse.data.nodes?.[nodeId]?.document;
      if (!nodeData) {
        console.log(
          `⚠️  No node found for TEST_COMPONENT_SET_NODE_ID="${nodeId}"`
        );
        return;
      }

      if (nodeData.type !== 'COMPONENT_SET') {
        console.log(
          `⚠️  Node ${nodeId} is type "${nodeData.type}", expected "COMPONENT_SET"`
        );
        return;
      }

      const variants = (nodeData.children || []).filter(
        (c) => c && c.id && c.type === 'COMPONENT'
      );
      iconComponents = variants
        .map((v) => ({
          node_id: v.id,
          name: `${nodeData.name}/${v.name}`,
          description: v.description || '',
          key: '',
          containing_frame: { name: nodeData.name },
        }))
        .slice(0, 5);

      console.log(
        `✅ Found ${iconComponents.length} variants in component set ${nodeData.name} (TEST_COMPONENT_SET_NODE_ID="${nodeId}", limited to 5 for testing)`
      );
    } else if (TEST_ICON_QUERY) {
      const q = TEST_ICON_QUERY.toLowerCase();
      iconComponents = allComponents
        .filter((comp) => (comp.name || '').toLowerCase().includes(q))
        .slice(0, 5); // keep test runs small
      console.log(
        `✅ Found ${iconComponents.length} components matching TEST_ICON_QUERY="${TEST_ICON_QUERY}" (limited to 5 for testing)`
      );
    } else {
      // Filter for icon components (from "Icons" component set)
      // Also include individual components that are part of any component set
      iconComponents = allComponents
        .filter(
          (comp) =>
            comp.containing_frame &&
            (comp.containing_frame.name === 'Icons' ||
              comp.containing_frame.containingStateGroup) // Include all variants in component sets
        )
        .slice(0, 5); // TEST: Only export first 5 icons
      console.log(
        `✅ Found ${iconComponents.length} icon components (limited to 5 for testing)`
      );
    }

    console.log(`📦 Total components in file: ${allComponents.length}\n`);

    if (iconComponents.length === 0) {
      console.log('⚠️  No icon components found in "Icons" component set');
      console.log(
        '💡 Tip: Make sure your icons are in a component set named "Icons"'
      );
      return;
    }

    // Create metadata object (will be populated during download)
    const iconMetadata = {};

    // Get SVG exports for all icons (in batches to avoid 413 error)
    console.log('📥 Exporting SVG files in batches...');
    const batchSize = 100; // Process 100 icons at a time
    const allImageUrls = {};

    for (let i = 0; i < iconComponents.length; i += batchSize) {
      const batch = iconComponents.slice(i, i + batchSize);
      const nodeIds = batch.map((c) => c.node_id).join(',');

      console.log(
        `   Fetching batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
          iconComponents.length / batchSize
        )}...`
      );

      const imagesResponse = await axios.get(
        `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}`,
        {
          params: {
            ids: nodeIds,
            format: 'svg',
            svg_include_id: true,
          },
          headers: {
            'X-Figma-Token': FIGMA_ACCESS_TOKEN,
          },
        }
      );

      Object.assign(allImageUrls, imagesResponse.data.images);
    }

    console.log(`✅ Got ${Object.keys(allImageUrls).length} SVG URLs\n`);

    // Create output directories
    const svgDir = path.join(__dirname, '../src/assets/icons');
    const componentDir = path.join(
      __dirname,
      '../src/components/Icon/generated'
    );
    fs.mkdirSync(svgDir, { recursive: true });
    fs.mkdirSync(componentDir, { recursive: true });

    // Download SVGs and save metadata
    let downloadedCount = 0;
    const usedFileNames = new Set();

    for (const [nodeId, url] of Object.entries(allImageUrls)) {
      if (!url) continue;

      const icon = iconComponents.find((c) => c.node_id === nodeId);
      if (!icon) continue;

      // Keep the full icon name, just clean it up for filename
      const iconName = icon.name;
      let fileName = iconName
        .toLowerCase()
        .replace(/property 1=|state=|icon=/gi, '')
        .replace(/\//g, '--')
        .replace(/_/g, '-')
        .replace(/[,=]/g, '-')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-{3,}/g, '--')
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes

      // Ensure unique filenames by adding suffix if needed
      let finalFileName = fileName;
      let counter = 1;
      while (usedFileNames.has(finalFileName)) {
        finalFileName = `${fileName}-${counter}`;
        counter++;
      }
      usedFileNames.add(finalFileName);

      try {
        const svgResponse = await axios.get(url);
        const svgPath = path.join(svgDir, `${finalFileName}.svg`);
        fs.writeFileSync(svgPath, svgResponse.data);

        // Store with final filename in metadata
        iconMetadata[finalFileName] = {
          name: finalFileName,
          originalName: iconName,
          nodeId: icon.node_id,
          description: icon.description || '',
          componentSetName: icon.containing_frame?.name || '',
          key: icon.key,
        };

        downloadedCount++;

        if (downloadedCount % 50 === 0) {
          console.log(
            `   Downloaded ${downloadedCount}/${
              Object.keys(allImageUrls).length
            } icons...`
          );
        }
      } catch (error) {
        console.warn(`   ⚠️  Failed to download ${iconName}: ${error.message}`);
      }
    }

    console.log(`\n✅ Downloaded ${downloadedCount} icon SVGs`);

    // Save metadata
    const metadataPath = path.join(
      __dirname,
      '../src/assets/icons/metadata.json'
    );
    fs.writeFileSync(metadataPath, JSON.stringify(iconMetadata, null, 2));
    console.log(`✅ Saved metadata to ${metadataPath}`);

    // Generate icon index
    generateIconIndex(iconMetadata, svgDir);

    console.log('\n🎉 Icon export complete!');
    console.log(`📁 SVG files: ${svgDir}`);
    console.log(`📄 Metadata: ${metadataPath}`);
    console.log(`\n💡 Use icons: <Icon name="icon-name" />`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

function generateIconIndex(metadata, svgDir) {
  const iconNames = Object.keys(metadata);

  // Generate TypeScript types
  const typesContent = `// Auto-generated icon types
export type IconName = 
${iconNames
  .map((name) => {
    const fileName = name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return `  | '${fileName}'`;
  })
  .join('\n')};

export interface IconMetadata {
  name: string;
  description: string;
  componentSetName: string;
}

export const iconMetadata: Record<string, IconMetadata> = ${JSON.stringify(
    Object.entries(metadata).reduce((acc, [key, value]) => {
      const fileName = key
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      acc[fileName] = {
        name: value.name,
        description: value.description,
        componentSetName: value.componentSetName,
      };
      return acc;
    }, {}),
    null,
    2
  )};
`;

  const typesPath = path.join(__dirname, '../src/components/Icon/iconTypes.ts');
  fs.writeFileSync(typesPath, typesContent);
  console.log(`✅ Generated icon types: ${typesPath}`);
}

exportIcons();
