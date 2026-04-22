"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import PatternBackground from "./PatternBackground";
import DecorativeBadge from "./DecorativeBadge";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-beige -z-10 rounded-l-[100px] opacity-50" />

      {/* Pattern Background */}
      <PatternBackground variant="dots" opacity={0.3} color="var(--color-primary)" className="right-0 w-1/2" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Energi Terbarukan Masa Depan
            </motion.div>

            <h1 className="mb-8 text-balance">
              Membangun masa depan yang lebih <span className="accent-text italic font-light font-serif">berkelanjutan</span>
            </h1>

            <p className="text-xl text-dark/70 mb-10 max-w-lg leading-relaxed">
              Kami ahli dalam mengembangkan dan mengoperasikan infrastruktur energi terbarukan kelas dunia untuk mendukung transisi energi global.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary text-lg card-hover-lift">
                Pelajari Solusi Kami
                <ArrowRight size={20} />
              </button>
              <button className="btn-ghost text-lg">
                <PlayCircle size={20} className="text-primary" />
                Lihat Proyek Kami
              </button>
            </div>

            {/* Quick Stats in Hero */}
            <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-black/5">
              <div>
                <div className="text-3xl font-bold text-dark">121 MW</div>
                <div className="text-sm text-dark/50 uppercase tracking-wider font-medium">Beroperasi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-dark">3.5 GW</div>
                <div className="text-sm text-dark/50 uppercase tracking-wider font-medium">Dalam Pengembangan</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1466611653911-954554331f4f?q=80&w=2071&auto=format&fit=crop"
                alt="Wind Turbine Sustainable Energy"
                className="absolute inset-0 w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/40 to-transparent" />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-white p-6 rounded-3xl shadow-xl max-w-[200px]"
              >
                <div className="text-primary font-bold text-sm mb-1 uppercase">Visi Kami</div>
                <p className="text-xs text-dark/70 font-medium">Menjadi penyedia energi bersih nomor satu di kawasan Asia Tenggara.</p>
              </motion.div>

              {/* Decorative Badge */}
              <DecorativeBadge
                content="Leading Energy Solutions"
                position="top-left"
                variant="primary"
                className="top-4 left-4"
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
