"use client";

import "prismjs/themes/prism.css";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/features-section";
import { ComponentShowcase } from "@/components/landing/ComponentShowcase";
import { Footer } from "@/components/landing/footer";
import InstallSnippet from "@/components/landing/InstallSnippet";

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const Prism = (await import("prismjs")).default;
      await import("prismjs/components/prism-bash");
      Prism.highlightAll();
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <ComponentShowcase />

      {/* Getting Started band — theme-aware + full-bleed */}
      <section
        aria-labelledby="getting-started-heading"
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-20 bg-muted"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2
                id="getting-started-heading"
                className="text-4xl font-bold mb-8"
              >
                Get Started
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Start building your React Native application with USMDS
                components. Follow our step-by-step guide to install and
                configure the library for federal compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/docs">Introduction</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/docs/getting-started/initial-setup">
                    Installation Guide
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
                <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-sm overflow-x-auto">
                  <pre className="language-bash">
                    <InstallSnippet />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
