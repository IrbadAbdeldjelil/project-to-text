function generateReport({exported, skippedSize, skippedInclude, extensionCount, outputFile}){
    console.log(`✅ Export complete → ${outputFile}`);
    console.log(`Files exported: ${exported}`);
    console.log(`Files skipped (size > 1MB): ${skippedSize}`);
    console.log(`Files skipped (not included extension): ${skippedInclude}`);

    if(extensionCount && Object.keys(extensionCount).length){
        console.log('Files by extension:');
        for(const [ext, count] of Object.entries(extensionCount)){
            console.log(`  ${ext || '[no extension]'} → ${count}`);
        }
    }
}

module.exports = { generateReport };