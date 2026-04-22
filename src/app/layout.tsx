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
  title: "Virya Energy - Membangun Masa Depan Berkelanjutan",
  description: "Virya Energy adalah pemimpin dalam solusi energi terbarukan, menghadirkan inovasi tenaga angin dan surya untuk dunia yang lebih bersih.",
  keywords: ["energi terbarukan", "tenaga surya", "tenaga angin", "keberlanjutan", "Virya Energy"],
  authors: [{ name: "Virya Energy" }],
  openGraph: {
    title: "Virya Energy - Sustainable Energy Solutions",
    description: "Leading the transition to a sustainable future with clean energy infrastructure.",
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
