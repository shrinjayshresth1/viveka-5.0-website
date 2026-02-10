"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StarNightSpotlight from "@/components/StarNightSpotlight";
import CustomCursor from "@/components/ui/CustomCursor";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components to reduce initial bundle size and blocking CSS
const Sponsors = dynamic(() => import("@/components/Sponsors"), { ssr: true });
const WhyAttend = dynamic(() => import("@/components/WhyAttend"), { ssr: true });
const Schedule = dynamic(() => import("@/components/Schedule"), { ssr: true });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const FAQMap = dynamic(() => import("@/components/FAQMap"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

// ═══════════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════════════
// 🔧 CHATBOT TOGGLE FLAGS — Change true/false to switch chatbots
//    Set only ONE to true at a time to avoid widget overlap.
//    Both false = no chatbot. Both true = both load (not recommended).
// ═══════════════════════════════════════════════════════════════════
const ENABLE_TAWK_TO = false;          //   Tawk.to chat widget
const ENABLE_LIVECHAT = true;          //   LiveChat widget
// ═══════════════════════════════════════════════════════════════════

// Chatbot components (loaded client-side only)
const TawkTo = dynamic(() => import("@/components/TawkTo"), { ssr: false });
const LiveChatWidget = dynamic(() => import("@/components/LiveChatWidget"), { ssr: false });

export default function Home() {
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

      {/* 💬 Chatbot Widgets — controlled by toggle flags above */}
      {ENABLE_TAWK_TO && <TawkTo />}
      {ENABLE_LIVECHAT && <LiveChatWidget />}
    </main>
  );
}
