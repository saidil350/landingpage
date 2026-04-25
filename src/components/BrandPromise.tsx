"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Heart, Shield, Users, Leaf } from "lucide-react";
import { brandPromise } from "@/data/brand-promise";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

const iconMap = {
  Heart,
  Shield,
  Users,
  Leaf,
};

const BrandPromise = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(motionQueries.noPreference, () => {
      const introItems = Array.from(section.querySelectorAll<HTMLElement>("[data-brand-intro]"));
      const mainCards = Array.from(section.querySelectorAll<HTMLElement>("[data-brand-card]"));
      const valueItems = Array.from(section.querySelectorAll<HTMLElement>("[data-brand-value]"));
      const missionItems = Array.from(section.querySelectorAll<HTMLElement>("[data-brand-mission]"));

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
          mainCards,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.block,
            duration: motionTokens.durations.sectionBlock,
            stagger: motionTokens.stagger.default,
          },
          "-=0.42"
        )
        .from(
          valueItems,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.softCard,
            duration: motionTokens.durations.sectionCard,
            stagger: motionTokens.stagger.default,
          },
          "-=0.54"
        )
        .from(
          missionItems,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.softCard,
            duration: motionTokens.durations.sectionCard,
            stagger: motionTokens.stagger.default,
          },
          "-=0.52"
        );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="tentang" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-brand-intro className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Brand Promise
            </p>
            <h2 className="mb-5">
              Nilai perusahaan kami diterjemahkan menjadi komitmen operasional yang bisa dirasakan mitra.
            </h2>
          </div>

          <p
            data-brand-intro
            className="max-w-2xl text-lg leading-relaxed text-dark/78"
          >
            MRS tidak menempatkan nilai hanya sebagai pernyataan korporat. Kami menjadikannya dasar dalam
            pengambilan keputusan, pengendalian mutu, dan cara membangun hubungan jangka panjang dengan klien.
          </p>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-brand-card className="rounded-[32px] bg-bg-beige p-8 md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Visi
            </p>
            <p className="max-w-3xl text-2xl leading-relaxed text-dark md:text-3xl">
              &ldquo;{brandPromise.vision}&rdquo;
            </p>
          </div>

          <div data-brand-card className="rounded-[32px] bg-white p-8 md:p-10 text-neutral-900">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Nilai Inti
            </p>
            <div className="space-y-4">
              {brandPromise.values.map((value) => {
                const IconComponent = iconMap[value.icon as keyof typeof iconMap];

                return (
                  <div
                    key={value.title}
                    data-brand-value
                    className="flex items-start gap-4 border-t border-neutral-200 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-primary">
                      {IconComponent ? <IconComponent size={20} /> : null}
                    </span>
                    <div>
                      <p className="font-semibold">{value.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-900/68">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {brandPromise.mission.map((mission, idx) => (
            <div
              key={idx}
              data-brand-mission
              className="flex gap-4 rounded-card border border-dark/8 bg-white p-7"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p className="leading-[1.8] text-dark/86">{mission}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
