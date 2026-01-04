/**
 * Transform Figma Variables to TypeScript tokens
 * Converts exported Figma Variables (.tokens.json) to TypeScript token files
 */

const fs = require('fs');
const path = require('path');

const BRANDS = ['TMHE', 'Vanderlande', 'Bastian Solutions', 'White-label'];
const INPUT_DIR = path.join(__dirname, '../src/tokens/figma-exports');
const OUTPUT_DIR = path.join(__dirname, '../src/tokens');

// Helper to convert RGB components to hex
function rgbToHex(components) {
  const [r, g, b] = components.map((c) => Math.round(c * 255));
  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}

// Transform Figma token structure to our format
function transformTokens(figmaTokens, brandName) {
  const tokens = {
    colors: {},
    radius: {},
    font: {
      family: {},
      weight: {},
      size: {},
    },
  };

  // Transform Colors
  if (figmaTokens.Color) {
    Object.entries(figmaTokens.Color).forEach(([category, colors]) => {
      Object.entries(colors).forEach(([name, token]) => {
        // Handle both direct hex values and object values
        let hex;
        if (typeof token.$value === 'string') {
          hex = token.$value;
        } else if (token.$value && token.$value.hex) {
          hex = token.$value.hex;
        } else if (token.$value && token.$value.components) {
          // Convert RGB components to hex
          hex = rgbToHex(token.$value.components);
        } else {
          console.warn(
            `  ⚠️  Skipping ${category}/${name} - no valid color value`
          );
          return;
        }

        const key = `${category}/${name}`;
        tokens.colors[key] = {
          value: hex,
          type: 'color',
          figmaVariableId: token.$extensions?.['com.figma.variableId'],
        };
      });
    });
  }

  // Transform Radius
  if (figmaTokens.Radius) {
    Object.entries(figmaTokens.Radius).forEach(([name, token]) => {
      tokens.radius[name] = {
        value: `${token.$value}px`,
        type: 'dimension',
        figmaVariableId: token.$extensions?.['com.figma.variableId'],
      };
    });
  }

  // Transform Font
  if (figmaTokens.Font) {
    // Font Family
    if (figmaTokens.Font.Family) {
      Object.entries(figmaTokens.Font.Family).forEach(([name, token]) => {
        tokens.font.family[name] = {
          value: token.$value,
          type: token.$type || 'string',
          figmaVariableId: token.$extensions?.['com.figma.variableId'],
        };
      });
    }

    // Font Weight
    if (figmaTokens.Font.Weight) {
      Object.entries(figmaTokens.Font.Weight).forEach(([name, token]) => {
        tokens.font.weight[name] = {
          value: token.$value,
          type: token.$type || 'number',
          figmaVariableId: token.$extensions?.['com.figma.variableId'],
        };
      });
    }

    // Font Size
    if (figmaTokens.Font.Size) {
      Object.entries(figmaTokens.Font.Size).forEach(([name, token]) => {
        tokens.font.size[name] = {
          value: token.$value,
          type: token.$type || 'number',
          figmaVariableId: token.$extensions?.['com.figma.variableId'],
        };
      });
    }
  }

  return tokens;
}

function generateTypeScriptTokenFile(tokens, brandName) {
  const safeBrandName = brandName.toLowerCase().replace(/[^a-z0-9]/g, '-');

  let content = `/**
 * ${brandName} Brand Tokens
 * Auto-generated from Figma Variables
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:transform' to regenerate
 */

export const ${safeBrandName.replace(/-/g, '_')}Tokens = {
  colors: {\n`;

  // Add colors
  Object.entries(tokens.colors).forEach(([key, token]) => {
    const safeName = key.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
    content += `    '${key}': '${token.value}',\n`;
  });

  content += `  },\n\n  radius: {\n`;

  // Add radius
  Object.entries(tokens.radius).forEach(([key, token]) => {
    content += `    '${key}': '${token.value}',\n`;
  });

  content += `  },\n\n  font: {\n`;
  content += `    family: {\n`;

  // Add font families
  Object.entries(tokens.font.family).forEach(([key, token]) => {
    content += `      '${key}': '${token.value}',\n`;
  });

  content += `    },\n    weight: {\n`;

  // Add font weights
  Object.entries(tokens.font.weight).forEach(([key, token]) => {
    // Font weights can be numbers or strings, handle both
    const value =
      typeof token.value === 'number' ? token.value : `'${token.value}'`;
    content += `      '${key}': ${value},\n`;
  });

  content += `    },\n    size: {\n`;

  // Add font sizes
  Object.entries(tokens.font.size).forEach(([key, token]) => {
    content += `      '${key}': ${token.value},\n`;
  });

  content += `    },\n  },\n} as const;\n\n`;

  // Add TypeScript types
  const capitalizedBrandName =
    safeBrandName.replace(/-/g, '_').charAt(0).toUpperCase() +
    safeBrandName.replace(/-/g, '_').slice(1);
  content += `export type ${capitalizedBrandName}ColorKey = keyof typeof ${safeBrandName.replace(
    /-/g,
    '_'
  )}Tokens.colors;\n`;
  content += `export type ${capitalizedBrandName}RadiusKey = keyof typeof ${safeBrandName.replace(
    /-/g,
    '_'
  )}Tokens.radius;\n`;
  content += `export type ${capitalizedBrandName}FontFamilyKey = keyof typeof ${safeBrandName.replace(
    /-/g,
    '_'
  )}Tokens.font.family;\n`;
  content += `export type ${capitalizedBrandName}FontWeightKey = keyof typeof ${safeBrandName.replace(
    /-/g,
    '_'
  )}Tokens.font.weight;\n`;
  content += `export type ${capitalizedBrandName}FontSizeKey = keyof typeof ${safeBrandName.replace(
    /-/g,
    '_'
  )}Tokens.font.size;\n`;

  return content;
}

function main() {
  console.log('🔄 Transforming Figma Variables to TypeScript tokens...\n');

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const allBrands = {};

  BRANDS.forEach((brandName) => {
    const inputFile = path.join(INPUT_DIR, `${brandName}.tokens.json`);

    if (!fs.existsSync(inputFile)) {
      console.log(`⚠️  Skipping ${brandName} - file not found`);
      return;
    }

    console.log(`📦 Processing: ${brandName}`);

    const figmaTokens = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    const tokens = transformTokens(figmaTokens, brandName);

    allBrands[brandName] = tokens;

    // Generate individual brand token file
    const safeBrandName = brandName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const tsContent = generateTypeScriptTokenFile(tokens, brandName);
    const outputFile = path.join(OUTPUT_DIR, `${safeBrandName}.tokens.ts`);

    fs.writeFileSync(outputFile, tsContent);
    console.log(`   ✅ Generated: ${outputFile}`);
    console.log(`      Colors: ${Object.keys(tokens.colors).length}`);
    console.log(`      Radius: ${Object.keys(tokens.radius).length}`);
    console.log(
      `      Font Families: ${Object.keys(tokens.font.family).length}`
    );
    console.log(
      `      Font Weights: ${Object.keys(tokens.font.weight).length}`
    );
    console.log(`      Font Sizes: ${Object.keys(tokens.font.size).length}`);
  });

  // Generate index file with all brands
  let indexContent = `/**
 * Multi-Brand Token System
 * Auto-generated from Figma Variables
 */

`;

  BRANDS.forEach((brandName) => {
    const safeBrandName = brandName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const inputFile = path.join(INPUT_DIR, `${brandName}.tokens.json`);
    if (fs.existsSync(inputFile)) {
      indexContent += `export * from './${safeBrandName}.tokens';\n`;
    }
  });

  indexContent += `\n// Brand theme type\nexport type BrandTheme = ${BRANDS.filter(
    (b) => fs.existsSync(path.join(INPUT_DIR, `${b}.tokens.json`))
  )
    .map((b) => `'${b.toLowerCase().replace(/[^a-z0-9]/g, '-')}'`)
    .join(' | ')};\n`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent);
  console.log(
    `\n✅ Generated index file: ${path.join(OUTPUT_DIR, 'index.ts')}`
  );

  console.log('\n🎉 Transformation complete!');
  console.log(`\n📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`   Brands processed: ${Object.keys(allBrands).length}`);
}

main();
