import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandPromise from "@/components/BrandPromise";
import CompanyProfileVideo from "@/components/CompanyProfileVideo";
import PeopleSection from "@/components/PeopleSection";
import ProsesProduksi from "@/components/ProsesProduksi";
import Sertifikasi from "@/components/Sertifikasi";
import LocationSection from "@/components/LocationSection";

export const metadata = {
  title: "Tentang Kami - MRS Plastic Packaging",
  description: "Mengenal lebih dekat MRS Plastic Packaging - produsen kemasan plastik berkualitas tinggi dengan standar internasional dan nilai-nilai Islam.",
};

export default function TentangPerusahaanPage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <div className="pt-20">
        <BrandPromise />
        <CompanyProfileVideo />
        <PeopleSection />
      </div>
      <ProsesProduksi />
      <Sertifikasi />
      <LocationSection />
      <Footer />
    </main>
  );
}
