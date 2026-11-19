"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __clinicRuntimeLoaded?: boolean;
  }
}

type ThemeRuntimeProps = {
  bodyClassName?: string;
};

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-clinic-src="${src}"]`);

    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.clinicSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

/**
 * Učitava skripte šablona (jQuery, dodaci, animacije) nakon što React prikaže stranicu.
 * Skripte rade direktno nad HTML-om, zato se komponente stranice ne smiju ponovo
 * iscrtavati na klijentu (nemaju state).
 */
export default function ThemeRuntime({ bodyClassName = "" }: ThemeRuntimeProps) {
  useEffect(() => {
    document.body.className = bodyClassName;

    if (window.__clinicRuntimeLoaded) {
      return;
    }

    window.__clinicRuntimeLoaded = true;

    // Skripte se preuzimaju istovremeno (async=false čuva redoslijed izvršavanja),
    // umjesto jedna za drugom.
    void Promise.all(["/js/jquery.js", "/js/plugins.js", "/js/init.js", "/js/instagram.js"].map(loadScript))
      .catch((error: unknown) => {
        window.__clinicRuntimeLoaded = false;
        document.querySelector("#preloader")?.remove();
        console.error("Theme runtime failed to start", error);
      });
  }, [bodyClassName]);

  return null;
}
