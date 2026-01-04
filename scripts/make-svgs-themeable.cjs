#!/usr/bin/env node

/**
 * Make SVG files themeable by replacing hardcoded colors with CSS variables
 * This allows SVGs to respond to brand theme changes
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Map hardcoded hex colors to CSS variable names
// These colors come from various brands in Figma but should all map to the same semantic tokens
const COLOR_MAP = {
  // Primary colors (from white-label)
  '#F325A7': 'var(--colors-primary-primary-700)',
  '#DA0C8E': 'var(--colors-primary-primary-800)',
  '#F656BB': 'var(--colors-primary-primary-600)',
  '#F995D4': 'var(--colors-primary-primary-500)',
  '#FCCFEC': 'var(--colors-primary-primary-400)',
  '#FDE2F3': 'var(--colors-primary-primary-300)',
  '#FEF5FB': 'var(--colors-primary-primary-200)',

  // Primary colors (from TMHE theme - these should map to same semantic tokens)
  '#383A53': 'var(--colors-primary-primary-700)',
  '#2B2D42': 'var(--colors-primary-primary-800)',
  '#535470': 'var(--colors-primary-primary-600)',
  '#74748F': 'var(--colors-primary-primary-500)',
  '#A2A2BB': 'var(--colors-primary-primary-400)',
  '#CBCBDE': 'var(--colors-primary-primary-300)',
  '#EDEDF5': 'var(--colors-primary-primary-200)',

  // Brand colors (from white-label)
  '#F2A900': 'var(--colors-brand-brand-800)',
  '#FFC338': 'var(--colors-brand-brand-700)',
  '#FFDD8F': 'var(--colors-brand-brand-600)',
  '#FFE8B2': 'var(--colors-brand-brand-500)',
  '#FFF4DB': 'var(--colors-brand-brand-400)',
  '#FFFCF5': 'var(--colors-brand-brand-100)',
  '#F3A83E': 'var(--colors-brand-brand-700)', // Similar to brand 700

  // Brand colors (from TMHE theme)
  '#8C0017': 'var(--colors-brand-brand-700)',
  '#BB001E': 'var(--colors-brand-brand-600)',
  '#CC4056': 'var(--colors-brand-brand-500)',
  '#DD808F': 'var(--colors-brand-brand-400)',
  '#EEBFC7': 'var(--colors-brand-brand-100)',
  '#5E000F': 'var(--colors-brand-brand-800)',

  // Neutral colors (same across all brands)
  '#222222': 'var(--colors-neutral-neutral-800)',
  '#808080': 'var(--colors-neutral-neutral-700)',
  '#B3B3B3': 'var(--colors-neutral-neutral-600)',
  '#D9D9D9': 'var(--colors-neutral-neutral-500)',
  '#E6E6E6': 'var(--colors-neutral-neutral-400)',
  '#F7F7F7': 'var(--colors-neutral-neutral-300)',
  '#FCFCFC': 'var(--colors-neutral-neutral-200)',
  '#FFFFFF': 'var(--colors-neutral-neutral-100)',
  '#666666': 'var(--colors-neutral-neutral-700)',

  // Area colors (keep specific colors for now, can be themed later)
  '#DACCE5': 'var(--colors-areas-highway-vehicle, #DACCE5)',
  '#B0B0B2': 'var(--colors-areas-charging-vehicle, #B0B0B2)',
  '#E0E8E3': 'var(--colors-areas-parking-vehicle, #E0E8E3)',
  '#DEA98E': 'var(--colors-areas-delivery-load-carrier, #DEA98E)',
  '#DAC3B8': 'var(--colors-areas-delivery-background, #DAC3B8)',
  '#EDCB68': 'var(--colors-areas-delivery-load-carrier, #EDCB68)',
  '#E0D1A8': 'var(--colors-areas-delivery-vehicle, #E0D1A8)',
  '#C4D2B8': 'var(--colors-areas-storage-vehicle, #C4D2B8)',
  '#AECC8D': 'var(--colors-areas-storage-load-carrier, #AECC8D)',
  '#B8D8DA': 'var(--colors-areas-process-two-vehicle, #B8D8DA)',
  '#6BC3C9': 'var(--colors-areas-process-two-load-carrier, #6BC3C9)',
  '#F3D8CE': 'var(--colors-areas-process-one-background, #F3D8CE)',
  '#7CA4DF': 'var(--colors-areas-exit-entry-vehicle, #7CA4DF)',
  '#F0E0FB': 'var(--colors-areas-highway-background, #F0E0FB)',

  // Feedback colors
  '#B42318': 'var(--colors-feedback-error-red-300)',
  '#FCE8E8': 'var(--colors-feedback-error-red-100)',
  '#05603A': 'var(--colors-feedback-success-green-300)',
  '#A15C00': 'var(--colors-feedback-warning-orange-300)',
  '#FDE3C1': 'var(--colors-feedback-warning-orange-200)',

  // Blue colors (primary)
  '#2196F3': 'var(--colors-primary-primary-500)',
  '#026AA2': 'var(--colors-primary-primary-700)',
  '#2D71BA': 'var(--colors-primary-primary-600)',
  '#62B5EF': 'var(--colors-primary-primary-400)',
  '#A3C8E3': 'var(--colors-primary-primary-300)',
  '#99AFFF': 'var(--colors-primary-primary-400)',
  '#5E6BF0': 'var(--colors-primary-primary-600)',
  '#306CC5': 'var(--colors-primary-primary-700)',
  '#DFE5FC': 'var(--colors-primary-primary-300)',
  '#B6DFFD': 'var(--colors-primary-primary-300)',
  '#0C1EDA': 'var(--colors-primary-primary-800)',
  '#0917A9': 'var(--colors-primary-primary-900)',
};

async function updateSVGFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Replace each color with its CSS variable
  for (const [hexColor, cssVar] of Object.entries(COLOR_MAP)) {
    const regex = new RegExp(hexColor, 'gi');
    if (content.match(regex)) {
      content = content.replace(regex, cssVar);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

async function main() {
  console.log('🎨 Making SVG files themeable...\n');

  const svgFiles = await glob('src/assets/icons/**/*.svg');
  console.log(`Found ${svgFiles.length} SVG files\n`);

  let updatedCount = 0;
  let skippedCount = 0;

  for (const file of svgFiles) {
    const wasUpdated = await updateSVGFile(file);
    if (wasUpdated) {
      updatedCount++;
      console.log(`✓ Updated: ${path.basename(file)}`);
    } else {
      skippedCount++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Updated: ${updatedCount} files`);
  console.log(`   Skipped: ${skippedCount} files (no matching colors)`);
  console.log(`   Total:   ${svgFiles.length} files`);
  console.log('\n✨ Done! SVG files are now themeable.');
}

main().catch(console.error);
