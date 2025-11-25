#!/usr/bin/env node
const scanner = require('../src/scanner.js');
const reader = require('../src/reader');
const fs = require('fs/promises');
const path = require('path');

// الدالة الرئيسية للتصدير
async function exporter(thisFile = path.basename(__filename), customIgnore = []) {
   try {
     if (customIgnore.length > 0) {
         console.log('🎯 Ignore patterns:', customIgnore);
     }
     
     console.log('🔍 Scanning project...');
     const projectStruc = await scanner(customIgnore);
     
     if(projectStruc.includes('thisProject.txt')) {
         await fs.rm('thisProject.txt');
         console.log('🗑️ Deleted previous thisProject.txt');
     }
     
     console.log('📄 Processing files...');
     const results = await reader(thisFile, customIgnore);
     
     await fs.writeFile('thisProject.txt', results, 'utf8');
     console.log('✅ Project exported successfully to thisProject.txt');
     console.log(`📊 Total files processed: ${projectStruc.length}`);
     
     // إظهار معلومات إضافية
     const fileExtensions = {};
     projectStruc.forEach(file => {
         const ext = path.extname(file) || 'no-extension';
         fileExtensions[ext] = (fileExtensions[ext] || 0) + 1;
     });
     
     console.log('📈 File types summary:');
     Object.entries(fileExtensions).forEach(([ext, count]) => {
         console.log(`   ${ext}: ${count} files`);
     });
     
   } catch(error) {
     console.log('❌ Failed to export:', error.message);
   }
}

// معالجة وسيطات CLI بشكل صحيح
function parseArgs() {
    const args = process.argv.slice(2);
    let customIgnore = [];
    
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--ignore' && args[i + 1]) {
            customIgnore = args[i + 1].split(',');
            break;
        }
        // دعم --ignore=value أيضاً
        if (args[i].startsWith('--ignore=')) {
            customIgnore = args[i].split('=')[1].split(',');
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