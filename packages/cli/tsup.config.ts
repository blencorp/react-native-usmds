import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'node18',
  outDir: 'dist',
  clean: true,
  bundle: true,
  minify: true,
  esbuildOptions: (options) => {
    options.banner = {
      js: '#!/usr/bin/env node'
    };
  }
});
