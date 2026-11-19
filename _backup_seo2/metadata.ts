import type { Metadata } from "next";
import type { Locale } from "@/data/i18n";
import { languageAlternates, seo, siteName } from "@/data/seo";

/** Meta podaci za jezičku verziju stranice (naslov, opis, canonical, hreflang, Open Graph). */
export function pageMetadata(locale: Locale): Metadata {
  const s = seo[locale];
  const other = locale === "me" ? seo.en : seo.me;

  return {
    title: { absolute: s.title },
    description: s.description,
    alternates: { canonical: s.path, languages: languageAlternates },
    openGraph: {
      type: "website",
      url: s.path,
      siteName,
      locale: s.ogLocale,
      alternateLocale: [other.ogLocale],
      title: s.ogTitle,
      description: s.ogDescription,
      images: [{ url: s.ogImage, width: 1200, height: 630, alt: s.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: s.ogTitle,
      description: s.ogDescription,
      images: [s.ogImage],
    },
  };
}
