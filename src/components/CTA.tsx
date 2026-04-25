"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section id="kontak" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-white/10 to-transparent z-0" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neutral-100 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-neutral-900 mb-8"
            >
              <MessageCircle size={40} />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-extrabold text-neutral-900 mb-6 leading-tight max-w-4xl"
            >
              Siap Meningkatkan Standar <span className="text-neutral-900 underline decoration-white/30 underline-offset-8 italic">Supply Chain</span> Anda?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl"
            >
              Hubungi tim spesialis kami hari ini untuk konsultasi pengadaan gratis, penawaran harga grosir, atau permintaan sampel produk.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <button className="bg-white hover:bg-white/90 text-primary px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all hover:-translate-y-1 shadow-xl shadow-dark/20 text-lg">
                Hubungi via WhatsApp <MessageCircle size={22} />
              </button>
              <button className="bg-neutral-50 hover:bg-neutral-100 backdrop-blur-sm border border-neutral-200 text-neutral-900 px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all text-lg">
                Jadwalkan Konsultasi <Calendar size={22} />
              </button>
            </motion.div>
            
            <div className="mt-16 pt-10 border-t border-neutral-200 w-full max-w-lg flex items-center justify-center gap-12 text-neutral-900/40 font-bold uppercase tracking-widest text-xs">
                <span>Fast Response</span>
                <span>•</span>
                <span>Bulk Pricing</span>
                <span>•</span>
                <span>Custom Size</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
