import axios from "axios";

const authenticate = async ({ email, password }: { email: string; password: string }) => {
  try {
    let accessToken: string | null = null;

    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (response.status === 201) {
      ({ accessToken } = response.data as { accessToken: string });
    }

    return accessToken;
  } catch (error) {
    return null;
  }
};

const register = async ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL as string}/auth/register`,
      {
        fullName,
        email,
        password,
      },
    );

    const data = response.data as { status: string };

    return response.status === 201 && data.status === "ok";
  } catch (error) {
    return null;
  }
};

const logout = () => {
  localStorage.removeItem("accessToken");
};

const sendVerificationEmail = async (email: string, accessToken: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL as string}/auth/send-verification-email`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const data = response.data as { status: string };

    return response.status === 201 && data.status === "ok";
  } catch (error) {
    return false;
  }
};

const verifyEmail = async (accessToken: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL as string}/auth/verify-email`,
      {
        params: {
          token: accessToken,
        },
      },
    );

    const data = response.data as { status: string };

    return data.status === "ok";
  } catch (error) {
    return false;
  }
};

const sendOTP = async (email: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL as string}/auth/request-reset-password`,
      {
        email,
      },
    );

    const data = response.data as { status: string };

    return response.status === 201 && data.status === "ok";
  } catch (error) {
    return false;
  }
};

const verifyOTP = async (email: string, otp: number) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL as string}/auth/verify-otp`,
      {
        email,
        otp,
      },
    );

    const data = response.data as { status: string };

    return response.status === 201 && data.status === "ok";
  } catch (error) {
    return false;
  }
};

const resetPassword = async (email: string, otp: number, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL as string}/auth/reset-password`,
      {
        email,
        otp,
        password,
      },
    );

    const data = response.data as { status: string };

    return response.status === 201 && data.status === "ok";
  } catch (error) {
    return false;
  }
};

export {
  authenticate,
  logout,
  register,
  sendVerificationEmail,
  verifyEmail,
  verifyOTP,
  sendOTP,
  resetPassword,
};
