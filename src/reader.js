const scanner = require('./scanner');
const fs = require('fs/promises');

module.exports = async function (thisFile, customIgnore = []) {
    const files = await scanner(customIgnore);
    let results = '';
    for (const file of files) {
         if (file.includes(thisFile)) continue;           
        // get file content
        let content = await fs.readFile(file, 'utf8');        
        // if not empty
         if (content) {            
            results += `FILE :  ${file} \nCONTENT : ${content.trim()}\n`;
         }
     }
    return results;
}