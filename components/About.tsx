"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 20); // Rotate Y
    y.set(yPct * -20); // Rotate X
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const xSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 30 });

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-20 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div className="z-10">
                <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-nean-cyan text-sm md:text-base tracking-[0.2em] font-medium text-neon-cyan uppercase mb-6"
                >
                    The Revelation
                </motion.h2>

                <div className="space-y-6 text-2xl md:text-4xl font-space-grotesk font-light leading-tight">
                    {["SRMU's flagship", "technical festival returns,", "bigger and bolder than", "ever before."].map((line, i) => (
                        <div key={i} className="overflow-hidden">
                            <motion.p
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                                className="text-gray-200"
                            >
                                {line}
                            </motion.p>
                        </div>
                    ))}
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                     transition={{ duration: 1, delay: 0.6 }}
                    className="mt-8 text-gray-400 max-w-md text-lg"
                >
                    Unite with the brightest minds in technology as we explore the frontiers of Artificial Intelligence and Innovation.
                </motion.p>
            </div>

            {/* 3D Card Side */}
            <div className="perspective-1000 flex justify-center z-10">
                <motion.div
                    style={{ rotateX: ySpring, rotateY: xSpring }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "relative w-full max-w-md aspect-[4/5] rounded-xl glass-panel p-8",
                        "flex flex-col justify-between border-t border-l border-white/10 shadow-2xl shadow-neon-cyan/10"
                    )}
                >
                    {/* Content inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-blue-500/5 rounded-xl pointer-events-none" />
                    
                    <div className="relative z-10">
                         <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                         </div>
                         <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                             Tech Fusion
                         </h3>
                         <p className="mt-2 text-sm text-gray-400">The Powerhouse Behind Viveka</p>
                    </div>

                    <div className="relative z-10 glass-panel p-4 rounded-lg bg-black/20">
                        <p className="text-xs text-gray-300">
                            "Innovation distinguishes between a leader and a follower."
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
