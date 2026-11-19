import { contact, logos } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import { seo, siteName, siteUrl } from "@/data/seo";

/**
 * Strukturirani podaci (schema.org) za Google: ordinacija/ljekar, sajt, stranica
 * i često postavljana pitanja. Sadržaj je isti kao tekst na stranici.
 */
export default function JsonLd({ locale }: { locale: Locale }) {
  const s = seo[locale];
  const content = getContent(locale);
  const pageUrl = `${siteUrl}${s.path}`;
  const practiceId = `${siteUrl}/#practice`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": practiceId,
        name: siteName,
        description: s.description,
        url: siteUrl,
        image: `${siteUrl}${seo.me.ogImage}`,
        logo: `${siteUrl}${logos.horizontal.dark.split("?")[0]}`,
        telephone: "+38269222795",
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nikšić",
          addressCountry: "ME",
        },
        areaServed: [
          { "@type": "City", name: "Nikšić" },
          { "@type": "Country", name: locale === "en" ? "Montenegro" : "Crna Gora" },
        ],
        sameAs: [contact.instagramHref],
        availableService: content.treatments.items.map((item) => ({
          "@type": "MedicalProcedure",
          name: item.name,
          description: item.summary,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+38269222795",
          email: contact.email,
          contactType: locale === "en" ? "appointments" : "zakazivanje",
          availableLanguage: ["sr", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: ["sr-Latn-ME", "en"],
        publisher: { "@id": practiceId },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: s.title,
        description: s.description,
        inLanguage: s.htmlLang,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": practiceId },
        primaryImageOfPage: `${siteUrl}${s.ogImage}`,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: s.htmlLang,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON je sastavljen od podataka sajta, ne od korisničkog unosa.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
