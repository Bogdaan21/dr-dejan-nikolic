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
        <link rel="icon" href="/img/logo/dr-dejan-nikolic-mark.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Montserrat:ital,wght@0,300..800;1,300..800&display=swap"
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
