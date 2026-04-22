import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AjakanAksi from "@/components/AjakanAksi";

export const metadata = {
  title: "Kontak - MRS Plastic Packaging",
  description:
    "Hubungi tim MRS Plastic Packaging untuk konsultasi kebutuhan kemasan plastik Anda.",
};

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <div className="pt-20">
        <AjakanAksi />
      </div>
      <Footer />
    </main>
  );
}
