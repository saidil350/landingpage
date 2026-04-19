"use client";

import { motion } from "framer-motion";

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
          className="section-padding flex flex-col justify-center"
          style={{ backgroundColor: '#b8eae4' }}
        >
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#1a2e2a'
            }}
          >
            Keunggulan Distribusi
          </h2>

          <p className="mb-8" style={{ fontSize: '15px', lineHeight: 1.75, color: '#1a2e2a' }}>
            Logistik dan pergudangan yang didesain untuk kecepatan dan reliabilitas tanpa kompromi. Kami menjamin setiap pesanan diproses dengan efisiensi maksimal.
          </p>

          <a href="#kontak" className="link-arrow" style={{ color: '#1a2e2a' }}>
            Pelajari Proses Kami
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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
          style={{ backgroundColor: '#1a3a36', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}
        >

          {/* Cell 1 - Photo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: "grayscale(100%)" },
              visible: { 
                opacity: 1, 
                scale: 1, 
                filter: "grayscale(0%)",
                transition: { duration: 0.7, ease: "easeOut" } 
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="photo-sharp relative overflow-hidden min-h-[200px]"
            style={{ backgroundColor: '#2a5c4a' }}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/rolls.png')" }}
            ></motion.div>
          </motion.div>

          {/* Cell 2 - Step 01 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            className="flex flex-col justify-center p-6 md:p-8"
            style={{ backgroundColor: '#1f4540', minHeight: '200px' }}
          >
            <span className="step-number mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>01.</span>
            <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.3, color: '#F3F8F9' }}>
              Stok Selalu Tersedia
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#DBECF1' }}>
              Gudang raksasa dengan sistem inventaris terintegrasi
            </p>
          </motion.div>

          {/* Cell 3 - Step 02 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            className="flex flex-col justify-center p-6 md:p-8"
            style={{ backgroundColor: '#1f4540', minHeight: '200px' }}
          >
            <span className="step-number mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>02.</span>
            <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.3, color: '#F3F8F9' }}>
              Layanan 24 Jam
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#DBECF1' }}>
              Armada mandiri beroperasi 24/7 untuk pengiriman tepat waktu
            </p>
          </motion.div>

          {/* Cell 4 - Photo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: "grayscale(100%)" },
              visible: { 
                opacity: 1, 
                scale: 1, 
                filter: "grayscale(0%)",
                transition: { duration: 0.7, ease: "easeOut" } 
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="photo-sharp relative overflow-hidden min-h-[200px]"
            style={{ backgroundColor: '#2a5c4a' }}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/packaging.png')" }}
            ></motion.div>
          </motion.div>

          {/* Cell 5 - Photo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: "grayscale(100%)" },
              visible: { 
                opacity: 1, 
                scale: 1, 
                filter: "grayscale(0%)",
                transition: { duration: 0.7, ease: "easeOut" } 
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="photo-sharp relative overflow-hidden min-h-[200px]"
            style={{ backgroundColor: '#2a5c4a' }}
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero.png')" }}
            ></motion.div>
          </motion.div>

          {/* Cell 6 - Step 03 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            className="flex flex-col justify-center p-6 md:p-8"
            style={{ backgroundColor: '#1f4540', minHeight: '200px' }}
          >
            <span className="step-number mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>03.</span>
            <h3 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.3, color: '#F3F8F9' }}>
              Konsultasi B2B
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#DBECF1' }}>
              Bantuan ahli pemilihan material untuk produksi massal
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
