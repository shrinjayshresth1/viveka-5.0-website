"use client";
import React from "react";
import { HorizontalScroll } from "./ui/horizontal-scroll";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    type: "intro",
    title: "Discover the Legacy",
    subtitle: "Swipe to Explore",
    img: "/srmu.png"
  },
  {
    type: "content",
    title: "The Foundation",
    heading: "SRMU",
    description: "Shri Ramswaroop Memorial University (SRMU) stands as a beacon of excellence in education and research. Founded with a vision to create ethical professionals, it offers a diverse range of programs across multiple disciplines.",
    highlight: "Chase Reality... Dreams Will Follow",
    img: "/srmu.png"
  },
  {
    type: "content",
    title: "The Event",
    heading: "VIVEKA 5.0",
    description: "The 5th iteration of SRMU's flagship Techno-Cultural Fest. Viveka is not just an event; it's a movement. A convergence of code, creativity, and culture exploring the frontiers of AI.",
    highlight: "The Intelligence",
    img: "/logo.png"
  },
  {
    type: "vision",
    title: "The Future",
    heading: "2025",
    description: "Join us on 6th & 7th February 2025 as we celebrate technology, art, and the spirit of competition. The future is here, and it begins with you.",
    highlight: "Innovation starts here",
    content: (
        <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-neon-cyan text-black font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform">
                Explore Events
            </button>
        </div>
    )
  }
];

const Card = ({ card }: { card: any }) => {
    if (card.type === "intro") {
        return (
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
                <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center p-8 text-center">
                     <h3 className="text-4xl font-bold text-white font-space-grotesk uppercase mb-2">{card.title}</h3>
                     <p className="text-neon-cyan flex items-center gap-2 animate-pulse">{card.subtitle} <ArrowRight /></p>
                </div>
                <Image src={card.img} fill className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale" alt={card.title} />
            </div>
        );
    }

    return (
        <div className="group relative h-[450px] w-[800px] overflow-hidden bg-neutral-900 border border-white/10 flex">
            {/* Image Side */}
            <div className="w-1/2 relative overflow-hidden border-r border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
                 <Image src={card.img || "/logo.png"} fill className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" alt={card.heading} />
            </div>
            
            {/* Content Side */}
            <div className="w-1/2 p-8 flex flex-col justify-center relative">
                 <span className="text-neon-cyan font-mono text-sm mb-4 tracking-widest uppercase">{card.title}</span>
                 <h2 className="text-5xl font-bold text-white font-space-grotesk leading-none mb-6 group-hover:text-neon-cyan transition-colors">{card.heading}</h2>
                 <p className="text-gray-400 leading-relaxed mb-6 border-l-2 border-white/20 pl-4">{card.description}</p>
                 <span className="text-sm font-bold text-white/50 uppercase tracking-wider">{card.highlight}</span>
                 {card.content}
                 
                 {/* Decorative */}
                 <div className="absolute bottom-4 right-4 text-[10rem] font-bold text-white/5 pointer-events-none leading-none -z-10 select-none">
                    {card.heading.charAt(0)}
                 </div>
            </div>
        </div>
    );
};

export default function About() {
  return (
    <div id="about" className="relative bg-[#020617]">
      <div className="container mx-auto px-4 py-20 text-center">
         <h2 className="text-5xl md:text-7xl font-bold text-white font-space-grotesk mb-4">
             Discover <span className="text-neon-cyan">The Legacy</span>
         </h2>
         <p className="text-gray-400">Scroll to explore the journey of innovation.</p>
      </div>

      <HorizontalScroll>
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </HorizontalScroll>
    </div>
  );
}
