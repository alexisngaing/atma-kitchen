import { Category } from "@/types";

const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch(
    "https://admin.atmakitchen.ninja/items/product_categories?fields=id,name",
  );
  const jsonData = await response.json();
  const categories: Category[] = jsonData.data;
  return categories;
};

export default getAllCategories;
