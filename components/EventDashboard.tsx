"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, User, Trophy, ArrowRight, Zap, Target, X, ChevronLeft, ChevronRight, GraduationCap, School } from "lucide-react";
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
  level: "school" | "university" | "both";
  registrationLink?: string;
}

const events: EventData[] = [
  {
    id: "codex",
    title: "CodeX",
    description: "CodeX is a dynamic coding competition where participants showcase their programming skills across multiple languages. Test your logic, problem-solving abilities, and proficiency in languages like Python, Java, C++, and more. Compete, learn, and code your way to the top!",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=480&auto=format&fit=crop",
    category: "Tech",
    teamSize: "2 Members",
    fee: "160/-",
    prizes: ["TBA"],
    location: "All Labs (B2-Ground Floor)",
    timing: "18th Feb, 12:30 PM",
    contacts: [{ name: "Shrinjay Shresth", phone: "" }, { name: "Neelabh Shukla", phone: "" }, { name: "Om Jaiswal", phone: "" }],
    level: "university",
    registrationLink: "https://forms.gle/TAstKD4ENGMsFqB77"
  },
  {
    id: "find-the-language",
    title: "Find The Language",
    description: "Step into the world of coding with Find the Language, an exhilarating event that challenges your programming knowledge and problem-solving speed. Identify the programming language based on the provided syntax, snippets, or clues, and race against the clock to emerge victorious!",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=480&auto=format&fit=crop",
    category: "Coding",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["Prizes"],
    location: "B2-All Labs",
    timing: "20th Feb, 12:30 PM",
    contacts: [{ name: "Ansh Kumar Singh", phone: "" }, { name: "Satyam Gupta", phone: "" }],
    level: "university",
    registrationLink: "https://forms.gle/ViWJuZAuq7th7FWd9"
  },
  {
    id: "buddhi-kshamta",
    title: "Buddhi “क्षमता”",
    description: "Buddhi “क्षमता” is an engaging event that tests memory through four fun levels card matching, bottle-color pairing, object pattern recreation, and identifying objects by name and color. It challenges focus, recall, and observation skills in an exciting way.",
    image: "https://images.unsplash.com/photo-1559145694-850d986b8c9d?q=80&w=480&auto=format&fit=crop",
    category: "Fun",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["Prizes"],
    location: "Volleyball Court",
    timing: "18th Feb - 2:05 PM (Univ) | 1:00 PM (School)",
    contacts: [{ name: "Shipra Mishra", phone: "" }, { name: "Prateek Singh", phone: "" }, { name: "Jahnvi Pandey", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/zy14bmEJTQ9HzpXa7"
  },
  {
    id: "digi-art",
    title: "Digi Art",
    description: "Transform your creative vision into reality with Digi Art, a competition that challenges participants to design a digital artwork using popular design tools on your systems. With innovation and originality as your guide, create stunning visuals to impress the judges and leave your mark in the world of digital design!",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=480&auto=format&fit=crop",
    category: "Creative",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["Prizes"],
    location: "B7-003, B7-004",
    timing: "18th Feb, 2:15 PM",
    contacts: [{ name: "Prateek Kumar Singh", phone: "" }, { name: "Mohd Ayan", phone: "" }, { name: "Dilijan Ansari", phone: "" }],
    level: "university",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfQ60JeC5doeu_ZGahXm342zI3GvOfPGePq5Ew7foQ6yKni3w/viewform"
  },
  {
    id: "rubiks-cube",
    title: "Rubik’s Cube",
    description: "Rubic’s cube is a thrilling event for puzzle enthusiasts, problem solvers, and speed cubers of all skill levels. Highlights include a speed cubing competition, creative challenges, and learning sessions with expert cubers.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=480&auto=format&fit=crop",
    category: "Fun",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["Prizes"],
    location: "Volleyball Court",
    timing: "18th Feb - 1:20 PM (Univ) | 2:00 PM (School)",
    contacts: [{ name: "Rashi Malik", phone: "" }, { name: "Dhruv Pathak", phone: "" }, { name: "Aditya Verma", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/uK2wUFS4hEbZNy588"
  },
  {
    id: "recall-o-tune",
    title: "Recall-O-Tune",
    description: "Unleash your intellect and test your general intelligence in Recall-O-Tune – The Ultimate Knowledge and Wit Test! This exciting competition challenges your memory, reasoning, and problem-solving skills across three engaging rounds. While the challenge is personal, the fun is shared!",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=480&auto=format&fit=crop",
    category: "Logic",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["Prizes"],
    location: "B7-005, B7-006 (Univ) | B1-207 (School)",
    timing: "20th Feb 1:30 PM (Univ) | 18th Feb 2:45 PM (School)",
    contacts: [{ name: "Vinay Yadav", phone: "" }, { name: "Vinayak", phone: "" }, { name: "Divyata Maurya", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/Z4uFqqSUz1i8NEnE8"
  },
  {
    id: "robo-war",
    title: "Robo War",
    description: "Prepare for an electrifying face-off in Mini War, where custom-built bots battle in a high intensity knockout arena. Let strategy, innovation, and engineering decide the ultimate champion!",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=480&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "4 Members",
    fee: "250/-",
    prizes: ["TBA"],
    location: "Volleyball Court",
    timing: "19th Feb, 2:00 PM",
    contacts: [{ name: "Raunak Srivastava", phone: "" }, { name: "Aditya Pratap Singh", phone: "" }, { name: "Mahendra Maurya", phone: "" }],
    level: "university",
    registrationLink: "https://forms.gle/C19QxDKbjjJAVGSw7"
  },
  {
    id: "robo-soccer",
    title: "Robo Football",
    description: "Step into the arena for Robo “फ़टबॉल” an exciting fast-paced robotic competition where two teams of bots battle it out in a knockout soccer match! This is a unique event where engineering meets sportsmanship, and strategic thinking and programming skills are key to victory.",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=480&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "3 Members (Univ) | 2 Members (School)",
    fee: "150/- (Univ), 100/- (School)",
    prizes: ["TBA"],
    location: "Volleyball Court",
    timing: "19th Feb 12:30 PM (Univ) | 18th Feb 2:00 PM (School)",
    contacts: [{ name: "Shiv Mangalam Dubey", phone: "" }, { name: "Aditya Singh", phone: "" }, { name: "Anubhav Jaiswal", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/jSG2d9sAQHoVe3hE6"
  },
  {
    id: "robo-race",
    title: "Robo Race",
    description: "Welcome to Robo “दौड़”, where speed, precision, and engineering excellence collide! In this exciting event, teams will race their custom-built bots through an obstacle-laden course, with the goal of reaching the finish line in the fastest time possible. Test your robotic design and programming skills while navigating through a challenging path to claim victory!",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=480&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "3 Members (Univ) | 2 Members (School)",
    fee: "150/- (Univ), 100/- (School)",
    prizes: ["Prizes"],
    location: "Volleyball Court",
    timing: "19th Feb 12:30 PM (Univ) | 18th Feb 2:00 PM (School)",
    contacts: [{ name: "Abhishek Rao", phone: "" }, { name: "Ahad Ahmed", phone: "" }, { name: "Subhadeep pal", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/Goifd69cWuGo8V9C7"
  },
  {
    id: "hackathon",
    title: "Hack-A-Thon",
    description: "Gear up for Hack-a-thon, the ultimate tech showdown where innovation meets collaboration! This event invites problem solvers, designers, and coders to come together and create cutting-edge solutions for real-world challenges. Compete, innovate, and bring your ideas to life in a limited time frame.",
    image: "/hackathon.webp",
    category: "Tech",
    teamSize: "4 Members",
    fee: "200/-",
    prizes: ["TBA"],
    location: "B1-207, B1-007",
    timing: "20th Feb, 12:30 PM",
    contacts: [{ name: "Shrinjay Shresth", phone: "" }, { name: "Akarsh Mishra", phone: "" }, { name: "Neelabh Shukla", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/aRw5qbeNHZqmMyyn9"
  },
  {
    id: "bgmi",
    title: "BGMI",
    description: "Gear up for the ultimate gaming showdown with BGMI Battle Royale, where strategy, skill, and teamwork take center stage! Step onto the battleground, lead your squad, and compete against the best to claim the title of champions in e-sports.",
    image: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=480&auto=format&fit=crop",
    category: "Gaming",
    teamSize: "4 Members",
    fee: "200/-",
    prizes: ["Pool Prize"],
    location: "B2-305 (Final Round)",
    timing: "19th Feb (Final)",
    contacts: [{ name: "Shashank Kumar", phone: "" }, { name: "Aviral Mishra", phone: "" }, { name: "Divyansh Srivastava", phone: "" }],
    level: "university",
    registrationLink: "https://forms.gle/FPDw5HN32rgQhyyg7"
  },
  {
    id: "free-fire",
    title: "Free Fire",
    description: "Gear up for an adrenaline-pumping gaming experience with the Free Fire Showdown! Join the ultimate battle royale where strategy, skill, and teamwork will determine the champion. Fight your way to the top, eliminate opponents, and emerge as the last squad standing in this high stakes tournaments of e-sports.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=480&auto=format&fit=crop",
    category: "Gaming",
    teamSize: "4 Members",
    fee: "160/- (Univ), 150/- (School)",
    prizes: ["Pool Prize"],
    location: "B2-305/ 304 (Online Final)",
    timing: "TBA",
    contacts: [{ name: "Yash Mishra", phone: "" }, { name: "Sanskar Dixit", phone: "" }, { name: "Aiman Abidi", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/d6U8aJQQF7Cb72zYA"
  },
  {
    id: "structromania",
    title: "Structromania",
    description: "Step into the world of creativity and engineering with Structromania, A unique competition where teams compete to design and will build standing structures using limited materials like wooden sticks threads, glue etc. A wooden structure which can hold the maximum weight before it breakdown. This is your chance to demonstrate your innovation, teamwork, and problem- solving abilities as you construct a masterpiece under challenging constraints.",
    image: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=480&auto=format&fit=crop",
    category: "Creative",
    teamSize: "4 Members",
    fee: "120/-",
    prizes: ["Prizes"],
    location: "B5-Ground Floor",
    timing: "20th Feb, 1:00 PM",
    contacts: [{ name: "Isha Singh", phone: "" }, { name: "Aakarsh Pandey", phone: "" }, { name: "Mohd Aghaz", phone: "" }],
    level: "university",
    registrationLink: "https://forms.gle/h3WtGLPZARirgymPA"
  },
  {
    id: "reasoning-rumble",
    title: "Reasoning Rumble",
    description: "Get ready for Reasoning Rumble, a thrilling challenge of reasoning, aptitude, and logic! Test your skills with puzzles like dice face challenges, distance calculations, ratios, and pattern recognition, all designed to push your mental agility to the limits. Perfect for puzzle enthusiasts and analytical minds, this event is your chance to shine, have fun, and compete for the title of Ultimate Logic Champion!",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=480&auto=format&fit=crop",
    category: "Logic",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["TBA"],
    location: "B7-003, B7-004 (Univ) | B7-005, B7-006 (School)",
    timing: "20th Feb 2:50 PM (Univ) | 18th Feb 3:25 PM (School)",
    contacts: [{ name: "Anshuma Yadav", phone: "" }, { name: "Neha Yadav", phone: "" }, { name: "Nistha Arora", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/ETgf9kfMqPX1vMa98"
  },
  {
    id: "boat-race",
    title: "Boat Race",
    description: "Join us for an exhilarating RC Boat Race Challenge, where enthusiasts and competitors will showcase their skills in navigating radio-controlled boats through a watercourse filled with obstacles. Participants will race their RC boats in a specially designed water body, maneuvering through twists, turns, and barriers in the shortest possible time to claim victory.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=480&auto=format&fit=crop",
    category: "Robotics",
    teamSize: "2 Members",
    fee: "100/-",
    prizes: ["Prizes"],
    location: "Volleyball Court",
    timing: "19th Feb, 3:30 PM",
    contacts: [{ name: "Samarth Kumar", phone: "" }, { name: "Himanshu Sharma", phone: "" }, { name: "Ankit Singh", phone: "" }],
    level: "university",
    registrationLink: "https://forms.gle/4pDhh72JboG8BjwE9"
  },
  {
    id: "drone-race",
    title: "Drone Race",
    description: "Take to the skies in the exhilarating Drone Race! This high-speed, action-packed event challenges participants to race their drones through a complex obstacle course, testing their piloting skills, precision, and speed. Whether you're an experienced drone racer or a beginner, this event offers the ultimate test of your aerial abilities!",
    image: "/drone-race-mobile-v2.jpg",
    category: "Robotics",
    teamSize: "4 Members",
    fee: "200/-",
    prizes: ["Prizes"],
    location: "Admin Ground",
    timing: "19th Feb, 3:30 PM",
    contacts: [{ name: "Kshitij Gupta", phone: "" }, { name: "Anurag Kumar Rai", phone: "" }, { name: "Vicky Kumar Mishra", phone: "" }],
    level: "both",
    registrationLink: "https://forms.gle/DrEv4TLiGe9FTjZV7"
  },
  {
    id: "network-workshop",
    title: "Workshop on Configuring The Network Layers",
    description: "Gain in-depth understanding of network architecture, protocols, IP addressing, and security. Learn how to configure network layers for seamless communication.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=480&auto=format&fit=crop",
    category: "Workshop",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["TBA"],
    location: "Mini Auditorium",
    timing: "19th Feb, 4:30 PM",
    contacts: [{ name: "Rashi Malik", phone: "" }],
    level: "university"
  },
  {
    id: "ai-workshop",
    title: "AI Workshop (Generative AI) / Power BI Workshop",
    description: "Learn fundamentals of Generative AI and Neural Networks, or discover how to use Power BI for data visualization and interactive dashboards.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=480&auto=format&fit=crop",
    category: "Workshop",
    teamSize: "1 Member",
    fee: "60/-",
    prizes: ["TBA"],
    location: "Mini Auditorium",
    timing: "20th Feb, 3:00 PM",
    contacts: [{ name: "Anshu Kasaudhan", phone: "" }, { name: "Raghuvar Arya", phone: "" }, { name: "Jahnvi Pandey", phone: "" }],
    level: "university"
  },
  {
    id: "laser-show",
    title: "Laser Light Show",
    description: "Step into a world of magic and rhythm with the Laser Light Extravaganza, the highlight of TechFest! This immersive event combines dazzling laser displays with pulsating music and energetic dance performances, creating an unforgettable experience. To add a spark of romance, special couple events bring an enchanting charm to the festivities",
    image: "/laser-show-opt.webp",
    category: "Show",
    teamSize: "1-2 Members",
    fee: "80/- (1), 150/- (2)",
    prizes: ["TBA"],
    location: "Mini Auditorium",
    timing: "18th Feb, 2:00 PM - 6:00 PM",
    contacts: [{ name: "Viveka Core Team", phone: "" }],
    level: "university",
    registrationLink: "https://forms.gle/Uom8d5cAYFrhcSme6"
  }
];

export default function EventDashboard() {
  const [activeId, setActiveId] = useState(events[0].id);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [levelFilter, setLevelFilter] = useState<"all" | "university" | "school">("all");

  const filteredEvents = events.filter((e) => {
    if (levelFilter === "all") return true;
    if (levelFilter === "university") return e.level === "university" || e.level === "both";
    if (levelFilter === "school") return e.level === "school" || e.level === "both";
    return true;
  });

  const activeEvent = filteredEvents.find((e) => e.id === activeId) || filteredEvents[0];

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
    <div className="container mx-auto px-4 py-24 h-screen md:h-[95vh] min-h-[500px] flex flex-col md:flex-row gap-8">

      {/* Sidebar: Data Stream */}
      <div className="w-full md:w-1/3 flex flex-col gap-4 h-full">
        <h2 className="text-xl font-mono text-neon-cyan mb-2 flex items-center gap-2 flex-shrink-0">
          <Target size={20} /> EVENT_LOGS
          <span className="md:hidden text-xs text-gray-500 font-normal ml-auto animate-pulse">(Tap to view)</span>
        </h2>

        {/* Level Filter Tabs */}
        <div className="flex gap-2 mb-4 flex-shrink-0">
          <button
            onClick={() => { setLevelFilter("all"); setActiveId(events[0].id); }}
            className={cn(
              "flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
              levelFilter === "all"
                ? "bg-neon-cyan text-black border-neon-cyan"
                : "bg-transparent text-gray-400 border-white/10 hover:border-neon-cyan/50 hover:text-white"
            )}
          >
            All
          </button>
          <button
            onClick={() => { setLevelFilter("university"); const first = events.find(e => e.level === "university" || e.level === "both"); if (first) setActiveId(first.id); }}
            className={cn(
              "flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center justify-center gap-1",
              levelFilter === "university"
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-transparent text-gray-400 border-white/10 hover:border-purple-500/50 hover:text-white"
            )}
          >
            <GraduationCap size={14} /> University
          </button>
          <button
            onClick={() => { setLevelFilter("school"); const first = events.find(e => e.level === "school" || e.level === "both"); if (first) setActiveId(first.id); }}
            className={cn(
              "flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center justify-center gap-1",
              levelFilter === "school"
                ? "bg-green-500 text-white border-green-500"
                : "bg-transparent text-gray-400 border-white/10 hover:border-green-500/50 hover:text-white"
            )}
          >
            <School size={14} /> School
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3" data-lenis-prevent>
          {filteredEvents.map((event) => (
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

              {/* Level Badge */}
              <div className="flex gap-1 mt-1">
                {(event.level === "university" || event.level === "both") && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 font-bold">🎓 Univ</span>
                )}
                {(event.level === "school" || event.level === "both") && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 font-bold">🏫 School</span>
                )}
              </div>

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
              <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar" data-lenis-prevent>
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

                    {activeEvent.registrationLink ? (
                      <a
                        href={activeEvent.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex w-full py-4 bg-neon-cyan text-black font-bold uppercase tracking-wider rounded transition-all hover:bg-white hover:scale-[1.02] items-center justify-center gap-2 group"
                      >
                        Register Now  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <button className="hidden md:flex w-full py-4 bg-neon-cyan/50 cursor-not-allowed text-black/50 font-bold uppercase tracking-wider rounded items-center justify-center gap-2 group">
                        <Zap size={18} /> Coming Soon
                      </button>
                    )}
                  </div>

                </div>
              </div>

              {/* Mobile Floating Footer */}
              <div className="p-4 border-t border-white/10 bg-black/80 backdrop-blur-md md:hidden shrink-0 z-20">
                {activeEvent.registrationLink ? (
                  <a
                    href={activeEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-neon-cyan text-black font-bold uppercase tracking-wider rounded transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  >
                    Register Now <ArrowRight size={18} />
                  </a>
                ) : (
                  <button className="w-full py-3 bg-neon-cyan/50 cursor-not-allowed text-black/50 font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2">
                    <Zap size={18} fill="black" /> Coming Soon
                  </button>
                )}
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
