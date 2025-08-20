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
      // @ts-expect-error prism language plugin ships without types
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
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-16 bg-muted"
      >
        <div className="container px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2
                id="getting-started-heading"
                className="text-3xl font-bold mb-10"
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

            <div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border">
                <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-sm overflow-x-auto">
                  <pre className="language-bash m-0">
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
