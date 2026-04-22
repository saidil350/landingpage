"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TwoColumn() {
  return (
    <section
      id="produk"
      className="section-padding overflow-hidden bg-bg-beige"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center" style={{ columnGap: 'clamp(40px, 5vw, 80px)' }}>

        {/* Content Block - LEFT */}
        <motion.div
           initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
           whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <h2
            className="mb-4 text-dark"
          >
            Kapasitas Skala Besar
          </h2>

          <p className="mb-4 text-dark/80 text-lg leading-relaxed">
            Kami mensuplai ribuan ton biji plastik dan gulungan kemasan premium untuk berbagai korporasi manufaktur. Kecepatan respon dan jaminan mutu adalah keunggulan utama operasi kami.
          </p>

          <p className="mb-8 text-dark/80 text-lg leading-relaxed">
            Dengan jaringan distribusi yang luas dan sistem manajemen stok terintegrasi, kami memastikan rantai pasok bahan baku plastik industri Anda tidak pernah terputus.
          </p>

          <motion.a 
            href="/kontak" 
            className="btn-primary"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Kontak Tim Sales
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Visual Block - RIGHT */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.2 }}
           whileHover={{ scale: 1.02 }}
           className="photo-sharp relative overflow-hidden"
           style={{
             aspectRatio: '4/3',
             backgroundColor: '#2a5c4a',
             boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
           }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/packaging.png')" }}
          ></motion.div>
        </motion.div>

      </div>
    </section>
  );
}
