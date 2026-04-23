"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Utensils,
  ShoppingBag,
  Heart,
  Factory,
  Leaf,
  Droplet,
  Baby,
  MoreHorizontal,
} from "lucide-react";
import { industries } from "@/data/industries";

const iconMap = {
  Utensils,
  ShoppingBag,
  Heart,
  Factory,
  Leaf,
  Droplet,
  Baby,
  MoreHorizontal,
};

const BusinessSolution = () => {
  return (
    <section className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Business solutions untuk kebutuhan industri yang berbeda, dengan standar eksekusi yang sama.
          </motion.h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-dark/90">
            Kami membantu menerjemahkan kebutuhan fungsi, distribusi, dan kepatuhan industri ke dalam solusi
            kemasan yang lebih presisi dan siap dieksekusi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, idx) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative min-h-[340px] cursor-pointer overflow-hidden rounded-[28px] bg-white"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    filter: "brightness(0.68)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/25" />

                <div className="relative flex h-full flex-col p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                    {IconComponent ? <IconComponent size={28} className="text-white" /> : null}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">{industry.name}</h3>
                  <p className="mb-6 grow text-sm leading-relaxed text-white/82">{industry.description}</p>

                  <div className="border-t border-white/20 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/90">
                      Selected applications
                    </p>
                    <ul className="space-y-1">
                      {industry.products.map((product, productIndex) => (
                        <li
                          key={productIndex}
                          className="flex items-center gap-2 text-xs text-white/90"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-dark/90">
            Butuh solusi yang lebih spesifik untuk proses, distribusi, atau kategori produk Anda?
          </p>
          <Link href="/kontak" className="btn-primary card-hover-lift">
            Konsultasikan Sekarang
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSolution;
