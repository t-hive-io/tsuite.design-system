/**
 * Generate ONE consolidated Markdown doc for Icons.
 *
 * Uses the Figma Components API and builds:
 * - component set list (inside the Icons frame)
 * - full list of components in the Icons frame, prefixed with "ComponentSet: Name"
 *
 * Output:
 * - docs/icons-under-icons-set.md
 */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_FILE_KEY || !FIGMA_ACCESS_TOKEN) {
  console.error('Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN');
  process.exit(1);
}

async function main() {
  const headers = { 'X-Figma-Token': FIGMA_ACCESS_TOKEN };
  const res = await axios.get(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
    { headers }
  );
  const components = res?.data?.meta?.components || [];
  const icons = components.filter((c) => c?.containing_frame?.name === 'Icons');

  const sets = new Map();

  for (const c of icons) {
    const set =
      c?.containing_frame?.containingComponentSet ||
      c?.containing_frame?.containingStateGroup;
    const setName = set?.name;
    const setNodeId = set?.nodeId;

    const key = setName && setNodeId ? `${setName}@@${setNodeId}` : null;
    if (!key) continue;

    const entry = sets.get(key) || {
      name: setName,
      nodeId: setNodeId,
      count: 0,
      examples: [],
    };

    entry.count += 1;
    if (entry.examples.length < 5) {
      entry.examples.push(c.name);
    }

    sets.set(key, entry);
  }

  const setList = Array.from(sets.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );

  const getComponentSet = (c) => {
    const set =
      c?.containing_frame?.containingComponentSet ||
      c?.containing_frame?.containingStateGroup;
    if (!set?.name) return null;
    return { name: set.name, nodeId: set.nodeId };
  };

  const lines = [];
  lines.push('# Icons (Figma: Icons frame)');
  lines.push('');
  lines.push(
    'This document is generated from the Figma Components API and kept as a single place to debug icon naming.'
  );
  lines.push('');
  lines.push(`Total components in Icons frame: ${icons.length}`);
  lines.push(`Total component sets found inside Icons: ${setList.length}`);
  lines.push('');
  lines.push('## Why you see `Property 1=...`');
  lines.push('');
  lines.push(
    '- Many entries in Icons are variants in a COMPONENT_SET. The API `name` becomes the variant label (e.g. `Property 1=Rotate`).'
  );
  lines.push(
    '- The *icon family name* is usually the component set name (e.g. `Mini icons`), and the variant label is the state/value (e.g. `Rotate`).'
  );
  lines.push('');
  lines.push('## Component sets inside Icons');
  lines.push('');
  lines.push(
    '| Component set | Set Node ID | Variant count | Example API names |'
  );
  lines.push('| --- | --- | ---: | --- |');
  for (const s of setList) {
    const examples = s.examples
      .map((e) => String(e).replace(/\|/g, '\\|'))
      .join(', ');
    lines.push(
      `| ${String(s.name).replace(/\|/g, '\\|')} | ${s.nodeId} | ${
        s.count
      } | ${examples} |`
    );
  }

  lines.push('');
  lines.push('## Components in Icons (with component set prefix)');
  lines.push('');
  lines.push(
    '| ComponentSet: Name | Node ID | Component set | Component set node id |'
  );
  lines.push('| --- | --- | --- | --- |');

  // Sort for stable output: component set name, then component name, then node id
  const sortedIcons = [...icons].sort((a, b) => {
    const sa = getComponentSet(a)?.name || '';
    const sb = getComponentSet(b)?.name || '';
    return (
      sa.localeCompare(sb) ||
      String(a?.name || '').localeCompare(String(b?.name || '')) ||
      String(a?.node_id || '').localeCompare(String(b?.node_id || ''))
    );
  });

  for (const c of sortedIcons) {
    const rawName = String(c?.name || '');
    const nodeId = String(c?.node_id || '');
    const set = getComponentSet(c);
    const setName = set?.name || '(no component set)';
    const setNodeId = set?.nodeId || '';
    const prefixed = `${setName}: ${rawName}`.replace(/\|/g, '\\|');
    lines.push(
      `| ${prefixed} | ${nodeId} | ${String(setName).replace(
        /\|/g,
        '\\|'
      )} | ${String(setNodeId).replace(/\|/g, '\\|')} |`
    );
  }

  const outDir = path.join(__dirname, '../docs');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'icons-under-icons-set.md');
  fs.writeFileSync(outPath, lines.join('\n') + '\n');

  console.log(`Wrote ${outPath}`);
  console.log(`Sets: ${setList.length}`);
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
