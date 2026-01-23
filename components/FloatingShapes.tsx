"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-[5]">
      {/* Shape 1 - Cyan/Navy */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 90, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-neon-cyan/20 to-blue-900/20 rounded-full blur-[100px] opacity-30"
      />

      {/* Shape 2 - Orange/Navy (Accent) */}
      <motion.div
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 150, -50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-gradient-to-l from-neon-orange/10 to-blue-900/10 rounded-full blur-[120px] opacity-20"
      />

       {/* Shape 3 - Center Pulse */}
       <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]"
      />
    </div>
  );
}
