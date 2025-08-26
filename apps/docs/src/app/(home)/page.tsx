"use client";

import "prismjs/themes/prism.css";
import { useEffect } from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import {GettingStartedSection} from "@/components/landing/GetStartedSection";
import { Footer } from "@/components/landing/Footer";


export default function HomePage() {
  useEffect(() => {
    (async () => {
      const Prism = (await import("prismjs")).default;
      // @ts-expect-error prism language plugin ships without types
      await import("prismjs/components/prism-bash");
      Prism.highlightAll();
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <GettingStartedSection />
      <Footer />
    </div>
  );
}
