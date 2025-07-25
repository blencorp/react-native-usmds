// scripts/generate-component-folders-index.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target folder: /apps/storybook/components
const componentsDir = path.resolve(__dirname, '../apps/storybook/components');
const outputPath = path.join(componentsDir, 'index.ts');

const entries = await fs.readdir(componentsDir, { withFileTypes: true });
const folders = entries.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name).sort();

const exports = folders.map(name => `export * from "./${name}";`).join('\n');
await fs.writeFile(outputPath, exports + '\n');

console.log(`✅ index.ts created with ${folders.length} component folders.`);
