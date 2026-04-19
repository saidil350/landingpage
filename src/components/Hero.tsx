"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Photo Background with Overlay */}
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center"></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 25, 22, 0.45)' }}
      ></div>

      {/* Centered Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            }
          }
        }}
        className="relative z-10 text-center px-[clamp(24px,8%,140px)] max-w-[700px]"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
            visible: { 
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)",
              transition: { 
                type: "spring",
                stiffness: 100,
                damping: 20
              }
            }
          }}
          className="mb-6 leading-[1.15]"
          style={{
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            fontWeight: 300,
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            color: '#F3F8F9'
          }}
        >
          Distribusi Plastik<br />
          <span style={{ color: '#b8eae4' }}>Tanpa Batas.</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
          className="mb-8 leading-relaxed"
          style={{ fontSize: '15px', color: '#DBECF1' }}
        >
          Kami adalah mitra strategis untuk pengadaan plastik industri, retail, dan custom. Dengan stok berlimpah dan distribusi tercepat di kelasnya.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { 
                type: "spring",
                stiffness: 200,
                damping: 15
              }
            }
          }}
          className="flex items-center justify-center"
        >
          <motion.a
            href="#produk"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-ghost-white btn-ghost-icon"
            style={{ fontSize: '13px' }}
          >
            Jelajahi Produk
            <motion.span 
              className="icon-circle"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
            >
              ▶
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

