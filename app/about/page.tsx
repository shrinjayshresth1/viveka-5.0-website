"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <CustomCursor />
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
