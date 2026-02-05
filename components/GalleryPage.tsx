"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image data organized by year
const galleryData = {
    "VIVEKA 5.0": [
        "/gallery/1.jpg",
        "/gallery/2.jpg",
        "/gallery/3.jpg",
        "/gallery/4.jpg",
        "/gallery/5.jpg",
        "/gallery/6.jpg",
        "/gallery/7.jpg",
    ],
    "VIVEKA 4.0": [
        "/gallery/7.jpg",
        "/gallery/8.jpg",
        "/gallery/9.jpg",
        "/gallery/10.jpg",
        "/gallery/11.jpg",
        "/gallery/12.jpg",
        "/gallery/13.JPG",
    ],
    "VIVEKA 3.0": [
        "/gallery/3.jpg",
        "/gallery/5.jpg",
        "/gallery/1.jpg",
        "/gallery/9.jpg",
        "/gallery/11.jpg",
    ],
};

type YearKey = keyof typeof galleryData;

export default function GalleryPage() {
    const [activeYear, setActiveYear] = useState<YearKey>("VIVEKA 5.0");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const images = galleryData[activeYear];
    const totalImages = images.length;

    // Auto-rotation
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalImages);
        }, 3500);

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalImages]);

    // Reset index when year changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [activeYear]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, [totalImages]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }, [totalImages]);

    // Get visible images for the carousel (5 cards)
    const getVisibleIndices = () => {
        const indices = [];
        for (let i = -2; i <= 2; i++) {
            indices.push((currentIndex + i + totalImages) % totalImages);
        }
        return indices;
    };

    const visibleIndices = getVisibleIndices();

    return (
        <section className="min-h-screen py-24 overflow-hidden">
            {/* Hero Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-4">
                    Visual <span className="text-neon-cyan text-glow">Odyssey</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
                    Relive the moments from our previous editions of VIVEKA
                </p>
            </motion.div>

            {/* Year Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center gap-4 mb-16 px-4 flex-wrap"
            >
                {(Object.keys(galleryData) as YearKey[]).map((year) => (
                    <button
                        key={year}
                        onClick={() => setActiveYear(year)}
                        className={cn(
                            "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border",
                            activeYear === year
                                ? "bg-neon-cyan text-black border-neon-cyan shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                                : "bg-transparent text-gray-300 border-gray-600 hover:border-neon-cyan/50 hover:text-neon-cyan"
                        )}
                    >
                        {year}
                    </button>
                ))}
            </motion.div>

            {/* 3D Carousel */}
            <div
                className="relative h-[400px] md:h-[500px] lg:h-[600px] perspective-[1200px]"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Center Glow Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-60 blur-sm z-10" />
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-neon-cyan to-transparent z-10" />

                {/* Carousel Container */}
                <div className="relative h-full flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {visibleIndices.map((imageIndex, position) => {
                            const offset = position - 2; // -2, -1, 0, 1, 2
                            const isCenter = offset === 0;

                            // Calculate 3D transforms
                            const rotateY = offset * 25;
                            const translateX = offset * (isCenter ? 0 : 200);
                            const translateZ = isCenter ? 100 : -Math.abs(offset) * 100;
                            const scale = isCenter ? 1.1 : 0.75 - Math.abs(offset) * 0.05;
                            const opacity = isCenter ? 1 : 0.8 - Math.abs(offset) * 0.15;
                            const zIndex = 10 - Math.abs(offset);

                            return (
                                <motion.div
                                    key={`${activeYear}-${imageIndex}-${position}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity,
                                        scale,
                                        rotateY,
                                        x: translateX,
                                        z: translateZ,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    style={{
                                        zIndex,
                                        transformStyle: "preserve-3d",
                                    }}
                                    className={cn(
                                        "absolute w-[250px] h-[320px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px] rounded-2xl overflow-hidden cursor-pointer",
                                        !isCenter && "grayscale"
                                    )}
                                    onClick={() => {
                                        if (offset < 0) goToPrev();
                                        if (offset > 0) goToNext();
                                    }}
                                >
                                    {/* Image */}
                                    <Image
                                        src={images[imageIndex]}
                                        alt={`${activeYear} Gallery Image ${imageIndex + 1}`}
                                        fill
                                        className={cn(
                                            "object-cover transition-all duration-500",
                                            isCenter ? "grayscale-0" : "grayscale hover:grayscale-[50%]"
                                        )}
                                        sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
                                    />

                                    {/* Overlay gradient */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 transition-opacity duration-300",
                                            isCenter
                                                ? "bg-gradient-to-t from-black/30 via-transparent to-transparent"
                                                : "bg-black/20"
                                        )}
                                    />

                                    {/* Cyan overlay on hover for center */}
                                    {isCenter && (
                                        <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrev}
                    className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 group"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300 group"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === currentIndex
                                ? "w-8 bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                                : "bg-gray-600 hover:bg-gray-400"
                        )}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Image Counter */}
            <p className="text-center text-gray-500 mt-4 text-sm">
                {currentIndex + 1} / {totalImages}
            </p>
        </section>
    );
}
