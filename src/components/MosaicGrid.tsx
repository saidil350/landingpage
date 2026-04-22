"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MosaicGrid() {
  return (
    <section id="keunggulan" className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">

        {/* Left Block - Mint Background */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-padding flex flex-col justify-center bg-secondary/10"
        >
          <h2
            className="mb-6 text-dark"
          >
            Keunggulan Distribusi
          </h2>

          <p className="mb-8 text-dark/80 text-lg leading-relaxed">
            Logistik dan pergudangan yang didesain untuk kecepatan dan reliabilitas tanpa kompromi. Kami menjamin setiap pesanan diproses dengan efisiensi maksimal.
          </p>

          <a href="/kontak" className="btn-primary w-fit">
            Pelajari Proses Kami
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Right Grid - Dark Background with Mosaic */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-2 gap-0 bg-dark"
        >

          {/* Cell 1 - Photo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, ease: "easeOut" }
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden min-h-[240px] group"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/rolls.png')" }}
            ></motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent"></div>
          </motion.div>

          {/* Cell 2 - Step 01 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            className="relative flex flex-col justify-center p-8 md:p-10 bg-white/4 border border-white/8 transition-colors"
          >
            <span className="absolute top-6 right-6 text-5xl font-bold text-white/10 tracking-tighter">01</span>
            <h3 className="text-white mb-3 font-semibold text-xl relative z-10">
              Stok Selalu Tersedia
            </h3>
            <p className="text-white/60 text-sm leading-relaxed relative z-10">
              Gudang raksasa dengan sistem inventaris terintegrasi
            </p>
          </motion.div>

          {/* Cell 3 - Step 02 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            className="relative flex flex-col justify-center p-8 md:p-10 bg-white/4 border border-white/8 transition-colors"
          >
            <span className="absolute top-6 right-6 text-5xl font-bold text-white/10 tracking-tighter">02</span>
            <h3 className="text-white mb-3 font-semibold text-xl relative z-10">
              Layanan 24 Jam
            </h3>
            <p className="text-white/60 text-sm leading-relaxed relative z-10">
              Armada mandiri beroperasi 24/7 untuk pengiriman tepat waktu
            </p>
          </motion.div>

          {/* Cell 4 - Photo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, ease: "easeOut" }
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden min-h-[240px] group"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/packaging.png')" }}
            ></motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent"></div>
          </motion.div>

          {/* Cell 5 - Photo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, ease: "easeOut" }
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden min-h-[240px] group"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero.png')" }}
            ></motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent"></div>
          </motion.div>

          {/* Cell 6 - Step 03 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            className="relative flex flex-col justify-center p-8 md:p-10 bg-white/4 border border-white/8 transition-colors"
          >
            <span className="absolute top-6 right-6 text-5xl font-bold text-white/10 tracking-tighter">03</span>
            <h3 className="text-white mb-3 font-semibold text-xl relative z-10">
              Konsultasi B2B
            </h3>
            <p className="text-white/60 text-sm leading-relaxed relative z-10">
              Bantuan ahli pemilihan material untuk produksi massal
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
