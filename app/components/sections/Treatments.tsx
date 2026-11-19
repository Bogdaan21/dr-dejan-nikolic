import { treatments } from "@/data/treatments";
import { pad2 } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import SectionTitle from "../ui/SectionTitle";

export default function Treatments({ locale }: { locale: Locale }) {
  const copy = getContent(locale).treatments;

  return (
    <div className="aali_tm_section" id="treatments">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <SectionTitle
                    kicker={copy.intro.kicker}
                    title={copy.intro.title}
                    text={copy.intro.text}
                    align="left"
                    color="dark"
                  />
                </div>
              </li>
              {treatments.map((treatment, index) => {
                const t = copy.items[index];
                // Kartice naizmjenično ulaze sa desne i lijeve strane.
                const fromRight = index % 2 === 0;

                return (
                  <li
                    key={treatment.slug}
                    className={fromRight ? "wow fadeInRight" : "wow fadeInLeft"}
                    data-wow-duration="1s"
                    data-wow-delay={fromRight ? "0.1s" : undefined}
                  >
                    <div className="list_inner tilt-effect">
                      <span className="icon">
                        <img className="svg" src={treatment.icon} alt="" />
                        <img className="back" src="/img/svg/service.png" alt="" />
                      </span>
                      <div className="title">
                        <h3>{t.name}</h3>
                        <span className="price">
                          <span>{pad2(index + 1)}</span>
                          {` ${t.tagline}`}
                        </span>
                      </div>
                      <div className="text">
                        <p>{t.summary}</p>
                      </div>
                      <a className="aali_tm_full_link" href="#" aria-label={t.linkLabel}></a>
                      <img className="popup_service_image" src={treatment.image} alt={t.imageAlt} loading="lazy" decoding="async" />
                      <div className="service_hidden_details">
                        <div className="service_popup_informations">
                          <div className="descriptions">
                            {t.details.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <span className="square_left moving_effect" data-direction="y" data-reverse="yes"></span>
        <span className="square_right moving_effect" data-direction="y" data-reverse="yes"></span>
      </div>
    </div>
  );
}
