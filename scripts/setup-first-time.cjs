/**
 * First-Time Setup Script
 * 
 * This script sets up the entire Figma-to-Storybook pipeline in the correct order:
 * 1. Generate React components from Figma
 * 2. Generate Storybook stories from Figma structure
 * 3. Ready to run Storybook
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(command, description) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`📦 ${description}`);
  console.log(`${'='.repeat(80)}`);
  console.log(`\n💻 Running: ${command}\n`);
  
  try {
    execSync(command, { stdio: 'inherit', cwd: __dirname + '/..' });
    console.log(`\n✅ ${description} - DONE\n`);
    return true;
  } catch (err) {
    console.error(`\n❌ ${description} - FAILED`);
    console.error(err.message);
    return false;
  }
}

function checkEnv() {
  const envPath = path.join(__dirname, '../.env');
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env file not found!');
    console.error('   Create .env with:');
    console.error('   FIGMA_FILE_KEY=your_file_key');
    console.error('   FIGMA_ACCESS_TOKEN=your_token');
    process.exit(1);
  }
  
  const env = fs.readFileSync(envPath, 'utf-8');
  if (!env.includes('FIGMA_FILE_KEY') || !env.includes('FIGMA_ACCESS_TOKEN')) {
    console.error('❌ Missing required environment variables in .env');
    console.error('   Required: FIGMA_FILE_KEY, FIGMA_ACCESS_TOKEN');
    process.exit(1);
  }
  
  console.log('✅ Environment variables configured');
}

async function main() {
  console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║              🚀 T-Suite Design System - First-Time Setup 🚀               ║
║                                                                            ║
║  This will set up the entire Figma-to-Storybook pipeline:                ║
║  • Generate React components from Figma                                   ║
║  • Generate Storybook stories from Figma structure                        ║
║  • Prepare everything for Storybook                                       ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
`);

  console.log('🔍 Checking prerequisites...\n');
  checkEnv();
  
  const startTime = Date.now();
  let step = 0;
  
  // Step 1: Generate React components from Figma
  step++;
  console.log(`\n\n📋 STEP ${step}/2: Generate React Components`);
  console.log('   This will create TypeScript React components from Figma component sets');
  const componentsSuccess = run(
    'node scripts/generate-components-from-figma.cjs',
    'Generate React Components'
  );
  
  if (!componentsSuccess) {
    console.error('\n❌ Setup failed at component generation');
    console.error('   Fix the errors above and try again');
    process.exit(1);
  }
  
  // Step 2: Generate Storybook stories dynamically from Figma
  step++;
  console.log(`\n\n📋 STEP ${step}/2: Generate Storybook Stories`);
  console.log('   This will create .stories.tsx files from Figma structure');
  console.log('   ⏱️  This may take a while (fetching ~1750 components from Figma API)...');
  const storiesSuccess = run(
    'node scripts/generate-stories-dynamic.cjs',
    'Generate Storybook Stories'
  );
  
  if (!storiesSuccess) {
    console.error('\n❌ Setup failed at story generation');
    console.error('   Fix the errors above and try again');
    process.exit(1);
  }
  
  // Success summary
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  
  console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                                                                            ║
║                        ✅ SETUP COMPLETE! ✅                               ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝

⏱️  Total time: ${elapsed} seconds

📦 What was created:
   • React components in src/components/
   • Storybook stories in src/generated-stories/
   • All files synced with Figma structure

🚀 Next steps:

   1. Start Storybook:
      npm run storybook
      
   2. Build Storybook for production:
      npm run build-storybook
      
   3. Re-sync with Figma (when Figma changes):
      npm run setup
      
📖 The stories are now dynamically generated from Figma!
   Every time you run 'npm run storybook', stories are regenerated.

💡 Tips:
   • Stories show actual React components if they exist
   • Stories show placeholder if component not yet generated
   • Edit components in src/components/ to see changes in Storybook
   • Stories automatically include controls for all Figma properties

Happy coding! 🎨
`);
}

main().catch(err => {
  console.error('\n❌ Setup failed:', err.message);
  process.exit(1);
});
