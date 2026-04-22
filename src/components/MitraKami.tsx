"use client";

import React from "react";
import { motion } from "framer-motion";

const MitraKami = () => {
  const logos = [
    "EnergyCo", "SustainCorp", "GreenGrid", "EcoFlow", "PurePower", "NatureLink"
  ];

  return (
    <section className="py-20 bg-white border-y border-black/5">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-dark/40 mb-12"
        >
          Dipercaya oleh Pemimpin Industri Global
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="text-2xl font-bold text-dark/60 hover:text-primary cursor-pointer transition-all duration-300"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MitraKami;
