import type { MetadataRoute } from "next"

const faviconPath = "/assets/images/favicons"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "United States Mobile Design System",
    short_name: "USMDS",
    description:
      "Accessible React Native components implementing the U.S. Web Design System for mobile apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#162e51",
    theme_color: "#162e51",
    icons: [
      {
        src: `${faviconPath}/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${faviconPath}/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: `${faviconPath}/apple-touch-icon-180x180.png`,
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: `${faviconPath}/favicon-196x196.png`,
        sizes: "196x196",
        type: "image/png",
      },
    ],
  }
}
