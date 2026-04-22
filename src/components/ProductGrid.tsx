"use client";

import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Kantong Plastik High-Grading",
    specs: ["Bahan HDPE/LDPE", "Ketebalan 0.3 - 0.8 mm", "Custom Sablon & Warna"],
    image: "/packaging.png",
    category: "Retail & UMKM",
  },
  {
    title: "Plastik Roll Industri",
    specs: ["Bahan LLDPE Stretch", "Kekuatan Tarik Tinggi", "Ideal untuk Palletizing"],
    image: "/rolls.png",
    category: "Logistik",
  },
  {
    title: "Kemasan Custom Pouch",
    specs: ["Standing Pouch", "Zipper & Air-tight", "Digital Printing 4-Warna"],
    image: "/packaging.png",
    category: "Food & Beverage",
  },
];

export default function ProductGrid() {
  return (
    <section id="produk" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-dots opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Katalog Produk Unggulan"
          subtitle="Kami menyediakan berbagai jenis plastik berkualitas tinggi yang dirancang khusus untuk memenuhi standar industri dan kebutuhan retail modern."
          badge="Produk Kami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-text-muted mb-6">Butuh spesifikasi khusus untuk industri Anda?</p>
          <button className="text-primary font-bold border-b-2 border-primary hover:text-primary transition-colors">
            Unduh Katalog Lengkap (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
