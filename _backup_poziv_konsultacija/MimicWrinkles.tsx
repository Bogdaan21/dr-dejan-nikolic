import { contact, external, pad2, wowDelay } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import GuideSection from "../ui/GuideSection";

export default function MimicWrinkles({ locale }: { locale: Locale }) {
  const t = getContent(locale).mimic;
  const common = getContent(locale).common;

  return (
    <GuideSection
      id="mimic-wrinkles"
      modifier="mimic_guide"
      kicker={t.kicker}
      title={t.title}
      text={t.text}
      titleColor="light"
    >
      <div className="mimic_layout">
        <div className="mimic_rows">
          {t.rows.map((row, index) => (
            <div key={row.title} className="mimic_row wow fadeInUp" data-wow-duration="1s" data-wow-delay={wowDelay(index + 1)}>
              <strong>{pad2(index + 1)}</strong>
              <div className="mimic_row_text">
                <h4>{row.title}</h4>
                <p>{row.text}</p>
              </div>
            </div>
          ))}
        </div>
        <aside className="mimic_panel wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <span className="mimic_panel_kicker">{t.prevention}</span>
          <div className="mimic_panel_text">
            <h4>
              {`${t.panelTitle} `}
              <em>{t.panelEmphasis}</em>
            </h4>
            <span className="collagen_rule"></span>
            <p>{t.panelText}</p>
          </div>
          <a className="mimic_panel_link" href={contact.whatsappHref} {...external}>
            {common.book}
          </a>
        </aside>
      </div>
    </GuideSection>
  );
}
