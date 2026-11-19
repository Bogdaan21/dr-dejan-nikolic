// Osnovni podaci o ordinaciji koji se ponavljaju kroz cijeli sajt.

export const contact = {
  phoneDisplay: "069 222 795",
  phoneHref: "tel:+38269222795",
  whatsappHref: "https://wa.me/38269222795",
  viberHref: "viber://chat?number=%2B38269222795",
  instagramHref: "https://www.instagram.com/dr_dejan_nikolic/",
  instagramHandle: "@dr_dejan_nikolic",
} as const;

/** Atributi za linkove koji se otvaraju u novom tabu. */
export const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export type NavItem = { href: string; label: string; hidden?: boolean };

export const navigation: NavItem[] = [
  { href: "#home", label: "Početna" },
  { href: "#about", label: "O doktoru" },
  { href: "#consultation", label: "Konsultacija" },
  { href: "#portfolio", label: "Portfolio", hidden: true },
  { href: "#treatments", label: "Tretmani" },
  { href: "#resume", label: "My Resume", hidden: true },
  { href: "#instagram", label: "Instagram", hidden: true },
  { href: "#contact", label: "Kontakt" },
];

export const logos = {
  alt: "Dr Dejan Nikolić – anti-age medicina",
  horizontal: {
    light: "/img/logo/dr-dejan-nikolic-logo-light.png?v=2",
    dark: "/img/logo/dr-dejan-nikolic-logo-dark.png?v=2",
    width: 980,
    height: 246,
  },
  vertical: {
    light: "/img/logo/dr-dejan-nikolic-logo-vertical-light.png",
    width: 582,
    height: 420,
  },
} as const;

/** Varijanta stranice: "light" je početna stranica, "dark" je /dark. */
export type SiteVariant = "light" | "dark";

/** Vrijednost za data-wow-delay: 1 → "0.1s", 2 → "0.2s"… */
export function wowDelay(step: number) {
  return `${step / 10}s`;
}

/** 1 → "01" */
export function pad2(value: number) {
  return String(value).padStart(2, "0");
}
