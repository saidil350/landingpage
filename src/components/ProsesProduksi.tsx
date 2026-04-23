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
    <section id="proses-produksi" className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="mb-6">
              Proses produksi dan jaringan distribusi kami dirancang untuk menjaga keandalan skala industri.
            </h2>
            <p className="text-lg text-dark/90">
              Dari riset material hingga pengiriman, setiap tahapan dirancang untuk memberi visibilitas, konsistensi kualitas, dan ketepatan eksekusi yang dibutuhkan klien B2B.
            </p>
          </motion.div>
          <motion.a
            href="/tentang-perusahaan"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary card-hover-lift"
          >
            Lihat Profil Operasional
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  {IconComponent ? <IconComponent size={32} /> : null}
                </div>
                <h3 className="mb-4 text-2xl font-semibold leading-tight">
                  {item.titlePrimary} <br />
                  <span className="text-secondary">{item.titleSecondary}</span>
                </h3>
                <p className="mb-8 grow leading-relaxed text-dark/80">{item.description}</p>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-dark/45">
                  Proof of reliability
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProsesProduksi;
