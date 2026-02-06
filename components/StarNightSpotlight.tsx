"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Calendar, MapPin, Music2 } from "lucide-react";

export default function StarNightSpotlight() {
  return (
    <section className="relative w-full min-h-screen py-20 md:py-32 bg-gradient-to-b from-[#020617] via-[#0a0a1f] to-[#020617] z-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0) 70%)"
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(0, 255, 255, 0) 70%)"
          }}
        />

        {/* Floating Music Notes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${10 + (i % 3) * 20}%`,
            }}
          >
            <Music2 className="text-neon-cyan/30" size={20 + i * 4} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 backdrop-blur-sm"
          >
            <Sparkles className="text-neon-cyan" size={20} />
            <span className="text-neon-cyan font-semibold text-sm uppercase tracking-wider">
              Star Night Special
            </span>
            <Sparkles className="text-neon-cyan" size={20} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-4"
          >
            <span className="text-white">Start Night Presents</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Darshan Raval Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan via-white to-neon-cyan rounded-3xl opacity-20 blur-xl animate-pulse" />

            {/* Image Container */}
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neon-cyan/30 bg-gradient-to-br from-cyan-900/20 to-black shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <Image
                  src="/darshan2.jpeg"
                  alt="Darshan Raval"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-black/80 backdrop-blur-md border border-neon-cyan/50 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.3)] z-30"
              >
                <span className="text-neon-cyan font-bold text-lg">LIVE Performance</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Artist Name */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black font-space-grotesk mb-4 relative"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-neon-cyan blur-lg opacity-50 animate-pulse">
                    DARSHAN
                  </span>
                  <span className="relative bg-gradient-to-r from-white via-neon-cyan to-cyan-400 bg-clip-text text-transparent">
                    DARSHAN
                  </span>
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-neon-cyan blur-lg opacity-50 animate-pulse">
                    RAVAL
                  </span>
                  <span className="relative bg-gradient-to-r from-cyan-400 via-neon-cyan to-white bg-clip-text text-transparent">
                    RAVAL
                  </span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-cyan-600 rounded-full"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-gray-300 text-lg md:text-xl leading-relaxed"
            >
              Get ready for an electrifying night as the sensational{" "}
              <span className="text-neon-cyan font-semibold">Darshan Raval</span>{" "}
              takes the stage at SRMU! Experience his chart-topping hits live in an
              unforgettable musical extravaganza.
            </motion.p>

            {/* Event Info Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-neon-cyan/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                  <Calendar className="text-neon-cyan" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-white font-bold text-lg">21st February, 2026</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-neon-cyan/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-neon-cyan/20 group-hover:bg-neon-cyan/30 transition-colors">
                  <MapPin className="text-neon-cyan" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Venue</p>
                  <p className="text-white font-bold text-lg">SRMU Campus Ground</p>
                </div>
              </motion.div>
            </div>

            {/* Highlight Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-neon-cyan/5 to-cyan-900/10 border border-neon-cyan/20"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="text-neon-cyan mt-1 flex-shrink-0" size={20} />
                <p className="text-white/90 leading-relaxed">
                  <span className="font-bold text-neon-cyan">Don't miss out!</span> Experience
                  the magic of Darshan Raval's soulful voice and energetic performance as we
                  kick off Viveka 5.0 in style!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}
