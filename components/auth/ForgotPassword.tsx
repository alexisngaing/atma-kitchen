"use client";

import { resetPassword, sendOTP, verifyOTP } from "@/services/auth.service";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const StepOneSchema = z.object({
  email: z
    .string()
    .email()
    .refine((email) => !email.includes("@atmakitchen.ninja")),
});

const StepTwoSchema = Yup.object().shape({
  otp: Yup.string()
    .required("Kode OTP diperlukan")
    .matches(/^[0-9]{6}$/, "Kode OTP harus terdiri dari 6 angka"),
});

const StepThreeSchema = Yup.object().shape({
  password: Yup.string().required("Password diperlukan"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Konfirmasi password harus sesuai dengan password")
    .required("Konfirmasi Password diperlukan"),
});

const StepOne: React.FC<{ goToNextStep: () => void }> = ({ goToNextStep }) => (
  <div className="mx-auto w-3/12 py-16">
    <h1 className="pb-6 text-3xl font-bold">Reset Password</h1>
    <p className="pb-6 text-xl">
      Masukkan email Anda yang terdaftar. Kami akan mengirimkan kode verifikasi untuk mengatur ulang
      kata sandi Anda.
    </p>
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async ({ email }) => {
        const status = await sendOTP(email);
        if (status) {
          await Swal.fire({
            title: "Success",
            text: "OTP udah dikirim ke email kamu",
            icon: "success",
          });
          goToNextStep();
          localStorage.setItem("email", email);
        } else {
          await Swal.fire({
            title: "Failed",
            text: "OTP gagal dikirim ke email kamu",
            icon: "error",
          });
        }
      }}
      validationSchema={toFormikValidationSchema(StepOneSchema)}
    >
      <Form className="space-y-6">
        <Field
          className="block w-full rounded-md border border-gray-300 px-4 py-2"
          name="email"
          placeholder="Email"
          type="email"
        />
        <button
          className="block rounded-md bg-[#41B06E] px-4 py-2 font-bold text-white"
          type="submit"
        >
          Kirim
        </button>
      </Form>
    </Formik>
  </div>
);

const StepTwo: React.FC<{ goToNextStep: () => void }> = ({ goToNextStep }) => (
  <div className="mx-auto w-3/12 py-16">
    <h1 className="pb-6 text-3xl font-bold">Masukkan Kode OTP</h1>
    <p className="pb-6 text-xl">Masukkan kode OTP yang telah kami kirimkan ke email Anda.</p>
    <Formik
      initialValues={{ otp: "" }}
      onSubmit={async ({ otp }) => {
        const status = await verifyOTP(localStorage.getItem("email") as string, parseInt(otp, 10));
        if (status) {
          await Swal.fire({
            title: "Success",
            text: "OTP berhasil diverifikasi",
            icon: "success",
          });
          goToNextStep();
          localStorage.setItem("otp", otp);
        } else {
          await Swal.fire({
            title: "Failed",
            text: "OTP gagal diverifikasi",
            icon: "error",
          });
        }
      }}
      validationSchema={StepTwoSchema}
    >
      <Form className="space-y-6">
        <Field
          className="block w-36 rounded-md border border-gray-300 px-4 py-2"
          name="otp"
          placeholder="Kode OTP"
          type="text"
        />
        <button
          className="block rounded-md bg-[#41B06E] px-4 py-2 font-bold text-white"
          type="submit"
        >
          Verifikasi
        </button>
      </Form>
    </Formik>
  </div>
);

const StepThree: React.FC = () => (
  <div className="mx-auto w-3/12 py-16">
    <h1 className="pb-6 text-3xl font-bold">Buat Password Baru</h1>
    <p className="pb-6 text-xl">Buat password baru untuk akun Anda.</p>
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      onSubmit={async ({ password }) => {
        const status = await resetPassword(
          localStorage.getItem("email") as string,
          parseInt(localStorage.getItem("otp") as string, 10),
          password,
        );

        if (status) {
          await Swal.fire({
            title: "Success",
            text: "Password berhasil diubah",
            icon: "success",
          });
          window.location.href = "/auth/login";
        } else {
          await Swal.fire({
            title: "Failed",
            text: "Password gagal diubah",
            icon: "error",
          });
        }
      }}
      validationSchema={StepThreeSchema}
    >
      <Form className="space-y-6">
        <Field
          className="block w-full rounded-md border border-gray-300 px-4 py-2"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Field
          className="block w-full rounded-md border border-gray-300 px-4 py-2"
          name="confirmPassword"
          placeholder="Konfirmasi Password"
          type="password"
        />
        <button
          className="block rounded-md bg-[#41B06E] px-4 py-2 font-bold text-white"
          type="submit"
        >
          Simpan
        </button>
      </Form>
    </Formik>
  </div>
);

const NewPassword: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && <StepOne goToNextStep={goToNextStep} />}
      {step === 2 && <StepTwo goToNextStep={goToNextStep} />}
      {step === 3 && <StepThree />}
    </>
  );
};

export default NewPassword;
