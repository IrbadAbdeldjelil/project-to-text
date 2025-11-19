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

Creates `thisProject.txt` with your project content.

## Usage

### Command Line
```bash
#install it globally
npm install -g project-to-text

# Basic usage
project-to-text

# Ignore specific files
project-to-text --ignore "dist/**,*.log"

# Using npx
npx project-to-text
```

### Programmatic Usage
```javascript
const exporter = require('project-to-text');

// Basic usage
await exporter();

// With custom ignore patterns
await exporter('current-file.js', ['dist/**', '*.log']);
```
## API

### `exporter(thisFile?, customIgnore?)`

- `thisFile` - Current file name to exclude (optional)
- `customIgnore` - Array of ignore patterns (optional)

## Features

- Scans entire project structure
- Smart ignoring of node_modules, build files, etc.
- Custom ignore patterns
- Clean formatted output
- Fast and lightweight

## Default Ignored Files

- `node_modules/**`
- `.git/**` 
- `dist/`, `build/`, `coverage/`
- `*.log`
- `package-lock.json`

## Output Format

```
FILE : src/index.js
CONTENT : // Your code here...

FILE : package.json
CONTENT : {
  "name": "my-project"
}
```

## Use Cases

- Share code with AI assistants (ChatGPT, Claude, etc.)
- Code reviews and analysis
- Project documentation
- Backup and sharing



## 👨‍💻 Author

**Irbad Abdeldjelil**
- Email: irbadabdeldjelil@gmail.com
- GitHub: [IrbadAbdeldjelil](https://github.com/IrbadAbdeldjelil)

## 🙏 Acknowledgments

- Built with [fast-glob](https://github.com/mrmlnc/fast-glob) for fast file scanning
- Inspired by the need for better AI code analysis workflows

---

<div align="center">

**If you find this tool helpful, please consider giving it a ⭐ on GitHub!**

</div>
