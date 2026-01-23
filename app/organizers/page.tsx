import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import Organizers from "@/components/Organizers";
import CustomCursor from "@/components/ui/CustomCursor";

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
