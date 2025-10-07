#!/usr/bin/env node

// Resolve the Next CLI regardless of where its package is installed.
const nextCliPath = (() => {
  try {
    return require.resolve('next/dist/bin/next');
  } catch (error) {
    console.error('Unable to resolve next/dist/bin/next. Is the "next" package installed?');
    throw error;
  }
})();

require(nextCliPath);
