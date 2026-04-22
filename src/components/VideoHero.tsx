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
    // Set initial state immediately
    gsap.set(containerRef.current, {
      width: "80%",
      height: "80vh",
      borderRadius: "40px",
      scale: 0.9,
    });

    // Automatic timeline - runs on load, not scroll
    const tl = gsap.timeline({
      delay: 1.5, // Jeda 1.5 detik sebelum animasi mulai
    });

    // Step 1: Container expands from card to full screen (THE POP)
    tl.to(containerRef.current, {
      width: "100%",
      height: "100vh",
      borderRadius: "0px",
      scale: 1,
      duration: 1.2,
      ease: "power2.inOut", // Smooth ease untuk otomatis animasi
    });

    // Step 2: Content appears AFTER expansion completes
    tl.to(
      contentRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "+=0.3" // Small delay after expansion
    );

    // Step 3: Entrance animations for headline and buttons
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "<" // Start at same time as content fade in
    );

    tl.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.3" // Slight overlap with heading
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-trigger"
      className="relative h-screen overflow-hidden"
    >
      {/* Container for centered initial card */}
      <div className="relative h-screen flex items-center justify-center bg-bg-light">
        {/* Masking Container - Wraps video for the expand effect */}
        <div
          ref={containerRef}
          className="video-container overflow-hidden will-change-transform will-change-border-radius will-change-width will-change-height absolute"
          style={{
            width: "80%",
            height: "80vh",
            borderRadius: "40px",
            scale: 0.9,
          }}
        >
          {/* Video Element - Inside masking container */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero_background.png"
            className="w-full h-full object-cover"
          >
            <source src="/hero-video-web.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay - Increased opacity (40%) for better text contrast */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>

        {/* Content Wrapper - Appears AFTER expansion */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 will-change-opacity pointer-events-none"
        >
          {/* Content */}
          <div className="container-custom text-center px-4 pt-20">
            <h1
              ref={headingRef}
              className="text-white mb-6 drop-shadow-lg"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
            >
              Solusi Kemasan Plastik Terpercaya
            </h1>
            <p
              ref={headingRef}
              className="text-white/95 text-xl max-w-3xl mx-auto mb-12 drop-shadow-md"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
            >
              Menjadi perusahaan industri kemasan plastik multi nasional dengan tetap memperhatikan prinsip-prinsip ajaran Islam
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-wrap gap-4 justify-center pointer-events-auto"
            >
              <button className="btn-primary text-lg">
                Jelajahi Produk
                <ArrowRight size={20} />
              </button>
              <button className="btn-ghost text-lg text-white! hover:bg-white/10!">
                <PlayCircle size={20} />
                Tonton Profil Perusahaan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
