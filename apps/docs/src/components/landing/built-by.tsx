import blen from "../../../images/logos/blen.png"
import SectionContent from "./section-content"

export default function BuiltBy() {
  return (
    <SectionContent title="Built by digital services practitioners" titleClassName="text-black">
      <div className="flex flex-col gap-4">
        <div
          className="h-12 w-40 rounded bg-contain bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${blen.src})` }}
        />
        <p className="text-neutral-600">
          BLEN is a digital services company that provides Emerging Technology
          (ML/AI, RPA), Digital Modernization (Legacy to Cloud) and Human-Centered
          Web/Mobile Design and Development.
        </p>
      </div>
    </SectionContent>
  )
}
