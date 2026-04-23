"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
    gsap.set(containerRef.current, {
      width: "80%",
      height: "80vh",
      borderRadius: "40px",
      scale: 0.9,
    });

    const tl = gsap.timeline({
      delay: 1.5,
    });

    tl.to(containerRef.current, {
      width: "100%",
      height: "100vh",
      borderRadius: "0px",
      scale: 1,
      duration: 1.2,
      ease: "power2.inOut",
    });

    tl.to(
      contentRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "+=0.3"
    );

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "<"
    );

    tl.fromTo(
      bodyRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.25"
    );

    tl.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-trigger"
      className="relative h-screen overflow-hidden"
    >
      <div className="relative flex h-screen items-center justify-center bg-bg-light">
        <div
          ref={containerRef}
          className="video-container absolute overflow-hidden will-change-transform will-change-border-radius will-change-width will-change-height"
          style={{
            width: "80%",
            height: "80vh",
            borderRadius: "40px",
            scale: 0.9,
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

          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
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
              <a href="#keahlian" className="btn-primary text-lg">
                Jelajahi Kapabilitas
                <ArrowRight size={20} />
              </a>
              <a href="#company-profile" className="btn-border-white text-lg">
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
