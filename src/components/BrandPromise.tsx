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
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="mb-8">
            Visi & <span className="text-primary italic">Misi</span>
          </h2>
          <div className="bg-bg-beige rounded-3xl p-10 card-hover-lift">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Visi Kami</h3>
            <p className="text-xl text-dark leading-relaxed italic font-medium">
              "{brandPromise.vision}"
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-center text-2xl font-semibold mb-10">Misi Kami</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {brandPromise.mission.map((mission, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-black/5 card-hover-lift"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <p className="text-dark/90 leading-relaxed">{mission}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-2xl font-semibold mb-10">Nilai-Nilai Kami</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandPromise.values.map((value, idx) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-black/5 card-hover-lift text-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-dark">{value.title}</h4>
                  <p className="text-dark/80 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPromise;
