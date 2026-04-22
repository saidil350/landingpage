"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AjakanAksi = () => {
  return (
    <section id="kontak" className="section-padding bg-dark relative overflow-hidden">
      {/* Background visual - abstract grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 ring-1 ring-white/10 bg-pattern-grid" style={{ backgroundSize: "60px 60px" }} />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-white mb-8 text-5xl md:text-6xl leading-tight">
            Siap meningkatkan kualitas <span className="text-accent italic">kemasan</span> Anda?
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Konsultasikan kebutuhan kemasan plastik dengan tim ahli kami. Dapatkan penawaran khusus untuk order pertama.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary text-xl py-4 px-10 min-w-[240px] card-hover-lift">
              Hubungi Kami
              <ArrowRight size={24} />
            </button>
            <button className="text-white font-semibold hover:text-primary transition-colors text-lg flex items-center gap-2 group">
              Download Katalog
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl group-hover:text-primary"
              >
                →
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Visual Accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]" />
    </section>
  );
};

export default AjakanAksi;
