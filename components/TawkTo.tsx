"use client";

import { useEffect } from "react";

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  Tawk.to Chat Widget Integration                           ║
 * ║                                                            ║
 * ║  Self-contained component — just render <TawkTo /> to      ║
 * ║  inject the widget. Automatically cleans up on unmount.    ║
 * ║                                                            ║
 * ║  Property: 698a2de68bcd721c3248c766                        ║
 * ║  Dashboard: https://dashboard.tawk.to/                     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
export default function TawkTo() {
    useEffect(() => {
        const w = window as any;

        // Initialize Tawk.to globals
        w.Tawk_API = w.Tawk_API || {};
        w.Tawk_LoadStart = new Date();

        // Create and inject the Tawk.to script
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://embed.tawk.to/698a2de68bcd721c3248c766/1jh1s6jba";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.head.appendChild(script);

        console.log("[TawkTo] ✅ Widget loaded");

        // Cleanup on unmount (e.g., navigating away from homepage)
        return () => {
            // Remove the injected script
            script.remove();

            // Remove Tawk.to iframe containers & UI elements
            const tawkElements = document.querySelectorAll(
                'iframe[src*="tawk.to"], [id*="tawk-"], .widget-visible'
            );
            tawkElements.forEach((el) => el.remove());

            // Clean up global variables
            try {
                delete w.Tawk_API;
                delete w.Tawk_LoadStart;
            } catch {
                // Ignore if already deleted
            }

            console.log("[TawkTo] ❌ Widget removed");
        };
    }, []);

    // No visual JSX — the widget injects its own UI via script
    return null;
}
