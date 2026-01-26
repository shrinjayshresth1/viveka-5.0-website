"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

export default function ChiefGuest() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="guests" className="py-24 bg-black/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
             >
                <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">
                        Chief Guest
                    </span>
                </h2>
                <p className="mt-4 text-gray-400">An icon of inspiration.</p>
             </motion.div>

             <div className="flex justify-center">
                 <div 
                    className="relative group border border-white/10 bg-gray-900/50 overflow-hidden rounded-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2"
                    onMouseMove={handleMouseMove}
                 >
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`
                                radial-gradient(
                                    650px circle at ${mouseX}px ${mouseY}px,
                                    rgba(0, 240, 255, 0.15),
                                    transparent 80%
                                )
                            `,
                        }}
                    />
                    
                    {/* Image Side - Placeholder */}
                    <div className="relative h-[400px] md:h-auto bg-gray-800 flex items-center justify-center overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 md:bg-gradient-to-r" />
                         <div className="text-8xl font-bold text-gray-700 select-none">?</div>
                         <div className="absolute bottom-4 left-4 z-20">
                             <h3 className="text-2xl font-bold text-white">To Be Revealed</h3>
                             <p className="text-neon-cyan">Chief Guest</p>
                         </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center relative z-20">
                        <h3 className="text-2xl font-bold mb-4">A Special Guest Awaits</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We are finalizing a distinguished guest who will grace Viveka 5.0 with their presence. Keep an eye on our social media channels for the big reveal!
                        </p>
                        
                        <div className="flex gap-4">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neon-cyan">Innovation</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neon-cyan">Leadership</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neon-cyan">Impact</span>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    </section>
  );
}
