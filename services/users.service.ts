import { User } from "@/types";
import axios from "axios";

const getUserProfile = async (accessToken: string) => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/v1/me", {
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
    const response = await axios.patch("http://127.0.0.1:3000/v1/me", data, {
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
