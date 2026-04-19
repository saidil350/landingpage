"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Factory, Truck, Users, BarChart3 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Kualitas Terstandar",
    desc: "Setiap batch produk melewati kontrol kualitas ketat untuk memastikan ketebalan dan daya tahan yang konsisten.",
  },
  {
    icon: <Zap size={32} />,
    title: "Layanan Cepat",
    desc: "Sistem logistik terintegrasi memungkinkan pengiriman dalam waktu kurang dari 24 jam untuk wilayah tertentu.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Harga Kompetitif",
    desc: "Kami menawarkan struktur harga grosir terbaik untuk mendukung efisiensi biaya operasional bisnis Anda.",
  },
  {
    icon: <Factory size={32} />,
    title: "Kapasitas Besar",
    desc: "Didukung oleh gudang penyimpanan luas dengan stok ready-to-ship untuk berbagai ukuran dan jenis.",
  },
  {
    icon: <Truck size={32} />,
    title: "Distribusi Nasional",
    desc: "Jangkauan pengiriman luas ke seluruh pelosok negeri dengan mitra cargo terpercaya.",
  },
  {
    icon: <Users size={32} />,
    title: "Konsultasi Ahli",
    desc: "Tim spesialis kami siap membantu Anda memilih jenis plastik yang paling tepat untuk kebutuhan spesifik.",
  },
];

export default function Stats() {
  return (
    <section id="keunggulan" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          centered
          badge="Mengapa Memilih Kami"
          title="Keunggulan Distribusi Utama"
          subtitle="Kami lebih dari sekadar distributor; kami adalah mitra pertumbuhan bisnis Anda dengan standar layanan industrial yang teruji."
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 15 }
                }
              }}
              whileHover={{ 
                y: -10, 
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              className="bg-white p-10 rounded-3xl border border-border/50 hover:border-[#b8eae4]/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-2xl"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#b8eae4]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="w-16 h-16 bg-[#1a3a36]/5 text-[#1a3a36] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a3a36] group-hover:text-white transition-all shadow-sm"
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-xl font-heading font-bold text-[#1a3a36] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-[14px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
