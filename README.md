# project-to-text

[![npm version](https://img.shields.io/npm/v/project-to-text.svg)](https://www.npmjs.com/package/project-to-text)
[![license](https://img.shields.io/npm/l/project-to-text.svg)](https://github.com/IrbadAbdeldjelil/project-to-text/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dt/project-to-text.svg)](https://www.npmjs.com/package/project-to-text)
A powerful tool that converts your entire project into a single text file, making it easy to share with AI assistants for code review, analysis, and feedback.

## Installation

```bash
npm install -g project-to-text
```

## Quick Start

```bash
cd your-project
project-to-text
```

This creates `thisProject.txt` with your entire project content.

## Usage Examples

### Command Line
```bash
# Basic usage
project-to-text

# Ignore specific files
project-to-text --ignore "dist/**,*.log,coverage/**"

# Using npx (no installation required)
npx project-to-text
```

### Programmatic Usage
```javascript
const exporter = require('project-to-text');

// Basic usage
await exporter();

// With custom ignore patterns
await exporter('current-file.js', ['dist/**', '*.log', 'temp/**']);
```

## Key Features

- ✅ **Smart File Ignoring** - Automatically excludes node_modules, build files, media files
- ✅ **Git Integration** - Reads your .gitignore patterns automatically  
- ✅ **Clean Output** - Well-formatted text file perfect for AI analysis
- ✅ **Fast & Lightweight** - Processes projects in seconds
- ✅ **Flexible** - Custom ignore patterns and programmatic API

## Perfect For

- 🤖 **AI Analysis** - Share projects with ChatGPT, Claude, and other AI assistants
- 🔍 **Code Reviews** - Get detailed project analysis and feedback
- 📚 **Documentation** - Create comprehensive project snapshots
- 🚀 **Sharing** - Easily share complete projects with team members

## Output Format

```
FILE : src/index.js
CONTENT : // Your code here...

FILE : package.json
CONTENT : {
  "name": "my-project"
}
```

## Links
- **npm:** https://www.npmjs.com/package/project-to-text
- **GitHub:** https://github.com/IrbadAbdeldjelil/project-to-text
---
## 👨‍💻 Author

**Irbad Abdeldjelil**
- Email: irbadabdeldjelil@gmail.com
- GitHub: [IrbadAbdeldjelil](https://github.com/IrbadAbdeldjelil)
<div align="center">

**If you find this tool helpful, please consider giving it a ⭐ on GitHub!**

</div>
