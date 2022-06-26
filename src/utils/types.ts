export interface Product {
  title: string;
  subtitle: string;
  description: string;
  condition: string;
  type: string;
  sizes: string[];
  colors: string[];
  newPrice: number;
  oldPrice: number;
  rating: number;
  images: Image[];
}

export type Image = {
  id: number;
  source: string;
};
