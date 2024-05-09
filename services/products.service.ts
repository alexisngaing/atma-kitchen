import { Product } from "@/types";
import axios from "axios";

const getAllProducts = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/v1/products", {
      params: {
        fields: "id,name,price,quantity,image",
      },
    });

    const { data: products } = response.data as { data: Product[] };

    return products;
  } catch (error) {
    return [];
  }
};

export { getAllProducts };
