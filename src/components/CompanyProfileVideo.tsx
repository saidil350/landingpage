"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { PlayCircle } from "lucide-react";
import { companyProfileVideo } from "@/data/company-profile";
import { stats } from "@/data/stats";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

const formatMetricValue = (value: number) =>
  Number.isInteger(value) ? `${Math.round(value)}` : value.toFixed(1);

export default function CompanyProfileVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(motionQueries.noPreference, () => {
      const introItems = Array.from(section.querySelectorAll<HTMLElement>("[data-company-intro]"));
      const highlights = Array.from(section.querySelectorAll<HTMLElement>("[data-company-highlight]"));
      const pills = Array.from(section.querySelectorAll<HTMLElement>("[data-company-pill]"));
      const mediaCard = section.querySelector<HTMLElement>("[data-company-media]");
      const metricCards = Array.from(section.querySelectorAll<HTMLElement>("[data-company-metric]"));

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
      })
        .from(
          highlights,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.softCard,
            duration: motionTokens.durations.sectionCard,
            stagger: motionTokens.stagger.default,
          },
          "-=0.46"
        )
        .from(
          pills,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.pills,
            scale: 0.975,
            duration: motionTokens.durations.pills,
            stagger: motionTokens.stagger.pills,
            ease: motionTokens.ease.enter,
          },
          "-=0.56"
        )
        .from(
          mediaCard,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.block,
            scale: 0.992,
            duration: motionTokens.durations.crossfade,
            ease: motionTokens.ease.soft,
          },
          "-=0.6"
        )
        .from(
          metricCards,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.softCard,
            duration: motionTokens.durations.sectionCard,
            stagger: motionTokens.stagger.default,
            onStart: () => {
              metricRefs.current.forEach((metricRef, index) => {
                if (!metricRef) return;

                metricRef.textContent = "0";
                const counter = { value: 0 };

                gsap.to(counter, {
                  value: stats[index].value,
                  duration: motionTokens.durations.metrics + index * 0.08,
                  ease: motionTokens.ease.soft,
                  overwrite: true,
                  onUpdate: () => {
                    metricRef.textContent = formatMetricValue(counter.value);
                  },
                });
              });
            },
          },
          "-=0.52"
        );
    });

    mm.add(motionQueries.reduce, () => {
      metricRefs.current.forEach((metricRef, index) => {
        if (metricRef) {
          metricRef.textContent = formatMetricValue(stats[index].value);
        }
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="company-profile" className="section-padding bg-white text-neutral-900">
      <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-xl">
          <p
            data-company-intro
            className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500"
          >
            Company Profile Video
          </p>
          <h2 data-company-intro className="mb-5 text-neutral-900">
            Melihat lebih dekat cara MRS membangun kualitas dari hulu ke hilir.
          </h2>
          <p data-company-intro className="mb-8 text-lg leading-relaxed text-neutral-600">
            {companyProfileVideo.description}
          </p>

          <div className="mb-10 space-y-4 border-l border-neutral-200 pl-5">
            {companyProfileVideo.highlights.map((item) => (
              <div key={item} data-company-highlight className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-neutral-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <span
              data-company-pill
              className="rounded-full border border-neutral-200 px-4 py-2"
            >
              Durasi {companyProfileVideo.duration}
            </span>
            <span
              data-company-pill
              className="rounded-full border border-neutral-200 px-4 py-2"
            >
              Manufacturing, quality, distribution
            </span>
          </div>
        </div>

        <a
          href={companyProfileVideo.videoUrl}
          data-company-media
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
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                {companyProfileVideo.title}
              </span>
              <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm text-white backdrop-blur-sm">
                {companyProfileVideo.duration}
              </span>
            </div>

            <div className="flex items-end justify-between gap-6">
              <div className="max-w-md">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
                  Watch Overview
                </p>
                <p className="text-xl font-semibold leading-tight text-white md:text-2xl">
                  Proses produksi, jaringan distribusi, dan budaya kerja yang menopang pertumbuhan MRS.
                </p>
              </div>

              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                <PlayCircle size={28} />
              </span>
            </div>
          </div>
        </a>
      </div>

      <div className="container-custom mt-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              data-company-metric
              className="rounded-[24px] border border-neutral-200 bg-neutral-50 px-6 py-5 backdrop-blur-sm"
            >
              <div className="mb-2 flex items-end gap-2">
                <span
                  ref={(node) => {
                    metricRefs.current[index] = node;
                  }}
                  className="text-4xl font-semibold text-neutral-900 md:text-5xl"
                >
                  {formatMetricValue(item.value)}
                </span>
                <span className="pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.unit}
                </span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
