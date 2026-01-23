"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Viveka 5.0?",
    answer: "Viveka 5.0 - The Intelligence is one of the biggest technical & cultural fests of Shri Ramswaroop Memorial University. It brings together innovators, creators, and tech enthusiasts for 2 days of competition, learning, and fun."
  },
  {
    question: "What are the Dates and Timings?",
    answer: "The event is scheduled for 6th & 7th February 2025. Events start from 10:00 AM onwards on both days. Check the Schedule section for specific event timings."
  },
  {
    question: "How can I participate?",
    answer: "You can register for individual events or the entire fest through this website. Click on the 'Register' button in the event details or the main navigation bar."
  },
  {
    question: "Are there rewards for winners?",
    answer: "Yes! There is a substantial prize pool, including Cash Prizes, Trophies, and Certificates for winners. All participants will receive participation certificates."
  }
];

export default function FAQMap() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] translate-y-1/4 translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: FAQ Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10 text-left">
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-2">
                    <span className="text-white">F</span>
                    <span className="text-neon-cyan">A</span>
                    <span className="text-white">Q</span>
                </h2>
                <div className="h-1 w-20 bg-neon-cyan/50 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={cn(
                    "rounded-xl border transition-all duration-300 overflow-hidden",
                    openIndex === index 
                      ? "bg-white/5 border-neon-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]" 
                      : "bg-black/20 border-white/5 hover:border-white/10"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={cn(
                      "font-space-grotesk text-lg md:text-xl font-medium transition-colors",
                      openIndex === index ? "text-neon-cyan" : "text-gray-200"
                    )}>
                      {faq.question}
                    </span>
                    <span className={cn(
                      "p-1 rounded-full border transition-all duration-300",
                      openIndex === index ? "border-neon-cyan text-neon-cyan rotate-180" : "border-gray-500 text-gray-500"
                    )}>
                      {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map Section */}
          <div className="w-full lg:w-1/2 h-full min-h-[500px] relative group">
             {/* Map Container with distinctive styling */}
             <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
             
             <div className="relative h-full min-h-[500px] bg-[#0a0a0a] rounded-2xl border border-white/10 p-2 overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3695995811725!2d81.09571131436605!3d26.96342898310638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399956417614920b%3A0xbe887375d3151809!2sShri%20Ramswaroop%20Memorial%20University!5e0!3m2!1sen!2sin!4v1706019557766!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 contrast-125"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center text-neon-cyan shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold font-space-grotesk">SRMU, Lucknow-Deva Road</h4>
                        <p className="text-gray-400 text-xs">Village Hadauri, Post Tindola, Uttar Pradesh 225001</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
