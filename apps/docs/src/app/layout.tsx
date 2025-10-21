import "./global.css";
import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import {
  Geist,
  Geist_Mono,
  Public_Sans,
  Instrument_Serif,
} from "next/font/google";
import { NativeWindStyleSheet } from "@/components/native-wind-provider";
import { SafeAreaProvider } from "@/components/safe-area-provider";
import { CookiesProvider } from "@/components/cookies-provider";
import { cn } from "@/lib/utils";

const faviconPath = "/assets/images/favicons";

export const metadata: Metadata = {
  title: "United States Mobile Design System (USMDS)",
  description:
    "The United States Mobile Design System (USMDS) is a design system for building mobile applications that follow the U.S. Web Design System (USWDS).",
  icons: {
    icon: [
      { url: `${faviconPath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${faviconPath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${faviconPath}/favicon-96x96.png`, sizes: "96x96", type: "image/png" },
      { url: `${faviconPath}/favicon-128x128.png`, sizes: "128x128", type: "image/png" },
      { url: `${faviconPath}/favicon-196x196.png`, sizes: "196x196", type: "image/png" },
      { url: `${faviconPath}/android-chrome-192x192.png`, sizes: "192x192", type: "image/png" },
      { url: `${faviconPath}/android-chrome-512x512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: `${faviconPath}/apple-touch-icon-57x57.png`, sizes: "57x57" },
      { url: `${faviconPath}/apple-touch-icon-60x60.png`, sizes: "60x60" },
      { url: `${faviconPath}/apple-touch-icon-72x72.png`, sizes: "72x72" },
      { url: `${faviconPath}/apple-touch-icon-76x76.png`, sizes: "76x76" },
      { url: `${faviconPath}/apple-touch-icon-114x114.png`, sizes: "114x114" },
      { url: `${faviconPath}/apple-touch-icon-120x120.png`, sizes: "120x120" },
      { url: `${faviconPath}/apple-touch-icon-144x144.png`, sizes: "144x144" },
      { url: `${faviconPath}/apple-touch-icon-152x152.png`, sizes: "152x152" },
      { url: `${faviconPath}/apple-touch-icon-167x167.png`, sizes: "167x167" },
      { url: `${faviconPath}/apple-touch-icon-180x180.png`, sizes: "180x180" },
    ],
    shortcut: [
      { url: `${faviconPath}/favicon-32x32.png` },
    ],
  },
  themeColor: "#162e51",
  other: {
    "msapplication-TileColor": "#162e51",
    "msapplication-TileImage": `${faviconPath}/mstile-144x144.png`,
    "msapplication-square70x70logo": `${faviconPath}/mstile-70x70.png`,
    "msapplication-square150x150logo": `${faviconPath}/mstile-150x150.png`,
    "msapplication-wide310x150logo": `${faviconPath}/mstile-310x150.png`,
    "msapplication-square310x310logo": `${faviconPath}/mstile-310x310.png`,
  },
};

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

const fontPublicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["100", "200", "400", "700"],
});

const fontInstrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"]
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        fontPublicSans.variable,
        fontSans.variable,
        fontMono.variable,
        fontInstrumentSerif.variable
      )}
      suppressHydrationWarning
    >
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
