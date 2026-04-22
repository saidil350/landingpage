"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, ShoppingBag, Heart, Factory, Leaf, Droplet, Baby, MoreHorizontal } from "lucide-react";
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
  const [hoveredIndustry, setHoveredIndustry] = React.useState<number | null>(null);

  return (
    <section className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Solusi untuk <span className="text-secondary italic">Berbagai Industri</span>
          </motion.h2>
          <p className="text-dark/90 max-w-3xl mx-auto text-lg leading-relaxed">
            Kami menyediakan solusi kemasan plastik yang disesuaikan dengan kebutuhan spesifik setiap industri,
            memastikan kualitas dan keamanan produk Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
            const isHovered = hoveredIndustry === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onHoverStart={() => setHoveredIndustry(idx)}
                onHoverEnd={() => setHoveredIndustry(null)}
                className="relative bg-white rounded-2xl overflow-hidden card-hover-lift cursor-pointer group"
                style={{ 
                  minHeight: "320px",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)"
                }}
              >
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    filter: isHovered ? "brightness(0.6)" : "brightness(0.75)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-black/30" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    {IconComponent && <IconComponent size={28} className="text-white" />}
                  </div>

                  {/* Industry Name */}
                  <h3 className="text-white text-xl font-bold mb-2">{industry.name}</h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed mb-4 grow">
                    {industry.description}
                  </p>

                  {/* Products List - Revealed on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-white/20">
                          <p className="text-white/90 text-xs font-semibold mb-2 uppercase tracking-wider">
                            Produk:
                          </p>
                          <ul className="space-y-1">
                            {industry.products.map((product, pIdx) => (
                              <li
                                key={pIdx}
                                className="text-white/90 text-xs flex items-center gap-2"
                              >
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                {product}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Indicator */}
                  {!isHovered && (
                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">
                        Hover untuk detail →
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark/90 mb-6">
            Butuh solusi kustom untuk industri Anda?
          </p>
          <button className="btn-primary card-hover-lift">
            Konsultasikan Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSolution;
