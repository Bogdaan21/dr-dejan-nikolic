import { permanentRedirect } from "next/navigation";

/** Stara adresa crnogorske verzije — sada je na /me. */
export default function DarkPage() {
  permanentRedirect("/me");
}
