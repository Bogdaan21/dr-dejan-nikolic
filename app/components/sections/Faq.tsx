import { contact, external, pad2 } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import CallButton from "../ui/CallButton";

export default function Faq({ locale }: { locale: Locale }) {
  const t = getContent(locale).faq;

  return (
    <div className="aali_tm_section" id="faq">
      <section className="clinic_faq">
        <div className="container">
          <div className="faq_layout">
            <div className="faq_intro wow fadeInLeft" data-wow-duration="1s">
              <span className="faq_eyebrow">{t.eyebrow}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
            <div className="faq_list wow fadeInRight" data-wow-duration="1s">
              {t.items.map((item, index) => (
                <details key={item.question} className="faq_item" open={index === 0 || undefined}>
                  <summary>
                    <span className="faq_number">{`${pad2(index + 1)} · ${t.question}`}</span>
                    <span className="faq_question">{item.question}</span>
                  </summary>
                  <div className="faq_answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="faq_cta wow fadeInUp" data-wow-duration="1s">
            <div>
              <span>{t.other}</span>
              <h4>{t.ask}</h4>
              <p>{t.ctaText}</p>
            </div>
            <div className="faq_actions">
              <a href={contact.whatsappHref} {...external}>
                {t.send}
              </a>
              <a href={contact.instagramHref} {...external}>
                Instagram
              </a>
              <CallButton locale={locale} className="faq_call" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
