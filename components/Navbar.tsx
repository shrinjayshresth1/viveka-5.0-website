"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Organizers", href: "/organizers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Schedule", href: "/#schedule" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300 pointer-events-none",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <nav
          className={cn(
            "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300",
            "bg-glass-bg backdrop-blur-md border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
            scrolled ? "w-[90%] md:w-[60%]" : "w-[95%] md:w-[70%]"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/viveka-logo.webp"
              alt="Viveka Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base text-gray-300 hover:text-neon-cyan transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/events"
            className="hidden md:block px-5 py-2 bg-neon-cyan/10 hover:bg-neon-cyan hover:text-black rounded-full text-sm font-bold transition-all duration-300 border border-neon-cyan/50 text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            Register
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-neon-cyan"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
