import { UserTokenData } from "@/types";
import { cookies } from "next/headers";
import { decodeToken, isExpired } from "react-jwt";
import "server-only";

const isAuthenticated = () => {
  const accessToken = cookies().get("session")?.value as string;

  if (
    decodeToken(accessToken) &&
    !isExpired(accessToken) &&
    (decodeToken(accessToken) as UserTokenData).active
  ) {
    return true;
  }

  return false;
};

export { isAuthenticated };
