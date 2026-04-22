"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface ProductCardProps {
  title: string;
  specs: string[];
  image: string;
  category: string;
}

export default function ProductCard({ title, specs, image, category }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-[0_24px_42px_-26px_rgba(255,89,56,0.45)] transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-2 text-sm font-bold flex items-center gap-2">
            <Maximize2 size={16} /> Lihat Detail
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm shadow-sm rounded-lg text-[10px] uppercase font-bold tracking-wider text-primary">
            {category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <ul className="space-y-2">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
