import { logos } from "@/data/site";
import type { Locale } from "@/data/i18n";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import NavList from "../ui/NavList";

/** Mobilno zaglavlje sa hamburger menijem. */
export default function MobileMenu({ locale }: { locale: Locale }) {
  const { horizontal } = logos;

  return (
    <div className="aali_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a className="brand_lockup" href="#home">
              <img className="brand_full_logo" src={horizontal.dark} width={horizontal.width} height={horizontal.height} alt={logos.alt} />
            </a>
          </div>
          <div className="trigger">
            <LanguageSwitcher mobile />
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown_inner">
          <NavList locale={locale} />
        </div>
      </div>
    </div>
  );
}
