"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Event = {
  title: string;
  category: "Tech" | "Robotics" | "Fun" | "Workshop" | "Gaming" | "Creative" | "Logic" | "Show";
  time: string;
  venue: string;
  description: string;
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
};

const scheduleData: Record<number, Event[]> = {
  1: [
    {
      title: "CodeX",
      category: "Tech",
      time: "12:30 PM",
      venue: "All Labs (B2)",
      description: "A dynamic coding competition testing logic and proficiency.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Rubik’s Cube",
      category: "Fun",
      time: "01:20 PM",
      venue: "Volleyball Court",
      description: "Speed cubing competition for puzzle enthusiasts.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Buddhi “क्षमता”",
      category: "Fun",
      time: "02:05 PM",
      venue: "Volleyball Court",
      description: "Test memory and focus with pattern matching challenges.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Digi Art",
      category: "Creative",
      time: "02:15 PM",
      venue: "B7-003, B7-004",
      description: "Digital art competition to showcase creative design skills.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Laser Light Show",
      category: "Show",
      time: "02:00 PM",
      venue: "Mini Auditorium",
      description: "A spectacular performance of light, lasers, and music.",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "Free Fire",
      category: "Gaming",
      time: "TBA",
      venue: "Online",
      description: "Adrenaline-pumping battle royale showdown.",
      colSpan: 2,
      rowSpan: 1,
    },
  ],
  2: [
    {
      title: "Robo War",
      category: "Robotics",
      time: "02:00 PM",
      venue: "Volleyball Court",
      description: "Custom-built bots battle in a high intensity knockout arena.",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: "Drone Race",
      category: "Robotics",
      time: "03:30 PM",
      venue: "Admin Ground",
      description: "High-speed drone racing through complex obstacle courses.",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "Robo “दौड़”",
      category: "Robotics",
      time: "12:30 PM",
      venue: "Volleyball Court",
      description: "Speed and precision race for robotic creations.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Robo Football",
      category: "Robotics",
      time: "12:30 PM",
      venue: "Volleyball Court",
      description: "Robots competing in a fast-paced soccer match.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Boat Race",
      category: "Robotics",
      time: "03:30 PM",
      venue: "Volleyball Court",
      description: "Navigate RC boats through a water obstacle course.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Network Workshop",
      category: "Workshop",
      time: "04:30 PM",
      venue: "Mini Auditorium",
      description: "Learn to configure network layers and protocols.",
      colSpan: 1,
      rowSpan: 1,
    },
  ],
  3: [
    {
      title: "Hack-a-thon",
      category: "Tech",
      time: "12:30 PM",
      venue: "B1-207, B1-007",
      description: "Problem solvers and coders creating real-world solutions.",
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: "Find The Language",
      category: "Tech",
      time: "12:30 PM",
      venue: "All Labs (B2)",
      description: "Identify programming languages from syntax snippets.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Structromania",
      category: "Creative",
      time: "01:00 PM",
      venue: "B5-Ground Floor",
      description: "Build weight-bearing structures using limited materials.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Recall-O-Tune",
      category: "Logic",
      time: "01:30 PM",
      venue: "B7-005, B7-006",
      description: "Test general intelligence and memory in this quiz.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Reasoning Rumble",
      category: "Logic",
      time: "02:50 PM",
      venue: "B7-003, B7-004",
      description: "Logic puzzles and aptitude challenges.",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "AI Workshop",
      category: "Workshop",
      time: "03:00 PM",
      venue: "Mini Auditorium",
      description: "Generative AI and Power BI fundamentals.",
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
            Event <span className="text-neon-cyan">Schedule</span>
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
                      event.category === "Workshop" && "bg-green-500/10 border-green-500/20 text-green-400",
                      event.category === "Gaming" && "bg-red-500/10 border-red-500/20 text-red-400",
                      event.category === "Creative" && "bg-pink-500/10 border-pink-500/20 text-pink-400",
                      event.category === "Logic" && "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
                      event.category === "Show" && "bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan"
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
