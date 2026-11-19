"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, montenegrinHref, englishHref } = useLanguage();

  return (
    <nav className={mobile ? "language_switcher language_switcher_mobile" : "language_switcher"} aria-label="Language">
      <a className={locale === "me" ? "active" : undefined} href={montenegrinHref} hrefLang="sr-ME" aria-current={locale === "me" ? "page" : undefined}>MNE</a>
      <span aria-hidden="true">/</span>
      <a className={locale === "en" ? "active" : undefined} href={englishHref} hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
    </nav>
  );
}
