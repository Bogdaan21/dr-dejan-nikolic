import type { Metadata } from "next";
import SitePage from "../components/SitePage";

export const metadata: Metadata = {
  title: "Dr Dejan Nikolić | Estetska medicina u Nikšiću",
  alternates: { canonical: "/me", languages: { "sr-ME": "/me", en: "/en" } },
};

export default function MontenegrinPage() {
  return <SitePage locale="me" />;
}
