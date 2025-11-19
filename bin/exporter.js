#!/usr/bin/env node
const scanner = require('../src/scanner.js');
const reader = require('../src/reader');
const fs = require('fs/promises');
const path = require('path');

// الدالة الرئيسية للتصدير
async function exporter(thisFile = path.basename(__filename), customIgnore = []) {
   try {
     console.log('🔧 Running with ignore patterns:', customIgnore);
     
     const projectStruc = await scanner(customIgnore);
     
     if(projectStruc.includes('thisProject.txt')) {
         await fs.rm('thisProject.txt');
         console.log('🗑️ Deleted old file');
     }
     
     const results = await reader(thisFile, customIgnore);
     await fs.writeFile('thisProject.txt', results, 'utf8');
     console.log('✅ Project exported successfully to thisProject.txt');
     console.log('📊 Total files processed:', projectStruc.length);
   } catch(error) {
     console.log('❌ Failed to export:', error.message);
   }
}

// معالجة وسيطات CLI بشكل صحيح
function parseArgs() {
    const args = process.argv.slice(2);
    let customIgnore = [];
    
    console.log('📨 Raw arguments:', args);
    
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--ignore' && args[i + 1]) {
            customIgnore = args[i + 1].split(',');
            console.log('🎯 Parsed ignore patterns:', customIgnore);
            break;
        }
    }
    
    return customIgnore;
}

// تصدير الدالة للاستخدام كـ module
module.exports = exporter;

// إذا تم تشغيل الملف مباشرة كـ CLI
if (require.main === module) {
    const customIgnore = parseArgs();
    const thisFile = path.basename(__filename);
    exporter(thisFile, customIgnore).catch(console.error);
}