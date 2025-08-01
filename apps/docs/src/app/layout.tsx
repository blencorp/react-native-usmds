import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'USMDS Docs',
  description: 'USWDS + ShadCN + Tailwind 4',
};
const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans&family=Merriweather&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
