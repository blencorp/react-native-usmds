import "./global.css";
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

export const metadata = {
  title: "United States Mobile Design System (USMDS)",
  description: "The United States Mobile Design System (USMDS) is a design system for building mobile applications that follow the U.S. Web Design System (USWDS).",
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
  weight: ["400", "700"],
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
