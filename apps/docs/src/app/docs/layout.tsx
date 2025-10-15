import { DocsLayout } from "fumadocs-ui/layouts/docs"
import SiteNav from "@/components/site-nav"
import { baseOptions, siteNavConfig } from "@/app/layout.config"
import { source } from "@/lib/source"

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      nav={{
        ...baseOptions.nav,
        component: <SiteNav {...siteNavConfig} showDocsControls />,
      }}
    >
      {children}
    </DocsLayout>
  )
}
