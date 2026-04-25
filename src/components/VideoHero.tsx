"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const wordSliderRef = useRef<HTMLDivElement>(null);
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

    // Word Slider Animation
    if (wordSliderRef.current) {
      const words = wordSliderRef.current.children;
      const totalItems = words.length;

      const wordTl = gsap.timeline({ repeat: -1 });

      for (let i = 0; i < totalItems - 1; i++) {
        wordTl.to(wordSliderRef.current, {
          yPercent: -(i + 1) * (100 / totalItems),
          duration: 0.8,
          ease: "power3.inOut",
          delay: 2,
        });
      }

      // Instant reset for seamless loop
      wordTl.set(wordSliderRef.current, { yPercent: 0 });
    }

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
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 will-change-opacity"
        >
          <div className="container-custom px-4 pt-20 text-center">
            <div
              ref={headingRef}
              className="mx-auto mb-10 flex flex-col items-center text-white drop-shadow-lg tracking-tight"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
            >
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 tracking-wide">MRS</span>
              <span className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 text-white/95">Solusi Kemasan Plastik</span>
              
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-3xl md:text-5xl lg:text-6xl mb-6 font-light">
                <span>yang</span>
                <div className="relative h-[1.3em] overflow-hidden min-w-[200px] md:min-w-[340px] rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-inner">
                  <div ref={wordSliderRef} className="absolute top-0 left-0 w-full flex flex-col">
                    <span className="h-[1.3em] px-6 flex items-center justify-center text-white font-semibold whitespace-nowrap">Amanah</span>
                    <span className="h-[1.3em] px-6 flex items-center justify-center text-white font-semibold whitespace-nowrap">Andal</span>
                    <span className="h-[1.3em] px-6 flex items-center justify-center text-white font-semibold whitespace-nowrap">Siap Bertumbuh</span>
                    {/* Clone for loop */}
                    <span className="h-[1.3em] px-6 flex items-center justify-center text-white font-semibold whitespace-nowrap">Amanah</span>
                  </div>
                </div>
              </div>
              
              <span className="text-2xl md:text-4xl lg:text-5xl font-light mt-2 text-white/90">Bersama Industri</span>
            </div>

            <div
              ref={buttonsRef}
              className="pointer-events-auto flex flex-wrap justify-center gap-4"
            >
              <a href="#keahlian" data-hero-cta className="btn-primary text-lg">
                Jelajahi Kapabilitas
                <ArrowRight size={20} />
              </a>
              <a
                href="#company-profile"
                data-hero-cta
                className="btn-primary text-lg"
              >
                <PlayCircle size={20} />
                Tonton Profil Perusahaan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
