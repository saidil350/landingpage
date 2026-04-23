import { Testimonial } from "./index";

export const testimonials: Testimonial[] = [
  {
    name: "Rizky Ananda",
    position: "Procurement Manager",
    company: "PT Mitra Boga Nusantara",
    avatar: "/hero_background.png",
    rating: 5,
    text:
      "MRS konsisten menjaga spesifikasi material dan ketepatan pengiriman untuk kebutuhan kemasan makanan kami. Tim mereka cepat merespons perubahan forecast tanpa mengorbankan kualitas produksi.",
    metrics: {
      reduction: "28%",
      metric: "Lead time lebih singkat",
      period: "dalam 12 bulan kerja sama",
    },
  },
  {
    name: "Nur Aisyah",
    position: "Head of Packaging Development",
    company: "Sahabat Retail Indonesia",
    avatar: "/packaging.png",
    rating: 5,
    text:
      "Kolaborasi dengan MRS terasa seperti bekerja dengan mitra operasional, bukan sekadar vendor. Mereka membantu kami menyempurnakan struktur kemasan agar lebih efisien untuk distribusi nasional.",
    metrics: {
      value: "3",
      metric: "Lini kemasan dikembangkan bersama",
      period: "untuk kebutuhan retail dan private label",
    },
  },
  {
    name: "Daniel Saputra",
    position: "Operations Director",
    company: "Aruna Industrial Supply",
    avatar: "/rolls.png",
    rating: 5,
    text:
      "Kami memilih MRS karena kombinasi antara kapasitas produksi, kontrol kualitas, dan komitmen pada standar halal serta keberlanjutan. Itu memberi rasa aman untuk ekspansi jangka panjang kami.",
    metrics: {
      products: "50 juta+",
      metric: "Output tahunan terserap ke jaringan kami",
      period: "melalui kontrak multi-tahun",
    },
  },
];
