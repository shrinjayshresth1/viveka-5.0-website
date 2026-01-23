"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import WhyAttend from "@/components/WhyAttend";
import ChiefGuest from "@/components/ChiefGuest";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <CustomCursor />
      <Navbar />
      
      <Hero />
      <Sponsors />
      <WhyAttend />
      <ChiefGuest />
      <Schedule />
      <Gallery />
      <Footer />
    </main>
  );
}
