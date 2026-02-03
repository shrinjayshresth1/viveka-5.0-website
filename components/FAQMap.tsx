"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MapPin, Navigation, Terminal, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        id: "01",
        question: "WHAT IS VIVEKA 5.0?",
        answer: "Viveka 5.0 - The Intelligence is the flagship technical & cultural fest of SRMU. It's a convergence of innovation, code, and creativity."
    },
    {
        id: "02",
        question: "DATES & TIMINGS",
        answer: "18th, 19th & 20th February 2026. Protocol activation details pending."
    },
    {
        id: "03",
        question: "REGISTRATION PROTOCOL",
        answer: "Registrations will be opening soon. Keep an eye on the 'Coming Soon' module in the event dashboard. Access will be open to all university students."
    },
    {
        id: "04",
        question: "PRIZE POOL",
        answer: "Compete for substantial bounties, trophies, and certifications. Victory brings glory and rewards."
    }
];

export default function FAQMap() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden" id="contact">

            {/* 1. Full Screen Stylized Map Background */}
            <div className="absolute inset-0 z-0 grayscale invert opacity-40">
                <iframe
                    title="Google Map location of Shri Ramswaroop Memorial University"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7112.963654557154!2d81.0981!3d26.951637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995ee81add328f%3A0xbe8acc99218572c9!2sShri%20Ramswaroop%20Memorial%20University!5e0!3m2!1sen!2sin!4v1769177959470!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                />
                {/* Cyber Overlay Mesh */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,#000_2px),linear-gradient(90deg,transparent_2px,#000_2px)] bg-[size:40px_40px] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-12 items-end lg:items-center justify-between">

                {/* 2. Floating Location Card (Glassmorphism) */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="w-full lg:w-1/3 bg-black/60 backdrop-blur-xl border border-neon-cyan/30 p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-[0_0_30px_rgba(0,240,255,0.1)] relative group"
                >
                    <div className="absolute top-0 right-0 p-4">
                        <div className="w-3 h-3 bg-neon-cyan rounded-full animate-ping" />
                    </div>

                    <h3 className="text-neon-cyan font-mono text-sm mb-2 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-neon-cyan" />
                        TARGET_LOCATION
                    </h3>
                    <h2 className="text-4xl font-bold text-white font-space-grotesk leading-tight mb-6">
                        SRMU <br /> LUCKNOW
                    </h2>

                    <div className="space-y-4 text-gray-300 font-mono text-sm">
                        <p className="flex items-start gap-3">
                            <MapPin className="text-neon-cyan shrink-0 mt-1" size={18} />
                            Village Hadauri, Post Tindola, <br /> Lucknow-Deva Road, Barabanki
                        </p>
                        <p className="flex items-center gap-3">
                            <Globe className="text-neon-cyan shrink-0" size={18} />
                            26.9634° N, 81.0957° E
                        </p>
                    </div>

                    <a
                        href="https://www.google.com/maps/place/Shri+Ramswaroop+Memorial+University/@26.951637,81.0981,17z"
                        target="_blank"
                        className="mt-8 inline-flex items-center gap-2 bg-neon-cyan text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors w-full justify-center group-hover:scale-[1.02] transform duration-300"
                    >
                        <Navigation size={18} /> Initiate Navigation
                    </a>
                </motion.div>


                {/* 3. "Terminal" Style FAQ Data Feed */}
                <div className="w-full lg:w-1/2">
                    <div className="bg-black/80 backdrop-blur-md border-l-2 border-neon-cyan p-1 relative">

                        {/* Decorative Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 mb-1">
                            <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs">
                                <Terminal size={14} />
                                <span>KNOWLEDGE_BASE // FAQ.exe</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-1">
                            {faqs.map((faq, index) => (
                                <div key={index} className="group">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-5 text-left transition-all duration-300 border-b border-white/5",
                                            openIndex === index ? "bg-neon-cyan/10" : "hover:bg-white/5"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono text-neon-cyan/50 text-sm">0{index + 1}</span>
                                            <span className={cn(
                                                "font-space-grotesk font-bold uppercase transition-colors",
                                                openIndex === index ? "text-neon-cyan" : "text-white group-hover:text-gray-200"
                                            )}>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <Plus
                                            size={16}
                                            className={cn(
                                                "text-neon-cyan transition-transform duration-300",
                                                openIndex === index ? "rotate-45" : "rotate-0"
                                            )}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-5 pl-14 text-sm text-gray-400 font-mono border-l border-neon-cyan/30 ml-5 mb-2 bg-black/40">
                                                    <span className="text-neon-cyan mr-2">{">"}</span>
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
