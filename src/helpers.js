const fs = require('fs/promises');

async function readGitignore() {
    try {
        const content = await fs.readFile('.gitignore','utf8');
        return content
            .split('\n')
            .filter(l => l.trim() && !l.startsWith('#'))
            .map(p => {
                if(p.startsWith('/')) p = p.slice(1);
                if(!p.includes('*')) return `**/${p}/**`;
                return p;
            });
    } catch { return []; }
}

function normalizeExtensions(list) {
    if(!list) return null;
    return list.map(ext => ext.startsWith('.') ? ext : '.' + ext);
}

module.exports = { readGitignore, normalizeExtensions };