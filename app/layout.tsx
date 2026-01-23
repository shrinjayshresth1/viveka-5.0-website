import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import GlobalBackground from "@/components/GlobalBackground";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Viveka 5.0: The Intelligence",
  description: "Official Tech Fest of SRMU - The Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.variable,
          spaceGrotesk.variable,
          "bg-background text-foreground antialiased overflow-x-hidden selection:bg-neon-cyan/30 selection:text-neon-cyan"
        )}
      >
        <GlobalBackground />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
