import type { MetadataRoute } from "next";

const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://usmds.blencorp.com";

const routes = ["", "/docs", "/docs/getting-started", "/docs/components"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${appBaseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));
}
