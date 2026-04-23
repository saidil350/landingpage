"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Testimonials
            </p>
            <h2 className="mb-5">
              Kepercayaan dibangun lewat konsistensi, bukan sekadar presentasi penjualan.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg leading-relaxed text-dark/78"
          >
            Mitra kami menilai MRS dari bagaimana kami menjaga spesifikasi, ritme suplai, dan kualitas
            komunikasi saat kebutuhan mereka berubah. Itu yang kami pertahankan dalam setiap proyek.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.name}-${item.company}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="flex h-full flex-col justify-between rounded-[28px] bg-white p-8"
            >
              <div>
                <div className="mb-6 flex gap-1 text-primary">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed text-dark/85">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="space-y-5 border-t border-dark/8 pt-6">
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-dark">{item.name}</p>
                    <p className="text-sm text-dark/60">
                      {item.position} • {item.company}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-bg-beige px-5 py-4">
                  <p className="text-2xl font-semibold text-secondary">
                    {item.metrics.reduction ?? item.metrics.value ?? item.metrics.products}
                  </p>
                  <p className="text-sm text-dark/75">{item.metrics.metric}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-dark/45">
                    {item.metrics.period}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
