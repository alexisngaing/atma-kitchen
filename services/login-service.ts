import { Login } from "@/types/login";

const login = async (login: Login): Promise<Response> => {
  const response = await fetch("https://api.atmakitchen.ninja/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
  return response;
};

export default login;
