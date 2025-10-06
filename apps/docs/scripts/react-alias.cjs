const Module = require('module');
const path = require('path');

const originalResolveFilename = Module._resolveFilename;
const docsDir = path.resolve(__dirname, '..');
const rootDir = path.resolve(docsDir, '..', '..');

const docsPaths = Module._nodeModulePaths(docsDir);
const rootPaths = Module._nodeModulePaths(rootDir);

const resolutionContexts = [{ paths: docsPaths }, { paths: rootPaths }];

const shouldAlias = (request) =>
  request === 'react' ||
  request === 'react-dom' ||
  request.startsWith('react/') ||
  request.startsWith('react-dom/');

Module._resolveFilename = function (request, parent, isMain, options) {
  if (shouldAlias(request)) {
    for (const context of resolutionContexts) {
      try {
        return originalResolveFilename.call(this, request, context, isMain, options);
      } catch (_) {
        // try next context
      }
    }
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};
