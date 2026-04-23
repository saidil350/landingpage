"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, ShieldCheck, Recycle, Zap, Globe, HeartHandshake } from "lucide-react";

const expertiseData = [
  {
    icon: <Factory size={32} />,
    titlePrimary: "Manufacturing",
    titleSecondary: "Execution",
    description: "Lini produksi yang dirancang untuk volume besar, stabilitas kualitas, dan disiplin proses pada setiap batch.",
  },
  {
    icon: <Recycle size={32} />,
    titlePrimary: "Material",
    titleSecondary: "Development",
    description: "Pendekatan formulasi material yang membantu klien menyeimbangkan performa, efisiensi, dan agenda keberlanjutan.",
  },
  {
    icon: <ShieldCheck size={32} />,
    titlePrimary: "Quality",
    titleSecondary: "Assurance",
    description: "Kontrol kualitas berlapis untuk memastikan spesifikasi, keamanan, dan konsistensi hasil tetap terjaga.",
  },
  {
    icon: <Zap size={32} />,
    titlePrimary: "Lead Time",
    titleSecondary: "Discipline",
    description: "Sistem operasional yang membantu percepatan produksi tanpa mengorbankan akurasi dan mutu produk.",
  },
  {
    icon: <Globe size={32} />,
    titlePrimary: "Distribution",
    titleSecondary: "Readiness",
    description: "Koordinasi logistik yang mendukung kebutuhan pengiriman nasional dan ritme suplai industri yang dinamis.",
  },
  {
    icon: <HeartHandshake size={32} />,
    titlePrimary: "Partnership",
    titleSecondary: "Approach",
    description: "Pendampingan komersial dan teknis agar solusi kemasan yang dipilih relevan dengan kebutuhan bisnis klien.",
  },
];

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
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="mb-6 text-white">
              Keahlian kami dibangun dari pengalaman operasional yang bisa diuji di lapangan.
            </h2>
            <p className="text-lg text-white/70">
              MRS menggabungkan kemampuan manufaktur, pengembangan material, quality assurance, dan dukungan distribusi untuk menghadirkan solusi kemasan yang relevan bagi berbagai sektor industri.
            </p>
          </motion.div>
          <motion.a
            href="/layanan"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-btn border-2 border-white/20 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-dark"
          >
            Lihat Business Solutions
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col items-start border border-white/8 bg-white/4 p-8 transition-all duration-300 hover:border-white/12 hover:bg-white/6"
            >
              <span className="absolute top-6 right-6 text-6xl font-bold tracking-tighter text-white/5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-primary transition-transform group-hover:scale-110 group-hover:bg-white/10">
                {item.icon}
              </div>
              <h3 className="mb-4 text-2xl font-semibold leading-tight text-white">
                {item.titlePrimary} <br />
                <span className="text-secondary">{item.titleSecondary}</span>
              </h3>
              <p className="mb-8 grow leading-relaxed text-white/60">{item.description}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">
                Capability {String(idx + 1).padStart(2, "0")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeahlianKami;
