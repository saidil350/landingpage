"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/team-members";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function PeopleSection() {
  return (
    <section id="people" className="section-padding bg-dark text-white">
      <div className="container-custom">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
              Our People
            </p>
            <h2 className="mb-5 text-white">
              Di balik kapasitas produksi, ada tim yang menjaga mutu, amanah, dan kemitraan jangka panjang.
            </h2>
            <p className="text-lg leading-relaxed text-white/72">
              Kami ingin kehadiran tim terlihat jelas di website karena kepercayaan pada perusahaan juga lahir
              dari orang-orang yang memimpin kualitas, operasional, dan hubungan dengan mitra.
            </p>
          </motion.div>

          <Link href="/tentang-perusahaan" className="btn-border-white">
            Lihat Profil Perusahaan
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/4"
            >
              <div className="aspect-[4/4.5] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/55">
                      {member.position}
                    </p>
                  </div>
                  <a
                    href={member.linkedin}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/75 transition-colors hover:border-primary hover:text-primary"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
                <p className="text-white/72 leading-relaxed">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
