import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import Organizers from "@/components/Organizers";
import CustomCursor from "@/components/ui/CustomCursor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizers",
  description:
    "Meet the TechFusion Club team behind Viveka 5.0 - the organizers, faculty mentors, and student leaders.",
  openGraph: {
    title: "Organizers | Viveka 5.0",
    description: "Meet the team behind SRMU's flagship tech fest.",
  },
};

export default function OrganizersPage() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <CustomCursor />
      <Navbar />
      <GlobalBackground />
      
      <Organizers />
      
    </main>
  );
}
