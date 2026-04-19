"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Instagram, Facebook, Linkedin } from "./SocialIcons";

export default function Footer() {
  return (
    <footer id="kontak" className="text-white pt-24 pb-12 overflow-hidden relative" style={{ backgroundColor: '#1a3a36' }}>

      <div className="relative z-10" style={{ paddingLeft: 'clamp(24px, 8%, 140px)', paddingRight: 'clamp(24px, 8%, 140px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group no-underline">
              <svg className="text-[#00E5FF]" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.4))' }}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <div className="flex flex-col">
                <span className="leading-none text-white text-[20px] font-medium tracking-tight">
                  PLASTIK<span className="text-[#00E5FF]" style={{ textShadow: '0 0 10px rgba(0,229,255,0.6)' }}>.</span>ID
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#D1E5E5] leading-tight">
                  Premium Distributor
                </span>
              </div>
            </Link>
            <p className="leading-relaxed" style={{ fontSize: '13px', color: '#DBECF1' }}>
              Mitra distribusi solusi plastik terkemuka di Indonesia. Fokus pada kualitas, kecepatan, dan keberlanjutan supply chain Anda.
            </p>
            <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <Link key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#b8eae4] hover:border-[#b8eae4] hover:text-[#1a2e2a] transition-all no-underline">
                        <Icon size={18} />
                    </Link>
                ))}
            </div>
          </div>

          <div>
            <h4 className="mb-8 border-b border-white/10 pb-4 inline-block" style={{ fontWeight: 500, fontSize: '18px', color: '#F3F8F9' }}>Menu Cepat</h4>
            <ul className="space-y-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {["Beranda", "Produk", "Keunggulan", "Alur Pesan", "Kemitraan"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00E5FF] transition-colors flex items-center gap-2 no-underline" style={{ fontSize: '13px', color: '#DBECF1' }}>
                    <span style={{ width: '6px', height: '6px', backgroundColor: 'rgba(0,229,255,0.3)' }} />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 border-b border-white/10 pb-4 inline-block" style={{ fontWeight: 500, fontSize: '18px', color: '#F3F8F9' }}>Produk</h4>
            <ul className="space-y-4" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {["Industrial Film", "Retail Packaging", "Custom Pouch", "Eco-Friendly Poly", "Stretch Film"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00E5FF] transition-colors flex items-center gap-2 no-underline" style={{ fontSize: '13px', color: '#DBECF1' }}>
                    <span style={{ width: '6px', height: '6px', backgroundColor: 'rgba(0,229,255,0.3)' }} />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 border-b border-white/10 pb-4 inline-block" style={{ fontWeight: 500, fontSize: '18px', color: '#F3F8F9' }}>Kontak Kami</h4>
            <ul className="space-y-6" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#00E5FF] shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <MapPin size={20} />
                </div>
                <div style={{ fontSize: '13px' }}>
                    <p className="font-medium mb-1" style={{ fontWeight: 500, color: '#F3F8F9' }}>Kantor Pusat</p>
                    <p style={{ color: '#DBECF1' }}>Kawasan Industri Jababeka, Cikarang, Bekasi - 17530</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#00E5FF] shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <Phone size={20} />
                </div>
                <div style={{ fontSize: '13px' }}>
                    <p className="font-medium mb-1" style={{ fontWeight: 500, color: '#F3F8F9' }}>Layanan Proyek</p>
                    <p style={{ color: '#DBECF1' }}>+62 21 8901 2345</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-[#00E5FF] shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <Mail size={20} />
                </div>
                <div style={{ fontSize: '13px' }}>
                    <p className="font-medium mb-1" style={{ fontWeight: 500, color: '#F3F8F9' }}>Email</p>
                    <p style={{ color: '#DBECF1' }}>business@plastik.id</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/55" style={{ fontSize: '11px' }}>
          <p>© 2026 PLASTIK.ID - PT. Distribusi Plastik Indonesia. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors no-underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
