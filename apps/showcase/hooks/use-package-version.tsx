import * as React from 'react';

const NPM_REGISTRY_URL = 'https://registry.npmjs.org/@blen/usmds/latest';

export function usePackageVersion() {
  const [version, setVersion] = React.useState<string>('1.0.0');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;

    async function fetchVersion() {
      try {
        const response = await fetch(NPM_REGISTRY_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch package info');
        }
        const data = await response.json();
        if (isMounted && data.version) {
          setVersion(data.version);
        }
      } catch (error) {
        console.warn('Failed to fetch npm version, using fallback:', error);
        // Keep fallback version on error
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchVersion();

    return () => {
      isMounted = false;
    };
  }, []);

  return { version, loading };
}
