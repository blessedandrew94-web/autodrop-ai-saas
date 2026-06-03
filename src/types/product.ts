export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  faq: { question: string; answer: string }[];
}

export interface SupplierRecommendation {
  product_name: string;
  supplier: string;
  price: number;
  shipping_time_days: number;
  rating: number;
}
