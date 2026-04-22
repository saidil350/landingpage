"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, ShieldCheck, Recycle, Zap, Globe, HeartHandshake } from "lucide-react";

const expertiseData = [
  {
    icon: <Factory size={32} />,
    titlePrimary: "Manufaktur",
    titleSecondary: "Presisi",
    description: "Fasilitas produksi modern dengan kontrol kualitas ketat untuk menghasilkan produk plastik tanpa cacat.",
  },
  {
    icon: <Recycle size={32} />,
    titlePrimary: "Material",
    titleSecondary: "Eco-Friendly",
    description: "Inovasi penggunaan biji plastik daur ulang dan material biodegradable untuk masa depan bumi.",
  },
  {
    icon: <ShieldCheck size={32} />,
    titlePrimary: "Standar",
    titleSecondary: "Keamanan",
    description: "Produk kami telah tersertifikasi Food Grade dan bebas dari zat berbahaya bagi kesehatan.",
  },
  {
    icon: <Zap size={32} />,
    titlePrimary: "Produksi",
    titleSecondary: "Cepat",
    description: "Kapasitas produksi tinggi yang memungkinkan penyelesaian pesanan dalam waktu singkat.",
  },
  {
    icon: <Globe size={32} />,
    titlePrimary: "Jangkauan",
    titleSecondary: "Global",
    description: "Sistem logistik terintegrasi yang siap mengirimkan produk kemasan ke seluruh penjuru dunia.",
  },
  {
    icon: <HeartHandshake size={32} />,
    titlePrimary: "Layanan",
    titleSecondary: "Kustom",
    description: "Konsultasi desain dan spesifikasi khusus yang disesuaikan dengan kebutuhan unik merek Anda.",
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
    <section id="keahlian" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="mb-6 text-white">
              Keahlian kami dalam <span className="text-primary italic">inovasi</span> kemasan
            </h2>
            <p className="text-lg text-white/70">
              Kami menggabungkan teknologi mutakhir dengan pengalaman operasional mendalam untuk menghadirkan solusi kemasan plastik yang berkualitas tinggi dan andal.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center border-2 border-white/20 text-white font-medium transition-all duration-300 hover:bg-white hover:text-dark px-8 py-3 rounded-btn"
          >
            Lihat Semua Layanan
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="relative bg-white/4 border border-white/8 p-8 flex flex-col items-start group transition-all duration-300 hover:bg-white/6 hover:border-white/12"
            >
              <span className="absolute top-6 right-6 text-6xl font-bold text-white/5 tracking-tighter">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:bg-white/10">
                <div className="text-primary">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 leading-tight text-white">
                {item.titlePrimary} <br />
                <span className="text-secondary">{item.titleSecondary}</span>
              </h3>
              <p className="text-white/60 leading-relaxed mb-8 grow">
                {item.description}
              </p>
              <motion.button
                className="group flex items-center gap-2 text-sm font-bold text-white/80 hover:text-primary transition-colors"
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
