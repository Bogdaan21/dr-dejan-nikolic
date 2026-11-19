import { logos, type SiteVariant } from "@/data/site";
import type { Locale } from "@/data/i18n";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import NavList from "../ui/NavList";

type HeaderProps = { variant: SiteVariant; locale: Locale };

/**
 * Glavno zaglavlje. Skripta šablona dodaje klasu "animate" pri skrolanju;
 * tada se prikazuje drugi logo (tamni na svijetloj, svijetli na tamnoj varijanti).
 */
export default function Header({ variant, locale }: HeaderProps) {
  const { horizontal } = logos;
  const scrolledLogo = variant === "dark" ? horizontal.light : horizontal.dark;

  return (
    <div className="aali_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a className="light brand_lockup" href="#home">
              <img className="brand_full_logo" src={horizontal.light} width={horizontal.width} height={horizontal.height} alt={logos.alt} />
            </a>
            <a className="dark brand_lockup" href="#home">
              <img className="brand_full_logo" src={scrolledLogo} width={horizontal.width} height={horizontal.height} alt={logos.alt} />
            </a>
          </div>
          <div className="menu">
            <NavList locale={locale} />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
