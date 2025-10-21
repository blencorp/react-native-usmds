import Image from "next/image"

import SectionContent from "./section-content"

import uswds from "../../../images/logos/uswds.webp"
import expo from "../../../images/logos/expo.webp"
import reactNative from "../../../images/logos/react-native.webp"
import tailwind from "../../../images/logos/tailwind.webp"
import rnr from "../../../images/logos/react-native-reusables.webp"
import shadcn from "../../../images/logos/shadcn-ui.webp"

const actions = [
  {
    key: "uswds",
    src: uswds,
    alt: "United States Web Design System",
  },
  {
    key: "reactNative",
    src: reactNative,
    alt: "React Native",
  },
  {
    key: "tailwind",
    src: tailwind,
    alt: "Tailwind CSS",
  },
  {
    key: "expo",
    src: expo,
    alt: "Expo",
  },
  {
    key: "rnr",
    src: rnr,
    alt: "React Native Reusables",
  },
  {
    key: "shadcn/ui",
    src: shadcn,
    alt: "shadcn/ui",
  },
]

export default function OpenSourceStrip() {
  return (
    <SectionContent
      title="Modern open source & public standards"
      subtitle="Built with React Native, Tailwind / NativeWind, and aligned with the U.S. Web Design System (USWDS), USMDS brings consistency, compliance, and speed to federal, state, and local app development."
      titleClassName="text-black"
      style={{ backgroundColor: "var(--section-background-color-alt)" }}
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-gray-200 p-px shadow-sm sm:grid-cols-2">
        {actions.map((action) => (
          <div
            key={action.key}
            className="group relative flex items-center justify-center bg-white px-8 py-12 focus-within:-outline-offset-2 focus-within:outline-2 focus-within:outline-indigo-600"
          >
            <Image src={action.src} alt={action.alt} className="h-16 w-full object-contain" />
          </div>
        ))}
      </div>
    </SectionContent>
  )
}
