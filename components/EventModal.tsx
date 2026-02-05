"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Phone, User, Trophy, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface EventData {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  teamSize: string;
  fee: string;
  prizes: string[];
  location: string;
  timing: string;
  contacts: { name: string; phone: string }[];
  note?: string;
}

interface EventModalProps {
  event: EventData | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl max-h-[90vh] bg-background border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-neon-cyan/20"
        >
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:text-neon-cyan transition-colors"
            >
                <X size={24} />
            </button>

            {/* Left: Image Side */}
            <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-gray-900 border-r border-white/10">
                 {/* Placeholder for Event Image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 md:bg-gradient-to-r" />
                 <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill
                    className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute bottom-6 left-6 right-6 z-20">
                     <h2 className="text-3xl md:text-4xl font-bold text-white uppercase font-space-grotesk leading-none">{event.title}</h2>
                     <div className="flex items-center gap-2 mt-4 text-neon-cyan font-mono text-sm">
                        <Calendar size={16} />
                        <span>{event.timing}</span>
                     </div>
                 </div>
            </div>

            {/* Right: Details Side */}
            <div className="w-full md:w-3/5 overflow-y-auto custom-scrollbar p-6 md:p-10 bg-black/40">
                
                {/* Section: Description */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-neon-cyan" /> Description
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-neon-cyan/30 pl-4">
                        {event.description}
                    </p>
                    <button className="mt-4 px-4 py-2 text-xs border border-neon-cyan/30 text-neon-cyan rounded hover:bg-neon-cyan/10 transition-colors">
                        View Rulebook →
                    </button>
                </div>

                 {/* Section: Category, Team, Fees */}
                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <span className="text-xs text-gray-400 block mb-1">Category</span>
                        <span className="text-white font-medium">{event.category}</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                         <span className="text-xs text-gray-400 block mb-1">Team Size</span>
                         <span className="text-white font-medium">{event.teamSize}</span>
                    </div>
                     <div className="bg-neon-cyan/10 p-4 rounded-lg border border-neon-cyan/20 col-span-2">
                         <div className="flex justify-between items-center">
                            <span className="text-sm text-neon-cyan font-bold">Registration Fee</span>
                            <span className="text-xl text-white font-bold">{event.fee}</span>
                         </div>
                    </div>
                 </div>

                 {/* Section: Prizes */}
                 <div className="mb-8 p-1 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                    <div className="bg-background/90 p-5 rounded-lg backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">
                            <Trophy size={18} /> Prizes & Rewards
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                            {event.prizes.map((prize, i) => (
                                <li key={i}>{prize}</li>
                            ))}
                        </ul>
                    </div>
                 </div>

                 {/* Section: Logistics */}
                 <div className="mb-8 pt-6 border-t border-white/10">
                     <div>
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <MapPin size={16} className="text-neon-cyan" /> Location
                        </h4>
                        <p className="text-gray-400 text-sm">{event.location}</p>
                     </div>
                 </div>

                 {/* Note */}
                 {event.note && (
                     <div className="mb-8 bg-yellow-500/5 border border-yellow-500/20 p-4 rounded text-xs text-yellow-200/80">
                         <strong>Note:</strong> {event.note}
                     </div>
                 )}

                 {/* footer CTA */}
                 <button className="w-full py-4 bg-neon-cyan text-black font-bold text-lg rounded-xl hover:bg-white hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                     Register Now
                 </button>

            </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
