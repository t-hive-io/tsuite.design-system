/**
 * Figma Token Export Script
 * Automatically fetches design tokens (colors, typography, spacing) from Figma
 * Run via GitHub Actions or manually with: npm run figma:export
 */

require('dotenv').config();

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
  console.error('❌ Missing environment variables:');
  console.error('   FIGMA_FILE_KEY and FIGMA_ACCESS_TOKEN are required');
  console.error('\nSet them in .env file or GitHub Secrets');
  process.exit(1);
}

async function exportFigmaTokens() {
  try {
    console.log('🎨 Fetching design data from Figma...');
    
    // Use Files API instead of Variables API (works with all plans)
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const fileData = response.data;
    console.log('✅ Connected to Figma successfully!');
    console.log(`📄 File: ${fileData.name}`);
    
    // Also fetch styles (colors, text styles, etc.)
    const stylesResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/styles`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const styles = stylesResponse.data.meta.styles;
    console.log(`🎨 Found ${styles.length} styles`);

    // Get actual style definitions with color values
    const styleNodes = await fetchStyleNodes(styles);

    // Transform Figma styles to design tokens format
    const tokens = await transformStylesToTokens(styles, styleNodes);

    // Save to file
    const outputPath = path.join(__dirname, '../tokens/figma-tokens.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2));

    console.log('✅ Design tokens exported successfully!');
    console.log(`📁 Saved to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error fetching Figma tokens:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

async function fetchStyleNodes(styles) {
  const styleNodes = {};
  
  // Get unique node IDs
  const nodeIds = [...new Set(styles.map(s => s.node_id))].filter(Boolean);
  
  if (nodeIds.length === 0) return styleNodes;
  
  console.log(`🔍 Fetching style definitions for ${nodeIds.length} nodes...`);
  
  // Figma API limits to 100 nodes per request
  const chunks = [];
  for (let i = 0; i < nodeIds.length; i += 100) {
    chunks.push(nodeIds.slice(i, i + 100));
  }
  
  for (const chunk of chunks) {
    try {
      const nodesResponse = await axios.get(
        `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes`,
        {
          params: { ids: chunk.join(',') },
          headers: {
            'X-Figma-Token': FIGMA_ACCESS_TOKEN,
          },
        }
      );
      
      Object.assign(styleNodes, nodesResponse.data.nodes);
    } catch (error) {
      console.warn(`⚠️ Could not fetch some style nodes: ${error.message}`);
    }
  }
  
  return styleNodes;
}

function rgbaToHex(r, g, b, a = 1) {
  const toHex = (n) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return a < 1 ? `${hex}${toHex(a)}` : hex;
}

async function transformStylesToTokens(styles, styleNodes) {
  // Transform Figma styles into token format
  const tokens = {
    colors: {},
    typography: {},
    effects: {},
    metadata: {
      exportedAt: new Date().toISOString(),
      totalStyles: styles.length,
    }
  };

  // Group styles by type
  styles.forEach((style) => {
    const { name, style_type, description, node_id, key } = style;
    
    if (style_type === 'FILL') {
      // Color styles - try to get actual color value from node
      let colorValue = '#000000'; // default fallback
      
      if (node_id && styleNodes[node_id]) {
        const node = styleNodes[node_id].document;
        if (node.fills && node.fills.length > 0) {
          const fill = node.fills[0];
          if (fill.type === 'SOLID' && fill.color) {
            const { r, g, b } = fill.color;
            const a = fill.opacity !== undefined ? fill.opacity : 1;
            colorValue = rgbaToHex(r, g, b, a);
          }
        }
      }
      
      tokens.colors[name] = {
        type: 'color',
        value: colorValue,
        description: description || '',
        figmaStyleId: key,
      };
    } else if (style_type === 'TEXT') {
      // Typography styles
      tokens.typography[name] = {
        type: 'typography',
        description: description || '',
        figmaStyleId: style.key,
      };
    } else if (style_type === 'EFFECT') {
      // Effect styles (shadows, blurs)
      tokens.effects[name] = {
        type: 'effect',
        description: description || '',
        figmaStyleId: style.key,
      };
    }
  });

  return tokens;
}

exportFigmaTokens();
