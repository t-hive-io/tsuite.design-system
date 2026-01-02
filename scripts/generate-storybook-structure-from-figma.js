/**
 * Generate a Storybook navigation proposal from the Figma file structure.
 *
 * Requirement:
 * - 2 layers: Category -> Page
 * - 3rd layer: Page top-level FRAME/SECTION/COMPONENT_SET/GROUP
 *
 * Usage:
 *   node scripts/generate-storybook-structure-from-figma.js <fileKey|figmaUrl>
 *
 * Env:
 *   FIGMA_ACCESS_TOKEN (required)
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

function extractFileKey(input) {
  if (!input) return null;
  const s = String(input).trim();

  const m = s.match(/figma\.com\/(design|file|proto)\/([a-zA-Z0-9]+)\//);
  if (m) return m[2];
  if (/^[a-zA-Z0-9]+$/.test(s)) return s;
  return null;
}

function stripPrefix(name) {
  return String(name || '').replace(/^\s*[●❖]\s*/u, '').trim();
}

function categorizePage(pageName) {
  const raw = String(pageName || '').trim();
  if (raw === '-' || raw === 'FOUNDATIONS' || raw === 'COMPONENTS') return { include: false };

  if (raw.startsWith('●')) return { include: true, category: 'Foundations' };
  if (raw.startsWith('❖')) return { include: true, category: 'Components' };

  // fallback bucket for uncategorized pages
  return { include: true, category: 'Other' };
}

function normalizeStorySegment(s) {
  return String(s || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function nodeTypeAllowed(type) {
  // Layer-3 types we treat as "structural" containers worth surfacing in Storybook.
  // GROUP is included so pages like "Grid system" don't end up empty.
  return type === 'FRAME' || type === 'SECTION' || type === 'COMPONENT_SET' || type === 'GROUP';
}

function groupByType(nodes) {
  const byType = new Map();
  for (const n of nodes) {
    const t = n?.type || 'UNKNOWN';
    byType.set(t, (byType.get(t) || 0) + 1);
  }
  return Array.from(byType.entries()).sort((a, b) => b[1] - a[1]);
}

function formatTypeCounts(typeCounts) {
  if (!typeCounts?.length) return '';
  return typeCounts.map(([t, c]) => `${t}×${c}`).join(', ');
}

function safeMd(s) {
  return String(s || '').replace(/\|/g, '\\|');
}

async function main() {
  if (!FIGMA_ACCESS_TOKEN) {
    console.error('Missing FIGMA_ACCESS_TOKEN');
    process.exit(1);
  }

  const input = process.argv[2] || process.env.FIGMA_FILE_KEY;
  const fileKey = extractFileKey(input);
  if (!fileKey) {
    console.error('Missing/invalid file key. Provide a file key or a Figma URL, or set FIGMA_FILE_KEY.');
    process.exit(1);
  }

  const headers = { 'X-Figma-Token': FIGMA_ACCESS_TOKEN };
  const url = `https://api.figma.com/v1/files/${fileKey}`;

  console.log(`Fetching Figma file for Storybook mapping: ${fileKey}...`);
  const res = await axios.get(url, { headers });

  const fileName = res?.data?.name || 'Figma file';
  const doc = res?.data?.document;
  const pages = Array.isArray(doc?.children) ? doc.children : [];

  // Build mapping
  const buckets = new Map(); // category -> [{pageName, pageId, nodes:[] }]

  for (const page of pages) {
    const pageName = String(page?.name || '');
    const cat = categorizePage(pageName);
    if (!cat.include) continue;

    const category = cat.category;
    const cleanedPageName = normalizeStorySegment(stripPrefix(pageName));

    const children = Array.isArray(page?.children) ? page.children : [];

    const excludedTopLevel = children.filter(n => !nodeTypeAllowed(n?.type));
    const excludedTopLevelCounts = groupByType(excludedTopLevel);

    const thirdLayer = children
      .filter(n => nodeTypeAllowed(n?.type))
      .map(n => ({
        type: n.type,
        name: normalizeStorySegment(n?.name || ''),
        id: n.id || '',
      }));

    if (!buckets.has(category)) buckets.set(category, []);
    buckets.get(category).push({
      rawPageName: pageName,
      pageName: cleanedPageName,
      pageId: page?.id || '',
      thirdLayer,
      totalTopLevel: children.length,
      excludedTopLevelCounts,
    });
  }

  // Sort pages inside categories for stable output (Foundations first, then Components, then Other)
  const categoryOrder = ['Foundations', 'Components', 'Other'];
  const sortedCategories = Array.from(buckets.keys()).sort((a, b) => {
    const ai = categoryOrder.indexOf(a);
    const bi = categoryOrder.indexOf(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi) || a.localeCompare(b);
  });

  for (const cat of sortedCategories) {
    buckets.get(cat).sort((a, b) => a.pageName.localeCompare(b.pageName));
  }

  // Render markdown
  const lines = [];
  lines.push('# Storybook structure proposal (from Figma)');
  lines.push('');
  lines.push(`- Source Figma file: ${fileName}`);
  lines.push(`- File key: \`${fileKey}\``);
  lines.push('');
  lines.push('This mirrors Figma “Pages (summary)” as:');
  lines.push('- Level 1 (Storybook): **Category** (Foundations / Components / Other)');
  lines.push('- Level 2 (Storybook): **Page** (Figma page name without prefix `●` / `❖`)');
  lines.push('- Level 3 (Storybook): **Top-level nodes** on that page, filtered to `FRAME`, `SECTION`, `COMPONENT_SET`, `GROUP`');
  lines.push('');
  lines.push('### Layer-3 rule (to guide Figma restructuring)');
  lines.push('');
  lines.push('- Included as Layer-3: `FRAME`, `SECTION`, `COMPONENT_SET`, `GROUP`');
  lines.push('- Excluded (not shown as Layer-3): everything else (commonly `TEXT`, `VECTOR`, `INSTANCE`, `RECTANGLE`, etc.)');
  lines.push('- Each page below includes an “excluded top-level” summary so you can spot pages that need more container structure in Figma.');
  lines.push('');

  lines.push('## Proposed nav (titles)');
  lines.push('');
  for (const cat of sortedCategories) {
    const pagesInCat = buckets.get(cat);
    if (!pagesInCat?.length) continue;

    lines.push(`### ${cat}`);
    lines.push('');

    for (const p of pagesInCat) {
      const lvl2 = `${cat}/${p.pageName}`;
      const excludedSummary = formatTypeCounts(p.excludedTopLevelCounts);
      const excludedNote = excludedSummary ? ` | excluded top-level: ${excludedSummary}` : '';
      lines.push(`- ${lvl2}  _(Figma page: ${safeMd(p.rawPageName)} | ${p.pageId} | top-level nodes: ${p.totalTopLevel}${excludedNote})_`);

      if (p.thirdLayer.length === 0) {
        lines.push(`  - (no top-level FRAME/SECTION/COMPONENT_SET/GROUP found)`);
        continue;
      }

      for (const n of p.thirdLayer) {
        const lvl3 = `${lvl2}/${n.name || '(unnamed)'}`;
        lines.push(`  - ${lvl3}  _(${n.type} | ${n.id})_`);
      }
    }

    lines.push('');
  }

  lines.push('## Table view');
  lines.push('');
  lines.push('| Category | Page | Page node id | Level-3 (FRAME/SECTION/COMPONENT_SET/GROUP) count | Excluded top-level types | Level-3 examples |');
  lines.push('| --- | --- | --- | ---: | --- | --- |');

  for (const cat of sortedCategories) {
    const pagesInCat = buckets.get(cat) || [];
    for (const p of pagesInCat) {
      const examples = p.thirdLayer
        .slice(0, 6)
        .map(n => `${safeMd(n.name)} (${n.type})`)
        .join(', ');
      const excludedSummary = formatTypeCounts(p.excludedTopLevelCounts);
      lines.push(
        `| ${safeMd(cat)} | ${safeMd(p.pageName)} | ${safeMd(p.pageId)} | ${p.thirdLayer.length} | ${safeMd(excludedSummary || '(none)')} | ${examples || '(none)'} |`
      );
    }
  }

  const outPath = path.join(process.cwd(), 'docs', 'storybook-structure-from-figma.md');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');

  console.log(`Wrote ${outPath}`);
}

main().catch(err => {
  if (err?.response) {
    console.error('ERROR status:', err.response.status);
    console.error('ERROR data:', JSON.stringify(err.response.data, null, 2));
  } else {
    console.error('ERROR:', err?.message || String(err));
  }
  process.exit(1);
});
