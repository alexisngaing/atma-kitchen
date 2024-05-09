interface User {
  sub: string;
  name: string;
  email: string;
  active: boolean;
  iat: number;
  exp: number;
}

export type { User };
