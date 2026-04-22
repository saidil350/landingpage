import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProsesProduksi from "@/components/ProsesProduksi";
import Sertifikasi from "@/components/Sertifikasi";

export const metadata = {
  title: "Tentang Kami - MRS Plastic Packaging",
  description: "Mengenal lebih dekat MRS Plastic Packaging - produsen kemasan plastik berkualitas tinggi dengan standar internasional dan nilai-nilai Islam.",
};

export default function TentangPerusahaanPage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <ProsesProduksi />
      <Sertifikasi />
      <Footer />
    </main>
  );
}
