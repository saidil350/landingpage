import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MRS - Multi National Plastic Packaging Company | Solusi Kemasan Plastik Terpercaya",
  description: "MRS adalah pemimpin industri kemasan plastik multi nasional, menyediakan solusi kemasan berkualitas tinggi dengan standar internasional dan sertifikasi Halal.",
  keywords: [
    "kemasan plastik",
    "plastic packaging",
    "packaging Indonesia",
    "kemasan food grade",
    "plastic packaging manufacturer",
    "MRS plastic",
    "kemasan halal",
    "industrial packaging",
  ],
  authors: [{ name: "MRS - Multi National Plastic Packaging" }],
  openGraph: {
    title: "MRS - Multi National Plastic Packaging Company",
    description: "Solusi kemasan plastik terpercaya dengan standar internasional dan nilai-nilai Islam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${sourceSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-sans bg-bg-light text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
