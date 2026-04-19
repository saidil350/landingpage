"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Produk", href: "#produk" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Alur Pesan", href: "#alur" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[68px] flex items-center",
        "px-[clamp(24px,6%,80px)]",
        isScrolled ? "bg-[#1a3a36]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group no-underline">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="text-[#b8eae4]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </motion.div>
          <div className="flex flex-col">
            <span className="leading-none text-white text-[15px] font-medium tracking-tight">
              PLASTIK<span className="text-[#b8eae4]">.</span>ID
            </span>
            <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-white/70 leading-tight">
              Distributor Utama
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <motion.ul 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.5 }
              }
            }}
            className="flex gap-8 m-0 p-0 list-none"
          >
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Link
                  href={link.href}
                  className="relative text-[13px] font-normal text-white/70 hover:text-white transition-colors no-underline group"
                >
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-px bg-[#b8eae4] transition-all group-hover:w-full"
                    layoutId="navbar-underline"
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="flex items-center gap-3"
          >
            <Link href="#kontak" className="btn btn-ghost-white btn-ghost-icon text-[13px]">
              Hubungi Kami
              <span className="icon-circle">▶</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white border-none bg-transparent cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#1a3a36] overflow-hidden md:hidden flex flex-col px-6 pb-6 shadow-2xl"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="flex flex-col"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-[17px] font-light text-[#F3F8F9] hover:text-[#b8eae4] py-5 border-b border-white/5 no-underline transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 mt-8"
            >
              <Link
                href="#kontak"
                className="btn text-[15px] font-medium"
                style={{ 
                  backgroundColor: '#b8eae4', 
                  color: '#1a3a36',
                  padding: '16px'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hubungi Kami
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#1a3a36]/20 ml-2 text-[8px] bg-[#1a3a36]/5">▶</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
