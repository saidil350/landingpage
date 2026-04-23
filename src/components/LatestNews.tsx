"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const latestPosts = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function LatestNews() {
  return (
    <section id="berita-terbaru" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Latest News
            </p>
            <h2 className="mb-5">
              Update terbaru tentang ekspansi, sertifikasi, dan inovasi yang sedang kami jalankan.
            </h2>
          </motion.div>

          <Link href="/blog" className="btn-secondary">
            Lihat Semua Berita
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-[28px] border border-dark/8 bg-bg-beige"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex h-full flex-col p-7">
                  <div className="mb-4 flex flex-wrap gap-3 text-sm text-dark/55">
                    <span className="rounded-full border border-dark/10 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold leading-tight text-dark transition-colors hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-dark/72 leading-relaxed">{post.excerpt}</p>

                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Baca Selengkapnya
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
