#!/usr/bin/env node

const nextCliPath = (() => {
  try {
    return require.resolve('next/dist/bin/next');
  } catch (error) {
    console.error('Unable to resolve next/dist/bin/next. Is the \"next\" package installed?');
    throw error;
  }
})();

require(nextCliPath);
