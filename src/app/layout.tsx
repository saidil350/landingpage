import type { Metadata } from "next";
import "@fontsource/source-sans-pro/200.css";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/900.css";
import "./globals.css";

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
      className="h-full antialiased scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full font-sans bg-bg-light text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
