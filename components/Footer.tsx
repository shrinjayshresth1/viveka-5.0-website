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
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl text-left border-t border-white/10 pt-16">
                {/* Brand & Description */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        {/* Validated logo path from previous steps */}
                        {/* <img src="/viveka-logo.png" alt="Viveka Logo" className="h-10 w-auto" /> */}
                         <h2 className="text-4xl font-bold font-space-grotesk tracking-tighter text-white">
                            VIVEKA <span className="text-neon-cyan">5.0</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                        Viveka 5.0 is an annual techno-cultural fest of Shri Ramswaroop Memorial University organised by TechFusion Club. Let's make a Tech move.
                    </p>
                    <div className="flex gap-4">
                        {socials.map((Social, i) => (
                            <Link key={i} href={Social.href} className={`transition-transform hover:scale-110 duration-300 text-gray-400 ${Social.color} bg-white/5 p-2 rounded-full border border-white/10`}>
                                <Social.icon size={20} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Menu */}
                <div className="md:pl-20">
                    <h4 className="font-bold text-xl mb-6 text-neon-red font-space-grotesk">Menu</h4>
                    <ul className="text-gray-400 text-sm space-y-4 font-medium uppercase tracking-wider">
                        <li><Link href="#about" className="hover:text-neon-cyan transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-neon-cyan transition-colors">Term of Use</Link></li>
                        <li><Link href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h4 className="font-bold text-xl mb-6 text-neon-red font-space-grotesk">Contact Us</h4>
                    <ul className="space-y-6 text-sm text-gray-400">
                        <li className="flex items-start gap-3">
                            <span className="mt-1">📍</span>
                            <span>Shri Ramswaroop Memorial University, Lucknow-Deva Road</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="rotate-90">📞</span>
                            <span>9555686979</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span>✉️</span>
                            <a href="mailto:techfusionclub@srmu.ac.in" className="hover:text-neon-cyan transition-colors">techfusionclub@srmu.ac.in</a>
                        </li>
                         <li className="flex items-center gap-3 pt-2 text-neon-cyan/80 font-bold">
                            <span>🤝</span>
                            <span>Interested in Sponsorship ?</span>
                        </li>
                    </ul>
                </div>
            </div>

            <p className="mt-20 text-xs text-gray-600">
                © 2026 Viveka 5.0. Built by <span className="text-gray-400">Shrinjay Shresth</span>.
            </p>
        </div>
    </footer>
  );
}
