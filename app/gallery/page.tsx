"use client";

import Navbar from "@/components/Navbar";
import GalleryPage from "@/components/GalleryPage";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Gallery() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-neon-cyan/30 selection:text-neon-cyan">
            <CustomCursor />
            <Navbar />
            <GalleryPage />
            <Footer />
        </main>
    );
}
