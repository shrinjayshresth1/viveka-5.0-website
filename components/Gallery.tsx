"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070&auto=format&fit=crop", // Replaced
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop", // Replaced with valid AI image
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 overflow-hidden bg-background">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold font-space-grotesk text-center mb-16"
      >
        Visual <span className="text-neon-cyan">Odyssey</span>
      </motion.h2>

      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-8 w-[200vw]">
          {images.map((src, i) => (
            <div key={i} className="relative w-[400px] h-[250px] md:w-[600px] md:h-[400px] rounded-xl overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src={src}
                alt={`Gallery ${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 400px, 600px"
              />
              <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-8 w-[200vw] -ml-[50vw]">
          {[...images].reverse().map((src, i) => (
            <div key={i} className="relative w-[400px] h-[250px] md:w-[600px] md:h-[400px] rounded-xl overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
               <Image
                src={src}
                alt={`Gallery ${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 400px, 600px"
              />
              <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
