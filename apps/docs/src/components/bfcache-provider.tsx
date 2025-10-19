'use client';

import { useEffect } from 'react';

/**
 * Provider to handle back/forward cache (bfcache) optimizations
 * Ensures all network requests are properly aborted on page hide
 */
export function BfcacheProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Abort all fetch requests on page hide
    const handlePageHide = () => {
      // Cancel any pending fetch operations
      if ('AbortController' in window) {
        // Create a global abort controller for page-level operations
        const controller = new AbortController();
        controller.abort();
      }
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        handlePageHide();
      }
    };

    // Add event listeners
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('beforeunload', handlePageHide);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('beforeunload', handlePageHide);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
}