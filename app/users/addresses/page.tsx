import Address from "@/components/users/Address";
import { isAuthenticated } from "@/guards";
import { redirect } from "next/navigation";

const AddressPage = () => {
  if (!isAuthenticated()) redirect("/auth/login");

  return <Address />;
};

export default AddressPage;
