require('dotenv').config();
const axios = require('axios');

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN || process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

async function listPages() {
  console.log('📥 Fetching Figma file structure...\n');
  
  const url = `https://api.figma.com/v1/files/${FILE_KEY}`;
  
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      },
      timeout: 15000
    });

    const document = response.data.document;
    
    console.log('📄 Pages in Figma file:\n');
    console.log('='.repeat(100));
    console.log('Page Name'.padEnd(40) + 'Page ID'.padEnd(20) + 'Type');
    console.log('='.repeat(100));
    
    const pages = [];
    
    if (document.children) {
      document.children.forEach(page => {
        if (page.type === 'CANVAS') {
          console.log(page.name.padEnd(40) + page.id.padEnd(20) + page.type);
          pages.push({ name: page.name, id: page.id, type: page.type });
        }
      });
    }
    
    console.log('='.repeat(100));
    console.log(`\n✅ Total: ${pages.length} pages found\n`);
    
    // Match against expected category pages
    const expectedPages = [
      'Accordion', 'Badge', 'Banner', 'Bottom bars', 'Bread crumbs', 'Buttons',
      'Canvas objects', 'Cards', 'Checkbox / Radio button', 'Chips / Tags', 'Cursor',
      'Data table', 'Dialogs', 'Divider', 'Icon', 'Illustrations', 'Input',
      'Large components', 'Menus', 'Progress indicators', 'Property panels',
      'Racking data', 'Slider', 'Switch', 'Tabs', 'Tool rail', 'Tooltip',
      'Tree view', 'UI shell header', 'UI shell right panel'
    ];
    
    console.log('\n📋 Matching category pages:\n');
    console.log('='.repeat(100));
    
    expectedPages.forEach(expected => {
      const found = pages.find(p => 
        p.name.toLowerCase().includes(expected.toLowerCase()) ||
        expected.toLowerCase().includes(p.name.toLowerCase())
      );
      
      if (found) {
        console.log(`✅ ${expected.padEnd(30)} → ${found.name.padEnd(30)} (${found.id})`);
      } else {
        console.log(`❌ ${expected.padEnd(30)} → NOT FOUND`);
      }
    });
    
    console.log('='.repeat(100));
    
  } catch (error) {
    console.error('❌ Error fetching file:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

listPages().catch(console.error);
