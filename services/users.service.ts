import { User } from "@/types";
import axios from "axios";

const getUserProfile = async (accessToken: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL as string}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.status === 200 ? (response.data as User) : null;
  } catch (error) {
    return null;
  }
};

const updateUserProfile = async (
  accessToken: string,
  data: { fullName: string; dob: string; gender: string },
) => {
  try {
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL as string}/me`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export { getUserProfile, updateUserProfile };
