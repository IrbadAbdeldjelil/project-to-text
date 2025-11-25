const fg = require('fast-glob');
const fs = require('fs/promises');
const path = require('path');

module.exports = async (customIgnore = []) => {
    const defaultIgnore = [
        // الملفات الأساسية
        'node_modules/**',
        'README.md',
        'package-lock.json', 
        'package.json',
        
        // نظام التحكم بالإصدارات
        '.git/**',
        
        // ملفات النظام
        '.DS_Store',
        'Thumbs.db',
        'desktop.ini',
        
        // الملفات المنطقية
        '*.log',
        '*.tmp',
        '*.temp',
        
        // مجلدات البناء والتوزيع
        'coverage/**',
        'dist/**',
        'build/**',
        'out/**',
        '.next/**',
        '.nuxt/**',
        
        // البيئة والإعدادات
        '.env*',
        '.config/**',
        
        // الوسائط - الملفات الثقيلة
        '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.bmp', '**/*.svg',
        '**/*.mp4', '**/*.avi', '**/*.mov', '**/*.wmv', '**/*.flv',
        '**/*.mp3', '**/*.wav', '**/*.ogg', '**/*.flac',
        '**/*.pdf', '**/*.doc', '**/*.docx', '**/*.ppt', '**/*.pptx',
        '**/*.zip', '**/*.rar', '**/*.tar', '**/*.gz',
        
        // بيانات وقواعد بيانات
        '**/*.db', '**/*.sqlite', '**/*.mdb'
    ];
    
    // قراءة .gitignore إذا موجود
    let gitignorePatterns = [];
    try {
        const gitignoreContent = await fs.readFile('.gitignore', 'utf8');
        gitignorePatterns = gitignoreContent
            .split('\n')
            .filter(line => line.trim() && !line.startsWith('#'))
            .map(pattern => pattern.trim());
    } catch (error) {
        // إذا لم يوجد .gitignore، هذا طبيعي
    }
    
    const ignoreList = [...defaultIgnore, ...gitignorePatterns, ...customIgnore];
    
    const results = await fg('**/**', {
        ignore: ignoreList,
        dot: true,
        onlyFiles: true, // نتأكد أننا نحصل على ملفات فقط وليس مجلدات
        caseSensitiveMatch: false
    });
    
    return results;
}