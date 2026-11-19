import { contact } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";

/** Dugme za poziv na broj ordinacije (tel: link), pored dugmeta za konsultaciju. */
export default function CallButton({ locale, className }: { locale: Locale; className?: string }) {
  const common = getContent(locale).common;

  return (
    <a className={className ? `call_btn ${className}` : "call_btn"} href={contact.phoneHref}>
      <svg className="call_btn_icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{`${common.call} ${contact.phoneDisplay}`}</span>
    </a>
  );
}
