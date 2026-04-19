import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Distributor Plastik Premium - Solusi Kemasan Industri & Retail",
  description: "Distributor plastik terpercaya dengan kualitas premium, layanan cepat, dan stok terlengkap untuk kebutuhan industri, UMKM, dan retail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
