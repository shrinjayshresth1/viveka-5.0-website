"use client";

import { HeroParallax } from "./ui/hero-parallax";

const events = [
  { title: "Laser Light Show", link: "/events", thumbnail: "/laser-show.png" },
  { title: "Drone Racing", link: "/events", thumbnail: "/drone-race.jpg" },
  { title: "Robo War", link: "/events", thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Robo Football", link: "/events", thumbnail: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop" },
  { title: "Digi Art", link: "/events", thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" },
  { title: "CodeX", link: "/events", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
  { title: "Hackathon", link: "/events", thumbnail: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop" },
  { title: "Gaming Arena", link: "/events", thumbnail: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Tech Talk", link: "/events", thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop" },
  { title: "AI Showcase", link: "/events", thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop" },
  { title: "Cyber Security", link: "/events", thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop" },
  { title: "Boat Race", link: "/events", thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#020617] dark:bg-[#020617]">
      <HeroParallax products={events} />
    </section>
  );
}
