import { Industry } from "./index";
import { placeholderImages } from "./placeholders";

export const industries: Industry[] = [
  {
    icon: "Utensils",
    name: "Food & Beverage",
    description: "Kemasan food grade untuk industri makanan dan minuman",
    products: ["Stand-up Pouch", "Vacuum Bag", "Tray Sealing"],
    image: placeholderImages['food-beverage'],
  },
  {
    icon: "ShoppingBag",
    name: "Retail & E-commerce",
    description: "Solusi kemasan untuk online shopping dan retail",
    products: ["Courier Bag", "Shopping Bag", "Mailer Box"],
    image: placeholderImages['retail-ecommerce'],
  },
  {
    icon: "Heart",
    name: "Healthcare & Pharma",
    description: "Kemasan steril untuk produk kesehatan",
    products: ["Medical Pouch", "Pharma Packaging", "Sterile Bag"],
    image: placeholderImages['healthcare'],
  },
  {
    icon: "Factory",
    name: "Industrial",
    description: "Heavy duty packaging untuk industri manufaktur",
    products: ["Bulk Bag", "Drum Liner", "Protective Film"],
    image: placeholderImages['industrial'],
  },
  {
    icon: "Leaf",
    name: "Agriculture",
    description: "Kemasan untuk produk pertanian dan perkebunan",
    products: ["Fertilizer Bag", "Seed Bag", "Crop Protection"],
    image: placeholderImages['agriculture'],
  },
  {
    icon: "Droplet",
    name: "Chemical",
    description: "Kemasan tahan kimia untuk industri chemical",
    products: ["Chemical Drum", "Hazmat Bag", "Container Liner"],
    image: placeholderImages['chemical'],
  },
  {
    icon: "Baby",
    name: "Personal Care",
    description: "Kemasan higienis untuk produk perawatan diri",
    products: ["Cosmetic Pouch", "Diaper Packaging", "Wipes Pack"],
    image: placeholderImages['personal-care'],
  },
  {
    icon: "MoreHorizontal",
    name: "Custom Solutions",
    description: "Solusi kemasan sesuai spesifikasi khusus",
    products: ["Custom Design", "Private Label", "OEM Partnership"],
    image: placeholderImages['custom'],
  },
];
