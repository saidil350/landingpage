"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-client";

type CollageImage = {
  id: string;
  src: string;
  alt: string;
  objectPosition: string;
};

type LayoutPreset = "desktop" | "tablet" | "mobile";

type CardLayout = {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  visible: boolean;
  entryX: number;
  entryY: number;
  entryScale: number;
  entryRotation: number;
};

const COLLAGE_IMAGES: CollageImage[] = [
  {
    id: "energy-1",
    src: "/images/energy-1.jpg",
    alt: "Wind turbines and solar fields glowing in soft sunrise light",
    objectPosition: "64% center",
  },
  {
    id: "energy-2",
    src: "/images/energy-2.jpg",
    alt: "Expansive solar array with a clean access road and coastal hills",
    objectPosition: "56% center",
  },
  {
    id: "energy-3",
    src: "/images/energy-3.jpg",
    alt: "Aerial renewable energy campus stretching across a wide horizon",
    objectPosition: "42% center",
  },
  {
    id: "energy-4",
    src: "/images/energy-4.jpg",
    alt: "Close-up hillside solar panels framed by two tall wind turbines",
    objectPosition: "48% center",
  },
  {
    id: "energy-5",
    src: "/images/energy-5.jpg",
    alt: "Desert wind farm rising behind reflective solar panel rows",
    objectPosition: "62% center",
  },
];

const INTRO_IMAGE_IDS = ["energy-1", "energy-2", "energy-3"];
const SUPPORT_CARD_IDS = ["energy-4", "energy-1", "energy-5", "energy-2"];

const getCardLayouts = (preset: LayoutPreset): CardLayout[] => {
  if (preset === "tablet") {
    return [
      {
        x: -84,
        y: -70,
        scale: 1,
        rotation: -3,
        visible: true,
        entryX: -132,
        entryY: -108,
        entryScale: 1.15,
        entryRotation: -5,
      },
      {
        x: -110,
        y: -2,
        scale: 0.76,
        rotation: -1.5,
        visible: true,
        entryX: -172,
        entryY: 54,
        entryScale: 0.96,
        entryRotation: -4,
      },
      {
        x: 116,
        y: -28,
        scale: 0.8,
        rotation: 2,
        visible: true,
        entryX: 182,
        entryY: -42,
        entryScale: 1.08,
        entryRotation: 6,
      },
      {
        x: 84,
        y: 14,
        scale: 0.84,
        rotation: 2.5,
        visible: true,
        entryX: 144,
        entryY: 108,
        entryScale: 1.07,
        entryRotation: 6,
      },
    ];
  }

  if (preset === "mobile") {
    return [
      {
        x: -42,
        y: -74,
        scale: 0.86,
        rotation: -2,
        visible: true,
        entryX: -72,
        entryY: -112,
        entryScale: 1.08,
        entryRotation: -4,
      },
      {
        x: -100,
        y: 24,
        scale: 0.78,
        rotation: -1,
        visible: false,
        entryX: -132,
        entryY: 46,
        entryScale: 0.96,
        entryRotation: -2,
      },
      {
        x: 108,
        y: -4,
        scale: 0.82,
        rotation: 2,
        visible: false,
        entryX: 144,
        entryY: -36,
        entryScale: 1.02,
        entryRotation: 4,
      },
      {
        x: 52,
        y: 18,
        scale: 0.8,
        rotation: 2,
        visible: true,
        entryX: 96,
        entryY: 96,
        entryScale: 1.05,
        entryRotation: 4,
      },
    ];
  }

  return [
    {
      x: -110,
      y: -92,
      scale: 1.03,
      rotation: -4,
      visible: true,
      entryX: -168,
      entryY: -126,
      entryScale: 1.18,
      entryRotation: -6,
    },
    {
      x: -150,
      y: -12,
      scale: 0.78,
      rotation: -2,
      visible: true,
      entryX: -230,
      entryY: 56,
      entryScale: 0.98,
      entryRotation: -5,
    },
    {
      x: 145,
      y: -30,
      scale: 0.82,
      rotation: 2,
      visible: true,
      entryX: 230,
      entryY: -42,
      entryScale: 1.08,
      entryRotation: 6,
    },
    {
      x: 105,
      y: 12,
      scale: 0.86,
      rotation: 3,
      visible: true,
      entryX: 168,
      entryY: 118,
      entryScale: 1.08,
      entryRotation: 6,
    },
  ];
};

const introImages = INTRO_IMAGE_IDS.map((id) => {
  const image = COLLAGE_IMAGES.find((item) => item.id === id);

  if (!image) {
    throw new Error(`Missing collage image for intro layer: ${id}`);
  }

  return image;
});

const supportCards = SUPPORT_CARD_IDS.map((id) => {
  const image = COLLAGE_IMAGES.find((item) => item.id === id);

  if (!image) {
    throw new Error(`Missing collage image for support card: ${id}`);
  }

  return image;
});

const supportCardClassNames = [
  "w-[clamp(210px,24vw,320px)] aspect-[4/5] z-10 motion-reduce:-translate-x-[42px] motion-reduce:-translate-y-[56px] motion-reduce:scale-[0.9] motion-reduce:-rotate-[2deg] md:motion-reduce:-translate-x-[84px] md:motion-reduce:-translate-y-[48px] md:motion-reduce:scale-[1.03] md:motion-reduce:-rotate-[3deg] lg:motion-reduce:-translate-x-[110px] lg:motion-reduce:-translate-y-[60px] lg:motion-reduce:scale-[1.08] lg:motion-reduce:-rotate-[4deg]",
  "hidden md:block md:w-[clamp(150px,18vw,220px)] md:aspect-[4/5] md:z-20 md:motion-reduce:-translate-x-[110px] md:motion-reduce:translate-y-[20px] md:motion-reduce:scale-[0.78] md:motion-reduce:-rotate-[1.5deg] lg:motion-reduce:-translate-x-[150px] lg:motion-reduce:translate-y-[25px] lg:motion-reduce:scale-[0.82] lg:motion-reduce:-rotate-[2deg]",
  "hidden md:block md:w-[clamp(150px,16vw,210px)] md:aspect-[3/5] md:z-20 md:motion-reduce:translate-x-[116px] md:motion-reduce:-translate-y-[2px] md:motion-reduce:scale-[0.82] md:motion-reduce:rotate-[2deg] lg:motion-reduce:translate-x-[145px] lg:motion-reduce:-translate-y-[5px] lg:motion-reduce:scale-[0.86] lg:motion-reduce:rotate-[2deg]",
  "w-[clamp(176px,20vw,256px)] aspect-[4/5] z-30 motion-reduce:translate-x-[52px] motion-reduce:translate-y-[48px] motion-reduce:scale-[0.84] motion-reduce:rotate-[2deg] md:motion-reduce:translate-x-[84px] md:motion-reduce:translate-y-[46px] md:motion-reduce:scale-[0.88] md:motion-reduce:rotate-[2.5deg] lg:motion-reduce:translate-x-[105px] lg:motion-reduce:translate-y-[55px] lg:motion-reduce:scale-[0.92] lg:motion-reduce:rotate-[3deg]",
];

function getHeroScale(card: HTMLDivElement, stage: HTMLDivElement) {
  const width = card.offsetWidth || 320;
  const height = card.offsetHeight || width * 1.25;
  const viewportWidth = stage.offsetWidth || window.innerWidth;
  const viewportHeight = stage.offsetHeight || window.innerHeight;

  return Math.max(viewportWidth / width, viewportHeight / height) * 1.08;
}

export default function ScrollImageCollage() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const collageWrapRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const heroLayerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const supportCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const stage = stageRef.current;
    const collageWrap = collageWrapRef.current;
    const mainCard = mainCardRef.current;

    if (!section || !sticky || !stage || !collageWrap || !mainCard) {
      return;
    }

    const heroLayers = heroLayerRefs.current.filter(Boolean) as HTMLDivElement[];
    const supportCardElements = supportCardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (heroLayers.length !== introImages.length || supportCardElements.length !== supportCards.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(collageWrap, { clearProps: "transform,opacity" });
        gsap.set(mainCard, { clearProps: "transform" });
        gsap.set(heroLayers, { clearProps: "transform", opacity: 0 });
        gsap.set(heroLayers[2], { opacity: 1 });
        return;
      }

      const createSequence = (preset: LayoutPreset) => {
        const layouts = getCardLayouts(preset);

        const applyInitialState = () => {
          const heroScale = getHeroScale(mainCard, stage);

          gsap.set(collageWrap, {
            yPercent: 0,
            autoAlpha: 1,
            force3D: true,
          });

          gsap.set(mainCard, {
            scale: heroScale,
            transformOrigin: "50% 50%",
            force3D: true,
          });

          gsap.set(heroLayers, {
            transformOrigin: "50% 50%",
            force3D: true,
          });

          gsap.set(heroLayers[0], {
            opacity: 1,
            scale: 1.12,
            yPercent: -4,
          });

          gsap.set(heroLayers[1], {
            opacity: 0,
            scale: 1.17,
            yPercent: 6,
          });

          gsap.set(heroLayers[2], {
            opacity: 0,
            scale: 1.1,
            yPercent: 5,
          });

          supportCardRefs.current.forEach((card, index) => {
            const layout = layouts[index];

            if (!card || !layout) {
              return;
            }

            if (!layout.visible) {
              gsap.set(card, {
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.92,
                rotation: 0,
                transformOrigin: "50% 50%",
                force3D: true,
              });
              return;
            }

            gsap.set(card, {
              opacity: 0,
              x: layout.entryX,
              y: layout.entryY,
              scale: layout.entryScale,
              rotation: layout.entryRotation,
              transformOrigin: "50% 50%",
              force3D: true,
            });
          });

        };

        applyInitialState();

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3200",
            scrub: true,
            pin: sticky,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefreshInit: applyInitialState,
          },
        });

        // Intro sequence: premium crossfades with gentle zoom and depth drift.
        timeline
          .addLabel("introA")
          .to(
            heroLayers[0],
            {
              scale: 1.02,
              yPercent: 3,
              duration: 0.9,
            },
            "introA"
          )
          .to(
            heroLayers[0],
            {
              opacity: 0,
              duration: 0.72,
            },
            "introA+=0.42"
          )
          .to(
            heroLayers[1],
            {
              opacity: 1,
              scale: 1.02,
              yPercent: 0,
              duration: 0.98,
            },
            "introA+=0.08"
          )
          .addLabel("introB", ">-0.08")
          .to(
            heroLayers[1],
            {
              scale: 0.99,
              yPercent: -4,
              duration: 0.86,
            },
            "introB"
          )
          .to(
            heroLayers[1],
            {
              opacity: 0,
              duration: 0.72,
            },
            "introB+=0.36"
          )
          .to(
            heroLayers[2],
            {
              opacity: 1,
              scale: 1,
              yPercent: 0,
              duration: 0.98,
            },
            "introB+=0.04"
          );

        // Shrink the oversized hero into the final rounded center card.
        timeline
          .addLabel("shrink", ">-0.04")
          .to(
            mainCard,
            {
              scale: 1,
              duration: 1.32,
              ease: "power2.inOut",
            },
            "shrink"
          )
          .to(
            heroLayers[2],
            {
              scale: 1.02,
              yPercent: -2,
              duration: 1.32,
              ease: "power2.inOut",
            },
            "shrink"
          );

        // Assemble the surrounding collage with staggered layered cards.
        timeline.addLabel("collage", "shrink+=0.74");

        let visibleIndex = 0;

        layouts.forEach((layout, index) => {
          const card = supportCardRefs.current[index];

          if (!layout.visible || !card) {
            return;
          }

          timeline.to(
            card,
            {
              opacity: 1,
              x: layout.x,
              y: layout.y,
              scale: layout.scale,
              rotation: layout.rotation,
              duration: 0.84,
              ease: "power3.out",
            },
            `collage+=${visibleIndex * 0.14}`
          );

          visibleIndex += 1;
        });

        timeline
          .addLabel("exit", "collage+=0.8")
          .to(
            collageWrap,
            {
              y: () => -Math.min(stage.offsetHeight * 0.16, 136),
              duration: 0.34,
              ease: "power2.inOut",
            },
            "exit"
          );

        return () => {
          timeline.kill();
        };
      };

      mm.add("(min-width: 1024px)", () => createSequence("desktop"));
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => createSequence("tablet"));
      mm.add("(max-width: 767px)", () => createSequence("mobile"));
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-clip bg-[#f3f6f1]"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden motion-reduce:relative motion-reduce:h-auto motion-reduce:overflow-visible"
      >
        <div ref={stageRef} className="relative h-full w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,86,73,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,67,56,0.05),transparent_36%)]" />

          <div
            ref={collageWrapRef}
            className="absolute inset-x-0 top-[37%] -translate-y-1/2 px-4 sm:px-6 motion-reduce:relative motion-reduce:top-auto motion-reduce:translate-y-0 motion-reduce:py-20 md:top-[35%] lg:top-[34%]"
          >
            <div className="mx-auto max-w-6xl">
              <div className="relative mx-auto h-[min(68vw,24.5rem)] w-full max-w-2xl sm:h-[min(60vw,25.5rem)] lg:h-[min(37vw,26.5rem)]">
                {supportCards.map((image, index) => (
                  <div
                    key={`${image.id}-${index}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      ref={(element) => {
                        supportCardRefs.current[index] = element;
                      }}
                      className={`relative overflow-hidden rounded-card bg-[#e7ece9] ring-1 ring-black/4 shadow-[0_26px_80px_-38px_rgba(15,67,56,0.35)] motion-safe:opacity-0 motion-reduce:opacity-100 ${supportCardClassNames[index]}`}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 767px) 48vw, (max-width: 1023px) 26vw, 22vw"
                        className="object-cover"
                        style={{ objectPosition: image.objectPosition }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,20,18,0.14)_0%,rgba(8,20,18,0.02)_42%,rgba(255,255,255,0.08)_100%)]" />
                    </div>
                  </div>
                ))}

                <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
                  <div
                    ref={mainCardRef}
                    className="relative aspect-4/5 w-[clamp(260px,28vw,380px)] overflow-hidden rounded-card bg-[#ecf1ee] ring-1 ring-black/4 shadow-[0_34px_90px_-42px_rgba(15,67,56,0.36)] motion-safe:scale-[3.3] motion-reduce:scale-100"
                    style={{ willChange: "transform, opacity" }}
                  >
                    {introImages.map((image, index) => {
                      const opacityClassName =
                        index === 0
                          ? "opacity-100 motion-reduce:opacity-0"
                          : index === 2
                            ? "opacity-0 motion-reduce:opacity-100"
                            : "opacity-0";

                      return (
                        <div
                          key={image.id}
                          ref={(element) => {
                            heroLayerRefs.current[index] = element;
                          }}
                          className={`absolute inset-0 ${opacityClassName}`}
                          style={{ willChange: "transform, opacity" }}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 767px) 86vw, (max-width: 1023px) 46vw, 32vw"
                            className="object-cover"
                            style={{ objectPosition: image.objectPosition }}
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,17,0.42)_0%,rgba(7,18,17,0.16)_24%,rgba(255,255,255,0.10)_100%)]" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
