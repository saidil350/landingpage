"use client";

import { motion } from "framer-motion";

export default function TwoColumn() {
  return (
    <section
      id="produk"
      className="section-padding overflow-hidden"
      style={{ backgroundColor: '#f4f3ef' }}
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
            className="mb-4"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#1a2e2a'
            }}
          >
            Kapasitas Skala Besar
          </h2>

          <p className="mb-4" style={{ fontSize: '15px', lineHeight: 1.75, color: '#3a5a50' }}>
            Kami mensuplai ribuan ton biji plastik dan gulungan kemasan premium untuk berbagai korporasi manufaktur. Kecepatan respon dan jaminan mutu adalah keunggulan utama operasi kami.
          </p>

          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.75, color: '#3a5a50' }}>
            Dengan jaringan distribusi yang luas dan sistem manajemen stok terintegrasi, kami memastikan rantai pasok bahan baku plastik industri Anda tidak pernah terputus.
          </p>

          <motion.a 
            href="#kontak" 
            className="link-arrow"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Kontak Tim Sales
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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
