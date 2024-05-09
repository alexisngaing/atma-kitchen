"use client";

import { verifyEmail } from "@/services";
import { useToggle } from "@mantine/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { decodeToken, isExpired } from "react-jwt";

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useToggle([true, false] as const);

  useEffect(() => {
    const verify = async () => {
      if (token && decodeToken(token) && !isExpired(token)) {
        const tokenData = decodeToken(token) as { verified: boolean };
        if (!tokenData.verified) {
          const status = await verifyEmail(token);
          setIsVerified(status);
        }
      }
      setIsLoading(false);
    };

    verify().catch(() => {});
  }, [token, setIsLoading]);

  return (
    <div className="flex h-screen items-center justify-center">
      {isLoading && <p>Loading...</p>}
      {!isLoading && isVerified && <p>Your email has been verified</p>}
      {!isLoading && !isVerified && <p>Failed to verify email</p>}
    </div>
  );
};

export default VerifyEmailPage;
