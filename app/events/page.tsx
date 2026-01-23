import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import EventDashboard from "@/components/EventDashboard";
import CustomCursor from "@/components/ui/CustomCursor";

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
