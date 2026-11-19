import type { Metadata } from "next";
import SitePage from "../components/SitePage";

export const metadata: Metadata = {
  title: "Dr Dejan Nikolić | Aesthetic medicine",
  description: "Dr Dejan Nikolić — hyaluronic fillers, botulinum toxin, collagen stimulators, mesotherapy and lipolysis in Nikšić.",
  alternates: { canonical: "/en", languages: { "sr-ME": "/me", en: "/en" } },
};

export default function EnglishPage() {
  return <SitePage locale="en" />;
}
