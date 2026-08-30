import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { categories } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "how-to-rank-1-on-google-uk",
    "seo-guides",
    "seo-tools",
    "seo-glossary",
    "about",
    "contact",
    "privacy-policy",
    "terms",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}/${route ? `${route}/` : ""}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : route === "how-to-rank-1-on-google-uk" ? 0.9 : 0.6,
    })),
    ...categories.map((cat) => ({
      url: `${SITE.url}/${cat.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
