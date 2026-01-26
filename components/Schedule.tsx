"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Event = {
  title: string;
  category: "Tech" | "Robotics" | "Fun" | "Workshop";
  time: string;
  venue: string;
  description: string;
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
};

const scheduleData: Record<number, Event[]> = {
  1: [
    {
      title: "Codex",
      category: "Tech",
      time: "10:00 AM",
      venue: "Computer Lab",
      description: "A coding challenge where participants can test their coding skills and compete against others.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Rubik’s Cube",
      category: "Fun",
      time: "11:00 AM",
      venue: "Central Hall",
      description: "A speed cubing competition with creative challenges and learning sessions.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Find The Language",
      category: "Tech",
      time: "12:00 PM",
      venue: "Seminar Hall 1",
      description: "A fun and engaging game where participants have to guess the language of a given Code.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Recall-o-tune",
      category: "Fun",
      time: "02:00 PM",
      venue: "Auditorium",
      description: "Put your memory and recognition skills to the ultimate test in this engaging event.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Structomania",
      category: "Tech",
      time: "03:00 PM",
      venue: "Open Ground",
      description: "Teams compete to design and build freestanding structures using limited materials.",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "Workshops",
      category: "Workshop",
      time: "04:00 PM",
      venue: "Workshop Area",
      description: "Hands-on tech workshops to empower students with industry relevant skills.",
      colSpan: 2,
      rowSpan: 1,
    },
  ],
  2: [
     {
      title: "Hack-a-thon",
      category: "Tech",
      time: "09:00 AM",
      venue: "Innovation Hub",
      description: "Coders come together creating cutting-edge solutions for real-world challenges.",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: "Buddhi “क्षमता”",
      category: "Fun",
      time: "10:00 AM",
      venue: "Classroom Block A",
      description: "Test your memory: match cards, pair bottles, recreate patterns, and identify objects.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Reasoning Rumble",
      category: "Tech",
      time: "11:30 AM",
      venue: "Classroom Block B",
      description: "Puzzles like dice challenges, distance calculations, and pattern recognition.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "BGMI Tournament",
      category: "Fun",
      time: "01:00 PM",
      venue: "E-Sports Arena",
      description: "A gaming event where participants showcase their skills in PUBG/BGMI.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Free Fire",
      category: "Fun",
      time: "03:00 PM",
      venue: "E-Sports Arena",
      description: "Compete in an intense Free Fire tournament.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Digi Art",
      category: "Tech",
      time: "04:30 PM",
      venue: "Digital Lab",
      description: "Showcase artistic skills using digital tools in this creative competition.",
      colSpan: 2,
      rowSpan: 1,
    },
  ],
  3: [
    {
      title: "Robo “दौड़” (Race)",
      category: "Robotics",
      time: "10:00 AM",
      venue: "Robotics Arena",
      description: "Race your robots on a challenging track to the finish line.",
      colSpan: 1,
      rowSpan: 1,
    },
     {
      title: "Robo War",
      category: "Robotics",
      time: "11:00 AM",
      venue: "Main Convocation Ground",
      description: "Control your robots in a war-like scenario. Survival of the toughest.",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: "ROBO “फ़ुटबॉल”",
      category: "Robotics",
      time: "01:00 PM",
      venue: "Robotics Arena",
      description: "Control your robots to score goals in a high-tech soccer match.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Drone Race",
      category: "Robotics",
      time: "03:00 PM",
      venue: "Open Sky Area",
      description: "Race drones through a complex obstacle course testing piloting skills.",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "Boat Race",
      category: "Robotics",
      time: "04:00 PM",
      venue: "Water Tank Area",
      description: "Navigate radio-controlled boats through an obstacle-filled watercourse.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Laser Light Show",
      category: "Fun",
      time: "06:00 PM",
      venue: "Main Stage",
      description: "A spectacular performance of light, lasers, and music to conclude the fest.",
      colSpan: 2,
      rowSpan: 1,
    },
  ],
};

const days = [
  { id: 1, name: "Feb 18", title: "The Awakening" },
  { id: 2, name: "Feb 19", title: "The Ascension" },
  { id: 3, name: "Feb 20", title: "The Singularity" },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section id="schedule" className="py-24 relative min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk">
            Timeline <span className="text-neon-cyan">Protocol</span>
          </h2>
          <p className="mt-4 text-gray-400">Select a dimension to view events.</p>
        </motion.div>

        {/* Holographic Timeline Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={cn(
                "relative group px-6 py-3 min-w-[140px] rounded-xl border transition-all duration-300 overflow-hidden",
                activeDay === day.id 
                  ? "border-neon-cyan bg-neon-cyan/10 text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]" 
                  : "border-white/10 bg-white/5 text-gray-500 hover:border-white/30"
              )}
            >
              <div className="text-xs uppercase tracking-widest mb-1 opacity-70">{day.name}</div>
              <div className={cn("font-bold font-space-grotesk", activeDay === day.id ? "text-neon-cyan" : "text-gray-300")}>
                {day.title}
              </div>
              
              {/* Active styling flair */}
              {activeDay === day.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-neon-cyan/5 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bento Grid with Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
          >
            {scheduleData[activeDay].map((event, index) => (
              <motion.div
                key={`${activeDay}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "group relative p-6 rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]",
                  event.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
                  event.rowSpan === 2 ? "md:row-span-2" : "md:row-span-1"
                )}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border",
                      event.category === "Tech" && "bg-blue-500/10 border-blue-500/20 text-blue-400",
                      event.category === "Robotics" && "bg-neon-orange/10 border-neon-orange/20 text-neon-orange",
                      event.category === "Fun" && "bg-purple-500/10 border-purple-500/20 text-purple-400",
                      event.category === "Workshop" && "bg-green-500/10 border-green-500/20 text-green-400"
                    )}>
                      {event.category}
                    </span>
                    <span className="text-sm font-mono text-neon-cyan/80">{event.time}</span>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{event.description}</p>
                    
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.venue}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
