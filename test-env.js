require('dotenv').config();
console.log('FILE_KEY:', process.env.FIGMA_FILE_KEY);
console.log('TOKEN:', process.env.FIGMA_ACCESS_TOKEN?.substring(0, 20) + '...');
