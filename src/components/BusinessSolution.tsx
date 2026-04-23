"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import {
  Utensils,
  ShoppingBag,
  Heart,
  Factory,
  Leaf,
  Droplet,
  Baby,
  MoreHorizontal,
} from "lucide-react";
import { industries } from "@/data/industries";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

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
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(motionQueries.noPreference, () => {
      const introItems = Array.from(section.querySelectorAll<HTMLElement>("[data-solution-intro]"));
      const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-solution-card]"));
      const ctaLine = section.querySelector<HTMLElement>("[data-solution-cta-line]");
      const ctaText = section.querySelector<HTMLElement>("[data-solution-cta-text]");
      const ctaButton = section.querySelector<HTMLElement>("[data-solution-cta-button]");

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

      if (ctaLine && ctaText && ctaButton) {
        tl.from(
          ctaLine,
          {
            scaleX: 0,
            transformOrigin: "center center",
            duration: motionTokens.durations.pills,
            ease: motionTokens.ease.soft,
          },
          "-=0.2"
        )
          .from(
            ctaText,
            {
              autoAlpha: 0,
              y: motionTokens.offsets.softCard,
              duration: motionTokens.durations.crossfade,
              ease: motionTokens.ease.enter,
            },
            "-=0.58"
          )
          .from(
            ctaButton,
            {
              autoAlpha: 0,
              y: motionTokens.offsets.pills,
              duration: motionTokens.durations.pills,
              ease: motionTokens.ease.enter,
            },
            "-=0.72"
          );
      }
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 data-solution-intro className="mb-6">
            Business solutions untuk kebutuhan industri yang berbeda, dengan standar eksekusi yang sama.
          </h2>
          <p
            data-solution-intro
            className="mx-auto max-w-3xl text-lg leading-relaxed text-dark/90"
          >
            Kami membantu menerjemahkan kebutuhan fungsi, distribusi, dan kepatuhan industri ke dalam solusi
            kemasan yang lebih presisi dan siap dieksekusi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, idx) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap];

            return (
              <div
                key={idx}
                data-solution-card
                className="group relative min-h-[340px] cursor-pointer overflow-hidden rounded-[28px] bg-white transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    filter: "brightness(0.68)",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/25" />

                <div className="relative flex h-full flex-col p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                    {IconComponent ? <IconComponent size={28} className="text-white" /> : null}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">{industry.name}</h3>
                  <p className="mb-6 grow text-sm leading-relaxed text-white/82">{industry.description}</p>

                  <div className="border-t border-white/20 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/90">
                      Selected applications
                    </p>
                    <ul className="space-y-1">
                      {industry.products.map((product, productIndex) => (
                        <li
                          key={productIndex}
                          className="flex items-center gap-2 text-xs text-white/90"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div
            data-solution-cta-line
            className="mx-auto mb-6 h-px w-24 bg-dark/15"
          />
          <p data-solution-cta-text className="mb-6 text-dark/90">
            Butuh solusi yang lebih spesifik untuk proses, distribusi, atau kategori produk Anda?
          </p>
          <Link
            href="/kontak"
            data-solution-cta-button
            className="btn-primary card-hover-lift"
          >
            Konsultasikan Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolution;
