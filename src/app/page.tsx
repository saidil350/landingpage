import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideoHero";
import AjakanAksi from "@/components/AjakanAksi";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <VideoHero />
      <AjakanAksi />
      <Footer />
    </main>
  );
}
