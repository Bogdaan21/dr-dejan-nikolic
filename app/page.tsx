import LegacyPage from "./components/LegacyPage";
import { readLegacyDocument } from "./lib/legacy-document";

export default function HomePage() {
  const document = readLegacyDocument("index.html");

  return <LegacyPage {...document} />;
}
