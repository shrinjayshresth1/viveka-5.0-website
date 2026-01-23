"use client";
import { cn } from "@/lib/utils";

const sponsors = [
  "Google", "Microsoft", "Amazon", "Tesla", "SpaceX", "Intel", "IBM", "Meta", "NVIDIA", "MongoDB"
];

export default function Sponsors() {
  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
        <div className="mb-6 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Supported By</span>
        </div>
      <div className="flex relative overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {sponsors.map((sponsor, i) => (
             <span key={i} className="text-2xl md:text-4xl font-bold font-space-grotesk text-transparent bg-clip-text bg-gradient-to-tr from-gray-600 to-gray-400 opacity-50 hover:opacity-100 hover:from-white hover:to-white transition-opacity cursor-default">
                 {sponsor}
             </span>
          ))}
          {sponsors.map((sponsor, i) => (
             <span key={`dup-${i}`} className="text-2xl md:text-4xl font-bold font-space-grotesk text-transparent bg-clip-text bg-gradient-to-tr from-gray-600 to-gray-400 opacity-50 hover:opacity-100 hover:from-white hover:to-white transition-opacity cursor-default">
                 {sponsor}
             </span>
          ))}
           {sponsors.map((sponsor, i) => (
             <span key={`dup2-${i}`} className="text-2xl md:text-4xl font-bold font-space-grotesk text-transparent bg-clip-text bg-gradient-to-tr from-gray-600 to-gray-400 opacity-50 hover:opacity-100 hover:from-white hover:to-white transition-opacity cursor-default">
                 {sponsor}
             </span>
          ))}
        </div>
        
        {/* Fog Fade */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
