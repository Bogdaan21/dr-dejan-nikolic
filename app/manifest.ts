import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr Dejan Nikolić — anti-age medicina",
    short_name: "Dr Nikolić",
    description: "Anti-age i estetska medicina u Nikšiću.",
    start_url: "/me",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#17213A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
