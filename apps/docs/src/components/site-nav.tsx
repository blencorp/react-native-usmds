"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import Link from "next/link"
import { NavbarSidebarTrigger } from "fumadocs-ui/layouts/docs.client"
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type SiteNavLink = {
  href: string
  label: string
  external?: boolean
}

type SiteNavProps = {
  className?: string
  title?: ReactNode
  url?: string
  links?: SiteNavLink[]
  showDocsControls?: boolean
}

export function SiteNav({
  className,
  title,
  url = "/",
  links = [
    { href: "/docs", label: "Docs" },
    {
      href: "https://github.com/blencorp/react-native-usmds",
      label: "GitHub",
      external: true,
    },
  ],
  showDocsControls = false,
}: SiteNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      id="nd-subnav"
      className={cn(
        "top-[var(--fd-banner-height)] z-50 w-full text-white bg-[#162e51] border-b border-[#1a4480]",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:py-4">
        <Link
          href={url}
          className="text-lg font-semibold tracking-tight transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary focus-visible:ring-secondary-foreground/80"
        >
          {title}
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3 sm:gap-6">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium sm:gap-6" aria-label="Primary">
            {links.map(({ href, label, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
          {showDocsControls ? (
            <div className="flex flex-shrink-0 items-center gap-2">
              <SearchToggle className="text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary" />
              <NavbarSidebarTrigger className="-me-1.5 h-9 w-9 rounded-md text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary" />
            </div>
          ) : null}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {showDocsControls ? (
            <>
              <SearchToggle className="text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary" />
              <NavbarSidebarTrigger className="-me-1.5 h-9 w-9 rounded-md text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary" />
            </>
          ) : null}
          <button
            onClick={toggleMobileMenu}
            className="h-9 w-9 rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#1a4480] bg-[#162e51]">
          <nav className="px-4 py-3 space-y-3" aria-label="Primary">
            {links.map(({ href, label, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm font-medium transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

