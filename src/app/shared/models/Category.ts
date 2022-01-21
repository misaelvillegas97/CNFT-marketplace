export interface ICategory {
  id: number;
  name: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  order: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
