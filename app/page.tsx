import { permanentRedirect } from "next/navigation";

/** Početna adresa trajno vodi na crnogorsku verziju (/me), kanonsku adresu sajta. */
export default function HomePage() {
  permanentRedirect("/me");
}
