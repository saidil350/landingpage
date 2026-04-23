"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

if (typeof window !== "undefined" && !pluginsRegistered) {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);
  pluginsRegistered = true;
}

export const motionQueries = {
  reduce: "(prefers-reduced-motion: reduce)",
  noPreference: "(prefers-reduced-motion: no-preference)",
  desktop: "(min-width: 768px)",
  mobile: "(max-width: 767px)",
  desktopMotion: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
};

export const motionTokens = {
  durations: {
    heroExpandDesktop: 1.15,
    heroExpandMobile: 1.0,
    sectionIntro: 1.0,
    sectionBlock: 1.02,
    sectionCard: 0.98,
    crossfade: 1.0,
    pills: 0.95,
    metrics: 0.96,
  },
  stagger: {
    default: 0.1,
    pills: 0.08,
    relaxed: 0.12,
  },
  offsets: {
    heroTitle: 32,
    heroBody: 28,
    heroCta: 24,
    intro: 30,
    block: 32,
    card: 36,
    softCard: 28,
    pills: 24,
    diagonalX: 8,
  },
  ease: {
    enter: "power3.out",
    soft: "power2.out",
    morph: "power2.inOut",
  },
} as const;

export { Flip, gsap, ScrollTrigger };
