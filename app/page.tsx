"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StarNightSpotlight from "@/components/StarNightSpotlight";
import CustomCursor from "@/components/ui/CustomCursor";
import dynamic from "next/dynamic";

// Declare Tawk.to globals
declare global {
  interface Window {
    Tawk_API?: object;
    Tawk_LoadStart?: Date;
  }
}

// Lazy load below-the-fold components to reduce initial bundle size and blocking CSS
const Sponsors = dynamic(() => import("@/components/Sponsors"), { ssr: true });
const WhyAttend = dynamic(() => import("@/components/WhyAttend"), { ssr: true });
const Schedule = dynamic(() => import("@/components/Schedule"), { ssr: true });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const FAQMap = dynamic(() => import("@/components/FAQMap"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  // Tawk.to Chat Widget - Only for Homepage
  useEffect(() => {
    // Initialize Tawk.to globals
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create and inject the Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/698a2de68bcd721c3248c766/1jh1s6jba";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);

    // Cleanup on unmount (when navigating away from homepage)
    return () => {
      script.remove();
      // Remove Tawk.to widget container if it exists
      const tawkContainer = document.getElementById("tawk-container");
      if (tawkContainer) {
        tawkContainer.remove();
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background relative selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <CustomCursor />
      <Navbar />

      <Hero />
      <StarNightSpotlight />
      <Sponsors />
      <WhyAttend />
      <Schedule />
      <Gallery />
      <FAQMap />
      <Footer />
    </main>
  );
}
