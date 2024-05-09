import Profile from "@/components/users/Profile";
import { isAuthenticated } from "@/guards";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  if (!isAuthenticated()) redirect("/auth/login");

  return <Profile />;
};

export default ProfilePage;
