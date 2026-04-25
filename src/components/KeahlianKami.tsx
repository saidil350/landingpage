"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Factory, ShieldCheck, Recycle, Zap, Globe, HeartHandshake } from "lucide-react";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

const expertiseData = [
  {
    icon: <Factory size={32} />,
    titlePrimary: "Manufacturing",
    titleSecondary: "Execution",
    description: "Lini produksi yang dirancang untuk volume besar, stabilitas kualitas, dan disiplin proses pada setiap batch.",
  },
  {
    icon: <Recycle size={32} />,
    titlePrimary: "Material",
    titleSecondary: "Development",
    description: "Pendekatan formulasi material yang membantu klien menyeimbangkan performa, efisiensi, dan agenda keberlanjutan.",
  },
  {
    icon: <ShieldCheck size={32} />,
    titlePrimary: "Quality",
    titleSecondary: "Assurance",
    description: "Kontrol kualitas berlapis untuk memastikan spesifikasi, keamanan, dan konsistensi hasil tetap terjaga.",
  },
  {
    icon: <Zap size={32} />,
    titlePrimary: "Lead Time",
    titleSecondary: "Discipline",
    description: "Sistem operasional yang membantu percepatan produksi tanpa mengorbankan akurasi dan mutu produk.",
  },
  {
    icon: <Globe size={32} />,
    titlePrimary: "Distribution",
    titleSecondary: "Readiness",
    description: "Koordinasi logistik yang mendukung kebutuhan pengiriman nasional dan ritme suplai industri yang dinamis.",
  },
  {
    icon: <HeartHandshake size={32} />,
    titlePrimary: "Partnership",
    titleSecondary: "Approach",
    description: "Pendampingan komersial dan teknis agar solusi kemasan yang dipilih relevan dengan kebutuhan bisnis klien.",
  },
];

const KeahlianKami = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(motionQueries.noPreference, () => {
      const introItems = Array.from(section.querySelectorAll<HTMLElement>("[data-expertise-intro]"));
      const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-expertise-card]"));

      const tl = gsap.timeline({
        defaults: { ease: motionTokens.ease.enter },
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(introItems, {
        autoAlpha: 0,
        y: motionTokens.offsets.intro,
        duration: motionTokens.durations.sectionIntro,
        stagger: motionTokens.stagger.default,
      }).from(
        cards,
        {
          autoAlpha: 0,
          y: motionTokens.offsets.card,
          duration: motionTokens.durations.sectionCard,
          stagger: motionTokens.stagger.default,
        },
        "-=0.42"
      );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="keahlian" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div data-expertise-intro className="max-w-2xl">
            <h2 className="mb-6 text-neutral-900">
              Keahlian kami dibangun dari pengalaman operasional yang bisa diuji di lapangan.
            </h2>
            <p className="text-lg text-neutral-600">
              MRS menggabungkan kemampuan manufaktur, pengembangan material, quality assurance, dan dukungan distribusi untuk menghadirkan solusi kemasan yang relevan bagi berbagai sektor industri.
            </p>
          </div>
          <a
            href="/layanan"
            data-expertise-intro
            className="inline-flex items-center justify-center rounded-btn border-2 border-neutral-200 px-8 py-3 font-medium text-neutral-900 transition-all duration-300 hover:bg-white hover:text-dark"
          >
            Lihat Business Solutions
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((item, idx) => (
            <div
              key={idx}
              data-expertise-card
              className="group relative flex flex-col items-start border border-white/8 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-200 hover:bg-white/6"
            >
              <span className="absolute top-6 right-6 text-6xl font-bold tracking-tighter text-neutral-900/5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-50 text-primary transition-transform group-hover:scale-110 group-hover:bg-neutral-100">
                {item.icon}
              </div>
              <h3 className="mb-4 text-2xl font-semibold leading-tight text-neutral-900">
                {item.titlePrimary} <br />
                <span className="text-secondary">{item.titleSecondary}</span>
              </h3>
              <p className="mb-8 grow leading-relaxed text-neutral-500">{item.description}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900/35">
                Capability {String(idx + 1).padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeahlianKami;
