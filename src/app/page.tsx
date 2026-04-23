import Navbar from "@/components/Navbar";
import VideoHero from "@/components/VideoHero";
import Footer from "@/components/Footer";
import BrandPromise from "@/components/BrandPromise";
import BusinessSolution from "@/components/BusinessSolution";
import ProsesProduksi from "@/components/ProsesProduksi";
import OurProject from "@/components/OurProject";
import Sertifikasi from "@/components/Sertifikasi";
import KeahlianKami from "@/components/KeahlianKami";
import CompanyProfileVideo from "@/components/CompanyProfileVideo";
import InnovationSection from "@/components/InnovationSection";
import TestimonialSection from "@/components/TestimonialSection";
import PeopleSection from "@/components/PeopleSection";
import LatestNews from "@/components/LatestNews";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <VideoHero />
      <BrandPromise />
      <CompanyProfileVideo />
      <KeahlianKami />
      <ProsesProduksi />
      <InnovationSection />
      <BusinessSolution />
      <OurProject />
      <TestimonialSection />
      <PeopleSection />
      <Sertifikasi />
      <LatestNews />
      <LocationSection />
      <Footer />
    </main>
  );
}
