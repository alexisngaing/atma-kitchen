import { Address } from "@/types";
import axios from "axios";

const getUserAddresses = async (accessToken: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL as string}/addresses`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const addresses = response.data as Address[];

    return addresses;
  } catch (error) {
    return [];
  }
};

export { getUserAddresses };
