'use client';

// cookies-next doesn't need a provider, it works directly with Next.js cookies
// This is a pass-through component for compatibility
export function CookiesProvider({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}