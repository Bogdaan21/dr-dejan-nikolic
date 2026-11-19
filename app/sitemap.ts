import type { MetadataRoute } from "next";
import { languageAlternates, siteUrl } from "@/data/seo";

const languages = Object.fromEntries(
  Object.entries(languageAlternates).map(([lang, path]) => [lang, `${siteUrl}${path}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/me`, lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${siteUrl}/en`, lastModified, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
