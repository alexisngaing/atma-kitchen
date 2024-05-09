"use client";

import { authenticate, sendVerificationEmail } from "@/services/auth.service";
import { User } from "@/types";
import { useLocalStorage, useToggle } from "@mantine/hooks";
import { Field, Form, Formik } from "formik";
import { decodeToken, isExpired } from "react-jwt";
import Swal from "sweetalert2";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Schema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => !email.includes("@atmakitchen.ninja")),
  password: z.string(),
});

const Login = () => {
  const [accessToken, setAccessToken] = useLocalStorage({
    key: "accessToken",
    defaultValue: "",
  });
  const [showPassword, toggleShowPassword] = useToggle([false, true] as const);

  if (decodeToken(accessToken) && !isExpired(accessToken)) {
    const userData: User = decodeToken(accessToken) as User;
    if (userData.active) {
      window.location.href = "/";
    }
  }

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

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async ({ email, password }) => {
                const newAccessToken = await authenticate({ email, password });
                if (newAccessToken) {
                  const userData: User = decodeToken(newAccessToken) as User;

                  if (!userData.active) {
                    await Swal.fire({
                      title: "Verify your email",
                      text: "Please verify your email first",
                      icon: "info",
                      showConfirmButton: true,
                    });

                    const status = await sendVerificationEmail(email, newAccessToken);
                    if (status) {
                      await Swal.fire({
                        title: "Success",
                        text: "Verification email sent",
                        icon: "success",
                      });
                    } else {
                      await Swal.fire({
                        title: "Failed",
                        text: "Verification email failed to send",
                        icon: "error",
                      });
                    }

                    return;
                  }

                  await Swal.fire({
                    title: "Success",
                    text: "Login berhasil",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  setAccessToken(() => newAccessToken);
                  window.location.href = "/";
                } else {
                  await Swal.fire({
                    title: "Failed",
                    text: "Login gagal",
                    icon: "error",
                  });
                }
              }}
              validationSchema={toFormikValidationSchema(Schema)}
            >
              {({ errors, isSubmitting }) => (
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900" htmlFor="email">
                      Email
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      <Field
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                        id="email"
                        name="email"
                        placeholder="john.doe@gmail.com"
                        required
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="max-w-sm">
                    <label className="mb-2 block text-sm" htmlFor="password">
                      Password
                      <div className="relative">
                        <Field
                          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                          id="password"
                          name="password"
                          placeholder="••••••••"
                          required
                          type={showPassword ? "text" : "password"}
                        />
                        <button
                          className="absolute end-0 top-0 rounded-e-md p-3.5"
                          onClick={() => {
                            toggleShowPassword();
                          }}
                          type="button"
                        >
                          <svg
                            className="size-3.5 flex-shrink-0 text-gray-400"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            {showPassword ? (
                              <>
                                <path d="M6 12s2-3 6-3s6 3 6 3s-2 3-6 3s-6-3-6-3Z" />
                                <circle cx="12" cy="12" r="3" />
                              </>
                            ) : (
                              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                            )}
                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                            <line x1="2" x2="22" y1="2" y2="22" />
                          </svg>
                        </button>
                      </div>
                    </label>
                  </div>
                  <p className="text-end text-sm font-light text-gray-500">
                    <a className="font-medium hover:underline" href="/auth/forgot-password">
                      Lupa password?
                    </a>
                  </p>
                  <button
                    className="hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg bg-[#41B06E] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Login
                  </button>
                  <p className="text-center text-sm font-light text-gray-500">
                    Belum punya akun?{" "}
                    <a className="font-medium hover:underline" href="/auth/register">
                      <span className="text-[#41B06E]">Daftar</span>
                    </a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
