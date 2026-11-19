import { logos, type SiteVariant } from "@/data/site";
import type { Locale } from "@/data/i18n";
import LanguageProvider from "./i18n/LanguageProvider";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MobileMenu from "./layout/MobileMenu";
import About from "./sections/About";
import CollagenTimeline from "./sections/CollagenTimeline";
import Consultation from "./sections/Consultation";
import Contact from "./sections/Contact";
import Faq from "./sections/Faq";
import Hero from "./sections/Hero";
import InstagramFeed from "./sections/InstagramFeed";
import MimicWrinkles from "./sections/MimicWrinkles";
import Myths from "./sections/Myths";
import Portfolio from "./sections/Portfolio";
import Resume from "./sections/Resume";
import SkinDecades from "./sections/SkinDecades";
import Treatments from "./sections/Treatments";
import ThemeRuntime from "./ThemeRuntime";

type SitePageProps = { variant?: SiteVariant; locale?: Locale };

// Sekcije ostaju u projektu i mogu se ponovo uključiti kada sadržaj bude spreman.
const showPlaceholderSections = false;

/**
 * Cijela početna stranica. Animacije, popup prozore i ostale efekte pokreću
 * skripte šablona (jQuery) koje ThemeRuntime učitava nakon prikaza stranice,
 * zato klase i data-* atributi u komponentama moraju ostati kao u šablonu.
 */
export default function SitePage({ variant = "light", locale = "me" }: SitePageProps) {
  return (
    <LanguageProvider locale={locale} montenegrinHref="/me">
      <main>
        {/* Uvod: logo se "upisuje" s lijeva na desno, ispod ide linija napretka */}
        <div id="preloader">
          <div className="preloader_brand">
            <img
              className="preloader_logo preloader_logo_ghost"
              src={logos.horizontal.dark}
              width={logos.horizontal.width}
              height={logos.horizontal.height}
              alt=""
              aria-hidden="true"
            />
            <img
              className="preloader_logo preloader_logo_fill"
              src={logos.horizontal.dark}
              width={logos.horizontal.width}
              height={logos.horizontal.height}
              alt={logos.alt}
            />
          </div>
          <div className="preloader_bar" aria-hidden="true">
            <span></span>
          </div>
        </div>
        <div className="aali_tm_all_wrap" data-magic-cursor="show" data-color="crimson">
          {/* Popup prozor koji skripta šablona puni sadržajem */}
          <div className="aali_tm_modalbox">
            <div className="box_inner">
              <div className="close">
                <a href="#">
                  <img className="svg" src="/img/svg/cancel.svg" alt="Zatvori" />
                </a>
              </div>
              <div className="description_wrap"></div>
            </div>
          </div>

          <MobileMenu locale={locale} />
          <Header variant={variant} locale={locale} />

          <Hero locale={locale} />
          <About locale={locale} />
          <Consultation locale={locale} />
          {showPlaceholderSections ? <Portfolio /> : null}
          <Treatments locale={locale} />
          <SkinDecades locale={locale} />
          <CollagenTimeline locale={locale} />
          {showPlaceholderSections ? <Resume /> : null}
          <Myths locale={locale} />
          <Faq locale={locale} />
          <MimicWrinkles locale={locale} />
          {showPlaceholderSections ? <InstagramFeed /> : null}
          <Contact locale={locale} />

          <Footer locale={locale} />

          <div className="mouse-cursor cursor-outer"></div>
          <div className="mouse-cursor cursor-inner"></div>
        </div>
      </main>
      <ThemeRuntime bodyClassName={variant === "dark" ? "dark" : ""} />
      <noscript>
        <div className="migration-noscript">{locale === "en" ? "JavaScript is required for website animations." : "JavaScript je potreban za animacije na sajtu."}</div>
      </noscript>
    </LanguageProvider>
  );
}
