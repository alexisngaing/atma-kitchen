import { Product } from "./product";

interface Order {
  id: number;
  orderDate: string;
  customerId: string;
  total: number;
  items: {
    some(arg0: (item: any) => any): unknown;
    toLowerCase(): unknown;
    item: Product[];
  };
}

export type { Order };
