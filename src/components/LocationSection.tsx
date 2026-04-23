"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";

export default function LocationSection() {
  return (
    <section id="lokasi" className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Locations
            </p>
            <h2 className="mb-5">
              Kehadiran kami dirancang untuk mendekatkan produksi, distribusi, dan dukungan komersial.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg leading-relaxed text-dark/78"
          >
            Jejak operasional ini menunjukkan bagaimana MRS membangun layanan yang lebih responsif, stabil,
            dan siap mendukung kebutuhan klien di berbagai wilayah Indonesia.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="overflow-hidden rounded-[32px] bg-dark text-white"
          >
            <div className="grid min-h-full gap-0 md:grid-cols-2">
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                    Operational Footprint
                  </p>
                  <h3 className="mb-5 text-3xl font-semibold leading-tight">
                    Tiga titik utama yang menopang ritme bisnis kami.
                  </h3>
                  <p className="max-w-md text-white/72 leading-relaxed">
                    Kantor komersial, fasilitas manufaktur, dan node distribusi ini bekerja sebagai satu sistem
                    untuk menjaga lead time dan kualitas layanan.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  {locations.map((location, index) => (
                    <div key={location.name} className="rounded-2xl bg-white/6 px-4 py-5">
                      <p className="text-2xl font-semibold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/48">
                        {location.type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[360px]">
                <img
                  src="/hero1.png"
                  alt="Jejak operasional MRS"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/10" />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {locations.map((location, index) => (
              <motion.article
                key={location.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[28px] bg-white p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-white">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark/45">
                      {location.type}
                    </p>
                    <h3 className="text-xl font-semibold text-dark">{location.name}</h3>
                  </div>
                </div>

                <p className="mb-4 text-dark/76 leading-relaxed">{location.address}</p>
                <p className="text-sm text-dark/58">{location.capacity}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
