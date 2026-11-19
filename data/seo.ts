// SEO podaci: glavna adresa sajta, naslovi i opisi po jeziku.
import type { Locale } from "./i18n";

/** Glavna (kanonska) adresa sajta. */
export const siteUrl = "https://drdejannikolic.me";

export const siteName = "Dr Dejan Nikolić";

export const seo: Record<Locale, {
  path: string;
  htmlLang: string;
  ogLocale: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogImageAlt: string;
}> = {
  me: {
    path: "/me",
    htmlLang: "sr-Latn-ME",
    ogLocale: "sr_ME",
    title: "Dr Dejan Nikolić | Anti-age i estetska medicina u Nikšiću",
    description:
      "Anti-age i estetska medicina u Nikšiću. Hijaluronski fileri, botoks, stimulatori kolagena, mezoterapija i lipoliza za prirodan i odmoran izgled. Zakažite konsultaciju.",
    ogTitle: "Dr Dejan Nikolić — anti-age medicina u Nikšiću",
    ogDescription:
      "Hijaluronski fileri, botoks, stimulatori kolagena, mezoterapija i lipoliza. Prirodni rezultati, plan prilagođen vama.",
    ogImage: "/img/og/og-logo.jpg",
    ogImageAlt: "Dr Dejan Nikolić — logo, anti-age medicina",
  },
  en: {
    path: "/en",
    htmlLang: "en",
    ogLocale: "en_US",
    title: "Dr Dejan Nikolić | Anti-age & aesthetic medicine in Nikšić, Montenegro",
    description:
      "Anti-age and aesthetic medicine in Nikšić, Montenegro. Hyaluronic fillers, botulinum toxin, collagen stimulators, mesotherapy and lipolysis for a natural, rested look.",
    ogTitle: "Dr Dejan Nikolić — anti-age medicine in Nikšić",
    ogDescription:
      "Hyaluronic fillers, botulinum toxin, collagen stimulators, mesotherapy and lipolysis. Natural results, a plan tailored to you.",
    ogImage: "/img/og/og-logo.jpg",
    ogImageAlt: "Dr Dejan Nikolić — logo, anti-age medicine",
  },
};

/** Jezičke verzije stranice (hreflang). */
export const languageAlternates = {
  "sr-ME": "/me",
  en: "/en",
  "x-default": "/me",
};
