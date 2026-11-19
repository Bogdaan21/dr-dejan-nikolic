import { useId } from "react";

/* Zastavice su SVG (ne emoji), jer Windows ne prikazuje emoji zastavice. */

export function FlagMontenegro() {
  return (
    <svg className="lang_flag" viewBox="0 0 45 30" aria-hidden="true" focusable="false">
      <rect width="45" height="30" fill="#D3AE3B" />
      <rect x="1.6" y="1.6" width="41.8" height="26.8" fill="#C40308" />
      {/* Pojednostavljeni dvoglavi orao, čitljiv u malim dimenzijama */}
      <g fill="#D3AE3B">
        <path d="M21.2 7.4h2.6l-.4 1.6h-1.8z" />
        <circle cx="20.6" cy="10.6" r="1.2" />
        <circle cx="24.4" cy="10.6" r="1.2" />
        <path d="M20.6 12.6C17.4 10.8 14.6 12.2 13.8 16.6c2-1 4.4-.9 6.8 1.4z" />
        <path d="M24.4 12.6c3.2-1.8 6-.4 6.8 4-2-1-4.4-.9-6.8 1.4z" />
        <ellipse cx="22.5" cy="16.2" rx="2.4" ry="4.2" />
        <path d="M21 19.8h3l1.4 3h-5.8z" />
      </g>
      <ellipse cx="22.5" cy="16.4" rx="1.1" ry="1.5" fill="#C40308" />
    </svg>
  );
}

export function FlagUK() {
  const id = useId().replace(/:/g, "");
  return (
    <svg className="lang_flag" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <clipPath id={`uk-s-${id}`}>
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id={`uk-t-${id}`}>
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath={`url(#uk-s-${id})`}>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath={`url(#uk-t-${id})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
