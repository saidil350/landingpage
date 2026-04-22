import { Project } from "./index";
import { placeholderImages } from "./placeholders";

export const projects: Project[] = [
  {
    title: "Kemasan Food Grade",
    client: "PT Food Indonesia",
    industry: "F&B Industry",
    year: "2024",
    capacity: "5 Juta pcs/bulan",
    image: placeholderImages['food-packaging'],
    tags: ["HDPE", "Food Grade", "Halal Certified"],
  },
  {
    title: "Industrial Packaging",
    client: "PT Manufacturing Jaya",
    industry: "Manufacturing",
    year: "2024",
    capacity: "10 Juta pcs/bulan",
    image: placeholderImages['industrial-packaging'],
    tags: ["PP", "Heavy Duty", "Custom Design"],
  },
  {
    title: "E-commerce Solutions",
    client: "PT E-Commerce Asia",
    industry: "E-commerce",
    year: "2023",
    capacity: "20 Juta pcs/bulan",
    image: placeholderImages['ecommerce-packaging'],
    tags: ["Courier Bag", "Waterproof", "Branded"],
  },
];
