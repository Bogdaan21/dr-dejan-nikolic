"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Locale } from "@/data/i18n";

type LanguageContextValue = {
  locale: Locale;
  montenegrinHref: string;
  englishHref: string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ locale, montenegrinHref, children }: { locale: Locale; montenegrinHref: string; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "sr-Latn-ME";
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, montenegrinHref, englishHref: "/en" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
