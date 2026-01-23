"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import EventModal, { EventData } from "./EventModal";
import { cn } from "@/lib/utils";

const events: EventData[] = [
  {
    id: "1",
    title: "Reasoning Rumble",
    description: "Get ready for Reasoning Rumble, a thrilling challenge of reasoning, aptitude, and logic! Test your skills with puzzles like dice face challenges, distance calculations, ratios, and pattern recognition. Perfect for puzzle enthusiasts and analytical minds.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    category: "School / University",
    teamSize: "Individual",
    fee: "₹ 50/-",
    prizes: [
        "Prize Money and Exciting Rewards for winners.",
        "Winners enlisted in Hall of Fame.",
        "Participation Certificates for all."
    ],
    location: "Block B, Second Floor",
    timing: "06th Feb 2025, 03:25 PM",
    contacts: [
        { name: "Priyanshi", phone: "8687968902" },
        { name: "Aditya", phone: "8303164785" }
    ],
    note: "Hardcopy certificates awarded only to winners."
  },
  {
    id: "2",
    title: "Laser Light Show",
    description: "A spectacular visual display of lasers synchronized with music. Experience the fusion of technology and art in this mesmerizing evening event.",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
    category: "Fun Event",
    teamSize: "Open",
    fee: "Free",
    prizes: ["Memories for a lifetime!"],
    location: "Main Ground",
    timing: "07th Feb 2025, 06:00 PM",
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
    prizes: ["₹ 5000 Cash Prize", "Trophies"],
    location: "Central Courtyard",
    timing: "06th Feb 2025, 11:00 AM",
    contacts: [{ name: "Robo Club", phone: "8888888888" }]
  },
  {
    id: "4",
    title: "CodeX",
    description: "The ultimate competitive programming contest. Solve algorithmic problems against the clock and claim the title of best coder.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
    teamSize: "Individual",
    fee: "₹ 100/-",
    prizes: ["Internship Opportunities", "Gadgets"],
    location: "Computer Lab 1",
    timing: "07th Feb 2025, 10:00 AM",
    contacts: [{ name: "Tech Lead", phone: "7777777777" }]
  }
];

export default function EventGrid() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <div className="container mx-auto px-4 py-32">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
        >
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
                Explore <span className="text-neon-cyan">Events</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Dive into a plethora of technical, cultural, and fun events designed to challenge your intellect and creativity.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, i) => (
                <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300"
                >
                    <div className="absolute inset-0">
                         <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center z-10">
                        <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk uppercase tracking-wider">
                            {event.title}
                        </h3>
                         <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                             <p className="text-xs text-neon-cyan mb-4">{event.category}</p>
                         </div>
                        
                        <button 
                            onClick={() => setSelectedEvent(event)}
                            className="px-6 py-2 rounded-full border border-white/30 text-xs font-bold hover:bg-neon-cyan hover:text-black hover:border-transparent transition-all duration-300 opacity-80 group-hover:opacity-100"
                        >
                            View More
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

        {selectedEvent && (
            <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
    </div>
  );
}
