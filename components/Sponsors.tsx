"use client";
import { Facebook, Instagram, Youtube, Globe, Cpu } from "lucide-react";

const stats = [
  { label: "Technical Events", value: "50+", icon: Cpu, color: "text-neon-cyan" },
  { label: "Facebook Reach", value: "50k+", icon: Facebook, color: "text-blue-500" },
  { label: "Instagram Impressions", value: "13k+", icon: Instagram, color: "text-pink-500" },
  { label: "Subscribers", value: "2.5k+", icon: Youtube, color: "text-red-500" },
  { label: "Website Visits", value: "2k+", icon: Globe, color: "text-green-500" },
];

export default function Stats() {
  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
        {/* <div className="mb-6 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Our Impact</span>
        </div> */}
      <div className="flex relative overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {[...stats, ...stats, ...stats].map((stat, i) => (
             <div key={i} className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-default">
                 <div className={`p-3 rounded-full bg-white/5 border border-white/10 ${stat.color}`}>
                    <stat.icon size={24} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold font-space-grotesk text-white">
                        {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                        {stat.label}
                    </span>
                 </div>
             </div>
          ))}
        </div>
        
        {/* Fog Fade */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
