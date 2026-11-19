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
  keywords: string[];
  jobTitle: string;
  /** Usluge koje nemaju posebnu karticu na stranici (za strukturirane podatke). */
  extraServices: { name: string; description: string }[];
}> = {
  me: {
    path: "/me",
    htmlLang: "sr-Latn-ME",
    ogLocale: "sr_ME",
    title: "Dr Dejan Nikolić | Botoks, fileri i anti-age medicina, Nikšić",
    description:
      "Dr Dejan Nikolić, anti-age medicina u Nikšiću: botoks, hijaluronski fileri (usne, jagodice, jawline, brada), mezoterapija, PRP, podočnjaci i lipoliza.",
    ogTitle: "Dr Dejan Nikolić — anti-age medicina u Nikšiću",
    ogDescription:
      "Hijaluronski fileri, botoks, stimulatori kolagena, mezoterapija i lipoliza. Prirodni rezultati, plan prilagođen vama.",
    ogImage: "/img/og/og-logo.jpg",
    ogImageAlt: "Dr Dejan Nikolić — logo, anti-age medicina",
    keywords: [
      "dr Dejan Nikolić", "dr Nikolić", "Dejan Nikolić", "dr Dejan Nikolic", "dr Nikolic", "Dejan Nikolic",
      "anti-age medicina", "estetska medicina Nikšić", "botoks", "botoks Nikšić",
      "hijaluronski fileri", "fileri za usne", "fileri jagodice", "nazolabijalne bore", "fileri brada", "jawline",
      "mezoterapija", "lipoliza", "PRP", "PRP tretman", "stimulacija kolagena", "stimulatori kolagena", "podočnjaci", "tretman podočnjaka",
    ],
    jobTitle: "Doktor anti-age medicine",
    extraServices: [
      { name: "PRP", description: "PRP tretman (plazma bogata trombocitima) za obnovu i kvalitet kože." },
      { name: "Tretman podočnjaka", description: "Tretman podočnjaka za odmorniji i svježiji pogled." },
      { name: "Fileri za usne", description: "Hijaluronski fileri za volumen i konturu usana." },
      { name: "Fileri za jagodice", description: "Hijaluronski fileri za volumen i konturu jagodica." },
      { name: "Korekcija nazolabijalnih bora", description: "Hijaluronski fileri za ublažavanje nazolabijalnih bora." },
      { name: "Fileri za bradu i jawline", description: "Hijaluronski fileri za konturu brade i linije vilice (jawline)." },
    ],
  },
  en: {
    path: "/en",
    htmlLang: "en",
    ogLocale: "en_US",
    title: "Dr Dejan Nikolić | Botox, fillers & anti-age medicine, Nikšić",
    description:
      "Dr Dejan Nikolić, anti-age medicine in Nikšić, Montenegro: Botox, hyaluronic fillers (lips, cheekbones, jawline, chin), mesotherapy, PRP, under-eye and lipolysis.",
    ogTitle: "Dr Dejan Nikolić — anti-age medicine in Nikšić",
    ogDescription:
      "Hyaluronic fillers, botulinum toxin, collagen stimulators, mesotherapy and lipolysis. Natural results, a plan tailored to you.",
    ogImage: "/img/og/og-logo.jpg",
    ogImageAlt: "Dr Dejan Nikolić — logo, anti-age medicine",
    keywords: [
      "Dr Dejan Nikolić", "Dr Nikolić", "Dejan Nikolić", "Dr Dejan Nikolic", "Dr Nikolic", "Dejan Nikolic",
      "anti-age medicine", "aesthetic medicine Montenegro", "Botox", "Botox Nikšić",
      "hyaluronic fillers", "lip fillers", "cheekbone fillers", "nasolabial folds", "chin filler", "jawline filler",
      "mesotherapy", "lipolysis", "PRP", "PRP treatment", "collagen stimulation", "collagen stimulators", "under-eye treatment", "dark circles",
    ],
    jobTitle: "Anti-age medicine doctor",
    extraServices: [
      { name: "PRP", description: "PRP (platelet-rich plasma) treatment for skin renewal and quality." },
      { name: "Under-eye treatment", description: "Under-eye treatment for a more rested, fresher look." },
      { name: "Lip fillers", description: "Hyaluronic fillers for lip volume and contour." },
      { name: "Cheekbone fillers", description: "Hyaluronic fillers for cheekbone volume and contour." },
      { name: "Nasolabial fold correction", description: "Hyaluronic fillers to soften nasolabial folds." },
      { name: "Chin and jawline fillers", description: "Hyaluronic fillers for chin and jawline contour." },
    ],
  },
};

/** Jezičke verzije stranice (hreflang). */
export const languageAlternates = {
  "sr-ME": "/me",
  en: "/en",
  "x-default": "/me",
};

/** Varijante imena po kojima ljudi traže doktora (sa i bez dijakritika). */
export const nameVariants = ["Dr Dejan Nikolić", "dr Nikolić", "Dejan Nikolić", "Dr Dejan Nikolic", "Dr Nikolic", "Dejan Nikolic"];
