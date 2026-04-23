import { Location } from "./index";

export const locations: Location[] = [
  {
    name: "Jakarta Sales & Corporate Office",
    address: "Jl. Industri Plastik No. 12, Cakung, Jakarta Timur 13910",
    type: "Corporate Office",
    capacity: "Pusat koordinasi komersial dan layanan pelanggan nasional",
    coordinates: { lat: -6.198, lng: 106.915 },
    image: "/hero_background.png",
  },
  {
    name: "Cikarang Manufacturing Hub",
    address: "Kawasan Industri Delta Silicon, Cikarang, Jawa Barat",
    type: "Manufacturing",
    capacity: "Mesin ekstrusi, printing, converting, dan quality control terintegrasi",
    coordinates: { lat: -6.322, lng: 107.139 },
    image: "/rolls.png",
  },
  {
    name: "Surabaya Distribution Node",
    address: "Jl. Margomulyo Industri, Surabaya, Jawa Timur",
    type: "Distribution",
    capacity: "Mempercepat pengiriman untuk Jawa Timur, Bali, dan Indonesia Timur",
    coordinates: { lat: -7.248, lng: 112.69 },
    image: "/packaging.png",
  },
];
