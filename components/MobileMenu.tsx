"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto md:hidden"
        >
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-2 text-white hover:text-neon-cyan transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col gap-8 text-center">
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-3xl font-space-grotesk font-bold text-gray-300 hover:text-neon-cyan active:text-neon-cyan transition-all"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.a
                href="https://drive.google.com/file/d/1Q4r3-LrXJtsX1U092u9illk2rWkWKPZn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-3 bg-neon-cyan text-black font-bold rounded-full hover:bg-white transition-colors block mx-auto"
            >
                Sponsor Us
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
