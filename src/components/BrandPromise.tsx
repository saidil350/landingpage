"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Leaf } from "lucide-react";
import { brandPromise } from "@/data/brand-promise";

const iconMap = {
  Heart,
  Shield,
  Users,
  Leaf,
};

const BrandPromise = () => {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Brand Promise
            </p>
            <h2 className="mb-5">
              Nilai perusahaan kami diterjemahkan menjadi komitmen operasional yang bisa dirasakan mitra.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg leading-relaxed text-dark/78"
          >
            MRS tidak menempatkan nilai hanya sebagai pernyataan korporat. Kami menjadikannya dasar dalam
            pengambilan keputusan, pengendalian mutu, dan cara membangun hubungan jangka panjang dengan klien.
          </motion.p>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-bg-beige p-8 md:p-10"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Visi
            </p>
            <p className="max-w-3xl text-2xl leading-relaxed text-dark md:text-3xl">
              &ldquo;{brandPromise.vision}&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[32px] bg-dark p-8 md:p-10 text-white"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
              Nilai Inti
            </p>
            <div className="space-y-4">
              {brandPromise.values.map((value) => {
                const IconComponent = iconMap[value.icon as keyof typeof iconMap];

                return (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-primary">
                      {IconComponent ? <IconComponent size={20} /> : null}
                    </span>
                    <div>
                      <p className="font-semibold">{value.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/68">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {brandPromise.mission.map((mission, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="flex gap-4 rounded-[28px] border border-dark/8 bg-white p-7"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p className="leading-[1.8] text-dark/86">{mission}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
