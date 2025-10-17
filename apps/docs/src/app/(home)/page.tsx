import HeroSection from "@/components/landing/hero-section"
import SiteFooter from "@/components/landing/site-footer"
import OpenSourceStrip from "@/components/landing/open-source-strip"
import KeyFeatures from "@/components/landing/key-features"
import KitchensinkSection from "@docs/src/components/landing/showcase-app-section"
import GetStarted from "@/components/landing/get-started"
import BuiltBy from "@/components/landing/built-by"
import WorkTogetherCta from "@/components/landing/work-together-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KeyFeatures />
      <OpenSourceStrip />
      <KitchensinkSection />
      <GetStarted />
      <BuiltBy />
      <WorkTogetherCta />
      <SiteFooter />
    </div>
  )
}
