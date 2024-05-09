import { Product } from "@/types";

const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    "http://127.0.0.1:3000/v1/products?fields=id,name,price,quantity,image",
  );
  const jsonData = await response.json();
  const products: Product[] = jsonData.data;
  return products;
};

export default getAllProducts;
