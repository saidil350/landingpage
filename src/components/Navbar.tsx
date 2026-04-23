"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navigasi = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    // For home page, add scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinksData = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-perusahaan" },
    { name: "Produk & Layanan", href: "/layanan" },
    { name: "Proyek", href: "/proyek" },
    { name: "Berita", href: "/blog" },
  ];
  const contactHref = "/kontak";

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isHomePage || isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span
            ref={logoTextRef}
            className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
              !isHomePage || isScrolled ? "text-[#1F1E1E]" : "text-white"
            }`}
          >
            MRS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav ref={navLinksRef} className="hidden md:flex items-center gap-10">
          {navLinksData.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors text-sm uppercase tracking-wider ${
                !isHomePage || isScrolled
                  ? "text-[#1F1E1E]/80 hover:text-primary"
                  : "text-white/90 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href={contactHref} className="btn-primary py-2.5 px-6 text-sm">
            Hubungi Kami
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            !isHomePage || isScrolled ? "text-[#1F1E1E]" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinksData.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-dark/90 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={contactHref}
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-between"
              >
                Hubungi Kami
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigasi;
