import { contact, external } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";

const galleryImages = [
  "/img/about/dr-nikolic-05_tretman_lice.jpg",
  "/img/about/dr-nikolic-09_konsultacija_ordinacija.jpg",
  "/img/about/dr-nikolic-10_doktor_i_klijentkinja.jpg",
];

export default function About({ locale }: { locale: Locale }) {
  const t = getContent(locale).about;

  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image clinic_doctor_photo">
              <img src="/img/about/dr-nikolic-03_tretman_doktor.jpg" alt={t.imageAlt} loading="lazy" decoding="async" />
              <div className="main" data-img-url="/img/about/dr-nikolic-03_tretman_doktor.jpg"></div>
              <span className="square moving_effect" data-direction="y" data-reverse="yes"></span>
              <span className="border">
                <span className="in moving_effect" data-direction="x" data-reverse="yes"></span>
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">{t.eyebrow}</span>
              <h3>
                {`${t.title} `}
                <span>{t.titleAccent}</span>
              </h3>
              <span className="subtitle">{t.subtitle}</span>
            </div>
            <div className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
              {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="aali_tm_button wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <a href={contact.instagramHref} {...external}>
                <span>
                  {`${t.instagram} `}
                  <img className="svg" src="/img/svg/social/instagram.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image clinic_doctor_photo clinic_doctor_photo_two">
              <img src="/img/about/dr-nikolic-04_tretman_mezoterapija.jpg" alt={t.imageAlt} loading="lazy" decoding="async" />
              <div className="main" data-img-url="/img/about/dr-nikolic-04_tretman_mezoterapija.jpg"></div>
              <div className="square moving_effect" data-direction="x" data-reverse="no"></div>
            </div>
          </div>
        </div>
        <div className="about_gallery" aria-label={locale === "en" ? "Photos from the practice" : "Fotografije iz ordinacije"}>
          {galleryImages.map((image, index) => (
            <figure key={image} className="wow fadeInUp" data-wow-duration="1s" data-wow-delay={`${(index + 1) / 10}s`}>
              <img src={image} alt={`${t.imageAlt} ${index + 2}`} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
