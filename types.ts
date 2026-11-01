export type CategoryId = 'cleansing' | 'moisture' | 'serums' | 'sun';

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: CategoryId;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: { label: string; value: string }[];
}

export interface CartLine {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  slug: string;
}
