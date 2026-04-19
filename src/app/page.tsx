import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TwoColumn from "@/components/TwoColumn";
import MosaicGrid from "@/components/MosaicGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TwoColumn />
      <MosaicGrid />
      <Footer />
    </main>
  );
}
