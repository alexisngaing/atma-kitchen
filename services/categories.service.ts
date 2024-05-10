import { Category } from "@/types";
import axios from "axios";

const getAllCategories = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL as string}/categories`, {
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
