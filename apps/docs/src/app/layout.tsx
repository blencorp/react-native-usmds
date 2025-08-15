import "./global.css";
import { Inter } from "next/font/google";
import { Public_Sans, Merriweather, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";

export const metadata = {
  title: "USMDS Docs",
  description: "USWDS + ShadCN + Tailwind 4",
};

const inter = Inter({
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans-pro",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${publicSans.variable} ${merriweather.variable} ${sourceSansPro.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
