/**
 * Ensure the docs app resolves React from its own node_modules instead of the
 * hoisted workspace copy. This keeps React and React DOM on the same version
 * when the repo is installed with `node-linker=hoisted`.
 */
const Module = require('module');
const path = require('path');

const originalResolveFilename = Module._resolveFilename;
const docsDir = path.resolve(__dirname, '..');
const docsPaths = Module._nodeModulePaths(docsDir);

const shouldAlias = (request) =>
  request === 'react' ||
  request === 'react-dom' ||
  request.startsWith('react/') ||
  request.startsWith('react-dom/');

Module._resolveFilename = function (request, parent, isMain, options) {
  if (shouldAlias(request)) {
    try {
      return originalResolveFilename.call(this, request, { paths: docsPaths }, isMain, options);
    } catch (error) {
      // fall back to regular resolution below
    }
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};
