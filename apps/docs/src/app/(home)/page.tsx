"use client";

import Link from "next/link";
import { FeaturesSection } from "@/components/landing/features-section";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism.css";
import { HeroSection } from "../../components/landing/HeroSection";

export default function HomePage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-gray-100">
            Key Features
          </h2>
          <FeaturesSection />
        </div>
      </section>

      {/* Featured Components Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Components
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/docs/components/alert" className="group">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  Alert
                </h3>
                <p className="text-gray-600 mb-4">
                  Display important messages to users with various severity
                  levels.
                </p>
                <p className="text-blue-600 font-medium">View component →</p>
              </div>
            </Link>

            <Link href="/docs/components/button" className="group">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  Button
                </h3>
                <p className="text-gray-600 mb-4">
                  Interactive button elements with multiple variants and sizes.
                </p>
                <p className="text-blue-600 font-medium">View component →</p>
              </div>
            </Link>

            <Link href="/docs/components/card" className="group">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                  Card
                </h3>
                <p className="text-gray-600 mb-4">
                  Versatile containers for displaying content and actions.
                </p>
                <p className="text-blue-600 font-medium">View component →</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/docs/components"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition inline-flex items-center"
            >
              View All Components
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get Started</h2>
              <p className="text-gray-600 mb-6">
                Start building your React Native application with USMDS
                components. Follow our step-by-step guide to install and
                configure the library.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Introduction
                </Link>
                <Link
                  href="/docs/getting-started/initial-setup"
                  className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition"
                >
                  Installation
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code className="language-bash">{`# Using npm
npx usmds init

# Using yarn
yarn usmds init`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 React Native USMDS</p>
            </div>
            <div className="flex gap-6">
              <Link href="/docs" className="hover:text-blue-400 transition">
                Documentation
              </Link>
              <Link
                href="/docs/components"
                className="hover:text-blue-400 transition"
              >
                Components
              </Link>
              <a
                href="https://github.com/blencorp/react-native-usmds"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}