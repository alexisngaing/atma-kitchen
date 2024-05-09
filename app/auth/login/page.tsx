import LoginForm from "@/components/auth/LoginForm";
import { isAuthenticated } from "@/guards";
import { redirect } from "next/navigation";

const LoginPage = () => {
  if (isAuthenticated()) redirect("/");

  return (
    <section className="bg-gray-50 ">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a className="mb-6 flex items-center text-3xl font-semibold text-[#41B06E]" href="/">
          ATMA KITCHEN
        </a>
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 ">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
