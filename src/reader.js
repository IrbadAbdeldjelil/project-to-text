const fs = require('fs/promises');
const path = require('path');

async function readFiles(files, {include = null, maxSize = 1024*1024} = {}) {
    let results = '';
    let exported = 0;
    let skippedSize = 0;
    let skippedInclude = 0;
    const extensionCount = {};

    for(const file of files){
        try {
            const stat = await fs.stat(file);
            if(stat.size > maxSize){ skippedSize++; continue; }

            const ext = path.extname(file);
            if(include && !include.includes(ext)){ skippedInclude++; continue; }

            const content = await fs.readFile(file,'utf8');
            if(content && content.trim()){
                results += `FILE : ${file}\nCONTENT : ${content.trim()}\n\n`;
                exported++;
                extensionCount[ext] = (extensionCount[ext] || 0) + 1;
            }
        } catch { continue; }
    }

    return {results, exported, skippedSize, skippedInclude, extensionCount};
}

module.exports = readFiles;