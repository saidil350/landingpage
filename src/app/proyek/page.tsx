import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurProject from "@/components/OurProject";

export const metadata = {
  title: "Proyek - MRS Plastic Packaging",
  description: "Portfolio proyek MRS Plastic Packaging - solusi kemasan plastik sukses untuk berbagai klien dan industri di Indonesia.",
};

export default function ProyekPage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <OurProject />
      <Footer />
    </main>
  );
}
