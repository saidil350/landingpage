import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideoHero";
import Footer from "@/components/Footer";
import MitraKami from "@/components/MitraKami";
import BrandPromise from "@/components/BrandPromise";
import ProductGrid from "@/components/ProductGrid";
import BusinessSolution from "@/components/BusinessSolution";
import Statistik from "@/components/Statistik";
import ProsesProduksi from "@/components/ProsesProduksi";
import OurProject from "@/components/OurProject";
import Sertifikasi from "@/components/Sertifikasi";
import MosaicGrid from "@/components/MosaicGrid";
import TwoColumn from "@/components/TwoColumn";
import KeahlianKami from "@/components/KeahlianKami";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <VideoHero />
      <MitraKami />
      <BrandPromise />
      <KeahlianKami />
      <TwoColumn />
      <ProductGrid />
      <BusinessSolution />
      <Statistik />
      <ProsesProduksi />
      <MosaicGrid />
      <OurProject />
      <Sertifikasi />
      <Footer />
    </main>
  );
}
