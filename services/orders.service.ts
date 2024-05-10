import { Order } from "@/types";
import axios from "axios";

const getOrders = async (accessToken: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL as string}/orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // console.log(response.data);
    // const { data: orders } = response.data as { data: Order[] };
    // console.log(orders);

    const orders = response.data as Order[];
    console.log(orders);

    return orders;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getOrders };
