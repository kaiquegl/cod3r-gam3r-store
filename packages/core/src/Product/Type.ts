import type { Priceable } from "./Priceable";
import type { Specifications } from "./Specifications";

export type Product = {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  score: number;
  videoReview: string;
  tags: string[];
  specifications: Specifications;
} & Priceable;
