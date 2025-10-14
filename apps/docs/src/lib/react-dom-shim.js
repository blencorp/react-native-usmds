// Shim for deprecated React DOM methods that were removed in React 19
// react-native-web still tries to use these

export function hydrate() {
  // No-op for web
  console.warn('hydrate is deprecated and not available in React 19');
}

export function unmountComponentAtNode() {
  // No-op for web
  console.warn('unmountComponentAtNode is deprecated and not available in React 19');
}

// Re-export everything else from react-dom
export * from 'react-dom';
