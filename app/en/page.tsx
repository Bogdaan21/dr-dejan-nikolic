import SitePage from "../components/SitePage";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata("en");

export default function EnglishPage() {
  return <SitePage locale="en" />;
}
