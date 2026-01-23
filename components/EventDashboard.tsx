"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, User, Trophy, ArrowRight, Zap, Target } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusing the same data structure for consistency
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
}

const events: EventData[] = [
    {
      id: "1",
      title: "Reasoning Rumble",
      description: "A thrilling challenge of reasoning, aptitude, and logic! Test your skills with puzzles like dice face challenges, distance calculations, ratios, and pattern recognition.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      category: "Logic",
      teamSize: "Individual",
      fee: "₹ 50/-",
      prizes: ["Cash Rewards", "Hall of Fame"],
      location: "Block B, Floor 2",
      timing: "06 Feb, 03:25 PM",
      contacts: [{ name: "Priyanshi", phone: "8687968902" }]
    },
    {
      id: "2",
      title: "Laser Light Show",
      description: "A spectacular visual display of lasers synchronized with music. Experience the fusion of technology and art in this mesmerizing evening event.",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
      category: "Show",
      teamSize: "Open",
      fee: "Free",
      prizes: ["N/A"],
      location: "Main Ground",
      timing: "07 Feb, 06:00 PM",
      contacts: [{ name: "Event Head", phone: "9999999999" }]
    },
    {
      id: "3",
      title: "Robo Quest",
      description: "Navigate your robot through a complex maze of obstacles. Speed and precision are key in this high-octane robotics challenge.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      category: "Robotics",
      teamSize: "Team of 4",
      fee: "₹ 200/-",
      prizes: ["₹ 5000", "Trophies"],
      location: "Central Courtyard",
      timing: "06 Feb, 11:00 AM",
      contacts: [{ name: "Robo Club", phone: "8888888888" }]
    },
    {
      id: "4",
      title: "CodeX",
      description: "The ultimate competitive programming contest. Solve algorithmic problems against the clock and claim the title of best coder.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      category: "Coding",
      teamSize: "Individual",
      fee: "₹ 100/-",
      prizes: ["Internship", "Gadgets"],
      location: "Comp Lab 1",
      timing: "07 Feb, 10:00 AM",
      contacts: [{ name: "Tech Lead", phone: "7777777777" }]
    }
];

export default function EventDashboard() {
  const [activeId, setActiveId] = useState(events[0].id);
  const activeEvent = events.find((e) => e.id === activeId) || events[0];

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col md:flex-row gap-8">
      
      {/* Sidebar: Data Stream */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <h2 className="text-xl font-mono text-neon-cyan mb-4 flex items-center gap-2">
            <Target size={20} /> EVENT_LOGS
        </h2>
        <div className="flex flex-col gap-3 h-[60vh] md:h-auto overflow-y-auto pr-2 custom-scrollbar">
            {events.map((event) => (
                <button
                    key={event.id}
                    onClick={() => setActiveId(event.id)}
                    className={cn(
                        "group relative p-4 text-left border rounded-lg transition-all duration-300",
                        activeId === event.id 
                            ? "border-neon-cyan bg-neon-cyan/5 shadow-[inset_0_0_20px_rgba(0,240,255,0.1)]" 
                            : "border-white/10 bg-black/20 hover:border-white/30"
                    )}
                >
                    <div className="flex justify-between items-center mb-1">
                        <span className={cn(
                            "text-xs font-bold uppercase tracking-wider",
                            activeId === event.id ? "text-neon-cyan" : "text-gray-500"
                        )}>
                            [{event.category}]
                        </span>
                        {activeId === event.id && (
                             <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f0ff]" />
                        )}
                    </div>
                    <h3 className={cn(
                        "text-lg font-bold font-space-grotesk transition-colors",
                        activeId === event.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                    )}>
                        {event.title}
                    </h3>
                </button>
            ))}
        </div>
      </div>

      {/* Mainframe: Details View */}
      <div className="w-full md:w-2/3 relative">
         <div className="absolute inset-0 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md overflow-hidden">
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeEvent.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full flex flex-col"
                >
                    {/* Hero Image Area */}
                    <div className="h-[250px] md:h-[350px] relative w-full overflow-hidden border-b border-white/10">
                        <img 
                            src={activeEvent.image} 
                            alt={activeEvent.title} 
                            className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        
                        <div className="absolute bottom-6 left-6 md:left-10">
                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold font-space-grotesk text-white uppercase tracking-tight"
                            >
                                {activeEvent.title}
                            </motion.h1>
                            <div className="flex items-center gap-4 mt-2 text-neon-cyan font-mono text-sm">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {activeEvent.timing}</span>
                                <span className="flex items-center gap-1"><MapPin size={14} /> {activeEvent.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* Left: Description */}
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-bold">Protocol Description</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{activeEvent.description}</p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded bg-white/5 border border-white/5">
                                        <h5 className="flex items-center gap-2 text-neon-cyan text-sm font-bold mb-1">
                                            <Trophy size={16} /> Prizes
                                        </h5>
                                        <ul className="text-gray-400 text-xs space-y-1">
                                            {activeEvent.prizes.map((p, i) => <li key={i}>{p}</li>)}
                                        </ul>
                                    </div>
                                    <div className="p-4 rounded bg-white/5 border border-white/5">
                                        <h5 className="flex items-center gap-2 text-neon-cyan text-sm font-bold mb-1">
                                            <User size={16} /> Contact
                                        </h5>
                                        <ul className="text-gray-400 text-xs space-y-1">
                                            {activeEvent.contacts.map((c, i) => <li key={i}>{c.name}: {c.phone}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Stats & CTA */}
                            <div className="space-y-4">
                                <div className="p-4 border border-neon-cyan/30 bg-neon-cyan/5 rounded-lg text-center">
                                    <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Registration Fee</span>
                                    <span className="block text-2xl font-bold text-white font-space-grotesk">{activeEvent.fee}</span>
                                </div>
                                
                                <div className="p-4 border border-white/10 bg-white/5 rounded-lg text-center">
                                    <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Squad Size</span>
                                    <span className="block text-lg font-bold text-white">{activeEvent.teamSize}</span>
                                </div>

                                <button className="w-full py-4 bg-neon-cyan text-black font-bold uppercase tracking-wider rounded transition-all hover:bg-white hover:scale-[1.02] flex items-center justify-center gap-2 group">
                                    <Zap size={18} className="group-hover:fill-black" /> Register
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
         </div>
         
         {/* Decorative Corners */}
         <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan rounded-tl-xl pointer-events-none" />
         <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan rounded-br-xl pointer-events-none" />

      </div>

    </div>
  );
}
