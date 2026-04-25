"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Award } from "lucide-react";
import { certifications } from "@/data/certifications";

const Sertifikasi = () => {
  return (
    <section id="sertifikasi" className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Sertifikasi & <span className="text-secondary italic">Standar Kualitas</span>
          </motion.h2>
          <p className="text-dark/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Kami berkomitmen untuk memenuhi standar kualitas internasional dan sertifikasi industri
            guna menjamin keamanan dan kepuasan pelanggan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden card-hover-lift border border-black/5"
            >
              {/* Certificate Image */}
              <div className="aspect-3/4 bg-bg-beige relative overflow-hidden group">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Download Button Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button className="btn-primary bg-white! text-dark! hover:bg-primary! hover:text-neutral-900!">
                    <Download size={20} />
                    Download
                  </button>
                </motion.div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div className="grow">
                    <h3 className="text-lg font-bold text-dark mb-1">{cert.name}</h3>
                    <p className="text-sm text-dark/80">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-dark/90 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <div>
                    <p className="text-xs text-dark/70 uppercase font-medium">Valid Hingga</p>
                    <p className="text-sm font-semibold text-secondary">{cert.validUntil}</p>
                  </div>
                  <button className="text-sm font-semibold text-primary hover:text-secondary transition-colors">
                    Lihat Detail →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-secondary/5 rounded-2xl px-8 py-4">
            <Award size={32} className="text-secondary" />
            <div className="text-left">
              <p className="text-sm font-semibold text-dark">Tersertifikasi Penuh</p>
              <p className="text-xs text-dark/80">Memenuhi standar kualitas internasional</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sertifikasi;
