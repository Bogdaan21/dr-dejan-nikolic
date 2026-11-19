import { pad2 } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import SectionTitle from "../ui/SectionTitle";

export default function Consultation({ locale }: { locale: Locale }) {
  const t = getContent(locale).consultation;

  return (
    <div className="aali_tm_section" id="consultation">
      <div className="aali_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <SectionTitle
                kicker={t.kicker}
                title={t.title}
                text={t.text}
                align="left"
                color="light"
              />
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="dodo_progress consultation_steps">
                {t.steps.map((step, index) => (
                  <div key={step} className="progress_inner" data-value="100">
                    <span>
                      <span className="label">{`${pad2(index + 1)} · ${step}`}</span>
                      <span className="number">{pad2(index + 1)}</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="border moving_effect" data-direction="x" data-reverse="yes"></span>
      </div>
    </div>
  );
}
