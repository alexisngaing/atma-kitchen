import axios from "axios";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = (await request.json()) as { email: string; password: string };

  if (email && password) {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL as string}/auth/login`, {
        email,
        password,
      });

      if (response.status === 201) {
        const { accessToken } = response.data as { accessToken: string };
        const { active, exp } = jwt.decode(accessToken) as { active: boolean; exp: number };
        if (active)
          cookies().set("session", accessToken, {
            httpOnly: true,
            secure: true,
            expires: new Date(exp * 1000),
            sameSite: "lax",
            path: "/",
          });
        return new Response(JSON.stringify({ accessToken }), {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }

  return new Response(JSON.stringify({ error: "Email and password are required" }), {
    status: 400,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
