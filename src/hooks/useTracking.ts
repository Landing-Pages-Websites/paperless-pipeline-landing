"use client";

import { useEffect } from "react";

interface TrackingConfig {
  siteKey?: string;
  gtmId?: string;
  gaId?: string;
  pixelId?: string;
}

export function useTracking(config: TrackingConfig) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    console.log("useTracking called with config:", config);

    // Avoid loading multiple times
    if (document.getElementById("optimizer-script")) {
      console.log("Optimizer script already exists, skipping");
      return;
    }

    // Set MegaTag config BEFORE loading script
    if (config.siteKey) {
      console.log("Setting MEGA_TAG_CONFIG:", config);
      (window as any).MEGA_TAG_CONFIG = {
        siteKey: config.siteKey,
        gtmId: config.gtmId,
        gaId: config.gaId,
        pixelId: config.pixelId,
      };
    }

    // Set API endpoints — REQUIRED
    console.log("Setting API endpoints");
    (window as any).API_ENDPOINT = "https://optimizer.gomega.ai";
    (window as any).TRACKING_API_ENDPOINT = "https://events-api.gomega.ai";

    // Load optimizer script
    console.log("Loading optimizer script");
    const script = document.createElement("script");
    script.id = "optimizer-script";
    script.src = "https://cdn.gomega.ai/scripts/optimizer.min.js";
    script.async = true;
    script.onload = () => console.log("Optimizer script loaded successfully");
    script.onerror = () => console.error("Failed to load optimizer script");
    document.head.appendChild(script);
  }, [config]);
}