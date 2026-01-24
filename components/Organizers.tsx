"use client";

import { motion } from "framer-motion";
import OrganizerCard from "./OrganizerCard";
import { TracingBeam } from "./ui/TracingBeam";
import { SparklesCore } from "./ui/Sparkles";

const teamData = {
  chiefPatrons: [
    { name: "Er. Pankaj Agarwal", role: "Chancellor", image: "https://srmu.ac.in/storage/teams/er-pankaj-agarwal-12012403111859.jpg" },
    { name: "Er. Pooja Agarwal", role: "Pro Chancellor", image: "https://srmu.ac.in/storage/teams/er.-pooja-agarwal-pro-chancellor--12012403114783.jpg" },
    { name: "Arrushi Agarwal", role: "University Advisor", image: "/arrushi.png" },
  ],
  patrons: [
    { name: "Prof. (Dr.) Vijay Tiwari", role: "Vice Chancellor", image: "https://srmu.ac.in/storage/teams/sr7d9556-03122510174995.JPG" },
    
  ],
  festInCharge: [
    { 
      name: "Dr. Veena Singh", 
      role: "Fest In-Charge (HoD & Associate Prof.)", 
      image: "https://srmu.ac.in/storage/teams/1746008504048-sh7wu9-2-0-removebg-preview-1--01052510262614.png" 
    },
  ],
  faculty: [
    { 
      name: "Er. Abhishek Kumar Saxena", 
      role: "Faculty Convener (Asst. Prof - DEEE)", 
      image: "https://www.vivekatheintelligence.tech/static/media/22.84e79aae4013d11ad5c2.jpg",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/"
    },
    { 
      name: "Dr. Mrityunjay Rai", 
      role: "Faculty Convener (Asst. Prof - DEEE)", 
      image: "https://srmu.ac.in/storage/teams/dr.-mritumjay-rai-ec--14062401043979.jpg",
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
  ],
  webOps: [
    { name: "Shrinjay Shresth", role: "WebOps Lead", image: "/shrinjay.png", linkedin: "https://www.linkedin.com/in/shrinjay-shresth-036010215/" }, 
  ],
  veterans: [
    { name: "Pranshu Agrahari", role: "Veteran Convener", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop" },
    { name: "Shrinjay Shresth", role: "Veteran Convener", image: "/shrinjay.png", linkedin: "https://www.linkedin.com/in/shrinjay-shresth-036010215/" },
    { name: "Adii Chandra", role: "Veteran Convener", image: "/adii.jpg" },
    { name: "Nandini Verma", role: "Veteran Convener", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop" },
    { name: "Nitin Jaiswal", role: "Veteran Convener", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop" },
  ],
  conveners: [
    { name: "Atam Prakash", role: "Student Convener", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2000&auto=format&fit=crop" },
    { name: "Ayushman Singh", role: "Student Convener", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2000&auto=format&fit=crop" },
    { name: "Deepika", role: "Student Convener", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" }
  ],
  coConveners: [
     // Placeholders - waiting for data
    { name: "Co-Convener Name", role: "Student Co-Convener", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop" },
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

                {/* Section 2: Patron */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-white tracking-widest uppercase inline-block border-b border-white/20 pb-2">
                             Patrons
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.patrons.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 3: Fest In-Charge */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-white tracking-widest uppercase inline-block border-b border-white/20 pb-2">
                             Fest In-Charge
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.festInCharge.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 4: Faculty Conveners */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-white tracking-widest uppercase inline-block border-b border-white/20 pb-2">
                             Faculty Conveners
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.faculty.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 5: Veteran Conveners */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-yellow-500 tracking-widest uppercase inline-block border-b border-yellow-500/50 pb-2">
                             Veteran Conveners
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.veterans.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 6: Student Conveners */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-pink-500 tracking-widest uppercase inline-block border-b border-pink-500/50 pb-2">
                             Student Conveners
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.conveners.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 7: Student Co-Conveners */}
                <div className="mb-24">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-purple-500 tracking-widest uppercase inline-block border-b border-purple-500/50 pb-2">
                             Student Co-Conveners
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.coConveners.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

                {/* Section 8: WebOps Team */}
                <div className="mb-12">
                     <div className="text-center mb-10">
                        <h2 className="text-2xl font-mono text-neon-cyan tracking-widest uppercase inline-block border-b border-neon-cyan/50 pb-2">
                             WebOps Team
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-10">
                         {teamData.webOps.map((p, i) => <OrganizerCard key={i} {...p} />)}
                     </div>
                </div>

            </div>
        </TracingBeam>
      
    </div>
  );
}
