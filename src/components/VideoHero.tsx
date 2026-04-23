"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { gsap, motionQueries, motionTokens } from "@/lib/gsap-client";

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
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
      gsap.set([headingRef.current, bodyRef.current, buttonsRef.current], {
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
      gsap.set(bodyRef.current, {
        autoAlpha: 0,
        y: motionTokens.offsets.heroBody,
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
          bodyRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: motionTokens.durations.sectionIntro,
            ease: motionTokens.ease.enter,
          },
          "<+=0.18"
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
      className="relative h-[100svh] min-h-screen overflow-hidden"
    >
      <div className="relative flex h-[100svh] min-h-screen items-center justify-center bg-bg-light">
        <div
          ref={containerRef}
          className="video-container absolute inset-0 m-auto overflow-hidden will-change-transform will-change-[border-radius,width,height]"
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
            <source src="/hero-video-web.mp4" type="video/mp4" />
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
            <h1
              ref={headingRef}
              className="mx-auto mb-6 max-w-5xl text-white drop-shadow-lg"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
            >
              MRS membangun solusi kemasan plastik yang bertumpu pada kualitas, amanah, dan pertumbuhan jangka panjang.
            </h1>
            <p
              ref={bodyRef}
              className="mx-auto mb-12 max-w-3xl text-xl text-white/92 drop-shadow-md"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
            >
              Menjadi perusahaan industri kemasan plastik multi nasional dengan tetap memperhatikan prinsip-prinsip ajaran Islam melalui manufaktur presisi, distribusi yang andal, dan kemitraan yang memberi nilai nyata.
            </p>

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
                className="btn-border-white text-lg"
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
