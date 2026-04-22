import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MitraKami from "@/components/MitraKami";
import KeahlianKami from "@/components/KeahlianKami";
import Statistik from "@/components/Statistik";
import ProyekKami from "@/components/ProyekKami";
import AjakanAksi from "@/components/AjakanAksi";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <Hero />
      <MitraKami />
      <KeahlianKami />
      <Statistik />
      <ProyekKami />
      <AjakanAksi />
      <Footer />
    </main>
  );
}
