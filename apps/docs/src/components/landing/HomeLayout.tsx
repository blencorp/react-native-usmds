"use client";
import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Github, Search, Sun, Moon, X } from "lucide-react";

// Expanded documentation data to include comprehensive USMDS content
const documentationData = [
  // Getting Started
  {
    title: "Getting Started",
    content:
      "Learn how to install and configure USMDS for your React Native application with step-by-step instructions",
    url: "/docs/getting-started",
    category: "Introduction",
  },
  {
    title: "Installation Guide",
    content:
      "Complete installation instructions for npm, yarn, and expo projects with troubleshooting tips",
    url: "/docs/installation",
    category: "Introduction",
  },
  {
    title: "Quick Start",
    content:
      "Get up and running with USMDS in 5 minutes with our quick start guide and examples",
    url: "/docs/quick-start",
    category: "Introduction",
  },
  {
    title: "Migration Guide",
    content:
      "Migrate from other UI libraries to USMDS with our comprehensive migration guide",
    url: "/docs/migration",
    category: "Introduction",
  },

  // Components
  {
    title: "Button Component",
    content:
      "Accessible button component with multiple variants, sizes, and states for government applications",
    url: "/docs/components/button",
    category: "Components",
  },
  {
    title: "Card Component",
    content:
      "Flexible container component to group related content and actions with proper spacing and styling",
    url: "/docs/components/card",
    category: "Components",
  },
  {
    title: "Badge Component",
    content:
      "Small status indicators and labels for categorizing content with government-approved colors",
    url: "/docs/components/badge",
    category: "Components",
  },
  {
    title: "Input Component",
    content:
      "Form input fields with validation, error states, and accessibility features for data collection",
    url: "/docs/components/input",
    category: "Components",
  },
  {
    title: "Checkbox Component",
    content:
      "Accessible checkbox inputs with proper labeling and form integration for user selections",
    url: "/docs/components/checkbox",
    category: "Components",
  },
  {
    title: "Radio Button Component",
    content:
      "Radio button groups for single-selection options with proper accessibility and styling",
    url: "/docs/components/radio",
    category: "Components",
  },
  {
    title: "Select Component",
    content:
      "Dropdown select menus with search functionality and keyboard navigation support",
    url: "/docs/components/select",
    category: "Components",
  },
  {
    title: "Modal Component",
    content:
      "Accessible modal dialogs with focus management and proper ARIA attributes for overlays",
    url: "/docs/components/modal",
    category: "Components",
  },
  {
    title: "Alert Component",
    content:
      "Status alerts and notifications with different severity levels and dismissible options",
    url: "/docs/components/alert",
    category: "Components",
  },
  {
    title: "Navigation Component",
    content:
      "Primary and secondary navigation components with responsive design and accessibility",
    url: "/docs/components/navigation",
    category: "Components",
  },
  {
    title: "Header Component",
    content:
      "Government-compliant header with branding, navigation, and required federal elements",
    url: "/docs/components/header",
    category: "Components",
  },
  {
    title: "Footer Component",
    content:
      "Standard government footer with required links, contact information, and compliance statements",
    url: "/docs/components/footer",
    category: "Components",
  },
  {
    title: "Table Component",
    content:
      "Data tables with sorting, filtering, and responsive design for displaying structured information",
    url: "/docs/components/table",
    category: "Components",
  },
  {
    title: "Accordion Component",
    content:
      "Collapsible content sections with proper ARIA attributes for organizing information",
    url: "/docs/components/accordion",
    category: "Components",
  },
  {
    title: "Tabs Component",
    content:
      "Tabbed interface component with keyboard navigation and accessible content switching",
    url: "/docs/components/tabs",
    category: "Components",
  },
  {
    title: "Breadcrumb Component",
    content:
      "Navigation breadcrumbs showing user location within the application hierarchy",
    url: "/docs/components/breadcrumb",
    category: "Components",
  },
  {
    title: "Pagination Component",
    content:
      "Page navigation controls for large datasets with accessibility and responsive design",
    url: "/docs/components/pagination",
    category: "Components",
  },
  {
    title: "Progress Component",
    content:
      "Progress indicators and loading states with proper ARIA attributes for user feedback",
    url: "/docs/components/progress",
    category: "Components",
  },
  {
    title: "Tooltip Component",
    content:
      "Accessible tooltips and help text with proper positioning and keyboard support",
    url: "/docs/components/tooltip",
    category: "Components",
  },

  // Design Tokens
  {
    title: "Color System",
    content:
      "Government-compliant color palette with accessibility guidelines and usage examples",
    url: "/docs/design-tokens/colors",
    category: "Design Tokens",
  },
  {
    title: "Typography",
    content:
      "Font families, sizes, weights, and typography scales for government applications",
    url: "/docs/design-tokens/typography",
    category: "Design Tokens",
  },
  {
    title: "Spacing System",
    content:
      "Consistent spacing tokens and layout guidelines for proper visual hierarchy",
    url: "/docs/design-tokens/spacing",
    category: "Design Tokens",
  },
  {
    title: "Border Radius",
    content:
      "Standardized border radius values for consistent component styling across applications",
    url: "/docs/design-tokens/border-radius",
    category: "Design Tokens",
  },
  {
    title: "Shadows",
    content:
      "Elevation and shadow tokens for creating depth and visual hierarchy in interfaces",
    url: "/docs/design-tokens/shadows",
    category: "Design Tokens",
  },
  {
    title: "Breakpoints",
    content:
      "Responsive design breakpoints and media queries for mobile-first development",
    url: "/docs/design-tokens/breakpoints",
    category: "Design Tokens",
  },

  // Design Principles
  {
    title: "Design Principles",
    content:
      "Core design principles for federal mobile applications including accessibility and usability",
    url: "/docs/design-principles",
    category: "Guidelines",
  },
  {
    title: "Accessibility Guidelines",
    content:
      "Section 508 compliance guidelines and WCAG 2.1 AA standards for government applications",
    url: "/docs/accessibility",
    category: "Guidelines",
  },
  {
    title: "Government Branding",
    content:
      "Official branding guidelines, logos, and visual identity requirements for federal apps",
    url: "/docs/branding",
    category: "Guidelines",
  },
  {
    title: "Content Guidelines",
    content:
      "Writing style, tone, and content structure guidelines for government communications",
    url: "/docs/content-guidelines",
    category: "Guidelines",
  },
  {
    title: "Mobile-First Design",
    content:
      "Mobile-first design principles and responsive design patterns for government applications",
    url: "/docs/mobile-first",
    category: "Guidelines",
  },

  // Patterns
  {
    title: "Form Patterns",
    content:
      "Common form layouts, validation patterns, and user experience best practices",
    url: "/docs/patterns/forms",
    category: "Patterns",
  },
  {
    title: "Navigation Patterns",
    content:
      "Navigation structures, menu patterns, and wayfinding solutions for complex applications",
    url: "/docs/patterns/navigation",
    category: "Patterns",
  },
  {
    title: "Data Display Patterns",
    content:
      "Patterns for displaying data, charts, tables, and complex information structures",
    url: "/docs/patterns/data-display",
    category: "Patterns",
  },
  {
    title: "Search Patterns",
    content:
      "Search interface patterns, filtering, and result display for government data",
    url: "/docs/patterns/search",
    category: "Patterns",
  },
  {
    title: "Authentication Patterns",
    content:
      "Login, registration, and authentication flow patterns for secure government applications",
    url: "/docs/patterns/authentication",
    category: "Patterns",
  },
  {
    title: "Error Handling Patterns",
    content:
      "Error states, validation messages, and recovery patterns for better user experience",
    url: "/docs/patterns/error-handling",
    category: "Patterns",
  },

  // API Reference
  {
    title: "Component API Reference",
    content:
      "Complete API documentation for all USMDS components with props and methods",
    url: "/docs/api/components",
    category: "API Reference",
  },
  {
    title: "Theme API",
    content:
      "Theming system API for customizing colors, fonts, and design tokens",
    url: "/docs/api/theme",
    category: "API Reference",
  },
  {
    title: "Utility Functions",
    content:
      "Helper functions and utilities provided by USMDS for common development tasks",
    url: "/docs/api/utilities",
    category: "API Reference",
  },
  {
    title: "Hooks Reference",
    content:
      "Custom React hooks provided by USMDS for state management and functionality",
    url: "/docs/api/hooks",
    category: "API Reference",
  },

  // Examples
  {
    title: "Example Applications",
    content:
      "Complete example applications built with USMDS showing real-world usage patterns",
    url: "/docs/examples/applications",
    category: "Examples",
  },
  {
    title: "Code Examples",
    content:
      "Code snippets and implementation examples for common use cases and patterns",
    url: "/docs/examples/code-snippets",
    category: "Examples",
  },
  {
    title: "Templates",
    content:
      "Ready-to-use page templates and layouts for common government application needs",
    url: "/docs/examples/templates",
    category: "Examples",
  },

  // Advanced
  {
    title: "Customization Guide",
    content:
      "Advanced customization techniques for adapting USMDS to specific agency requirements",
    url: "/docs/advanced/customization",
    category: "Advanced",
  },
  {
    title: "Performance Optimization",
    content:
      "Performance best practices and optimization techniques for USMDS applications",
    url: "/docs/advanced/performance",
    category: "Advanced",
  },
  {
    title: "Testing Guide",
    content:
      "Testing strategies and tools for USMDS components and applications",
    url: "/docs/advanced/testing",
    category: "Advanced",
  },
  {
    title: "Deployment Guide",
    content:
      "Deployment strategies and configuration for government hosting environments",
    url: "/docs/advanced/deployment",
    category: "Advanced",
  },

  // Compliance
  {
    title: "Section 508 Compliance",
    content:
      "Complete Section 508 compliance documentation and testing procedures",
    url: "/docs/compliance/section-508",
    category: "Compliance",
  },
  {
    title: "FISMA Requirements",
    content:
      "Federal Information Security Management Act compliance and security guidelines",
    url: "/docs/compliance/fisma",
    category: "Compliance",
  },
  {
    title: "Privacy Guidelines",
    content:
      "Privacy protection guidelines and data handling requirements for government applications",
    url: "/docs/compliance/privacy",
    category: "Compliance",
  },
];

function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(documentationData);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = documentationData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(documentationData);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {results.length > 0 ? (
            results.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                onClick={onClose}
                className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {item.content}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded ml-3">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              No results found for &quot;{query}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UswdsTopBar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage or detect system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleThemeToggle = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              usmds docs
            </Link>
            <Link
              href="/docs"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Documentation
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="relative flex items-center gap-3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-blue-500 dark:hover:border-blue-400 transition-colors min-w-64"
            >
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <span className="text-gray-500 dark:text-gray-400">
                Search documentation...
              </span>
              <div className="flex items-center gap-1 ml-auto">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-300">
                  Ctrl
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-300">
                  K
                </kbd>
              </div>
            </button>

            <button
              onClick={() => handleThemeToggle("light")}
              className={`p-2 transition-colors rounded-md ${
                theme === "light"
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              aria-label="Switch to light theme"
              aria-pressed={theme === "light"}
            >
              <Sun className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleThemeToggle("dark")}
              className={`p-2 transition-colors rounded-md ${
                theme === "dark"
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              aria-label="Switch to dark theme"
              aria-pressed={theme === "dark"}
            >
              <Moon className="w-4 h-4" />
            </button>

            <a
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              href="https://github.com/blencorp/react-native-usmds"
              target="_blank"
              rel="noreferrer"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <UswdsTopBar />
      <main
        id="main-content"
        role="main"
        className="bg-white dark:bg-gray-900 transition-colors min-h-screen"
      >
        {children}
      </main>
    </>
  );
}
