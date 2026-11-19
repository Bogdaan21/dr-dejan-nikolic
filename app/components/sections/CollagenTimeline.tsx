import { wowDelay } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import ConsultationBanner from "../ui/ConsultationBanner";
import GuideSection from "../ui/GuideSection";

export default function CollagenTimeline({ locale }: { locale: Locale }) {
  const t = getContent(locale).collagen;

  return (
    <GuideSection
      id="collagen-guide"
      modifier="collagen_guide"
      kicker={t.kicker}
      title={t.title}
      text={t.text}
      titleColor="dark"
    >
      <div className="expect_timeline">
        {t.steps.map((step, index) => (
          <div
            key={step.title}
            className={`expect_step expect_step_${index + 1} wow fadeInUp`}
            data-wow-duration="1s"
            data-wow-delay={wowDelay(index + 1)}
          >
            <span className="expect_marker" aria-hidden="true">
              <span></span>
            </span>
            <span className="expect_kicker">{`${t.step} ${index + 1} ${t.of} ${t.steps.length}`}</span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <ConsultationBanner
        modifier="expect_outro"
        title={t.outro.title}
        emphasis={t.outro.emphasis}
        text={t.outro.text}
        locale={locale}
      />
    </GuideSection>
  );
}
