"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { icon: Mail, href: "#", color: "hover:text-red-500" },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-20 relative bg-black overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-bold font-space-grotesk tracking-tighter mb-12"
            >
                VIVEKA <span className="text-neon-cyan/50">5.0</span>
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-8 mb-12"
            >
                {socials.map((Social, i) => (
                    <Link key={i} href={Social.href} className={`transition-transform hover:scale-125 duration-300 text-gray-400 ${Social.color}`}>
                        <Social.icon size={32} />
                    </Link>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-left border-t border-white/10 pt-10">
                <div>
                   <h4 className="font-bold mb-4 text-white">Contact</h4>
                   <p className="text-gray-400 text-sm">Lucknow-Deva Road, Barabanki (225003)</p>
                   <p className="text-gray-400 text-sm">srmu.edu.in</p>
                </div>
                <div>
                   <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                   <ul className="text-gray-400 text-sm space-y-2">
                       <li><Link href="#about" className="hover:text-neon-cyan">About Us</Link></li>
                       <li><Link href="#schedule" className="hover:text-neon-cyan">Schedule</Link></li>
                       <li><Link href="#gallery" className="hover:text-neon-cyan">Gallery</Link></li>
                   </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-white">Stay Updated</h4>
                    <form className="flex gap-2">
                        <input type="email" placeholder="Enter email" className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-neon-cyan" />
                        <button className="bg-neon-cyan text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-white transition-colors">
                            →
                        </button>
                    </form>
                </div>
            </div>

            <p className="mt-20 text-xs text-gray-600">
                © 2026 Viveka 5.0. Designed by <span className="text-gray-400">Antigravity</span>.
            </p>
        </div>
    </footer>
  );
}
