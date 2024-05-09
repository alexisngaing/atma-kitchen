"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  router.replace("/");
};

export default NotFoundPage;
