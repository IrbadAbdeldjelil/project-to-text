# Project-to-Text (PTT)

A CLI tool to export your entire project into a single text file for sharing, code review, or AI analysis.

---

## Installation

```bash
npm install -g project-to-text

```

> The command-line tool is called ptt.


---
### Usage

```bash
#just
 
ptt 

#or with some customisation

ptt [options]

```

> Running ptt without any options will export the entire project with default ignores and create thisProject.txt.



### Options

**--ignore=patterns**
Comma-separated files/folders to ignore (e.g., node_modules,dist,*.log).

**--include=exts**
Comma-separated file extensions to include (e.g., .js,.json,.txt).

**--output=filename**
Output file name (default: thisProject.txt).

**--help, -h**
Show help message.


---

### Default Ignored Files & Folders

**Node & Git**

node_modules/**
.git/**

**Build / Distribution**

dist/**
build/**
out/**
coverage/**
.next/**
.nuxt/**

**Environment & Logs**

.env*
**/*.log
**/*.tmp

**Media & Archives**

**/*.jpg, **/*.png, **/*.mp3, **/*.mp4, **/*.zip
**/*.db, **/*.sqlite

Any patterns listed in your .gitignore are also automatically applied.


---

### Example
```bash

ptt --ignore="dist,README.md,server.js" --include=".js,.json" --output="project.txt"

```

Report after running:

```bash

✅ Export complete → project.txt
Files exported: 42
Files skipped (size > 1MB): 3
Files skipped (not included extension): 5
Files by extension:
  .js → 30
  .json → 12

```
---

Sample Output File (thisProject.txt)

```text

FILE : src/reader.js
CONTENT : const fs = require('fs/promises');
...
FILE : src/scanner.js
CONTENT : const fg = require('fast-glob');
...

```
---

### Features

- Ignores files according to .gitignore.

- Ignores large files (>1MB).

- Clear export report with file counts by extension.

- Lightweight CLI with minimal dependencies (fast-glob).

---