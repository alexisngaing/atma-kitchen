import OrderHistory from "@/components/users/Order";
import { isAuthenticated } from "@/guards";
import { redirect } from "next/navigation";

const OrderPage = () => {
  if (!isAuthenticated()) redirect("/auth/login");
  return <OrderHistory />;
};

export default OrderPage;
