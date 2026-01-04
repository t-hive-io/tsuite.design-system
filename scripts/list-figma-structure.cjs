/**
 * List Figma file structure (pages + nested nodes) as a readable tree.
 *
 * Usage:
 *   node scripts/list-figma-structure.js <fileKey|figmaUrl> [--depth 3] [--maxChildren 200]
 *
 * Env:
 *   FIGMA_ACCESS_TOKEN (required)
 *   FIGMA_FILE_KEY (optional default if no arg)
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

function parseArgs(argv) {
  const args = { positional: [] };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--depth') {
      args.depth = Number(argv[++i]);
      continue;
    }
    if (a === '--maxChildren') {
      args.maxChildren = Number(argv[++i]);
      continue;
    }
    args.positional.push(a);
  }
  return args;
}

function extractFileKey(input) {
  if (!input) return null;
  const s = String(input).trim();

  // Common URL shapes:
  // https://www.figma.com/design/<FILE_KEY>/...
  // https://www.figma.com/file/<FILE_KEY>/...
  // https://www.figma.com/proto/<FILE_KEY>/...
  const m = s.match(/figma\.com\/(design|file|proto)\/([a-zA-Z0-9]+)\//);
  if (m) return m[2];

  // If user already passed the key
  if (/^[a-zA-Z0-9]+$/.test(s)) return s;

  return null;
}

function safeName(name) {
  if (!name) return '';
  return String(name).replace(/\s+/g, ' ').trim();
}

function iconForType(type) {
  switch (type) {
    case 'DOCUMENT':
      return '📄';
    case 'CANVAS':
      return '📄'; // page
    case 'FRAME':
      return '🖼️';
    case 'GROUP':
      return '🧩';
    case 'COMPONENT':
      return '🧱';
    case 'COMPONENT_SET':
      return '🧱🧩';
    case 'INSTANCE':
      return '🔁';
    case 'TEXT':
      return '🔤';
    case 'VECTOR':
      return '🧷';
    default:
      return '•';
  }
}

function summarize(node) {
  const type = node?.type || '';
  const name = safeName(node?.name || '');
  const id = node?.id ? ` (${node.id})` : '';
  return `${iconForType(type)} ${type}${name ? `: ${name}` : ''}${id}`;
}

function countDirectChildren(node) {
  const kids = Array.isArray(node?.children) ? node.children : [];
  return kids.length;
}

function groupByType(nodes) {
  const byType = new Map();
  for (const n of nodes) {
    const t = n?.type || 'UNKNOWN';
    byType.set(t, (byType.get(t) || 0) + 1);
  }
  return Array.from(byType.entries()).sort((a, b) => b[1] - a[1]);
}

function renderTree(node, opts, depth, prefix) {
  const lines = [];

  const kids = Array.isArray(node?.children) ? node.children : [];
  if (depth <= 0 || kids.length === 0) return lines;

  const max = Number.isFinite(opts.maxChildren) ? opts.maxChildren : 200;
  const shown = kids.slice(0, max);

  for (let i = 0; i < shown.length; i++) {
    const child = shown[i];
    const isLast = i === shown.length - 1;
    const branch = isLast ? '└─ ' : '├─ ';
    lines.push(`${prefix}${branch}${summarize(child)}`);

    const nextPrefix = `${prefix}${isLast ? '   ' : '│  '}`;
    lines.push(...renderTree(child, opts, depth - 1, nextPrefix));
  }

  if (kids.length > shown.length) {
    lines.push(
      `${prefix}└─ … (${kids.length - shown.length} more children not shown)`
    );
  }

  return lines;
}

async function main() {
  if (!FIGMA_ACCESS_TOKEN) {
    console.error('Missing FIGMA_ACCESS_TOKEN');
    process.exit(1);
  }

  const args = parseArgs(process.argv);
  const input = args.positional[0] || process.env.FIGMA_FILE_KEY;
  const fileKey = extractFileKey(input);

  if (!fileKey) {
    console.error(
      'Missing/invalid file key. Provide a file key or a Figma URL, or set FIGMA_FILE_KEY.'
    );
    process.exit(1);
  }

  const opts = {
    depth: Number.isFinite(args.depth) ? args.depth : 3,
    maxChildren: Number.isFinite(args.maxChildren) ? args.maxChildren : 200,
  };

  const headers = { 'X-Figma-Token': FIGMA_ACCESS_TOKEN };
  const url = `https://api.figma.com/v1/files/${fileKey}`;

  console.log(`Fetching file structure for ${fileKey}...`);
  const res = await axios.get(url, { headers });

  const doc = res?.data?.document;
  const fileName = safeName(res?.data?.name || 'Figma file');
  const pages = Array.isArray(doc?.children) ? doc.children : [];

  const outLines = [];
  outLines.push(`# Figma file structure`);
  outLines.push('');
  outLines.push(`- File key: \`${fileKey}\``);
  outLines.push(`- File name: ${fileName}`);
  outLines.push(`- Pages: ${pages.length}`);
  outLines.push('');

  outLines.push('## Pages (summary)');
  outLines.push('');
  pages.forEach((p, i) => {
    const kids = Array.isArray(p?.children) ? p.children : [];
    const typeCounts = groupByType(kids);
    const summary = typeCounts.length
      ? typeCounts
          .slice(0, 6)
          .map(([t, c]) => `${t}×${c}`)
          .join(', ')
      : 'no children';

    outLines.push(
      `${i + 1}. **${safeName(p?.name)}** (${
        kids.length
      } top-level nodes) — ${summary}`
    );
  });

  outLines.push('');
  outLines.push('## Tree (limited depth)');
  outLines.push('');
  outLines.push(
    `Depth: ${opts.depth}, Max children per node: ${opts.maxChildren}`
  );
  outLines.push('');

  pages.forEach((p) => {
    outLines.push(`### ${safeName(p?.name)} (page ${p?.id || ''})`);
    outLines.push('');
    outLines.push(summarize(p));
    outLines.push(...renderTree(p, opts, opts.depth, ''));
    outLines.push('');
  });

  const outPath = path.join(process.cwd(), 'docs', 'figma-file-structure.md');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, outLines.join('\n'), 'utf8');

  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  if (err?.response) {
    console.error('ERROR status:', err.response.status);
    console.error('ERROR data:', JSON.stringify(err.response.data, null, 2));
  } else {
    console.error('ERROR:', err?.message || String(err));
  }
  process.exit(1);
});
