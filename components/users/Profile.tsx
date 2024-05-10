"use client";

import { getUserProfile, updateUserProfile } from "@/services";
import { User } from "@/types";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Schema = z.object({
  fullName: z.string(),
  dob: z.string(),
  gender: z.string(),
});

const Profile = () => {
  const accessToken = localStorage.getItem("accessToken") as string;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getUserProfile(accessToken);
      setUser(data);
    };

    fetch().catch(() => {});
  }, [accessToken]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="mx-auto w-9/12 py-32 lg:w-5/12">
      <div className="flex gap-4 pb-4 font-semibold">
        <a href="me">
          <p className="text-[#41B06E]">Profil</p>
        </a>
        <a href="addresses">
          <p className="text-gray-500">Alamat</p>
        </a>
        <a href="orders">
          <p className="text-gray-500">Histori Pemesanan</p>
        </a>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex w-full gap-10 rounded-xl border p-5">
          <div>
            <div className="max-w-96 overflow-hidden rounded-xl border bg-white p-5 shadow-lg">
              <img
                alt={user.fullName}
                className="w-full"
                src={`http://127.0.0.1:8055/assets/${user.avatar as string}`}
              />
              <div className="py-6 text-center text-xl font-semibold">
                <button className="w-full rounded-lg border p-4" type="button">
                  Pilih Gambar
                </button>
              </div>
            </div>
            <div className="pt-6 text-center text-lg font-semibold">
              <button className="w-full rounded-xl border border-gray-300 p-5" type="button">
                Total Points: {user.totalPoints}
              </button>
            </div>
          </div>

          <Formik
            initialValues={{
              fullName: user.fullName,
              dob: user.dob,
              gender: user.gender,
            }}
            onSubmit={async (values) => {
              const status = await updateUserProfile(accessToken, values);
              if (status) {
                alert("Profil berhasil diperbarui");
              } else {
                alert("Gagal memperbarui profil");
              }
            }}
            validationSchema={toFormikValidationSchema(Schema)}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="">
                  <div className="text-lg font-semibold text-gray-500">
                    <h3>Profil Saya</h3>
                    <div className="py-2">
                      <label className="font-normal" htmlFor="fullName">
                        Nama
                      </label>
                      <Field
                        className="w-full rounded-xl border p-2"
                        defaultValue={user.fullName}
                        id="fullName"
                        name="fullName"
                        type="text"
                      />
                    </div>
                    <div className="py-2">
                      <label className="font-normal" htmlFor="dob">
                        Tanggal Lahir
                      </label>
                      <Field
                        className="w-full rounded-xl border p-2"
                        defaultValue={user.dob}
                        id="dob"
                        name="dob"
                        type="date"
                      />
                    </div>
                    <div className="py-2">
                      <label className="font-normal" htmlFor="gender">
                        Jenis Kelamin
                      </label>
                      <Field
                        as="select"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm  "
                        id="gender"
                        name="gender"
                      >
                        <option selected={user.gender === "M"} value="m">
                          Laki-laki
                        </option>
                        <option selected={user.gender === "F"} value="f">
                          Perempuan
                        </option>
                      </Field>
                    </div>
                  </div>
                  <div className="py-6 text-lg font-semibold text-gray-500">
                    <h3>Kontak Saya</h3>
                    <div className="py-2">
                      <label className="font-normal" htmlFor="email">
                        Email
                      </label>
                      <p>{user.email}</p>
                    </div>
                    <div className="py-2">
                      <label className="font-normal" htmlFor="phone">
                        Nomor HP
                      </label>
                      <div className="flex gap-4 font-normal">
                        <p>{user.phoneNumber}</p>
                        <p className="text-base underline">Ubah No. HP</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-40 rounded-xl bg-[#41B06E] p-3 font-semibold text-white"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Simpan
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Profile;
