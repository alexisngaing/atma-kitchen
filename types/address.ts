interface Address {
  id: number;
  customerId: string;
  recipientName: string;
  phoneNumber: string;
  address: string;
  geo: string;
  isPrimary: boolean;
}

export type { Address };
