"use client";

import { motion } from "framer-motion";
import { Code, Users, Zap, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Code,
    title: "Cutting-Edge Tech",
    description: "Dive into the latest in AI, Robotics, and Software with hands-on workshops and expert sessions.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    className: "md:col-span-2"
  },
  {
    icon: Smile,
    title: "Fun Events",
    description: "Participate in engaging activities, interactive games, and entertainment that bring pure joy and excitement.",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    className: "md:col-span-1"
  },
  {
    icon: Users,
    title: "Networking Hub",
    description: "Connect with 2500+ students, industry leaders, and innovators from across the country.",
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    className: "md:col-span-1"
  },
  {
    icon: Zap,
    title: "High-Octane Competitions",
    description: "Compete in Code Wars, Robo Soccer, and Gaming tournaments for an existing prize pool.",
    gradient: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    className: "md:col-span-2"
  }
];

export default function WhyAttend() {
  return (
    <section className="relative py-24 w-full bg-[#020617] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,255,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tighter text-white"
          >
            Why Attend <span className="text-neon-cyan">Viveka 5.0?</span>
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Experience the fusion of technology and culture like never before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "relative group rounded-3xl p-8 border backdrop-blur-sm overflow-hidden flex flex-col justify-between min-h-[300px]",
                reason.border,
                "bg-gradient-to-br bg-white/5",
                reason.className
              )}
            >
              {/* Hover Gradient Overlay */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                reason.gradient
              )} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon size={28} className="text-white" />
                </div>

                <h3 className="text-2xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
                  {reason.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
