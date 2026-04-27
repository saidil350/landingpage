"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-client";
import { ArrowRight, PlayCircle } from "lucide-react";

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
    id: "kolase-1",
    src: "/images/kolase-1.jpg",
    alt: "Wind turbines and solar fields glowing in soft sunrise light",
    objectPosition: "64% center",
  },
  {
    id: "kolase-2",
    src: "/images/kolase-2.jpg",
    alt: "Expansive solar array with a clean access road and coastal hills",
    objectPosition: "56% center",
  },
  {
    id: "kolase-4",
    src: "/images/kolase-4.jpg",
    alt: "Close-up hillside solar panels framed by two tall wind turbines",
    objectPosition: "48% center",
  },
  {
    id: "kolase-5",
    src: "/images/kolase-5.jpg",
    alt: "Desert wind farm rising behind reflective solar panel rows",
    objectPosition: "62% center",
  },
];

const SUPPORT_CARD_IDS = ["kolase-4", "kolase-1", "kolase-5", "kolase-2"];

const getCardLayouts = (preset: LayoutPreset): CardLayout[] => {
  if (preset === "tablet") {
    return [
      {
        x: -5,
        y: -90,
        scale: 1.05,
        rotation: -2,
        visible: true,
        entryX: -10,
        entryY: -130,
        entryScale: 1.15,
        entryRotation: -4,
      },
      {
        x: -120,
        y: -10,
        scale: 0.85,
        rotation: -5,
        visible: true,
        entryX: -160,
        entryY: -30,
        entryScale: 0.95,
        entryRotation: -7,
      },
      {
        x: 110,
        y: 5,
        scale: 0.9,
        rotation: 4,
        visible: true,
        entryX: 150,
        entryY: -10,
        entryScale: 1.0,
        entryRotation: 6,
      },
      {
        x: -40,
        y: 80,
        scale: 0.9,
        rotation: 3,
        visible: true,
        entryX: -60,
        entryY: 120,
        entryScale: 1.0,
        entryRotation: 5,
      },
    ];
  }

  if (preset === "mobile") {
    return [
      {
        x: -5,
        y: -65,
        scale: 0.95,
        rotation: -2,
        visible: true,
        entryX: -10,
        entryY: -95,
        entryScale: 1.05,
        entryRotation: -3,
      },
      {
        x: -80,
        y: -5,
        scale: 0.8,
        rotation: -4,
        visible: true,
        entryX: -110,
        entryY: -15,
        entryScale: 0.9,
        entryRotation: -5,
      },
      {
        x: 75,
        y: 5,
        scale: 0.8,
        rotation: 3,
        visible: true,
        entryX: 100,
        entryY: -5,
        entryScale: 0.9,
        entryRotation: 4,
      },
      {
        x: -25,
        y: 55,
        scale: 0.85,
        rotation: 2,
        visible: true,
        entryX: -35,
        entryY: 80,
        entryScale: 0.95,
        entryRotation: 4,
      },
    ];
  }

  return [
    {
      x: -10,
      y: -130,
      scale: 1.15,
      rotation: -2,
      visible: true,
      entryX: -20,
      entryY: -190,
      entryScale: 1.25,
      entryRotation: -4,
    },
    {
      x: -160,
      y: -20,
      scale: 0.9,
      rotation: -6,
      visible: true,
      entryX: -220,
      entryY: -50,
      entryScale: 1.0,
      entryRotation: -8,
    },
    {
      x: 160,
      y: 10,
      scale: 1.0,
      rotation: 4,
      visible: true,
      entryX: 230,
      entryY: -10,
      entryScale: 1.1,
      entryRotation: 6,
    },
    {
      x: -60,
      y: 110,
      scale: 0.95,
      rotation: 3,
      visible: true,
      entryX: -90,
      entryY: 170,
      entryScale: 1.05,
      entryRotation: 5,
    },
  ];
};



const supportCards = SUPPORT_CARD_IDS.map((id) => {
  const image = COLLAGE_IMAGES.find((item) => item.id === id);

  if (!image) {
    throw new Error(`Missing collage image for support card: ${id}`);
  }

  return image;
});

const supportCardClassNames = [
  "w-[clamp(180px,26vw,340px)] aspect-[4/3] z-10 motion-reduce:-translate-y-[65px] motion-reduce:scale-[0.9] md:motion-reduce:-translate-y-[90px] md:motion-reduce:scale-[1] lg:motion-reduce:-translate-y-[130px] lg:motion-reduce:scale-[1.15]",
  "w-[clamp(140px,20vw,260px)] aspect-[3/4] z-20 motion-reduce:-translate-x-[80px] md:motion-reduce:-translate-x-[120px] lg:motion-reduce:-translate-x-[160px]",
  "w-[clamp(150px,22vw,280px)] aspect-[3/4] z-20 motion-reduce:translate-x-[75px] md:motion-reduce:translate-x-[110px] lg:motion-reduce:translate-x-[160px]",
  "w-[clamp(160px,20vw,240px)] aspect-[4/5] z-50 motion-reduce:-translate-x-[20px] motion-reduce:translate-y-[55px] md:motion-reduce:-translate-x-[35px] md:motion-reduce:translate-y-[80px] lg:motion-reduce:-translate-x-[50px] lg:motion-reduce:translate-y-[110px]",
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
  const parallaxMainRef = useRef<HTMLDivElement>(null);
  const parallaxCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const heroLayerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const supportCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

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

    if (heroLayers.length < 1 || supportCardElements.length !== supportCards.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(collageWrap, { clearProps: "transform,opacity" });
        gsap.set(mainCard, { clearProps: "transform" });
        gsap.set(heroLayers, { clearProps: "transform,opacity" });
        if (heroTextRef.current) gsap.set(heroTextRef.current, { clearProps: "transform,opacity" });
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
            force3D: false,
          });

          gsap.set(heroLayers, {
            transformOrigin: "50% 50%",
            force3D: false,
          });

          gsap.set(heroLayers[0], {
            opacity: 1,
            scale: 1.08,
            yPercent: 0,
          });

          if (heroTextRef.current) {
            gsap.set(heroTextRef.current, {
              opacity: 1,
              y: 0,
            });
          }

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

        // Keep the main visual stable and focused before revealing the collage.
        timeline
          .addLabel("intro")
          .to(
            heroLayers[0],
            {
              scale: 1.01,
              yPercent: -1,
              duration: 1.12,
            },
            "intro"
          );

        if (heroTextRef.current) {
          timeline.to(
            heroTextRef.current,
            {
              opacity: 0,
              y: -40,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "intro+=0.2"
          );
        }

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
            heroLayers[0],
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

      const isHoverable = window.matchMedia("(hover: hover)").matches;
      let idleAnimation: gsap.core.Tween | null = null;

      const handlePointerMove = (e: PointerEvent) => {
        if (prefersReducedMotion) return;
        
        // Kalkulasi kursor (-1 hingga 1) berdasarkan layar
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        
        // Kartu Utama (kedalaman menengah)
        if (parallaxMainRef.current) {
          gsap.to(parallaxMainRef.current, {
            x: x * 20,
            y: y * 20,
            rotationX: -y * 6,
            rotationY: x * 6,
            scale: 1.02,
            ease: "power3.out",
            duration: 0.8,
            transformPerspective: 1000,
          });
        }

        // Kartu Pendukung
        parallaxCardRefs.current.forEach((card, index) => {
          if (!card) return;
          
          // Semua bergerak searah, tetapi kedalaman (depth) berbeda.
          // Kartu dengan index besar (z-index depan) bergerak lebih banyak.
          const depth = 10 + (index * 8); 
          
          gsap.to(card, {
            x: x * depth,
            y: y * depth,
            rotationX: -y * (3 + index),
            rotationY: x * (3 + index),
            ease: "power3.out",
            duration: 0.8 + (index * 0.05),
            transformPerspective: 1000,
          });
        });
      };

      const handlePointerLeave = () => {
        if (prefersReducedMotion) return;
        
        // Kembalikan semua ke posisi awal secara lembut
        const allCards = [parallaxMainRef.current, ...parallaxCardRefs.current].filter(Boolean) as HTMLElement[];
        
        gsap.to(allCards, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "power3.out",
          duration: 1.2,
        });
      };

      if (isHoverable) {
        section.addEventListener("pointermove", handlePointerMove);
        section.addEventListener("pointerleave", handlePointerLeave);
      } else {
        // Efek idle floating untuk perangkat touch (mobile)
        const allCards = [parallaxMainRef.current, ...parallaxCardRefs.current].filter(Boolean) as HTMLElement[];
        idleAnimation = gsap.to(allCards, {
          y: "-=10",
          rotationZ: "0.5",
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: {
            each: 0.2,
            from: "random"
          }
        });
      }

      return () => {
        if (isHoverable) {
          section.removeEventListener("pointermove", handlePointerMove);
          section.removeEventListener("pointerleave", handlePointerLeave);
        }
        if (idleAnimation) {
          idleAnimation.kill();
        }
      };
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
                    <div ref={(el) => { parallaxCardRefs.current[index] = el; }}>
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
                  </div>
                ))}

                <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
                  <div ref={parallaxMainRef}>
                    <div
                      ref={mainCardRef}
                    className="relative aspect-square w-[clamp(260px,28vw,380px)] overflow-hidden rounded-card bg-[#ecf1ee] ring-1 ring-black/4 shadow-[0_34px_90px_-42px_rgba(15,67,56,0.36)] motion-safe:scale-[3.3] motion-reduce:scale-100"
                  >
                    <div
                      ref={(element) => {
                        heroLayerRefs.current[0] = element;
                      }}
                      className="absolute inset-0 opacity-100"
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                        style={{ width: '100%', maxWidth: '1280px', maxHeight: '720px' }}
                      >
                        <source src={'/plastic.mp4'} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,17,0.42)_0%,rgba(7,18,17,0.16)_24%,rgba(255,255,255,0.10)_100%)]" />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Hero Text Overlay */}
          <div
            ref={heroTextRef}
            className="absolute inset-0 z-50 flex items-center justify-center pt-20"
          >
            <div className="mx-auto w-full max-w-[1440px] px-4 text-center sm:px-6 lg:px-8">
              <h1 className="mx-auto mb-8 flex flex-col items-center font-heading text-white">
                <span className="hidden whitespace-nowrap text-[86px] font-light leading-[0.94] tracking-normal md:block lg:text-[108px] xl:text-[124px]">
                  MRS Solusi Kemasan
                </span>
                <span className="block text-[44px] font-light leading-[0.98] tracking-normal sm:text-[58px] md:hidden">
                  MRS Solusi
                  <br />
                  Kemasan
                </span>
                <span className="mt-2 hidden items-center justify-center gap-x-5 whitespace-nowrap text-[48px] font-light leading-[0.96] tracking-normal md:flex lg:text-[72px] xl:text-[84px]">
                  <span>yang Amanah</span>
                  <span>Bersama Industri</span>
                </span>
                <span className="mt-3 flex flex-col items-center text-[34px] font-light leading-[1.04] tracking-normal sm:text-[46px] md:hidden">
                  <span className="flex items-center justify-center gap-3 whitespace-nowrap">
                    yang Amanah
                  </span>
                  <span className="whitespace-nowrap">Bersama Industri</span>
                </span>
              </h1>

              <div
                ref={buttonsRef}
                className="pointer-events-auto flex flex-wrap justify-center gap-4"
              >
                <a
                  href="#keahlian"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[22px] bg-white px-7 py-3 text-base font-medium text-dark transition-all duration-300 hover:bg-primary hover:text-white active:scale-95"
                >
                  Jelajahi Kapabilitas
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#company-profile"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[22px] border border-white/80 bg-white/5 px-7 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-dark active:scale-95"
                >
                  <PlayCircle size={20} />
                  Profil Perusahaan
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
