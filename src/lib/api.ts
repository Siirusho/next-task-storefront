import { Product } from "@/types/product";

export const getAllProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`getAllProducts failed: ${res.status} ${res.statusText}`);
    }

    return (await res.json()) as Product[];
  } catch (err) {
    return (err as Error).message;
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`getProductById failed: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as Product;
  } catch (err) {
    return (err as Error).message;
  }
};
