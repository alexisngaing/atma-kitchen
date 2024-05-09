import { Product } from "@/types";

const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://admin.atmakitchen.ninja/items/products?fields=id,name,price,quantity,image",
  );
  const jsonData = await response.json();
  const products: Product[] = jsonData.data;
  return products;
};

export default getAllProducts;
