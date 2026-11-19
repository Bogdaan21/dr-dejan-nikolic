import LegacyPage from "../components/LegacyPage";
import { readLegacyDocument } from "../lib/legacy-document";

export const metadata = {
  title: "Dr Dejan Nikolić | Estetska medicina",
};

export default function DarkPage() {
  const document = readLegacyDocument("index-dark.html");

  return <LegacyPage {...document} />;
}
