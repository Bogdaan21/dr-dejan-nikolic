import { pad2, wowDelay } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import ConsultationBanner from "../ui/ConsultationBanner";
import GuideSection from "../ui/GuideSection";

export default function SkinDecades({ locale }: { locale: Locale }) {
  const t = getContent(locale).skin;
  const total = pad2(t.decades.length);

  return (
    <GuideSection
      id="antiage"
      kicker={t.kicker}
      title={t.title}
      text={t.text}
      titleColor="light"
    >
      <div className="decade_grid">
        {t.decades.map((decade, index) => (
          <div key={decade.age} className="decade_cell wow fadeInUp" data-wow-duration="1s" data-wow-delay={wowDelay(index + 1)}>
            <article className="decade_card">
              <div className="decade_card_head">
                <strong>{decade.age}</strong>
                <span>{`${pad2(index + 1)} / ${total}`}</span>
              </div>
              <h4>{decade.title}</h4>
              <div className="decade_card_block decade_card_what">
                <span>{t.happens}</span>
                <p>{decade.happens}</p>
              </div>
              <div className="decade_card_block decade_card_help">
                <span>{t.helps}</span>
                <p>{decade.helps}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
      <ConsultationBanner
        title={t.outro.title}
        emphasis={t.outro.emphasis}
        text={t.outro.text}
        locale={locale}
      />
    </GuideSection>
  );
}
