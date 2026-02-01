"use client";
import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import { cn } from "@/lib/utils";
import Image from "next/image";

const content = [
  {
    title: "The Legacy",
    description: (
      <>
        <p className="mb-4">
            Established in 2012 with a legacy dating back to 1999, <strong className="text-neon-cyan">Shri Ramswaroop Memorial University (SRMU)</strong> has evolved into a powerhouse of education and research. With a sprawling campus and state-of-the-art facilities, it fosters an environment where innovation thrives.
        </p>
        <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-8 group">
            <Image src="/srmu.png" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt="SRMU Campus" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
        </div>
      </>
    ),
    badge: "SRMU"
  },
  {
    title: "The Intelligence",
    description: (
      <>
        <p className="mb-4">
           <strong>Viveka 5.0</strong> represents the pentacle of our technical evolution. It's not just a fest; it's a celebration of human and artificial intelligence coming together.
        </p>
        <p>
            From <span className="text-neon-cyan">Robotics</span> to <span className="text-purple-500">Cyber Security</span>, we bring 30+ events that challenge the status quo.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <h3 className="text-3xl font-bold text-white mb-1">2 Days</h3>
                <p className="text-xs text-gray-400">Of Innovation</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <h3 className="text-3xl font-bold text-white mb-1">30+</h3>
                <p className="text-xs text-gray-400">Events</p>
            </div>
        </div>
      </>
    ),
    badge: "VIVEKA 5.0"
  },
  {
    title: "The Future",
    description: (
      <>
        <p className="mb-4">
            We believe the future belongs to those who build it. At Viveka, you don't just witness technology; you shape it.
        </p>
        <div className="mt-8 p-6 bg-gradient-to-br from-neon-cyan/10 to-transparent border border-neon-cyan/30 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/20 blur-[50px] rounded-full pointer-events-none" />
             <h4 className="text-xl font-bold text-white mb-2">Join the Revolution</h4>
             <p className="text-gray-400 text-sm mb-6">18th - 20th February, 2025</p>
             <button className="px-6 py-2 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 font-bold uppercase text-sm tracking-wider rounded-lg cursor-not-allowed">
                 Coming Soon
             </button>
        </div>
      </>
    ),
    badge: "2025"
  }
];

export default function About() {
  return (
    <div id="about" className="relative bg-[#020617] py-20">
      <div className="container mx-auto px-4 pt-10 mb-16 text-center">
         <h2 className="text-4xl md:text-6xl font-bold text-white font-space-grotesk mb-4">
             Tracing The <span className="text-neon-cyan">Evolution</span>
         </h2>
         <p className="text-gray-400">Follow the path from our roots to the future.</p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-24 relative">
              <h2 className="bg-black text-neon-cyan rounded-full text-xs w-fit px-4 py-1 mb-4 border border-neon-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                {item.badge}
              </h2>
       
              <h3 className={cn("text-3xl font-bold text-white mb-6 font-space-grotesk")}>
                {item.title}
              </h3>
       
              <div className="text-lg text-gray-400 prose prose-invert">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
