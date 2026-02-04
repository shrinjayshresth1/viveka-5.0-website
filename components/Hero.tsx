"use client";

import { HeroParallax } from "./ui/hero-parallax";

const events = [
  { title: "Laser Light Show", link: "/events", thumbnail: "/laser-show-opt.webp" },
  { title: "Drone Racing", link: "/events", thumbnail: "/drone-race-xs.webp" },
  { title: "Robo War", link: "/events", thumbnail: "/robo-war-xs.webp" },
  { title: "Robo Football", link: "/events", thumbnail: "/robo-football-xs.webp" },
  { title: "Digi Art", link: "/events", thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=480&auto=format&fit=crop" },
  { title: "CodeX", link: "/events", thumbnail: "/codex-xs.webp" },
  { title: "Hackathon", link: "/events", thumbnail: "/hackathon-xs.webp" },
  { title: "Gaming Arena", link: "/events", thumbnail: "/gaming-arena-xs.webp" },
  { title: "Structromania", link: "/events", thumbnail: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=480&auto=format&fit=crop" },
  { title: "AI Showcase", link: "/events", thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=480&auto=format&fit=crop" },
  { title: "Cyber Security", link: "/events", thumbnail: "/cyber-security-xs.webp" },
  { title: "Boat Race", link: "/events", thumbnail: "/boat-race-xs.webp" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#020617] dark:bg-[#020617]">
      <HeroParallax products={events} />
    </section>
  );
}
