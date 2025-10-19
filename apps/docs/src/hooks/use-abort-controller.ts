import { useEffect, useRef } from 'react';

/**
 * Hook to manage AbortController for network requests
 * Automatically aborts on unmount to prevent bfcache issues
 */
export function useAbortController() {
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Create new AbortController
    abortControllerRef.current = new AbortController();

    // Cleanup function - abort any pending requests
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return abortControllerRef.current?.signal;
}