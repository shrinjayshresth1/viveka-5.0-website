"use client";

import { motion } from "framer-motion";
import OrganizerCard from "./OrganizerCard";
import { TracingBeam } from "./ui/TracingBeam";
import { SparklesCore } from "./ui/Sparkles";

const teamData = {
     chiefPatrons: [
          { name: "Er. Pankaj Agarwal", role: "Chancellor", image: "https://srmu.ac.in/storage/teams/er-pankaj-agarwal-12012403111859.jpg", linkedin: "https://www.linkedin.com/in/pankaj-agarwal-b72ab321/" },
          { name: "Er. Pooja Agarwal", role: "Pro Chancellor", image: "https://srmu.ac.in/storage/teams/er.-pooja-agarwal-pro-chancellor--12012403114783.jpg" },
          { name: "Arrushi Agarwal", role: "University Advisor", image: "/arrushi.png", linkedin: "https://www.linkedin.com/in/arrushi-agarwal/" },
     ],
     patrons: [
          { name: "Prof. (Dr.) Vijay Tiwari", role: "Vice Chancellor", image: "https://srmu.ac.in/storage/teams/sr7d9556-03122510174995.JPG", linkedin: "https://www.linkedin.com/in/dr-vijay-kumar-tiwari/" },

     ],
     festInCharge: [
          {
               name: "Dr. Veena Singh",
               role: "HoD, Professor, IMCE & University Club Coordinator, SRMU",
               image: "https://srmu.ac.in/storage/teams/1746008504048-sh7wu9-2-0-removebg-preview-1--01052510262614.png",
               linkedin: "https://www.linkedin.com/in/prof-dr-veena-singh-26a48b196/"
          },
     ],
     convener: [
          {
               name: "Er. Abhishek Kumar Saxena",
               role: "Assistant Director, IQAC & Assistant Professor, DEEE & Head, Technical & Social Media Society, SRMU",
               image: "/abhishek.jpg",
               linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/"
          },
     ],
     faculty: [

          {
               name: "Dr. Mrityunjay Rai",
               role: "Assistant Director, IQAC & Assistant Professor, DEEE & Coordinator, Technical Society, SRMU",
               image: "https://srmu.ac.in/storage/teams/dr.-mritumjay-rai-ec--14062401043979.jpg",
               linkedin: "https://www.linkedin.com/in/dr-mritunjay-rai-36b85118/"
          },
          {
               name: "Er. Sunny Kumar",
               role: "Assistant Professor, DCSE & Coordinator, Technical Society, SRMU",
               image: "https://srmu.ac.in/storage/teams/11zon-cropped-5-11zon-23022411165423.jpeg",
               linkedin: "https://www.linkedin.com/in/sunny-kumar-a7910b234/"
          },
          {
               name: "Er. Neeta Bhusal Sharma",
               role: "Assistant Professor, DCSE & Coordinator, Technical Society, SRMU",
               image: "https://srmu.ac.in/storage/teams/11zon-cropped-2-11zon-23022410512735.jpeg",
               linkedin: "https://www.linkedin.com/in/neeta-bhusal-13708037/"
          }
     ],
     webOps: [
          { name: "Shrinjay Shresth", role: "WebOps Lead", image: "/shrinjay-v2.webp", linkedin: "https://www.linkedin.com/in/shrinjay-shresth-036010215/" },
          { name: "Praveen Kumar Singh", role: "WebOps Team", course: "BCA, 1st Year", image: "/praveen-singh-new.jpg", linkedin: "https://www.linkedin.com/in/praveenksingh-/", objectPosition: "object-center" },
     ],
     secretaries: [
          { name: "Pranshu Agrahari", role: "Student Organizing Secretary", course: "B.Tech CSE (DS+AI), 4th Year", image: "/pranshu.png", linkedin: "https://www.linkedin.com/in/pranshu-agrahari-956a37288/" },
          { name: "Shrinjay Shresth", role: "Student Organizing Secretary", course: "B.Tech CSE, 4th Year", image: "/shrinjay-v2.webp", linkedin: "https://www.linkedin.com/in/shrinjay-shresth-036010215/" },
          { name: "Nitin Jaiswal", role: "Student Organizing Secretary", course: "B.Tech CSE (DS+AI), 4th Year", image: "/nitin.png", linkedin: "https://www.linkedin.com/in/thenitinjaiswal/" },
          { name: "Aadi Chandra", role: "Student Organizing Secretary", course: "B.Tech CSE (DS+AI), 4th Year", image: "/adii.jpg", linkedin: "https://www.linkedin.com/in/aadi-chandra-7a4185278/" },

     ],
     veterans: [
          { name: "Nandini Verma", role: "Veteran Student Convener", course: "B.Tech CSE (DS+AI), 4th Year", image: "/nandini-new.jpg", linkedin: "https://www.linkedin.com/in/nandini-verma-4n5v4/", objectPosition: "object-center" },
          { name: "Priyanshi Srivastava", role: "Veteran Student Convener", course: "B.Tech CSE (DS+AI), 4th Year", image: "/priyanshi.jpg", linkedin: "https://www.linkedin.com/in/priyanshi-s-012a782b1/" },
          { name: "Yash Mishra", role: "Veteran Student Convener", course: "B.Tech CSE (DS+AI), 4th Year", image: "/yash.jpg", linkedin: "https://www.linkedin.com/in/yash-mishra-2352502bb/", objectPosition: "object-bottom" },
          { name: "Kshitij Gupta", role: "Veteran Student Convener", course: "B.Tech CSE (DS+AI), 4th Year", image: "/kshitij2.webp", linkedin: "https://www.linkedin.com/in/kshitij-gupta-99a66726b/", objectPosition: "object-center" },
          { name: "Utkarsh Pandey", role: "Veteran Student Convener", course: "B.Tech CSE (Cyber Security), 4th Year", image: "/utkarsh.png", linkedin: "https://www.linkedin.com/in/uranium-utkarsh-pandey/" },
          { name: "Shashank Kumar", role: "Veteran Student Convener", course: "B.Tech CSE (DS+AI), 4th Year", image: "/shashank.jpg", linkedin: "https://www.linkedin.com/in/shashank-kumar-50098928a/" },
     ],
     conveners: [
          { name: "Divyanshi Pandey", role: "Student Convener", course: "B.Tech CSE (CC+AI), 3rd Year", image: "/divyanshi.jpg", linkedin: "https://www.linkedin.com/in/divyanshipandey06/" },
          { name: "Raunak Srivastava", role: "Student Convener", course: "B.Tech ECE, 3rd Year", image: "/raunak.jpg", linkedin: "https://www.linkedin.com/in/raunak-srivastava-a2a030276/" },
          { name: "Abhiinav Pratap Singh", role: "Student Convener", course: "B.Tech CSE, 3rd Year", image: "/abhiinav.jpg", linkedin: "https://www.linkedin.com/in/abhinav-pratap-singh-1a697728a/" },
     ],
     coConveners: [
          { name: "Anshuma Yadav", role: "Student Co-Convener", course: "B.Tech CSE (CC+AI), 3rd Year", image: "/anshuma.jpg", linkedin: "https://www.linkedin.com/in/anshuma-yadav-487b1a28a/" },
          { name: "Rashi Malik", role: "Student Co-Convener", course: "B.Tech CSE (DS+AI), 3rd Year", image: "/rashi.jpg", linkedin: "https://www.linkedin.com/in/rashi-malik-ab442b289/" },
          { name: "Shiv Manglam Dubey", role: "Student Co-Convener", course: "B.Tech CSE, 3rd Year", image: "/shiv.jpg", linkedin: "https://www.linkedin.com/in/shiv-manglam-dubey-6a7467289/" },
          { name: "Anshu Kasaudhan", role: "Student Co-Convener", course: "B.Tech CSE, 3rd Year", image: "/anshu-new.png", linkedin: "https://www.linkedin.com/in/anshu-kasaudhan-6073712ba/", objectPosition: "object-center" },
          { name: "Om Jaiswal", role: "Student Co-Convener", course: "B.Tech Biotech, 2nd Year", image: "/om.jpg", linkedin: "https://www.linkedin.com/in/ojaiswal" },
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

                         {/* Section 3.5: Convener (New) */}
                         <div className="mb-24">
                              <div className="text-center mb-10">
                                   <h2 className="text-2xl font-mono text-white tracking-widest uppercase inline-block border-b border-white/20 pb-2">
                                        Convener
                                   </h2>
                              </div>
                              <div className="flex flex-wrap justify-center gap-10">
                                   {teamData.convener.map((p, i) => <OrganizerCard key={i} {...p} />)}
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

                         {/* Section 5: Student Organizing Secretary */}
                         <div className="mb-24">
                              <div className="text-center mb-10">
                                   <h2 className="text-2xl font-mono text-orange-500 tracking-widest uppercase inline-block border-b border-orange-500/50 pb-2">
                                        Student Organizing Secretaries
                                   </h2>
                              </div>
                              <div className="flex flex-wrap justify-center gap-10">
                                   {teamData.secretaries.map((p, i) => <OrganizerCard key={i} {...p} />)}
                              </div>
                         </div>

                         {/* Section 6: Veteran Student Conveners */}
                         <div className="mb-24">
                              <div className="text-center mb-10">
                                   <h2 className="text-2xl font-mono text-yellow-500 tracking-widest uppercase inline-block border-b border-yellow-500/50 pb-2">
                                        Veteran Student Conveners
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
