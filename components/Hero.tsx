"use client";

import { HeroParallax } from "./ui/hero-parallax";

const events = [
  { title: "Reasoning Rumble", link: "/events", thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" },
  { title: "Laser Light Show", link: "/events", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1974&auto=format&fit=crop" },
  { title: "Robo Quest", link: "/events", thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" },
  { title: "CodeX", link: "/events", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
  { title: "Hackathon", link: "/events", thumbnail: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop" },
  { title: "Gaming Arena", link: "/events", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Tech Talk", link: "/events", thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop" },
  { title: "Drone Racing", link: "/events", thumbnail: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1974&auto=format&fit=crop" },
  { title: "Cyber Security", link: "/events", thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop" },
  { title: "AI Showcase", link: "/events", thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" },
  { title: "VR Experience", link: "/events", thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=2070&auto=format&fit=crop" },
  { title: "Robo Football", link: "/events", thumbnail: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop" },
  { title: "Model United Nations", link: "/events", thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2000&auto=format&fit=crop" },
  { title: "Photography", link: "/events", thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" },
  { title: "Music Night", link: "/events", thumbnail: "https://images.unsplash.com/photo-1501612766622-2717fdb56f63?q=80&w=2000&auto=format&fit=crop" },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-[#020617] dark:bg-[#020617]">
      <HeroParallax products={events} />
    </section>
  );
}
