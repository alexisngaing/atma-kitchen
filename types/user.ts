interface User {
  id: string;
  avatar: string | null;
  fullName: string;
  gender: "M" | "F";
  dob: string;
  email: string;
  phoneNumber: string;
  totalPoints: string;
}

interface UserTokenData {
  sub: string;
  name: string;
  email: string;
  active: boolean;
  iat: number;
  exp: number;
}

export type { User, UserTokenData };
