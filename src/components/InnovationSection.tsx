"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { FlaskConical, Leaf, ScanSearch } from "lucide-react";
import { innovations } from "@/data/innovations";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

const iconMap = {
  FlaskConical,
  ScanSearch,
  Leaf,
};

export default function InnovationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(motionQueries.noPreference, () => {
      const introItems = Array.from(section.querySelectorAll<HTMLElement>("[data-innovation-intro]"));
      const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-innovation-card]"));
      const pills = Array.from(section.querySelectorAll<HTMLElement>("[data-innovation-pill]"));

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
          cards,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.card,
            duration: motionTokens.durations.sectionCard,
            stagger: motionTokens.stagger.default,
          },
          "-=0.42"
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
        );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="inovasi" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-innovation-intro className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Innovation
            </p>
            <h2 className="mb-5">
              Inovasi kami bertumpu pada kualitas proses, bukan sekadar jargon teknologi.
            </h2>
          </div>

          <p
            data-innovation-intro
            className="max-w-2xl text-lg leading-relaxed text-dark/78"
          >
            Dari pengembangan material hingga disiplin quality control, kami terus meningkatkan sistem kerja
            agar solusi kemasan lebih relevan dengan kebutuhan industri, lebih stabil untuk produksi, dan
            lebih bertanggung jawab untuk jangka panjang.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {innovations.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <div
                key={item.title}
                data-innovation-card
                className="flex h-full flex-col justify-between rounded-card bg-bg-beige p-8"
              >
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white">
                    {Icon ? <Icon size={24} /> : null}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-dark">{item.title}</h3>
                  <p className="mb-8 text-dark/78 leading-relaxed">{item.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.stats.map((stat) => (
                    <span
                      key={stat}
                      data-innovation-pill
                      className="rounded-full border border-dark/10 bg-white px-4 py-2 text-sm text-dark/70"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
