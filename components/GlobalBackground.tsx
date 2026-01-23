"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Particle System
    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`; // Neon Cyan
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 100; // Global density

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020617]">
        
        {/* 1. Animated Gradient Orbs (Ambient) - Boosted Opacity */}
        <div className="absolute inset-0 opacity-60">
            <motion.div 
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/40 rounded-full blur-[120px]" 
            />
            <motion.div 
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-neon-cyan/20 rounded-full blur-[100px]" 
            />
        </div>

        {/* 2. Particle Canvas */}
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-70"
        />

        {/* 3. NEW: Cyber Grid Overlay (Texture) - Boosted Visibility */}
        <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        />
        
        {/* 4. NEW: Perspective Floor Grid - Boosted Visibility */}
        <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,#000_0%,transparent_100%)] opacity-[0.5] [transform:perspective(500px)_rotateX(60deg)] pointer-events-none origin-bottom" />


        {/* 5. Noise Overlay (Grain) */}
        <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
            }}
        />
        
        {/* 6. Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)] pointer-events-none" />

    </div>
  );
}
