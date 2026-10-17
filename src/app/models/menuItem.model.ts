export interface MenuItem {
  id: number;
  productName: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  featured?: boolean;
}
