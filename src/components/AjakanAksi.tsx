"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contactDummyData } from "@/data/contact";

const AjakanAksi = () => {
  const { headline, description, channels, officeHours, sampleLead } = contactDummyData;

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 ring-1 ring-white/10 bg-pattern-grid" style={{ backgroundSize: "60px 60px" }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-neutral-900 mb-6 text-4xl md:text-5xl leading-tight">{headline}</h2>
            <p className="text-lg text-neutral-900/90 mb-8 max-w-xl">{description}</p>

            <div className="space-y-4 mb-10">
              {channels.map((item, index) => (
                <div key={item.label} className="bg-neutral-100 border border-neutral-200 rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-primary shrink-0">
                      {index === 0 && <Phone size={20} />}
                      {index === 1 && <Mail size={20} />}
                      {index === 2 && <MapPin size={20} />}
                    </div>
                    <div>
                      <p className="text-neutral-600 text-sm uppercase tracking-wider">{item.label}</p>
                      <p className="text-neutral-900 text-lg font-semibold">{item.value}</p>
                      <p className="text-neutral-600 text-sm mt-1">{item.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5">
              <p className="text-neutral-900 text-lg font-semibold mb-3">Jam Operasional (Dummy)</p>
              <div className="space-y-2">
                {officeHours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between text-sm text-neutral-900/85">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 h-fit">
            <p className="text-dark text-2xl font-semibold mb-6">Form Kontak (Dummy Data)</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-dark/70 mb-2">Nama PIC</label>
                <input
                  type="text"
                  defaultValue={sampleLead.name}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="block text-sm text-dark/70 mb-2">Perusahaan</label>
                <input
                  type="text"
                  defaultValue={sampleLead.company}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-dark/70 mb-2">Telepon</label>
                  <input
                    type="text"
                    defaultValue={sampleLead.phone}
                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="block text-sm text-dark/70 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={sampleLead.email}
                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-dark/70 mb-2">Kebutuhan</label>
                <textarea
                  rows={4}
                  defaultValue={sampleLead.message}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <button type="button" className="btn-primary w-full justify-center">
                Kirim Permintaan
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]" />
    </section>
  );
};

export default AjakanAksi;
