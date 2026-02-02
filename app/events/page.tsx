import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import EventDashboard from "@/components/EventDashboard";
import CustomCursor from "@/components/ui/CustomCursor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore 20+ exciting events at Viveka 5.0 - Robotics, Hackathon, Gaming, AI Workshops, Coding Competitions and more.",
  openGraph: {
    title: "Events | Viveka 5.0",
    description: "Explore 20+ exciting tech events at SRMU's flagship tech fest.",
  },
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <CustomCursor />
      <Navbar />
      <GlobalBackground />
      
      <EventDashboard />
      
    </main>
  );
}
