import { Category } from "@/types";
import axios from "axios";

const getAllCategories = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/v1/categories", {
      params: {
        fields: "id,name",
      },
    });

    const { data: categories } = response.data as { data: Category[] };

    return categories;
  } catch (error) {
    return [];
  }
};

export { getAllCategories };
