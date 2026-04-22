import { Certification } from "./index";
import { placeholderImages } from "./placeholders";

export const certifications: Certification[] = [
  {
    name: "ISO 9001:2015",
    issuer: "ISO International",
    description: "Sistem Manajemen Mutu",
    validUntil: "2027",
    image: placeholderImages['iso-9001'],
  },
  {
    name: "Halal MUI",
    issuer: "Majelis Ulama Indonesia",
    description: "Sertifikasi Halal untuk Produk Food Grade",
    validUntil: "2026",
    image: placeholderImages['halal'],
  },
  {
    name: "SNI",
    issuer: "Badan Standardisasi Nasional",
    description: "Standar Nasional Indonesia",
    validUntil: "2028",
    image: placeholderImages['sni'],
  },
  {
    name: "Food Grade Certification",
    issuer: "BPOM",
    description: "Aman untuk kontak langsung dengan makanan",
    validUntil: "2027",
    image: placeholderImages['food-grade'],
  },
  {
    name: "Recycling Standard",
    issuer: "International Recycling Body",
    description: "Komitmen terhadap ekonomi sirkular",
    validUntil: "2029",
    image: placeholderImages['recycling'],
  },
];
