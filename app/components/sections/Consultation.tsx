import { contact, external, pad2 } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import CallButton from "../ui/CallButton";
import SectionTitle from "../ui/SectionTitle";

export default function Consultation({ locale }: { locale: Locale }) {
  const t = getContent(locale).consultation;
  const common = getContent(locale).common;

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
              <div className="consultation_actions">
                <a className="consultation_whatsapp" href={contact.whatsappHref} {...external}>
                  <svg className="call_btn_icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      fill="currentColor"
                      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
                    />
                  </svg>
                  <span>{common.whatsapp}</span>
                </a>
                <CallButton locale={locale} className="call_btn_light" />
              </div>
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
