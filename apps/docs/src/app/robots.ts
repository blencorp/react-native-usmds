import type { MetadataRoute } from "next";

const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://usmds.blencorp.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${appBaseUrl}/sitemap.xml`,
  };
}
