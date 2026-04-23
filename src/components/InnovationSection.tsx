"use client";

import { motion } from "framer-motion";
import { FlaskConical, Leaf, ScanSearch } from "lucide-react";
import { innovations } from "@/data/innovations";

const iconMap = {
  FlaskConical,
  ScanSearch,
  Leaf,
};

export default function InnovationSection() {
  return (
    <section id="inovasi" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Innovation
            </p>
            <h2 className="mb-5">
              Inovasi kami bertumpu pada kualitas proses, bukan sekadar jargon teknologi.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg leading-relaxed text-dark/78"
          >
            Dari pengembangan material hingga disiplin quality control, kami terus meningkatkan sistem kerja
            agar solusi kemasan lebih relevan dengan kebutuhan industri, lebih stabil untuk produksi, dan
            lebih bertanggung jawab untuk jangka panjang.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {innovations.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="flex h-full flex-col justify-between rounded-[28px] bg-bg-beige p-8"
              >
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white">
                    {Icon ? <Icon size={24} /> : null}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-dark">{item.title}</h3>
                  <p className="mb-8 text-dark/78 leading-relaxed">{item.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-dark/10 bg-white px-4 py-2 text-sm text-dark/70"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
