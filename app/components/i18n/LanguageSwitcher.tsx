"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/data/i18n";
import { useLanguage } from "./LanguageProvider";

/* Zastavice su SVG slike (flag-icons, MIT), jer Windows ne prikazuje emoji zastavice. */
const flags: Record<Locale, string> = {
  me: "/img/flags/me.svg",
  en: "/img/flags/gb.svg",
};

/** Padajući izbor jezika sa zastavicama (desktop zaglavlje i mobilni meni). */
export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, montenegrinHref, englishHref } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const options = [
    { locale: "me" as const, code: "MNE", label: "Crnogorski", hrefLang: "sr-ME", href: montenegrinHref },
    { locale: "en" as const, code: "EN", label: "English", hrefLang: "en", href: englishHref },
  ];
  const current = options.find((option) => option.locale === locale) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`language_switcher${mobile ? " language_switcher_mobile" : ""}${open ? " is_open" : ""}`}>
      <button
        type="button"
        className="lang_toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={locale === "en" ? "Choose language" : "Izaberite jezik"}
        onClick={() => setOpen((value) => !value)}
      >
        <img className="lang_flag" src={flags[current.locale]} width={26} height={26} alt="" />
        <span className="lang_current">{current.code}</span>
        <svg className="lang_chevron" viewBox="0 0 10 6" aria-hidden="true" focusable="false">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul className="lang_menu">
        {options.map((option) => (
          <li key={option.locale}>
            <a
              href={option.href}
              hrefLang={option.hrefLang}
              className={option.locale === locale ? "active" : undefined}
              aria-current={option.locale === locale ? "page" : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <img className="lang_flag" src={flags[option.locale]} width={24} height={24} alt="" />
              <span className="lang_text">
                {option.label}
                <span className="lang_code">{option.code}</span>
              </span>
              <svg className="lang_check" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
