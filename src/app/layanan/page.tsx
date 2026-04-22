import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessSolution from "@/components/BusinessSolution";

export const metadata = {
  title: "Produk & Layanan - MRS Plastic Packaging",
  description: "Solusi kemasan plastik lengkap untuk berbagai industri - F&B, Industrial, E-commerce, dan custom solutions dengan standar kualitas internasional.",
};

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <BusinessSolution />
      <Footer />
    </main>
  );
}
