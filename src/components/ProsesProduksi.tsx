"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskRound, Settings, Shield, Truck, Recycle, Award } from "lucide-react";
import { productionStages } from "@/data/production-stages";

const iconMap = {
  FlaskRound,
  Settings,
  Shield,
  Truck,
  Recycle,
  Award,
};

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

const ProsesProduksi = () => {
  return (
    <section id="produk" className="section-padding bg-bg-beige">
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
              Proses Produksi & <span className="text-secondary italic">Jaring Distribusi</span>
            </h2>
            <p className="text-lg text-dark/90">
              Kami menggabungkan teknologi manufaktur mutakhir dengan jaringan distribusi yang luas untuk menghadirkan solusi kemasan plastik berkualitas tinggi.
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
            Lihat Semua Proses
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productionStages.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="card-premium card-hover-lift flex flex-col items-start group"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="text-2xl font-semibold mb-4 leading-tight">
                  {item.titlePrimary} <br />
                  <span className="text-secondary">{item.titleSecondary}</span>
                </h3>
                <p className="text-dark/80 leading-relaxed mb-8 grow">
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
                    className="group-hover:text-secondary"
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProsesProduksi;
