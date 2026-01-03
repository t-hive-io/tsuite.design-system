const axios = require('axios');
require('dotenv').config();

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

function exploreNode(node, depth = 0, maxDepth = 3, showId = false) {
  const indent = '  '.repeat(depth);
  
  const idStr = showId ? ` [${node.id}]` : '';
  console.log(`${indent}📦 ${node.name}${idStr}`);
  console.log(`${indent}   Type: ${node.type}`);
  
  if (node.absoluteBoundingBox) {
    const w = Math.round(node.absoluteBoundingBox.width);
    const h = Math.round(node.absoluteBoundingBox.height);
    console.log(`${indent}   Size: ${w}×${h}px`);
  }
  
  if (node.children && depth < maxDepth) {
    console.log(`${indent}   Children: ${node.children.length}`);
    node.children.forEach(child => exploreNode(child, depth + 1, maxDepth, showId));
  } else if (node.children) {
    console.log(`${indent}   Children: ${node.children.length} (not expanded)`);
  }
}

async function main() {
  console.log('📥 Fetching ALL nodes from Figma file...\n');
  
  try {
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      { headers: { 'X-Figma-Token': FIGMA_ACCESS_TOKEN } }
    );
    
    console.log('='.repeat(120));
    console.log(`FILE: ${response.data.name}`);
    console.log('='.repeat(120));
    console.log(`Last Modified: ${response.data.lastModified}`);
    console.log(`Version: ${response.data.version}`);
    console.log('\n');
    
    const document = response.data.document;
    
    console.log('📄 PAGES & TOP-LEVEL STRUCTURE:\n');
    console.log('='.repeat(120));
    
    if (document.children) {
      document.children.forEach((page, idx) => {
        console.log(`\n${idx + 1}. PAGE: ${page.name} [ID: ${page.id}]`);
        console.log(`   Type: ${page.type}`);
        
        if (page.children) {
          console.log(`   Frames/Sections: ${page.children.length}`);
          console.log('   ---');
          
          // Show top-level frames in each page
          page.children.slice(0, 10).forEach((frame, frameIdx) => {
            const sizeStr = frame.absoluteBoundingBox ? 
              ` (${Math.round(frame.absoluteBoundingBox.width)}×${Math.round(frame.absoluteBoundingBox.height)}px)` : '';
            console.log(`   ${frameIdx + 1}. ${frame.name} [${frame.id}]${sizeStr}`);
            console.log(`      Type: ${frame.type}`);
            if (frame.children) {
              console.log(`      Children: ${frame.children.length}`);
            }
          });
          
          if (page.children.length > 10) {
            console.log(`   ... and ${page.children.length - 10} more frames`);
          }
        }
        console.log('');
      });
    }
    
    console.log('\n' + '='.repeat(120));
    console.log('SUMMARY:');
    console.log('='.repeat(120));
    console.log(`Total Pages: ${document.children?.length || 0}`);
    
    const totalFrames = document.children?.reduce((sum, page) => 
      sum + (page.children?.length || 0), 0) || 0;
    console.log(`Total Top-Level Frames: ${totalFrames}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

main();
