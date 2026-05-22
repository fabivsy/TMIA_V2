#!/usr/bin/env node

/**
 * Post-Build Optimization Script
 * Organizes the 'out' folder for Hostinger deployment
 * - Copies .htaccess to root of out/
 * - Ensures all .html and _next are at root level
 * - Maintains proper folder structure
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');
const PUBLIC_DIR = path.join(__dirname, '../public');

async function postBuild() {
  try {
    console.log('🔧 Post-Build Optimization Starting...');

    // Ensure out directory exists
    if (!fs.existsSync(OUT_DIR)) {
      console.error('❌ out/ directory not found. Run "npm run build" first.');
      process.exit(1);
    }

    // Copy .htaccess from public to out root
    const htaccessSrc = path.join(PUBLIC_DIR, '.htaccess');
    const htaccessDest = path.join(OUT_DIR, '.htaccess');
    
    if (fs.existsSync(htaccessSrc)) {
      fs.copyFileSync(htaccessSrc, htaccessDest);
      console.log('✓ .htaccess copied to out/ root');
    } else {
      console.log('⚠ .htaccess not found in public/');
    }

    // Copy llms.txt and llms-full.txt to out root
    const llmsTxt = path.join(PUBLIC_DIR, 'llms.txt');
    const llmsFullTxt = path.join(PUBLIC_DIR, 'llms-full.txt');
    
    if (fs.existsSync(llmsTxt)) {
      fs.copyFileSync(llmsTxt, path.join(OUT_DIR, 'llms.txt'));
      console.log('✓ llms.txt copied to out/ root');
    }
    
    if (fs.existsSync(llmsFullTxt)) {
      fs.copyFileSync(llmsFullTxt, path.join(OUT_DIR, 'llms-full.txt'));
      console.log('✓ llms-full.txt copied to out/ root');
    }

    // Verify _next folder exists at root
    const nextFolder = path.join(OUT_DIR, '_next');
    if (fs.existsSync(nextFolder)) {
      console.log('✓ _next/ folder verified at root');
    }

    // List root structure for verification
    console.log('\n📦 Output folder root structure:');
    const rootFiles = fs.readdirSync(OUT_DIR).sort();
    rootFiles.forEach(file => {
      const stat = fs.statSync(path.join(OUT_DIR, file));
      const type = stat.isDirectory() ? '📁' : '📄';
      console.log(`  ${type} ${file}`);
    });

    console.log('\n✅ Post-Build Optimization Complete!');
    console.log('🚀 Ready for Hostinger deployment');

  } catch (error) {
    console.error('❌ Post-build error:', error);
    process.exit(1);
  }
}

postBuild();
