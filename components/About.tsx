"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#020617] overflow-hidden">
      
      {/* --- Section 1: About SRMU --- */}
      <div className="container mx-auto px-4 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <h4 className="text-2xl font-bold text-gray-200 mb-2">About</h4>
                
                {/* Outlined Text Effect */}
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8" 
                    style={{ 
                        WebkitTextStroke: "1px rgba(255,255,255,0.3)", 
                        color: "transparent" 
                    }}>
                    SRMU
                </h1>

                <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base text-justify">
                    <p>
                        <strong className="text-white">Shri Ramswaroop Memorial University (SRMU)</strong> aims to be a globally recognized leader in education, research, and preparing ethical professionals. Founded in 1999, it offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines. SRMU boasts excellent faculty, industry collaborations, and innovative pedagogy, ensuring its programs are relevant and enhance employability.
                    </p>
                    <p>
                        With a focus on holistic development, students gain practical exposure, attend guest lectures, and participate in co-curricular activities. The university also provides scholarships and outreach programs, creating a well-rounded educational experience. With its <em className="text-white text-lg">"Chase Reality…Dreams Will Follow"</em> motto, SRMU strives to set a benchmark in higher education.
                    </p>
                </div>

                <div className="flex gap-4 mt-8">
                    <a href="#" className="p-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:scale-110 transition-transform">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-blue-500 text-white hover:scale-110 transition-transform">
                        <Facebook size={20} />
                    </a>
                </div>
            </motion.div>

            {/* Image Side with 3D Reveal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative perspective-1000"
            >
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl group">
                    <div className="absolute inset-0 bg-neon-cyan/10 group-hover:bg-transparent transition-colors z-10" />
                    <Image 
                        src="/srmu.png" 
                        alt="SRMU Campus" 
                        width={800} 
                        height={600} 
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-neon-cyan/50" />
                    <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-neon-cyan/50" />
                </div>
            </motion.div>
        </div>
      </div>

       {/* --- Section 2: About Viveka --- */}
      <div className="container mx-auto px-4 relative z-10">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 p-8 md:p-16 relative overflow-hidden"
         >
             {/* Background Glow */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                     <h4 className="text-xl font-bold text-gray-300 mb-2">About</h4>
                     <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white mb-6">
                        VIVEKA <br/>
                        <span className="text-neon-cyan">5.0</span>
                     </h2>
                 </div>
                 
                 <div className="flex flex-col justify-center space-y-6 text-gray-400 text-lg leading-relaxed">
                     <p>
                        <strong className="text-white">VIVEKA: The Intelligence 5.0</strong> is the Annual Techfest of <span className="text-neon-cyan">Shri Ramswaroop Memorial University</span> organized under the initiative of Tech Fusion Club. Unleash your technical skills in the vast horizon of events.
                     </p>
                     <p>
                        Viveka 5.0 promises a thrilling experience for all tech enthusiasts. We bring to you a platform to innovate, create, and compete with the best minds in the country.
                     </p>
                     
                     <div className="pt-4">
                        <button className="px-8 py-3 rounded-full border border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan hover:text-black transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                            Explore Events
                        </button>
                     </div>
                 </div>
            </div>
         </motion.div>
      </div>

    </section>
  );
}
