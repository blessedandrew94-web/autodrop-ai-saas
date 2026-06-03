import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "portable-cleaning-brush",
    name: "Portable Electric Cleaning Brush",
    price: 29.99,
    description: "Tackle tough stains with ease using our high-torque electric cleaning brush. Waterproof and cordless for maximum flexibility.",
    image: "/marketing_assets/portable_electric_cleaning_brush/lifestyle_image.png",
    features: [
      "High-torque motor for deep cleaning",
      "Interchangeable brush heads",
      "IPX7 Waterproof rating",
      "Long-lasting rechargeable battery"
    ],
    faq: [
      { question: "Is it waterproof?", answer: "Yes, it has an IPX7 waterproof rating, making it safe for use in sinks and showers." },
      { question: "How long does the battery last?", answer: "A single charge provides up to 90 minutes of continuous cleaning." }
    ]
  },
  {
    id: "magnetic-charging-station",
    name: "3-in-1 Magnetic Wireless Charging Station",
    price: 45.00,
    description: "Charge your iPhone, Apple Watch, and AirPods simultaneously with this sleek, magnetic dock.",
    image: "/marketing_assets/3_in_1_magnetic_wireless_charging_station/lifestyle_image.png",
    features: [
      "15W Fast magnetic charging",
      "Space-saving foldable design",
      "Built-in safety protections",
      "Compatible with all MagSafe devices"
    ],
    faq: [
      { question: "Does it support fast charging?", answer: "Yes, it supports up to 15W fast charging for compatible iPhones." },
      { question: "Can I use it with a case?", answer: "It works best with MagSafe-compatible cases or no case at all." }
    ]
  },
  {
    id: "sunset-lamp",
    name: "Sunset Projection Lamp",
    price: 19.99,
    description: "Transform your room into a golden-hour paradise with this high-intensity LED projection lamp.",
    image: "/marketing_assets/sunset_projection_lamp/lifestyle_image.png",
    features: [
      "180-degree rotation",
      "Multiple color modes",
      "USB-powered for convenience",
      "Energy-efficient LED bulb"
    ],
    faq: [
      { question: "Does it come with a remote?", answer: "Yes, it includes a remote to change colors and brightness." },
      { question: "How large is the projection?", answer: "The projection can cover an entire wall depending on the distance from the lamp." }
    ]
  },
  {
    id: "juice-blender",
    name: "Portable Rechargeable Juice Blender",
    price: 34.99,
    description: "Fresh smoothies on the go! This powerful, BPA-free portable blender is perfect for travel, gym, and office.",
    image: "/marketing_assets/portable_rechargeable_juice_blender/lifestyle_image.png",
    features: [
      "6 Stainless steel blades",
      "USB Rechargeable",
      "BPA-Free materials",
      "Easy self-cleaning mode"
    ],
    faq: [
      { question: "Can it crush ice?", answer: "Yes, the 6-blade design is powerful enough to crush ice and frozen fruits." },
      { question: "How many uses per charge?", answer: "You can get about 10-15 blends on a full charge." }
    ]
  },
  {
    id: "pet-water-fountain",
    name: "Ultra-Quiet Smart Pet Water Fountain",
    price: 39.99,
    description: "Keep your pets hydrated with fresh, filtered water. Ultra-quiet pump ensures a peaceful home environment.",
    image: "/marketing_assets/ultra_quiet_smart_pet_water_fountain/lifestyle_image.png",
    features: [
      "Quadruple filtration system",
      "Ultra-quiet 20dB pump",
      "2L Large capacity",
      "Smart LED indicator for water level"
    ],
    faq: [
      { question: "How often should I change the filter?", answer: "We recommend changing the filter every 2-4 weeks for optimal water freshness." },
      { question: "Is the pump really quiet?", answer: "Yes, at only 20dB, it's quieter than a library!" }
    ]
  },
  {
    id: "self-heating-lunch-box",
    name: "Self-Heating Lunch Box",
    price: 49.99,
    description: "Enjoy hot meals anywhere! This smart lunch box heats your food in minutes without a microwave.",
    image: "/marketing_assets/self_heating_lunch_box/lifestyle_1.png",
    features: [
      "Rapid heating technology",
      "Leak-proof design",
      "Portable and compact",
      "Easy to clean stainless steel tray"
    ],
    faq: [
      { question: "How long does it take to heat?", answer: "Usually 20-30 minutes depending on the starting temperature." },
      { question: "Is it dishwasher safe?", answer: "The stainless steel tray is dishwasher safe. The outer container should be wiped with a damp cloth." }
    ]
  },
  {
    id: "crystal-hair-eraser",
    name: "Crystal Hair Eraser",
    price: 24.99,
    description: "Painless hair removal that actually works. Exfoliates your skin while removing hair for a smooth finish.",
    image: "/marketing_assets/crystal_hair_eraser/lifestyle_1.png",
    features: [
      "Eco-friendly and reusable",
      "Pain-free hair removal",
      "Exfoliates dead skin",
      "Travel-sized and portable"
    ],
    faq: [
      { question: "How often should I use it?", answer: "We recommend using it once a week or as needed for smooth skin." },
      { question: "Can I use it on sensitive skin?", answer: "Yes, but we recommend trying a small patch first and using light pressure." }
    ]
  }
];

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
