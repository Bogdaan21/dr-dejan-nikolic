import { wowDelay } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";
import SectionTitle from "../ui/SectionTitle";

export default function Myths({ locale }: { locale: Locale }) {
  const t = getContent(locale).myths;

  return (
    <div className="aali_tm_section" id="approach">
      <div className="aali_tm_testimonials clinic_principles myth_testimonials">
        <div className="right">
          <div className="right_in myth_quotes_in">
            <SectionTitle
              kicker={t.kicker}
              title={t.title}
              text={t.text}
              align="center"
              color="light"
            />
            <div className="myth_quotes">
              {t.items.map((myth, index) => (
                <figure
                  key={myth.statement}
                  className={"truth" in myth && myth.truth ? "myth_quote myth_quote_truth wow fadeInUp" : "myth_quote wow fadeInUp"}
                  data-wow-duration="1s"
                  data-wow-delay={wowDelay(index + 1)}
                >
                  <span className="myth_quote_mark" aria-hidden="true">
                    “
                  </span>
                  <h4>{`„${myth.statement}“`}</h4>
                  <div className="myth_quote_source">
                    <span className="myth_quote_who">
                      <strong>{"truth" in myth && myth.truth ? t.true : t.heard}</strong>
                      <em>{myth.topic}</em>
                    </span>
                  </div>
                  <div className="myth_quote_reply">
                    <span>{"truth" in myth && myth.truth ? t.why : t.reality}</span>
                    <p>{myth.reply}</p>
                    <cite>Dr Dejan Nikolić</cite>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
        <span className="square moving_effect" data-direction="y" data-reverse="yes"></span>
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left"></i>
        </span>
      </div>
    </div>
  );
}
