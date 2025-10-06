#!/usr/bin/env node
/**
 * Post-build script to replace local paths with npm package paths
 * Run after: npx shadcn build
 */

const fs = require('fs');
const path = require('path');

const registryDir = path.join(__dirname, '../public/r/usa');
const files = fs.readdirSync(registryDir).filter(f => f.endsWith('.json'));

const localPath = './src/usa/components/ui/';
const npmPath = './node_modules/@blen/react-native-usmds-ui-internal/src/usa/components/ui/';

files.forEach(file => {
  const filePath = path.join(registryDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace all occurrences
  content = content.replace(new RegExp(localPath.replace(/\//g, '\\/'), 'g'), npmPath);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Fixed paths in ${file}`);
});

console.log(`\n✨ Fixed ${files.length} files`);
