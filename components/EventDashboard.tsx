"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, User, Trophy, ArrowRight, Zap, Target, X, ChevronLeft, ChevronRight } from "lucide-react";
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
      id: "recall-o-tune",
      title: "Recall-O-Tune",
      description: "The Ultimate Knowledge and Wit Test! Challenge your memory, reasoning, and problem-solving skills across three engaging rounds. While the challenge is personal, the fun is shared!",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
      category: "Logic",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "TBA",
      timing: "TBA",
      contacts: []
    },
    {
      id: "codex",
      title: "CodeX",
      description: "A dynamic coding competition where participants showcase their programming skills across multiple languages. Test your logic, problem-solving abilities, and proficiency in Python, Java, C++, and more.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      category: "Tech",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Exciting Awards"],
      location: "TBA",
      timing: "TBA",
      contacts: []
    },
    {
      id: "robo-soccer",
      title: "Robo Football",
      description: "An exciting and fast-paced robotic competition where two teams of bots battle it out in a knockout soccer match! Engineering meets sportsmanship in this strategic showdown.",
      image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop",
      category: "Robotics",
      teamSize: "Team",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "Soccer Arena",
      timing: "TBA",
      contacts: []
    },
    {
      id: "robo-war",
      title: "Robo War",
      description: "Prepare for an electrifying face-off in a high-intensity war arena! Bring your custom-built bot to battle it out for glory, strategy, and mechanical supremacy.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      category: "Robotics",
      teamSize: "Team",
      fee: "Coming Soon",
      prizes: ["Cash Prizes"],
      location: "War Arena",
      timing: "TBA",
      contacts: []
    },
    {
      id: "free-fire",
      title: "Free Fire",
      description: "Join the ultimate battle royale where strategy, skill, and teamwork determine the champion. Fight your way to the top and emerge as the last squad standing.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
      category: "Gaming",
      teamSize: "Squad",
      fee: "Coming Soon",
      prizes: ["Pool Prize"],
      location: "E-Sports Arena",
      timing: "TBA",
      contacts: []
    },
    {
      id: "bgmi",
      title: "BGMI",
      description: "Gear up for the ultimate gaming showdown! Step onto the battleground, lead your squad, and compete against the best to claim the title of e-sports champions.",
      image: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=2070&auto=format&fit=crop",
      category: "Gaming",
      teamSize: "Squad",
      fee: "Coming Soon",
      prizes: ["Pool Prize"],
      location: "E-Sports Arena",
      timing: "TBA",
      contacts: []
    },
    {
      id: "robo-race",
      title: "Robo Race",
      description: "Robo 'Daud' - Speed, precision, and engineering excellence collide! Race your custom-built bots through an obstacle-laden course to reach the finish line.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
      category: "Robotics",
      teamSize: "Team",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "Track Area",
      timing: "TBA",
      contacts: []
    },
    {
      id: "drone-race",
      title: "Drone Race",
      description: "Take to the skies! Race your drones through a complex obstacle course, testing piloting skills, precision, and speed in this high-octane event.",
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1974&auto=format&fit=crop",
      category: "Robotics",
      teamSize: "Individual/Team",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "Open Ground",
      timing: "TBA",
      contacts: []
    },
    {
      id: "reasoning-rumble",
      title: "Reasoning Rumble",
      description: "Test your skills with puzzles like dice face challenges, distance calculations, ratios, and pattern recognition. Push your mental agility to the limits!",
      image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop",
      category: "Logic",
      teamSize: "Individual",
      fee: "₹ 50/-",
      prizes: ["Prizes"],
      location: "Block B, Floor 2",
      timing: "06 Feb, 03:25 PM",
      contacts: [{ name: "Priyanshi", phone: "8687968902" }]
    },
    {
      id: "boat-race",
      title: "Boat Race",
      description: "An exhilarating RC Boat Race Challenge! Maneuver your radio-controlled boats through a watercourse filled with twists, turns, and barriers.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
      category: "Robotics",
      teamSize: "Team",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "Water Body",
      timing: "TBA",
      contacts: []
    },
    {
      id: "find-the-language",
      title: "Find The Language",
      description: "Identify the programming language based on syntax snippets or clues. A fast-paced challenge for coding enthusiasts to test their knowledge.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
      category: "Coding",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "TBA",
      timing: "TBA",
      contacts: []
    },
    {
      id: "hackathon",
      title: "Hack-A-Thon",
      description: "The ultimate tech showdown! Problem solvers, designers, and coders come together to create cutting-edge solutions for real-world challenges in a limited time.",
      image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop",
      category: "Tech",
      teamSize: "Team of 2-4",
      fee: "Coming Soon",
      prizes: ["Grand Prize Pool"],
      location: "Innovation Hub",
      timing: "24 Hours",
      contacts: []
    },
    {
      id: "digi-art",
      title: "Digi Art",
      description: "Transform your creative vision into reality! Design stunning digital artwork using popular tools. Impress the judges with innovation and originality.",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
      category: "Creative",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "TBA",
      timing: "TBA",
      contacts: []
    },
    {
      id: "path-finder",
      title: "Path Finder: Robot",
      description: "Design and build an autonomous bot capable of navigating a maze by following white lines, analyzing paths, and reaching the endpoint in record time.",
      image: "https://images.unsplash.com/photo-1535378437327-b7149236addf?q=80&w=2071&auto=format&fit=crop",
      category: "Robotics",
      teamSize: "Team",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "Maze Area",
      timing: "TBA",
      contacts: []
    },
    {
      id: "structromania",
      title: "Structromania",
      description: "Build standing structures using limited materials. Demonstrate innovation and engineering skills to construct a masterpiece that can hold maximum weight.",
      image: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=2071&auto=format&fit=crop",
      category: "Creative",
      teamSize: "Team",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "TBA",
      timing: "TBA",
      contacts: []
    },
    {
      id: "rubiks-cube",
      title: "Rubik’s Cube",
      description: "A thrilling event for puzzle enthusiasts and speed cubers. Highlights include a speed cubing competition, creative challenges, and learning sessions.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
      category: "Fun",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "TBA",
      timing: "TBA",
      contacts: []
    },
    {
      id: "buddhi-kshamta",
      title: "Buddhi Kshamta",
      description: "Test your memory skills through exciting levels: matching card pairs, pairing bottles with colors, memorizing patterns, and identifying objects.",
      image: "https://images.unsplash.com/photo-1559145694-850d986b8c9d?q=80&w=2070&auto=format&fit=crop",
      category: "Fun",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "TBA",
      timing: "TBA",
      contacts: []
    },
    {
      id: "network-workshop",
      title: "Network Workshop",
      description: "Gain in-depth understanding of network architecture, protocols, IP addressing, and security. Learn how to configure network layers for seamless communication.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop",
      category: "Workshop",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Certificates"],
      location: "Seminar Hall",
      timing: "TBA",
      contacts: []
    },
    {
      id: "ai-workshop",
      title: "AI / Power BI Workshop",
      description: "Learn fundamentals of Generative AI and Neural Networks, or discover how to use Power BI for data visualization and interactive dashboards.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
      category: "Workshop",
      teamSize: "Individual",
      fee: "Coming Soon",
      prizes: ["Certificates"],
      location: "Seminar Hall",
      timing: "TBA",
      contacts: []
    },
    {
      id: "laser-show",
      title: "Laser Light Show",
      description: "The highlight of TechFest! An immersive event combining dazzling laser displays with pulsating music and dance. A magical experience not to be missed.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
      category: "Show",
      teamSize: "Open",
      fee: "Free",
      prizes: ["Memories"],
      location: "Main Ground",
      timing: "Evening",
      contacts: []
    },
    {
      id: "bug-hunting",
      title: "Bug Hunting",
      description: "A Java & Python Debugging Challenge! Tackle errors in code snippets and real-world scenarios. Identify bugs, optimize code, and claim the title of Debugging Master.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      category: "Coding",
      teamSize: "Team (Max 2)",
      fee: "Coming Soon",
      prizes: ["Prizes"],
      location: "Labs",
      timing: "2-3 Hours",
      contacts: []
    }
];

export default function EventDashboard() {
  const [activeId, setActiveId] = useState(events[0].id);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeEvent = events.find((e) => e.id === activeId) || events[0];

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsMobileOpen(false);
        }
    };
    
    // Initial check
    if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileOpen]);

  const handleNext = () => {
    const currentIndex = events.findIndex(e => e.id === activeId);
    const nextIndex = (currentIndex + 1) % events.length;
    setActiveId(events[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = events.findIndex(e => e.id === activeId);
    const prevIndex = (currentIndex - 1 + events.length) % events.length;
    setActiveId(events[prevIndex].id);
  };

  return (
    <div className="container mx-auto px-4 py-24 h-screen md:h-[85vh] min-h-[500px] flex flex-col md:flex-row gap-8">
      
      {/* Sidebar: Data Stream */}
      <div className="w-full md:w-1/3 flex flex-col gap-4 h-[40vh] md:h-full">
        <h2 className="text-xl font-mono text-neon-cyan mb-4 flex items-center gap-2 flex-shrink-0">
            <Target size={20} /> EVENT_LOGS 
            <span className="md:hidden text-xs text-gray-500 font-normal ml-auto animate-pulse">(Tap to view)</span>
        </h2>
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3" data-lenis-prevent>
            {events.map((event) => (
                <button
                    key={event.id}
                    onClick={() => {
                        setActiveId(event.id);
                        if (window.innerWidth < 768) {
                            setIsMobileOpen(true);
                        }
                    }}
                    className={cn(
                        "w-full group relative p-4 text-left border rounded-lg transition-all duration-300 flex-shrink-0",
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
                    
                    {/* Mobile Touch Indicator */}
                    <ChevronRight className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white/10 group-active:text-neon-cyan" size={20} />
                </button>
            ))}
        </div>
      </div>

      {/* Mainframe: Details View */}
      <div className={cn(
          "w-full md:w-2/3 relative h-full flex flex-col transition-all duration-300",
          isMobileOpen ? "fixed inset-0 z-50 bg-[#0a0a0a] p-0" : "hidden md:flex"
      )}>
         <div className="absolute inset-0 border border-white/10 md:rounded-2xl bg-black/40 backdrop-blur-md overflow-hidden flex flex-col">
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
            
            {/* Mobile Controls Header */}
            <div className="md:hidden absolute top-4 left-4 right-4 z-50 flex justify-between items-center pointer-events-none">
                <button 
                    onClick={() => setIsMobileOpen(false)}
                    className="pointer-events-auto p-2 bg-black/50 backdrop-blur border border-white/20 rounded-full text-white hover:text-neon-cyan active:scale-95"
                >
                    <X size={24} />
                </button>

                <div className="pointer-events-auto flex gap-2">
                    <button 
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="p-2 bg-black/50 backdrop-blur border border-white/20 rounded-full text-white hover:text-neon-cyan active:scale-95"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="p-2 bg-black/50 backdrop-blur border border-white/20 rounded-full text-white hover:text-neon-cyan active:scale-95"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeEvent.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full flex flex-col"
                >
                    {/* Hero Image Area - Fixed Height */}
                    <div className="h-[150px] md:h-[300px] relative w-full flex-shrink-0 overflow-hidden border-b border-white/10">
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

                                <button className="hidden md:flex w-full py-4 bg-neon-cyan text-black font-bold uppercase tracking-wider rounded transition-all hover:bg-white hover:scale-[1.02] items-center justify-center gap-2 group">
                                    <Zap size={18} className="group-hover:fill-black" /> Coming Soon
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Mobile Floating Footer */}
                    <div className="p-4 border-t border-white/10 bg-black/80 backdrop-blur-md md:hidden shrink-0 z-20">
                         <button className="w-full py-3 bg-neon-cyan text-black font-bold uppercase tracking-wider rounded transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                             <Zap size={18} fill="black" /> Coming Soon
                         </button>
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
