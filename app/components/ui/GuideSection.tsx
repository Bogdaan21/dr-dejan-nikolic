import type { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

type GuideSectionProps = {
  id: string;
  /** Dodatna klasa za boju pozadine, npr. "collagen_guide". */
  modifier?: string;
  kicker: string;
  title: string;
  text: string;
  titleColor: "light" | "dark";
  children: ReactNode;
};

/** Okvir za edukativne vodiče (tamna/krem pozadina, naslov i dekorativni krugovi). */
export default function GuideSection({ id, modifier, kicker, title, text, titleColor, children }: GuideSectionProps) {
  return (
    <div className="aali_tm_section" id={id}>
      <div className={modifier ? `antiage_guide ${modifier}` : "antiage_guide"}>
        <div className="container">
          <SectionTitle
            kicker={kicker}
            title={title}
            text={text}
            align="center"
            color={titleColor}
            className="antiage_title wow fadeInUp"
            wowDuration="1s"
          />
          {children}
        </div>
        <span className="antiage_orbit antiage_orbit_one" aria-hidden="true"></span>
        <span className="antiage_orbit antiage_orbit_two" aria-hidden="true"></span>
      </div>
    </div>
  );
}
