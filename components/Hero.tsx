import GridMotion from "./GridMotion";
import Countdown from "./Countdown";
import { FileText } from "lucide-react";

const events = [
  "/laser-show-opt.webp",
  "/drone-race-xs.webp",
  "/robo-war-xs.webp",
  "/robo-football-xs.webp",
  "/digi-art-xs.webp",
  "/codex-xs.webp",
  "/hackathon-xs.webp",
  "/gaming-arena-xs.webp",
  "/structromania-xs.webp",
  "/ai-workshop-xs.webp",
  "/cyber-security-xs.webp",
  "/boat-race-xs.webp",
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#020617] dark:bg-[#020617]">
      <div className="absolute inset-0 z-0">
        <GridMotion items={events} gradientColor="black" />
        <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 pointer-events-none">
        <div className="max-w-4xl mx-auto pointer-events-auto">
           <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold font-space-grotesk tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            VIVEKA <br />
            <span className="text-neon-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]"> 5.0</span>
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-xl mt-6 md:mt-8 mx-auto dark:text-neutral-200">
            Experience the fusion of technology and intelligence. The largest Techno-Cultural fest is here. Join us for 3 days of innovation, competition, and celebration.
          </p>

          <Countdown />

          <div className="mt-8 flex flex-wrap justify-center gap-4 z-20 relative">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-neon-cyan to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <a 
              href="/events"
              className="relative px-8 py-3 bg-black rounded-full leading-none flex items-center cursor-pointer pointer-events-auto hover:scale-105 transition-transform"
            >
              <span className="flex items-center space-x-3">
                <span className="pr-6 text-gray-100 font-bold text-lg tracking-wider">Register Now</span>
                <span className="pl-6 border-l border-neon-cyan/50 text-neon-cyan transition duration-200 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-xs font-mono">→</span>
                </span>
              </span>
            </a>
          </div>
            <a
              href="https://drive.google.com/file/d/1N7wEADfOzlOKdPCJPvfRAebJOfK1qTNh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 hover:scale-105 transition-all border border-white/20 flex items-center gap-2 cursor-pointer pointer-events-auto"
            >
              <FileText size={20} />
              Event Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
