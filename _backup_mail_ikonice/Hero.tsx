import { contact, external } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";

const mouseIconStyle = { fill: "none", stroke: "#fff", strokeWidth: "20px" };

export default function Hero({ locale }: { locale: Locale }) {
  const t = getContent(locale).hero;

  return (
    <div className="aali_tm_section" id="home">
      <div className="aali_tm_hero">
        <div className="hero_video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source
              src="/video/dr-nikolic-hero-mobile-720x1280.mp4"
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source src="/video/dr-nikolic-hero-1920x1080.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero_video_overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero_inner">
            <div className="content">
              <span className="hello">{t.profession}</span>
              <h1 className="name">{t.name}</h1>
              <div className="job">
                <span className="cd-headline rotate-1">
                  <span className="blc">{`${t.lead}\u00a0`}</span>
                  <span className="cd-words-wrapper">
                    {t.slogans.map((slogan, index) => (
                      <b key={slogan} className={index === 0 ? "is-visible" : undefined}>{slogan}</b>
                    ))}
                  </span>
                </span>
              </div>
              <div className="hero_buttons">
                <div className="aali_tm_button">
                  <a href={contact.whatsappHref} {...external}>
                    <span>
                      {`${t.cta} `}
                      <img className="svg" src="/img/svg/social/whatsapp.svg" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aali_tm_down hero_center_down">
          <div className="down-icon white">
            <a className="anchor" href="#about" aria-label={t.aboutLabel}>
              <svg width="26px" height="100%" viewBox="0 0 247 390" xmlns="http://www.w3.org/2000/svg">
                <path id="wheel" d="M123.359,79.775l0,72.843" style={mouseIconStyle} />
                <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={mouseIconStyle} />
              </svg>
            </a>
          </div>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href={contact.instagramHref} {...external} aria-label="Instagram">
                <img className="svg" src="/img/svg/social/instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href={contact.whatsappHref} {...external} aria-label="WhatsApp">
                <img className="svg" src="/img/svg/social/whatsapp.svg" alt="" />
              </a>
            </li>
            <li>
              <a href={contact.viberHref} aria-label="Viber">
                <img className="svg" src="/img/svg/social/viber.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hero_mail">
          <a className="line_anim" href={contact.phoneHref}>{contact.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
