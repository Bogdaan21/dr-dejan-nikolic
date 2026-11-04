"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __clinicRuntimeLoaded?: boolean;
  }
}

type LegacyRuntimeProps = {
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

export default function LegacyRuntime({ bodyClassName = "" }: LegacyRuntimeProps) {
  useEffect(() => {
    document.body.className = bodyClassName;

    if (window.__clinicRuntimeLoaded) {
      return;
    }

    window.__clinicRuntimeLoaded = true;

    void loadScript("/js/jquery.js")
      .then(() => loadScript("/js/plugins.js"))
      .then(() => loadScript("/js/init.js"))
      .catch((error: unknown) => {
        window.__clinicRuntimeLoaded = false;
        document.querySelector("#preloader")?.remove();
        console.error("Theme runtime failed to start", error);
      });
  }, [bodyClassName]);

  return null;
}
