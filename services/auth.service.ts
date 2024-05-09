import axios from "axios";

const authenticate = async ({ email, password }: { email: string; password: string }) => {
  try {
    let accessToken: string | null = null;

    const response = await axios.post("http://127.0.0.1:3001/api/auth/login", {
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
    const response = await axios.post("http://127.0.0.1:3000/v1/auth/register", {
      fullName,
      email,
      password,
    });

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
      "http://127.0.0.1:3000/v1/auth/send-verification-email",
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
    const response = await axios.get("http://127.0.0.1:3000/v1/auth/verify-email", {
      params: {
        token: accessToken,
      },
    });

    const data = response.data as { status: string };

    return data.status === "ok";
  } catch (error) {
    return false;
  }
};

export { authenticate, logout, register, sendVerificationEmail, verifyEmail };
