"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryAutoplay = () => {
      void video.play().catch(() => {
        // Some browsers block autoplay until explicit user interaction.
      });
    };

    if (video.readyState >= 2) {
      tryAutoplay();
      return;
    }

    video.addEventListener("canplay", tryAutoplay, { once: true });
    return () => {
      video.removeEventListener("canplay", tryAutoplay);
    };
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(motionQueries.reduce, () => {
      const heroButtons = Array.from(
        buttonsRef.current?.querySelectorAll<HTMLElement>("[data-hero-cta]") ?? []
      );

      gsap.set(containerRef.current, {
        width: "100%",
        height: "100%",
        borderRadius: 0,
        scale: 1,
      });
      gsap.set(videoRef.current, { scale: 1 });
      gsap.set(overlayRef.current, { opacity: 0.44 });
      gsap.set(contentRef.current, { autoAlpha: 1 });
      gsap.set([headingRef.current, buttonsRef.current], {
        autoAlpha: 1,
        y: 0,
        clearProps: "transform",
      });
      gsap.set(heroButtons, {
        autoAlpha: 1,
        y: 0,
        clearProps: "transform",
      });
    });

    mm.add(motionQueries.noPreference, () => {
      const isMobile = window.matchMedia(motionQueries.mobile).matches;
      const heroButtons = Array.from(
        buttonsRef.current?.querySelectorAll<HTMLElement>("[data-hero-cta]") ?? []
      );
      const expandDuration = isMobile
        ? motionTokens.durations.heroExpandMobile
        : motionTokens.durations.heroExpandDesktop;

      gsap.set(containerRef.current, {
        width: isMobile ? "88%" : "76%",
        height: isMobile ? "60%" : "64%",
        borderRadius: isMobile ? 28 : 36,
        scale: isMobile ? 0.94 : 0.88,
      });
      gsap.set(videoRef.current, { scale: isMobile ? 1.04 : 1.08 });
      gsap.set(overlayRef.current, { opacity: isMobile ? 0.62 : 0.68 });
      gsap.set(contentRef.current, { autoAlpha: 0 });
      gsap.set(headingRef.current, {
        autoAlpha: 0,
        y: motionTokens.offsets.heroTitle,
      });
      gsap.set(heroButtons, {
        autoAlpha: 0,
        y: motionTokens.offsets.heroCta,
      });

      const tl = gsap.timeline({
        delay: 0.2,
        defaults: { ease: motionTokens.ease.enter },
      });

      tl.to(containerRef.current, {
        width: "100%",
        height: "100%",
        borderRadius: 0,
        scale: 1,
        duration: expandDuration,
        ease: motionTokens.ease.morph,
      })
        .to(
          videoRef.current,
          {
            scale: 1,
            duration: expandDuration,
            ease: motionTokens.ease.morph,
          },
          "<"
        )
        .to(
          overlayRef.current,
          {
            opacity: 0.44,
            duration: expandDuration,
            ease: motionTokens.ease.morph,
          },
          "<"
        )
        .to(
          contentRef.current,
          {
            autoAlpha: 1,
            duration: motionTokens.durations.crossfade,
            ease: motionTokens.ease.soft,
          },
          "<+=0.24"
        )
        .to(
          headingRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: motionTokens.durations.sectionBlock,
            ease: motionTokens.ease.enter,
          },
          ">+=0.18"
        )
        .to(
          heroButtons,
          {
            autoAlpha: 1,
            y: 0,
            duration: motionTokens.durations.pills,
            stagger: motionTokens.stagger.default,
            ease: motionTokens.ease.enter,
          },
          "<+=0.18"
        );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero-trigger"
      className="relative h-svh min-h-screen overflow-hidden"
    >
      <div className="relative flex h-svh min-h-screen items-center justify-center bg-bg-light">
        <div
          ref={containerRef}
          className="video-container absolute inset-0 m-auto overflow-hidden will-change-[transform,border-radius,width,height]"
          style={{
            width: "78%",
            height: "66%",
            borderRadius: "36px",
            transform: "scale(0.9)",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero_background.png"
            className="h-full w-full object-cover"
          >
            <source src="/plastic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/45 pointer-events-none"
          />
        </div>

        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 will-change-opacity"
        >
          <div className="mx-auto w-full max-w-[1440px] px-4 pt-20 text-center sm:px-6 lg:px-8">
            <div
              ref={headingRef}
              className="mx-auto mb-8 flex flex-col items-center font-heading text-white"
            >
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
            </div>

            <div
              ref={buttonsRef}
              className="pointer-events-auto flex flex-wrap justify-center gap-4"
            >
              <a
                href="#keahlian"
                data-hero-cta
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[22px] bg-white px-7 py-3 text-base font-medium text-dark transition-all duration-300 hover:bg-primary hover:text-white active:scale-95"
              >
                Jelajahi Kapabilitas
                <ArrowRight size={20} />
              </a>
              <a
                href="#company-profile"
                data-hero-cta
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[22px] border border-white/80 bg-white/5 px-7 py-3 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-dark active:scale-95"
              >
                <PlayCircle size={20} />
                Profil Perusahaan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
