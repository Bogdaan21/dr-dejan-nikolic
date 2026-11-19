import SitePage from "../components/SitePage";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata("me");

export default function MontenegrinPage() {
  return <SitePage locale="me" />;
}
