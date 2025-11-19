const fg = require('fast-glob');

module.exports = async (customIgnore = []) => {
    const defaultIgnore = [
        'node_modules',
        'node_modules/**',
        'README.md',
        'package-lock.json', 
        'package.json',
        '.git',
        '.git/**',
        '.DS_Store',
        '*.log',
        'coverage/**',
        'dist/**',
        'build/**'
    ];
    
    const ignoreList = [...defaultIgnore, ...customIgnore];
    
    const results = await fg('**/**', {
        ignore: ignoreList,
        dot: true
    });
    return results;
}