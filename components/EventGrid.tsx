"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import EventModal, { EventData } from "./EventModal";
import { cn } from "@/lib/utils";
import Image from "next/image";

const events: EventData[] = [
  // --- TECH & CODING ---
  {
    id: "codex",
    title: "CodeX",
    description: "CodeX is a dynamic coding competition where participants showcase their programming skills across multiple languages. Test your logic, problem-solving abilities, and proficiency in languages like Python, Java, C++, and more.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "TBA",
    contacts: [{ name: "Tech Team", phone: "" }],
    rulebook: "https://drive.google.com/file/d/1JjKKm1lzgl0Kktjg0_yjZpiG6Ugz5Xt0/view?usp=drive_link"
  },
  {
    id: "hackathon-university",
    title: "Hack-A-Thon (University)",
    description: "The ultimate tech showdown where innovation meets collaboration! Problem solvers, designers, and coders come together to create cutting-edge solutions for real-world challenges in a limited time frame.",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop",
    category: "Tech",
    teamSize: "Team (Max 4)",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Innovation Hub",
    timing: "24 Hours",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1vAxIqaAdvfQTC2H7FU_PsqaTOeWRwyac/view?usp=drive_link"
  },
  {
    id: "hackathon-school",
    title: "Hack-A-Thon (School)",
    description: "The ultimate tech showdown for school students! Showcase your individual problem-solving skills and coding prowess to create innovative solutions for real-world challenges.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Innovation Hub",
    timing: "19th Feb, 12:30 PM",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1vAxIqaAdvfQTC2H7FU_PsqaTOeWRwyac/view?usp=drive_link"
  },
  {
    id: "bug-hunting",
    title: "Bug Hunting",
    description: "A Java & Python Debugging Challenge! Tackle errors in code snippets and real-world scenarios. Identify bugs, optimize code, and claim the title of Debugging Master.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
    teamSize: "Team (Max 2)",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Labs",
    timing: "2-3 Hours",
    contacts: []
  },
  {
    id: "find-the-language",
    title: "Find The Language",
    description: "Identify the programming language based on syntax snippets or clues. A fast-paced challenge for coding enthusiasts to test their knowledge of different languages.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1P4ebaiNbmjjJScGvJLPQkJ6sCBe4Z9v2/view?usp=drive_link"
  },

  // --- ROBOTICS ---
  {
    id: "robo-war",
    title: "Robo War",
    description: "Prepare for an electrifying face-off in Mini War! A knockout competition where custom-built mini bots battle for glory, strategy, and mechanical supremacy in a high-intensity arena.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "Team",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "War Arena",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1bArGi-WXcCRWSa58jgbXAKXlNU4pInNn/view"
  },
  {
    id: "robo-race",
    title: "Robo “दौड़”",
    description: "Speed, precision, and engineering excellence collide! Race your custom-built bots through an obstacle-laden course to reach the finish line in the fastest time possible.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "Team",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Track Area",
    timing: "19th Feb, 2:00 PM",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1j2zIV7JYpS2SyhL3Y2UGybH1iHcbQty6/view"
  },
  {
    id: "robo-soccer",
    title: "Robo “फ़ुटबॉल”",
    description: "An exciting robotic competition where two teams of bots battle it out in a knockout soccer match! Engineering meets sportsmanship in this strategic showdown.",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "Team",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Soccer Arena",
    timing: "19th Feb, 2:00 PM",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/18J_8K51RG7Qnx9EPrvdHk2qjOr50KscS/view"
  },
  {
    id: "drone-race",
    title: "Drone Race",
    description: "Take to the skies in this high-speed event! Race your drones through a complex obstacle course, testing piloting skills, precision, and speed.",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1974&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "Individual/Team",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Open Ground",
    timing: "19th Feb, 3:30 PM",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/19A2FG13rKeCGg86FfjVbZfOTAMckt_xH/view?usp=drive_link"
  },
  {
    id: "path-finder",
    title: "Path Finder : Robot",
    description: "Design and build an autonomous bot capable of navigating a maze by following white lines, analyzing paths, and reaching the endpoint in record time.",
    image: "https://images.unsplash.com/photo-1535378437327-b7149236addf?q=80&w=2071&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "Team",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Maze Area",
    timing: "TBA",
    contacts: []
  },
  {
    id: "boat-race",
    title: "Boat Race",
    description: "An exhilarating RC Boat Race Challenge! Maneuver your radio-controlled boats through a watercourse filled with twists, turns, and barriers.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
    category: "Fun",
    teamSize: "Team",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "Water Body",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1Gp_eUg06eHemEYtqbD6F6OASdbCB8lti/view?usp=drive_link"
  },

  // --- GAMING ---
  {
    id: "free-fire",
    title: "Free Fire",
    description: "Join the ultimate battle royale! Strategy, skill, and teamwork determine the champion. Fight your way to the top and emerge as the last squad standing.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    category: "Gaming",
    teamSize: "Squad",
    fee: "Register to View",
    prizes: ["Pool Prize"],
    location: "E-Sports Arena",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1m9Tar-PU5RT5KWgR86t7Nl2EhUFsdi8t/view?usp=drive_link"
  },
  {
    id: "bgmi",
    title: "BGMI",
    description: "The ultimate gaming showdown! Step onto the battleground, lead your squad, and compete against the best to claim the title of e-sports champions.",
    image: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=2070&auto=format&fit=crop",
    category: "Gaming",
    teamSize: "Squad",
    fee: "Register to View",
    prizes: ["Pool Prize"],
    location: "E-Sports Arena",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1FwnOuSYFHRA-uF7wucMzZLsb6sS0Pnjn/view?usp=drive_link"
  },

  // --- BRAINSTORMING & FUN ---
  {
    id: "recall-o-tune",
    title: "Recall-O-Tune",
    description: "The Ultimate Knowledge and Wit Test! Challenge your memory, reasoning, and problem-solving skills across three engaging rounds.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    category: "Fun",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1iLJLjAA-znBYhTzk1yOQZQjr6Qy7EAbw/view"
  },
  {
    id: "reasoning-rumble",
    title: "Reasoning Rumble",
    description: "Test your skills with puzzles like dice face challenges, distance calculations, ratios, and pattern recognition. Push your mental agility to the limits!",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop",
    category: "Fun",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "19th Feb, 3:25 PM",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1_N6bE_UrRex7s-vCbM6sXfOaH20jSlUY/view"
  },
  {
    id: "rubiks-cube",
    title: "Rubik’s Cube",
    description: "A thrilling event for puzzle enthusiasts and speed cubers. Includes speed cubing competition, creative challenges, and learning sessions.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
    category: "Fun",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1JAG8pE_kOFEvFYJ5OZH7bHy-XHtjBJE8/view"
  },
  {
    id: "buddhi-kshamta",
    title: "Buddhi “क्षमता”",
    description: "Test your memory skills through exciting levels: matching card pairs, pairing bottles with colors, memorizing patterns, and identifying objects.",
    image: "https://images.unsplash.com/photo-1559145694-850d986b8c9d?q=80&w=2070&auto=format&fit=crop",
    category: "Fun",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1Z39Olh-N6R44TKbJzkeGJ4Vq8zkwATqV/view?usp=drive_link"
  },
  {
    id: "laser-show",
    title: "Laser Light Show",
    description: "The highlight of TechFest! immersive event combining dazzling laser displays with pulsating music and dance. A magical experience not to be missed.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    category: "Show",
    teamSize: "Open",
    fee: "Free",
    prizes: ["TBA"],
    location: "Main Ground",
    timing: "Evening",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1VzB6bKC1q7SgNPUiYXPyv8OTbP-ox92Q/view?usp=drive_link"
  },

  // --- CREATIVE ---
  {
    id: "digi-art",
    title: "Digi Art",
    description: "Transform your creative vision into reality! Design stunning digital artwork using popular tools. Impress the judges with innovation and originality.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    category: "Creative",
    teamSize: "Individual",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "TBA",
    contacts: [],
    rulebook: "https://drive.google.com/file/d/1SwHkTNtqxKzjHN0VvwHyIV6FWSSCSDqu/view?usp=drive_link"
  },
  {
    id: "structromania",
    title: "Structromania",
    description: "Build standing structures using limited materials like wooden sticks, threads, and glue. Demonstrate innovation as you construct a masterpiece that can hold maximum weight.",
    image: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=2071&auto=format&fit=crop",
    category: "Creative",
    teamSize: "Team",
    fee: "Register to View",
    prizes: ["TBA"],
    location: "TBA",
    timing: "TBA",
    contacts: []
  },

  // --- WORKSHOPS ---
  {
    id: "network-workshop",
    title: "Network Layers Workshop",
    description: "Gain in-depth understanding of network architecture, protocols, IP addressing, and security. configuring the network layers for seamless communication.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop",
    category: "Workshop",
    teamSize: "Individual",
    fee: "Register",
    prizes: ["TBA"],
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
    fee: "Register",
    prizes: ["TBA"],
    location: "Seminar Hall",
    timing: "TBA",
    contacts: []
  }
];

export default function EventGrid() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
          Explore <span className="text-neon-cyan">Events</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Dive into a plethora of technical, cultural, and fun events designed to challenge your intellect and creativity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] to-transparent" />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-xs font-bold text-neon-cyan">{event.category}</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between relative z-10 bg-[#0a0a1f]">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk leading-tight">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="w-full py-2 rounded-lg border border-white/20 text-sm font-bold hover:bg-neon-cyan hover:text-black hover:border-transparent transition-all duration-300"
                >
                  View Details
                </button>
              </div>
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
