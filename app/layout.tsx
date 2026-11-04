import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Dejan Nikolić | Estetska medicina u Nikšiću",
  description:
    "Dr Dejan Nikolić — hijaluronski fileri, botoks, stimulatori kolagena, mezoterapija i lipoliza u Nikšiću.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr-Latn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/dark.css" />
        <link rel="stylesheet" href="/css/colors.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
