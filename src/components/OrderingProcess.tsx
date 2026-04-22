"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Settings, Truck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: <MessageSquare size={24} />,
    title: "Konsultasi Kebutuhan",
    desc: "Diskusikan spesifikasi, jenis plastik, dan volume pengadaan dengan tim ahli kami via WhatsApp atau Email.",
  },
  {
    icon: <FileText size={24} />,
    title: "Penawaran & Sampel",
    desc: "Kami mengirimkan estimasi biaya kompetitif dan sampel produk untuk memastikan kesesuaian kualitas.",
  },
  {
    icon: <Settings size={24} />,
    title: "Produksi & Packing",
    desc: "Pesanan masuk ke tahap manufaktur atau penyiapan stok dengan standar pengemasan industri yang aman.",
  },
  {
    icon: <Truck size={24} />,
    title: "Pengiriman Terjadwal",
    desc: "Barang dikirim menggunakan armada internal atau ekspedisi rekanan langsung ke lokasi gudang Anda.",
  },
];

export default function OrderingProcess() {
  return (
    <section id="alur" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          centered
          badge="Proses Bisnis"
          title="Langkah Mudah Pemesanan"
          subtitle="Sistem kerja yang transparan dan efisien untuk memastikan kelancaran rantai pasok bisnis Anda."
        />

        <div className="relative mt-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-white border-4 border-background rounded-full flex items-center justify-center text-primary shadow-lg mb-8 group hover:border-primary transition-all relative">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                    </div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
