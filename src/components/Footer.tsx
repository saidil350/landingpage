"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// Custom social media icons
const Facebook = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Produk",
      links: [
        { name: "Kemasan F&B", href: "/layanan#produk-fb" },
        { name: "Industrial Packaging", href: "/layanan#produk-industrial" },
        { name: "E-commerce Bags", href: "/layanan#produk-ecommerce" },
        { name: "Custom Solutions", href: "/layanan#produk-custom" },
      ],
    },
    {
      title: "Perusahaan",
      links: [
        { name: "Tentang Kami", href: "/tentang-perusahaan" },
        { name: "Tim Manajemen", href: "/tentang-perusahaan#tim" },
        { name: "Karier", href: "/tentang-perusahaan#karier" },
        { name: "Berita & Media", href: "/blog" },
      ],
    },
    {
      title: "Sertifikasi",
      links: [
        { name: "ISO 9001:2015", href: "/tentang-perusahaan#iso" },
        { name: "Halal MUI", href: "/tentang-perusahaan#halal" },
        { name: "SNI", href: "/tentang-perusahaan#sni" },
        { name: "Food Grade", href: "/tentang-perusahaan#food-grade" },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                MRS
              </span>
            </Link>
            <p className="text-white/90 mb-8 max-w-sm leading-relaxed">
              Solusi kemasan plastik berkualitas tinggi dengan standar internasional dan nilai-nilai Islam.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold mb-8">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5 mb-10">
          <div className="flex items-center gap-4 text-white/90">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <Phone size={20} />
            </div>
            <span>+62 (21) 1234-5678</span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <Mail size={20} />
            </div>
            <span>info@mrs-plastic.com</span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <MapPin size={20} />
            </div>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/70 text-sm">
          <p>© {currentYear} MRS - Multi National Plastic Packaging. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
