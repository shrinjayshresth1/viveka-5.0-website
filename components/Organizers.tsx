"use client";

import { motion } from "framer-motion";
import OrganizerCard from "./OrganizerCard";
import { TracingBeam } from "./ui/TracingBeam";
import { SparklesCore } from "./ui/Sparkles";

const teamData = {
  chiefPatrons: [
    { name: "Er. Pankaj Agarwal", role: "Chancellor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
    { name: "Er. Pooja Agarwal", role: "Pro Chancellor", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  ],
  patrons: [
    { name: "Dr. Newal Kishore", role: "Vice Chancellor", image: "https://images.unsplash.com/photo-1556157382-97eda2d622ca?q=80&w=2072&auto=format&fit=crop" },
    { name: "Prof. R.K. Jaiswal", role: "Director General", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" }
  ],
  faculty: [
    { name: "Dr. Veena Singh", role: "Fest In-Charge", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
    { name: "Er. Sunny Kumar", role: "Faculty Convener", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Er. Neeta Bhusal", role: "Faculty Convener", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" }
  ],
  webOps: [
    { name: "Sankalp Jaiswal", role: "WebOps Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Kushagra Chaturvedi", role: "Tech Lead", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
    { name: "Shrinjay Shresth", role: "Developer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" }, 
  ],
  conveners: [
    { name: "Atam Prakash", role: "Student Convener", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2000&auto=format&fit=crop" },
    { name: "Ayushman Singh", role: "Student Convener", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2000&auto=format&fit=crop" },
    { name: "Deepika", role: "Student Convener", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" }
  ]
};

export default function Organizers() {
  return (
    <div className="py-32 min-h-screen relative overflow-hidden">
      
        <div className="text-center mb-12 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-4">
                Our <span className="text-neon-cyan">Team</span>
            </h1>
            <p className="text-gray-400">The minds behind the machine.</p>
        </div>

        <TracingBeam className="px-6">
            <div className="relative pt-10">
                
                {/* Section 1: Chief Patrons */}
                <div className="mb-24">
                     <div className="relative h-12 w-full max-w-lg mx-auto mb-10">
                        <div className="absolute inset-0 bg-transparent flex items-center justify-center z-20">
                            <h2 className="text-2xl font-mono text-white tracking-widest uppercase bg-black/50 px-4 py-1 backdrop-blur border border-white/20 rounded-full">
                                Chief Patrons
                            </h2>
                        </div>
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={500}
                            className="w-full h-full"
                            particleColor="#00f0ff"
                        />
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.chiefPatrons.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 2: Core Committee */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-white tracking-widest uppercase inline-block border-b border-white/20 pb-2">
                             Core Committee
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.patrons.map((p, i) => <OrganizerCard key={i} {...p} />)}
                         {teamData.faculty.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 3: WebOps Team */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-neon-cyan tracking-widest uppercase inline-block border-b border-neon-cyan/50 pb-2">
                             WebOps Team
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.webOps.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 4: Student Conveners */}
                <div className="mb-12">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-pink-500 tracking-widest uppercase inline-block border-b border-pink-500/50 pb-2">
                             Student Conveners
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.conveners.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

            </div>
        </TracingBeam>
      
    </div>
  );
}
