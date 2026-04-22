"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wind, Sun, Battery, Zap, Globe, Shield } from "lucide-react";

const expertiseData = [
  {
    icon: <Wind size={32} />,
    titlePrimary: "Tenaga",
    titleSecondary: "Angin",
    description: "Pengembangan lahan angin darat dan lepas pantai berskala besar dengan teknologi turbin terbaru.",
  },
  {
    icon: <Sun size={32} />,
    titlePrimary: "Tenaga",
    titleSecondary: "Surya",
    description: "Instalasi panel fotovoltaik efisiensi tinggi untuk sektor industri dan komersial.",
  },
  {
    icon: <Battery size={32} />,
    titlePrimary: "Penyimpanan",
    titleSecondary: "Energi",
    description: "Sistem penyimpanan baterai modern untuk stabilisasi grid dan cadangan energi berkelanjutan.",
  },
  {
    icon: <Zap size={32} />,
    titlePrimary: "Grid",
    titleSecondary: "Pintar",
    description: "Infrastruktur distribusi energi cerdas yang mengoptimalkan konsumsi dan efisiensi.",
  },
  {
    icon: <Globe size={32} />,
    titlePrimary: "Konsultasi",
    titleSecondary: "ESG",
    description: "Layanan strategis untuk membantu perusahaan mencapai target emisi nol bersih.",
  },
  {
    icon: <Shield size={32} />,
    titlePrimary: "Aset",
    titleSecondary: "Manajemen",
    description: "Pengoperasian dan pemeliharaan fasilitas energi selama 24/7 untuk performa maksimal.",
  },
];

const KeahlianKami = () => {
  return (
    <section id="keahlian" className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="mb-6">
              Keahlian kami dalam <span className="text-primary italic">inovasi</span> energi
            </h2>
            <p className="text-lg text-dark/70">
              Kami menggabungkan teknologi mutakhir dengan pengalaman operasional mendalam untuk menghadirkan solusi energi bersih yang andal.
            </p>
          </div>
          <button className="btn-secondary card-hover-lift">Lihat Semua Layanan</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-premium card-hover-lift flex flex-col items-start"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 leading-tight">
                {item.titlePrimary} <br />
                <span className="accent-text">{item.titleSecondary}</span>
              </h3>
              <p className="text-dark/60 leading-relaxed mb-8 grow">
                {item.description}
              </p>
              <button className="group flex items-center gap-2 text-sm font-bold text-dark hover:text-primary transition-colors">
                PELAJARI LEBIH LANJUT
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="group-hover:text-primary"
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeahlianKami;
