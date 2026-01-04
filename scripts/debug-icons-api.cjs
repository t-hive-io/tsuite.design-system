/**
 * Debug: Show what Figma API returns for "Icons".
 *
 * Prints:
 * 1) A few raw entries from GET /files/:key/components filtered by containing_frame.name === 'Icons'
 * 2) Attempts to find a top-level page named (or containing) 'Icons' from GET /files/:key
 */

require('dotenv').config();
const axios = require('axios');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
  console.error('Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN');
  process.exit(1);
}

const headers = { 'X-Figma-Token': FIGMA_ACCESS_TOKEN };

async function main() {
  console.log(
    '--- Components API: components under containing_frame.name === "Icons" ---'
  );
  const compsRes = await axios.get(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
    { headers }
  );
  const comps = compsRes?.data?.meta?.components || [];
  const icons = comps.filter((c) => c?.containing_frame?.name === 'Icons');

  console.log('Total components:', comps.length);
  console.log('Icons components:', icons.length);

  console.log('\nSample (first 5), raw objects:');
  icons.slice(0, 5).forEach((c, i) => {
    console.log(`\n#${i + 1}`);
    console.log(JSON.stringify(c, null, 2));
  });

  console.log(
    '\n--- Files API: find page named "Icons" (or containing "icons") ---'
  );
  const fileRes = await axios.get(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
    { headers }
  );
  const doc = fileRes?.data?.document;
  const pages = doc?.children || [];

  console.log('Top-level pages:', pages.length);

  const pageIcons =
    pages.find((p) => String(p?.name || '').toLowerCase() === 'icons') ||
    pages.find((p) =>
      String(p?.name || '')
        .toLowerCase()
        .includes('icons')
    );

  if (!pageIcons) {
    console.log(
      'No top-level page named/including "Icons" found. Top-level page names (first 50):'
    );
    pages.slice(0, 50).forEach((p) => console.log(' -', p?.name));
    return;
  }

  console.log('Found page:', pageIcons.name);
  console.log('Page id:', pageIcons.id);
  console.log('Page type:', pageIcons.type);

  const kids = pageIcons.children || [];
  console.log(`First 30 children of page "${pageIcons.name}":`);
  kids
    .slice(0, 30)
    .forEach((n) => console.log(` - ${n.type}\t${n.name}\t${n.id}`));
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
