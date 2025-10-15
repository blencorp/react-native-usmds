"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { NavbarSidebarTrigger } from "fumadocs-ui/layouts/docs.client"
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle"
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
  title = "USMDS",
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
  return (
    <header
      id="nd-subnav"
      className={cn(
        "sticky top-[var(--fd-banner-height)] z-50 w-full bg-secondary text-secondary-foreground shadow-sm",
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
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium sm:gap-6">
            {links.map(({ href, label, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
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
              <NavbarSidebarTrigger className="-me-1.5 h-9 w-9 rounded-md text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary md:hidden" />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default SiteNav
