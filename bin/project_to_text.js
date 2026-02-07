#!/usr/bin/env node
const fs = require('fs/promises');
const path = require('path');
const getFiles = require('../src/scanner');
const readFiles = require('../src/reader');
const { generateReport } = require('../src/reporter');
const { normalizeExtensions } = require('../src/helpers');

// --- Parse CLI arguments
const args = process.argv.slice(2);
let ignore = [];
let include = null;
let output = 'thisProject.txt';

args.forEach(arg=>{
    if(arg.startsWith('--ignore=')){
        ignore = arg.replace('--ignore=','').split(',').map(s=>s.trim()).filter(Boolean);
    } else if(arg.startsWith('--include=')){
        include = normalizeExtensions(arg.replace('--include=','').split(','));
    } else if(arg.startsWith('--output=')){
        output = arg.replace('--output=','').trim();
    } else if(arg==='--help'||arg==='-h'){
        console.log(`
Usage: ptt [options]

Options:
  --ignore=patterns   Comma-separated files/folders to ignore
  --include=exts      Comma-separated extensions to include (e.g. .js,.json)
  --output=filename   Output file name (default: thisProject.txt)
  --help, -h          Show this help
`);
        process.exit(0);
    }
});

(async()=>{
    // حذف الملف القديم إذا موجود
    try { await fs.unlink(output); } catch {}

    const files = await getFiles({ignore, include, outputFile: output});
    const {results, exported, skippedSize, skippedInclude, extensionCount} = await readFiles(files,{include});
    await fs.writeFile(output, results,'utf8');

    generateReport({exported, skippedSize, skippedInclude, extensionCount, outputFile: output});
})();