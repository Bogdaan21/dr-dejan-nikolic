type SectionTitleProps = {
  kicker: string;
  title: string;
  text?: string;
  align: "left" | "center";
  color: "light" | "dark";
  /** Dodatne klase, npr. "antiage_title wow fadeInUp". */
  className?: string;
  wowDuration?: string;
};

/** Naslov sekcije iz šablona: mali natpis, naslov i opcioni podnaslov. */
export default function SectionTitle({ kicker, title, text, align, color, className, wowDuration }: SectionTitleProps) {
  return (
    <div
      className={className ? `aali_tm_main_title ${className}` : "aali_tm_main_title"}
      data-wow-duration={wowDuration}
      data-text-align={align}
      data-color={color}
    >
      <span>{kicker}</span>
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
