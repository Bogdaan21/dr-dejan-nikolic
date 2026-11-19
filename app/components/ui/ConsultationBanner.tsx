import { contact, external } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import CallButton from "./CallButton";

type ConsultationBannerProps = {
  title: string;
  emphasis: string;
  text: string;
  /** Dodatna klasa, npr. "expect_outro" za krem varijantu. */
  modifier?: string;
  locale: Locale;
};

/** Traka sa porukom i dugmetom "Zakažite konsultaciju" na dnu vodiča. */
export default function ConsultationBanner({ title, emphasis, text, modifier, locale }: ConsultationBannerProps) {
  const common = getContent(locale).common;

  return (
    <div
      className={modifier ? `decade_outro ${modifier} wow fadeInUp` : "decade_outro wow fadeInUp"}
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      <div className="decade_outro_text">
        <span>{common.antiAge}</span>
        <h4>
          {`${title} `}
          <em>{emphasis}</em>
        </h4>
        <p>{text}</p>
      </div>
      <div className="decade_outro_actions">
        <a className="decade_outro_link" href={contact.whatsappHref} {...external}>
          {common.book}
        </a>
        <CallButton locale={locale} className="call_btn_light" />
      </div>
    </div>
  );
}
