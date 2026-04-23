"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(motionQueries.noPreference, () => {
      const introItems = Array.from(section.querySelectorAll<HTMLElement>("[data-location-intro]"));
      const leadCard = section.querySelector<HTMLElement>("[data-location-lead]");
      const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-location-card]"));

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
          leadCard,
          {
            autoAlpha: 0,
            y: motionTokens.offsets.block,
            duration: motionTokens.durations.sectionBlock,
          },
          "-=0.38"
        )
        .from(
          cards,
          {
            autoAlpha: 0,
            x: motionTokens.offsets.diagonalX,
            y: motionTokens.offsets.softCard,
            duration: motionTokens.durations.sectionCard,
            stagger: motionTokens.stagger.default,
          },
          "-=0.56"
        );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  useEffect(() => {
    const images = imageRefs.current.filter(Boolean) as HTMLImageElement[];
    if (!images.length) return;

    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia(motionQueries.reduce).matches;

    gsap.killTweensOf(images);

    if (reduceMotion) {
      images.forEach((image, index) => {
        gsap.set(image, {
          autoAlpha: index === activeIndex ? 1 : 0,
          scale: 1,
        });
      });
      return;
    }

    images.forEach((image, index) => {
      if (index !== activeIndex) {
        gsap.to(image, {
          autoAlpha: 0,
          scale: 1.015,
          duration: motionTokens.durations.crossfade,
          ease: motionTokens.ease.soft,
          overwrite: true,
        });
      }
    });

    gsap.set(images[activeIndex], {
      scale: 1.035,
    });

    gsap.to(images[activeIndex], {
      autoAlpha: 1,
      scale: 1,
      duration: motionTokens.durations.crossfade,
      ease: motionTokens.ease.soft,
      overwrite: true,
    });
  }, [activeIndex]);

  const activateLocation = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? currentIndex : index));
  };

  const handleHover = (index: number) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      activateLocation(index);
    }
  };

  return (
    <section ref={sectionRef} id="lokasi" className="section-padding bg-bg-beige">
      <div className="container-custom">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-location-intro className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-secondary/75">
              Locations
            </p>
            <h2 className="mb-5">
              Kehadiran kami dirancang untuk mendekatkan produksi, distribusi, dan dukungan komersial.
            </h2>
          </div>

          <p
            data-location-intro
            className="max-w-2xl text-lg leading-relaxed text-dark/78"
          >
            Jejak operasional ini menunjukkan bagaimana MRS membangun layanan yang lebih responsif, stabil,
            dan siap mendukung kebutuhan klien di berbagai wilayah Indonesia.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            data-location-lead
            className="overflow-hidden rounded-[32px] bg-dark text-white"
          >
            <div className="grid min-h-full gap-0 md:grid-cols-2">
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                    Operational Footprint
                  </p>
                  <h3 className="mb-5 text-3xl font-semibold leading-tight">
                    Tiga titik utama yang menopang ritme bisnis kami.
                  </h3>
                  <p className="max-w-md text-white/72 leading-relaxed">
                    Kantor komersial, fasilitas manufaktur, dan node distribusi ini bekerja sebagai satu sistem
                    untuk menjaga lead time dan kualitas layanan.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  {locations.map((location, index) => (
                    <div key={location.name} className="rounded-2xl bg-white/6 px-4 py-5">
                      <p className="text-2xl font-semibold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/48">
                        {location.type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[360px]">
                {locations.map((location, index) => (
                  <img
                    key={location.name}
                    ref={(node) => {
                      imageRefs.current[index] = node;
                    }}
                    src={location.image}
                    alt={location.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      transform: `scale(${index === activeIndex ? 1 : 1.015})`,
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/10" />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {locations.map((location, index) => (
              <article
                key={location.name}
                data-location-card
                role="button"
                tabIndex={0}
                aria-pressed={activeIndex === index}
                onMouseEnter={() => handleHover(index)}
                onFocus={() => activateLocation(index)}
                onClick={() => activateLocation(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    activateLocation(index);
                  }
                }}
                className={`rounded-[28px] bg-white p-7 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  activeIndex === index
                    ? "ring-1 ring-primary/25 shadow-[0_20px_50px_rgba(255,89,56,0.10)]"
                    : "hover:shadow-[0_14px_34px_rgba(31,30,30,0.08)]"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white transition-colors duration-300 ${
                      activeIndex === index ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark/45">
                      {location.type}
                    </p>
                    <h3 className="text-xl font-semibold text-dark">{location.name}</h3>
                  </div>
                </div>

                <p className="mb-4 text-dark/76 leading-relaxed">{location.address}</p>
                <p className="text-sm text-dark/58">{location.capacity}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
