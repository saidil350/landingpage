"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ladang Angin Bromo",
    location: "Jawa Timur, Indonesia",
    status: "Operasional",
    capacity: "75 MW",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Surya Maju Nusantara",
    location: "Sulawesi Selatan, Indonesia",
    status: "Operasional",
    capacity: "46 MW",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb658316c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Hybrid Energy Hub",
    location: "Sumbawa, Indonesia",
    status: "Pembangunan",
    capacity: "120 MW",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
];

const ProyekKami = () => {
  return (
    <section id="proyek" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Portofolio <span className="text-primary italic">Dampak Nyata</span>
          </motion.h2>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Menjelajahi proyek-proyek unggulan kami yang telah membantu ribuan komunitas mendapatkan akses ke energi bersih dan terjangkau.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[32px] aspect-3/4 card-hover-lift cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex justify-between items-end border-t border-white/20 pt-4 mt-2">
                  <div>
                    <p className="text-white/60 text-xs uppercase font-medium">{project.location}</p>
                    <p className="text-white font-bold">{project.capacity}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-primary transition-all"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-secondary card-hover-lift">Lihat Semua Proyek</button>
        </div>
      </div>
    </section>
  );
};

export default ProyekKami;
