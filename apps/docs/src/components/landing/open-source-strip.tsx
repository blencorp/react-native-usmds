import Image from "next/image"

import SectionContent from "./section-content"

const actions = [
  {
    key: "uswds",
    src: "/images/logos/uswds.webp",
    alt: "United States Web Design System",
  },
  {
    key: "reactNative",
    src: "/images/logos/react-native.webp",
    alt: "React Native",
  },
  {
    key: "tailwind",
    src: "/images/logos/tailwind.webp",
    alt: "Tailwind CSS",
  },
  {
    key: "expo",
    src: "/images/logos/expo.webp",
    alt: "Expo",
  },
  {
    key: "rnr",
    src: "/images/logos/react-native-reusables.webp",
    alt: "React Native Reusables",
  },
  {
    key: "shadcn/ui",
    src: "/images/logos/shadcn-ui.webp",
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
            <Image
              src={action.src}
              alt={action.alt}
              className="h-16 w-full object-contain"
              width={200}
              height={64}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </SectionContent>
  )
}
