import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Geist, Geist_Mono } from 'next/font/google';
import { NativeWindStyleSheet } from '@/components/native-wind-provider';
import { SafeAreaProvider } from '@/components/safe-area-provider';
import { CookiesProvider } from '@/components/cookies-provider';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'USMDS Docs',
  description: 'USWDS + ShadCN + Tailwind 4',
};

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn(fontSans.variable, fontMono.variable)} suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen">
        <NativeWindStyleSheet />
        <CookiesProvider>
          <SafeAreaProvider>
            <RootProvider>{children}</RootProvider>
          </SafeAreaProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
