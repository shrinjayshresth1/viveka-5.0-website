import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import GlobalBackground from "@/components/GlobalBackground";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vivekatheintelligence.in"),
  title: {
    default: "Viveka 5.0: The Intelligence | SRMU Tech Fest 2026",
    template: "%s | Viveka 5.0",
  },
  description:
    "Viveka 5.0 is the flagship technical festival of Shri Ramswaroop Memorial University, featuring 20+ events in Robotics, AI, Gaming, Coding, and more. Join us from February 18-20, 2026 in Lucknow.",
  keywords: [
    // Brand & Event
    "Viveka 5.0",
    "Viveka The Intelligence",
    "Viveka Tech Fest",
    "SRMU Tech Fest",
    "SRMU Fest 2026",
    "Viveka Fest 2026",
    
    // University Names & Variations
    "SRMU",
    "Shri Ramswaroop Memorial University",
    "SRM University Lucknow",
    "Ramswaroop University",
    "SRMU Lucknow",
    "Shri Ramswaroop Memorial University Barabanki",
    "Best Private University in Lucknow",
    "Top University in Uttar Pradesh",
    "Engineering College Lucknow",
    "Engineering College Barabanki",
    
    // Location - Primary (Lucknow & Barabanki)
    "Lucknow Tech Fest",
    "Tech Festival in Lucknow",
    "University Events Lucknow",
    "Engineering Fest Lucknow",
    "Barabanki Tech Fest",
    "Barabanki College Events",
    "Events in Lucknow 2026",
    "College Fest Lucknow 2026",
    "Lucknow University Festival",
    "Technical Events Lucknow",
    "Barabanki University Events",
    
    // Location - Uttar Pradesh State
    "Uttar Pradesh Tech Fest",
    "UP Tech Fest 2026",
    "Best Tech Fest in UP",
    "Technical Festival Uttar Pradesh",
    "College Events in UP",
    "University Fest UP",
    "Engineering Fest Uttar Pradesh",
    
    // Location - Nearby Districts & Cities
    "Kanpur Tech Fest",
    "Ayodhya College Events",
    "Faizabad University Events",
    "Sitapur College Fest",
    "Sultanpur Tech Events",
    "Rae Bareli College Events",
    "Unnao Technical Fest",
    "Hardoi College Events",
    "Gonda University Events",
    "Bahraich College Fest",
    "Central UP Tech Fest",
    "Awadh Region College Events",
    
    // Location - Regional Search Terms
    "North India Tech Fest",
    "Tech Fest near Lucknow",
    "Best College Fest in North India",
    "Engineering Events Central India",
    "Technical Festival near me Lucknow",
    "College Fest near Barabanki",
    
    // Event Categories
    "Robotics Competition",
    "Hackathon",
    "Coding Competition",
    "AI Workshop",
    "Gaming Tournament",
    "Esports Tournament",
    "Technical Workshop",
    "Cultural Events",
    "Model United Nations",
    "Star Night Concert",
    "Darshan Raval Concert",
    
    // Specific Events
    "Robo War",
    "Mega Hackathon",
    "Line Follower Robot",
    "BGMI Tournament",
    "Valorant Tournament",
    "Laser Light Show",
    "Drone Race Competition",
    "Boat Race Competition",
    
    // Broader Terms
    "Student Innovation",
    "Technology Festival",
    "Science and Technology",
    "Inter-college Fest",
    "University Campus Life",
    "College Fests in India",
    "Best Technical Fest India 2026"
  ],
  authors: [{ name: "TechFusion Club", url: "https://www.vivekatheintelligence.in" }],
  creator: "TechFusion Club - SRMU",
  publisher: "Shri Ramswaroop Memorial University",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vivekatheintelligence.in",
    siteName: "Viveka 5.0",
    title: "Viveka 5.0: The Intelligence | SRMU Tech Fest 2026",
    description:
      "Join 20+ events in Robotics, AI, Gaming, Coding & more at SRMU's flagship tech fest. February 18-20, 2026.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viveka 5.0 - The Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viveka 5.0: The Intelligence | SRMU Tech Fest 2026",
    description:
      "Join 20+ events in Robotics, AI, Gaming, Coding & more at SRMU's flagship tech fest.",
    images: ["/og-image.png"],
    creator: "@techfusionclub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
    ],
    apple: "/icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.vivekatheintelligence.in",
  },
};

import Preloader from "@/components/Preloader";
import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.variable,
          spaceGrotesk.variable,
          "bg-background text-foreground antialiased overflow-x-hidden selection:bg-neon-cyan/30 selection:text-neon-cyan"
        )}
      >
        <Preloader />
        <GlobalBackground />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
