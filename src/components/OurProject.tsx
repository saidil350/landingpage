"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const OurProject = () => {
  return (
    <section id="proyek" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Featured projects yang menunjukkan bagaimana solusi kami bekerja dalam konteks nyata.
          </motion.h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-dark/90">
            Setiap proyek di bawah ini mewakili pendekatan MRS dalam menyesuaikan spesifikasi, menjaga kualitas, dan mendukung kebutuhan distribusi klien.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-hover-lift group relative aspect-3/4 cursor-pointer overflow-hidden rounded-[32px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-transparent opacity-80" />

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded-full bg-secondary/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-1 text-sm text-white/80">{project.client}</p>
                <p className="mb-4 text-xs font-medium uppercase text-white/60">
                  {project.industry} • {project.year}
                </p>

                <div className="mt-2 flex items-end justify-between border-t border-white/20 pt-4">
                  <div>
                    <p className="text-xs font-medium uppercase text-white/60">Kapasitas</p>
                    <p className="font-bold text-white">{project.capacity}</p>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all group-hover:bg-primary"
                  >
                    <ExternalLink size={18} />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/proyek" className="btn-secondary card-hover-lift">
            Lihat Semua Proyek
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
