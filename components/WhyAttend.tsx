"use client";

import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
import { motion } from "framer-motion";
import { Code, Users, Zap, Music } from "lucide-react";

const reasons = [
  {
    icon: Code,
    title: "Cutting-Edge Tech",
    description: "Dive into the latest in AI, Robotics, and Software with hands-on workshops and expert sessions.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30"
  },
  {
    icon: Music,
    title: "Cultural Extravaganza",
    description: "Witness electrifying performances, fashion shows, and star nights that will leave you spellbound.",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30"
  },
  {
    icon: Users,
    title: "Networking Hub",
    description: "Connect with 5000+ students, industry leaders, and innovators from across the country.",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30"
  },
  {
    icon: Zap,
    title: "High-Octane Competitions",
    description: "Compete in Code Wars, Robo Soccer, and Gaming tournaments for a prize pool of ₹5 Lakhs.",
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30"
  }
];

export default function WhyAttend() {
  return (
    <section className="relative h-screen w-full bg-[#020617] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.05),transparent_50%)]" />
      
      <div className="absolute top-0 left-0 right-0 text-center z-20 pt-16 px-4 pointer-events-none">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tighter text-white drop-shadow-lg"
          >
            Why Attend <span className="text-neon-cyan">Viveka 5.0?</span>
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto text-sm md:text-base drop-shadow-md bg-black/30 backdrop-blur-sm rounded-full py-1 px-4 inline-block">
            Experience the fusion of technology and culture like never before.
          </p>
      </div>

      <div className="h-full w-full">
        <ScrollStack 
            itemDistance={40} 
            itemScale={0.05} 
            stackPosition="35vh" // Push stack down significantly to clear the header
            itemStackDistance={30}
        >
          {reasons.map((reason, index) => (
            <ScrollStackItem key={index} itemClassName="bg-[#0a0a1f]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className={`h-full w-full rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 ${reason.border} border bg-gradient-to-br ${reason.gradient} relative overflow-hidden`}>
                  
                  {/* Decorative blobs */}
                  <div className="absolute -top-20 -right-20 w-40 md:w-64 h-40 md:h-64 bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 md:w-64 h-40 md:h-64 bg-white/5 rounded-full blur-3xl" />

                  <div className="relative z-10 flex-shrink-0 p-4 md:p-6 rounded-full bg-white/5 border border-white/10 shadow-inner">
                      <reason.icon size={40} className="text-white w-10 h-10 md:w-16 md:h-16" />
                  </div>

                  <div className="relative z-10 text-center md:text-left flex flex-col justify-center">
                      <h3 className="text-2xl md:text-4xl font-bold font-space-grotesk text-white mb-2 md:mb-4 leading-tight">
                          {reason.title}
                      </h3>
                      <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-xl text-balance">
                          {reason.description}
                      </p>
                  </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
