import { redirect } from "next/navigation";

/** Početna adresa vodi na crnogorsku verziju (/me). */
export default function HomePage() {
  redirect("/me");
}
