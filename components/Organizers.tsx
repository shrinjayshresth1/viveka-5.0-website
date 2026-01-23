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
    { 
      name: "Dr. Veena Singh", 
      role: "Fest In-Charge (HoD & Associate Prof.)", 
      image: "https://media.licdn.com/dms/image/v2/C5603AQGzqTRu2zGEwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1608385269429?e=1742428800&v=beta&t=W_yr0aIG3172JulJzx98wWrThC_g4ZEqEP4VyYHg2sw" 
    },
    { 
      name: "Er. Abhishek Kumar Saxena", 
      role: "Faculty Convener (Asst. Prof - DEEE)", 
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGG-DMrNE5LWg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669641758444?e=1742428800&v=beta&t=0C8-zUqYWU66fWwpGUZZcdpB6-wVvzu05Upp5vDhDqU",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/"
    },
    { 
      name: "Dr. Mrityunjay Rai", 
      role: "Faculty Convener (Asst. Prof - DEEE)", 
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHwYGPh-YvESQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686678021631?e=1742428800&v=beta&t=V_PYfqC9pjbRSKu3P64JqAIPh255RlT18M4zpz9r0Yg",
      linkedin: "https://www.linkedin.com/in/dr-mritunjay-rai-36b85118/"
    },
    { 
      name: "Er. Sunny Kumar", 
      role: "Faculty Convener (Asst. Prof - DCSE)", 
      image: "https://srmu.ac.in/storage/teams/11zon-cropped-5-11zon-23022411165423.jpeg",
      linkedin: "https://www.linkedin.com/in/sunny-kumar-a7910b234/"
    },
    { 
      name: "Er. Neeta Bhusal Sharma", 
      role: "Faculty Convener (Asst. Prof - DCSE)", 
      image: "https://srmu.ac.in/storage/teams/11zon-cropped-2-11zon-23022410512735.jpeg",
      linkedin: "https://www.linkedin.com/in/neeta-bhusal-13708037/"
    }
  webOps: [
    { name: "Shrinjay Shresth", role: "WebOps Lead", image: "/shrinjay.png" }, 
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
