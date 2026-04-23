"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { companyProfileVideo } from "@/data/company-profile";

export default function CompanyProfileVideo() {
  return (
    <section id="company-profile" className="section-padding bg-dark text-white">
      <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
            Company Profile Video
          </p>
          <h2 className="mb-5 text-white">
            Melihat lebih dekat cara MRS membangun kualitas dari hulu ke hilir.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-white/75">
            {companyProfileVideo.description}
          </p>

          <div className="mb-10 space-y-4 border-l border-white/15 pl-5">
            {companyProfileVideo.highlights.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-white/78">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="rounded-full border border-white/15 px-4 py-2">
              Durasi {companyProfileVideo.duration}
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              Manufacturing, quality, distribution
            </span>
          </div>
        </motion.div>

        <motion.a
          href={companyProfileVideo.videoUrl}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="group relative block overflow-hidden rounded-[32px]"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={companyProfileVideo.poster}
              alt="Poster company profile video MRS"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/10" />

          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                {companyProfileVideo.title}
              </span>
              <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm backdrop-blur-sm">
                {companyProfileVideo.duration}
              </span>
            </div>

            <div className="flex items-end justify-between gap-6">
              <div className="max-w-md">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
                  Watch Overview
                </p>
                <p className="text-xl font-semibold leading-tight md:text-2xl">
                  Proses produksi, jaringan distribusi, dan budaya kerja yang menopang pertumbuhan MRS.
                </p>
              </div>

              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                <PlayCircle size={28} />
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
