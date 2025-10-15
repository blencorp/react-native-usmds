import SiteNav from "@/components/site-nav"
import { siteNavConfig } from "@/app/layout.config"

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav {...siteNavConfig} />
      <main className="flex-1">{children}</main>
    </div>
  )
}
