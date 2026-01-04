/**
 * Generate MDX placeholder pages for Storybook Layer 1 + Layer 2 only.
 *
 * Goal:
 * - Ensure Storybook sidebar contains every "Foundations/<Page>" and "Components/<Page>" entry
 *   derived from the Figma file pages.
 * - Do NOT introduce a 3rd nav segment in titles; 3rd level will be story names later.
 *
 * Usage:
 *   node scripts/generate-storybook-layer12-placeholders-from-figma.js <fileKey|figmaUrl>
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

  return { include: true, category: 'Other' };
}

function normalizeTitleSegment(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

function slugify(s) {
  return String(s || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'page';
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function collectExistingTitles(rootDir) {
  // Very small heuristic: parse `title: '...'` or `title: "..."` from *.stories.* and *.mdx
  const titles = new Set();

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name === 'node_modules' || e.name === 'storybook-static' || e.name === 'dist') continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.(stories\.(js|jsx|mjs|ts|tsx)|mdx)$/.test(e.name)) continue;

      const content = fs.readFileSync(full, 'utf8');
      // TS/JS: title: 'A/B'
      const re = /title\s*:\s*(['"])(.*?)\1/g;
      let m;
      while ((m = re.exec(content))) {
        titles.add(m[2]);
      }
      // MDX: <Meta title="A/B" />
      const reMdx = /<Meta[^>]*\stitle\s*=\s*(['"])(.*?)\1/g;
      while ((m = reMdx.exec(content))) {
        titles.add(m[2]);
      }
    }
  }

  walk(rootDir);
  return titles;
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

  console.log(`Fetching Figma file pages for placeholder generation: ${fileKey}...`);
  const res = await axios.get(url, { headers });

  const fileName = res?.data?.name || 'Figma file';
  const doc = res?.data?.document;
  const pages = Array.isArray(doc?.children) ? doc.children : [];

  const existingTitles = collectExistingTitles(path.join(process.cwd(), 'src'));

  const outDir = path.join(process.cwd(), 'src', 'stories', 'figma-pages');
  ensureDir(outDir);

  let created = 0;
  let skipped = 0;

  for (const page of pages) {
    const rawPageName = String(page?.name || '');
    const cat = categorizePage(rawPageName);
    if (!cat.include) continue;

    // Only add Foundations + Components per request (Other is usually admin/separators)
    if (cat.category !== 'Foundations' && cat.category !== 'Components') continue;

    const pageName = normalizeTitleSegment(stripPrefix(rawPageName));
    if (!pageName) continue;

    const title = `${cat.category}/${pageName}`;

    // If there is already a story/docs with this title, don't create a placeholder
    if (existingTitles.has(title)) {
      skipped++;
      continue;
    }

    const fileSlug = `${cat.category.toLowerCase()}--${slugify(pageName)}`;
    const filePath = path.join(outDir, `${fileSlug}.mdx`);

    const figmaUrl = `https://www.figma.com/design/${fileKey}/${encodeURIComponent(fileName.replace(/\s+/g, '-'))}?node-id=${encodeURIComponent(page.id || '')}`;

    const mdx = `import { Meta } from '@storybook/blocks';\n\n<Meta title=\"${title}\" />\n\n# ${pageName}\n\nThis is a placeholder page to establish the Storybook navigation for **${title}**.\n\n- Figma page id: \`${page.id || ''}\`\n- Figma: ${figmaUrl}\n\n> Next: add real component stories under this section.\n`;

    fs.writeFileSync(filePath, mdx, 'utf8');
    created++;
  }

  console.log(`Placeholders created: ${created}`);
  console.log(`Placeholders skipped (already existed): ${skipped}`);
  console.log(`Output folder: ${outDir}`);
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
