import { Category } from "@/types";

const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch("http://127.0.0.1:3000/v1/categories?fields=id,name");
  const jsonData = await response.json();
  const categories: Category[] = jsonData.data;
  return categories;
};

export default getAllCategories;
