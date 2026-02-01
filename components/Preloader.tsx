"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING SYSTEM...");
  const [randomCodes, setRandomCodes] = useState<string[]>([]);

  useEffect(() => {
    // Generate random codes only on client side
    setRandomCodes(Array.from({ length: 10 }).map((_, i) => 
        `> 0x${Math.random().toString(16).slice(2, 10).toUpperCase()} // MODULE_LOAD_${i}`
    ));

    // Simulate loading process
    const timer = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(timer);
                return 100;
            }
            return prev + Math.floor(Math.random() * 10) + 1;
        });
    }, 150);

    // Dynamic text updates
    const textSequence = [
        { t: 0, msg: "INITIALIZING SYSTEM..." },
        { t: 800, msg: "ESTABLISHING CONNECTION..." },
        { t: 1500, msg: "LOADING ASSETS..." },
        { t: 2200, msg: "ACCESS GRANTED" }
    ];

    textSequence.forEach(({ t, msg }) => {
        setTimeout(() => setText(msg), t);
    });

    const finishTimer = setTimeout(() => {
        setLoading(false);
    }, 3000);

    return () => {
        clearInterval(timer);
        clearTimeout(finishTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
        {loading && (
            <motion.div
                initial={{ y: 0 }}
                exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                className="fixed inset-0 z-[99999] bg-[#020617] flex flex-col items-center justify-center font-mono selection:bg-neon-cyan/30 selection:text-neon-cyan"
            >
                {/* Center Content */}
                <div className="w-full max-w-md px-8 relative">
                    {/* Glitchy Heading */}
                    <div className="flex justify-center mb-8 relative">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl md:text-6xl font-bold font-space-grotesk text-white tracking-tighter"
                        >
                            VIVEKA <span className="text-neon-cyan">5.0</span>
                        </motion.h1>
                         {/* Glitch Overlay */}
                        <motion.div 
                            className="absolute inset-0 text-4xl md:text-6xl font-bold font-space-grotesk text-red-500 opacity-50 mix-blend-screen tracking-tighter"
                            animate={{ 
                                x: [0, -2, 2, 0],
                                skewX: [0, 10, -10, 0],
                                opacity: [0, 0.5, 0] 
                            }}
                            transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                        >
                            VIVEKA 5.0
                        </motion.div>
                        <motion.div 
                            className="absolute inset-0 text-4xl md:text-6xl font-bold font-space-grotesk text-blue-500 opacity-50 mix-blend-screen tracking-tighter"
                            animate={{ 
                                x: [0, 2, -2, 0],
                                skewX: [0, -5, 5, 0],
                                opacity: [0, 0.5, 0] 
                            }}
                            transition={{ repeat: Infinity, duration: 0.3, repeatDelay: 2 }}
                        >
                            VIVEKA 5.0
                        </motion.div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-4 relative">
                        <motion.div 
                            className="h-full bg-neon-cyan shadow-[0_0_10px_#00f0ff]"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                    </div>

                    {/* System Text */}
                    <div className="flex justify-between items-end text-xs md:text-sm font-bold">
                        <span className="text-neon-cyan flex items-center gap-2">
                            <Zap size={14} className="animate-pulse" fill="currentColor" /> {text}
                        </span>
                        <span className="text-gray-500">{Math.min(progress, 100)}%</span>
                    </div>

                    {/* Decorative Code Lines */}
                    <div className="absolute top-20 left-0 right-0 h-32 overflow-hidden opacity-10 pointer-events-none text-[10px] leading-tight text-green-500 mask-image-gradient-b">
                        {randomCodes.map((code, i) => (
                             <div key={i}>{code}</div>
                        ))}
                    </div>

                </div>

                {/* Bottom Legal/Version */}
                <div className="absolute bottom-8 text-center text-[10px] text-gray-700 uppercase tracking-[0.2em]">
                    System Version 5.0.1 // Secure Connection
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  );
}
