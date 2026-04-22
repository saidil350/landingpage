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

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const KeahlianKami = () => {
  return (
    <section id="keahlian" className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="mb-6">
              Keahlian kami dalam <span className="text-primary italic">inovasi</span> energi
            </h2>
            <p className="text-lg text-dark/70">
              Kami menggabungkan teknologi mutakhir dengan pengalaman operasional mendalam untuk menghadirkan solusi energi bersih yang andal.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary card-hover-lift"
          >
            Lihat Semua Layanan
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="card-premium card-hover-lift flex flex-col items-start group"
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
              <motion.button
                className="group flex items-center gap-2 text-sm font-bold text-dark hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                PELAJARI LEBIH LANJUT
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="group-hover:text-primary"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeahlianKami;
