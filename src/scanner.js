const fg = require('fast-glob');
const path = require('path');
const { readGitignore } = require('./helpers');

const defaultIgnore = [
    'node_modules/**', '.git/**',
    'dist/**','build/**','out/**','coverage/**',
    '.next/**','.nuxt/**','.env*',
    '**/*.log','**/*.tmp',
    '**/*.jpg','**/*.png','**/*.mp3','**/*.mp4','**/*.zip',
    '**/*.db','**/*.sqlite'
];

async function getFiles({ignore = [], include = null, maxSize = 1024*1024, outputFile = null}) {
    const gitignore = await readGitignore();
    const allIgnore = [...defaultIgnore, ...gitignore, ...ignore];

    let files = await fg('**/*', {
        ignore: allIgnore,
        dot: true,
        onlyFiles: true,
        followSymbolicLinks: false
    });

    const currentFile = path.resolve(__filename);
    const outputPath = outputFile ? path.resolve(outputFile) : null;

    // تجاهل CLI الحالي وملف الإخراج
    files = files.filter(f => {
        const full = path.resolve(f);
        if(full === currentFile) return false;
        if(outputPath && full === outputPath) return false;
        return true;
    });

    return files;
}

module.exports = getFiles;