import { getContent, type Locale } from "@/data/i18n";

/** Lista linkova za navigaciju (zaglavlje i mobilni meni). */
export default function NavList({ locale }: { locale: Locale }) {
  const navigation = getContent(locale).navigation;

  return (
    <ul className="anchor_nav">
      {navigation.filter((item) => !("hidden" in item) || !item.hidden).map((item, index) => (
        <li key={item.href} className={index === 0 ? "current" : undefined}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}
