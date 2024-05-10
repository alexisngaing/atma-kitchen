"use client";

import { getUserAddresses } from "@/services";
import { Address } from "@/types";
import { Field, Form, Formik } from "formik";
import { FilePenLine, Plus, Trash2 } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { z } from "zod";

const position = [51.505, -0.09];

const Schema = z.object({
  recipient_name: z.string(),
  phone_number: z.string(),
  address: z.string(),
  geo: z.string(),
  is_primary: z.boolean(),
});

const UserAddress: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken") as string;

  useEffect(() => {
    const fetch = async () => {
      const data = await getUserAddresses(accessToken);
      setAddress(data);
      setIsLoading(false);
    };

    fetch().catch(() => {});
  }, [accessToken]);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto w-7/12 py-6 lg:w-4/12">
              <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                <Formik
                  initialValues={{
                    recipient_name: "",
                    phone_number: "",
                    address: "",
                    geo: "",
                    is_primary: true,
                  }}
                  onSubmit={async (values) => {
                    console.log(values);
                  }}
                  validationSchema={Schema}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                        <h3 className="text-3xl font-semibold">Tambahkan Alamat</h3>
                      </div>
                      <div className="relative flex-auto p-6">
                        <div className="flex flex-col gap-4">
                          <div>
                            <label className="block pb-2" htmlFor="name">
                              Nama Penerima
                            </label>
                            <Field
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-2"
                              defaultValue={address?.recipient_name}
                              id="recipient_name"
                              name="recipient_name"
                              type="text"
                            />
                          </div>
                          <div>
                            <label className="block pb-2" htmlFor="phone">
                              Nomor Telepon
                            </label>
                            <Field
                              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-2"
                              defaultValue={address?.phone_number}
                              id="phone_number"
                              name="phone_number"
                              type="text"
                            />
                          </div>
                          <div>
                            <label className="block pb-2" htmlFor="address">
                              Alamat
                            </label>
                            <Field
                              as="textarea"
                              className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm"
                              defaultValue={address?.address}
                              id="address"
                              placeholder="Alamat Lengkap"
                              rows={4}
                            />
                          </div>
                          <div>
                            <label htmlFor="is_primary">
                              <Field
                                className="mr-2"
                                id="is_primary"
                                name="is_primary"
                                type="checkbox"
                              />
                              Jadikan Alamat Utama
                            </label>
                          </div>
                          {/* <MapContainer
                            className=""
                            center={position}
                            scrollWheelZoom={false}
                            zoom={13}
                          >
                            <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Leaflet.js'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                              <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                              </Popup>
                            </Marker>
                          </MapContainer> */}
                        </div>
                      </div>
                      <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                        <button
                          className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                          onClick={() => {
                            setShowModal(false);
                          }}
                          type="button"
                        >
                          Keluar
                        </button>
                        <button
                          className="mb-1 mr-1 rounded-xl bg-[#41B06E] px-6 py-3 text-sm font-bold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                          disabled={isSubmitting}
                          onClick={() => {
                            setShowModal(false);
                          }}
                          type="button"
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
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
      <div className="mx-auto w-9/12 pb-72 pt-32 lg:w-5/12">
        <div className="flex gap-4 pb-4 font-semibold">
          <a href="me">
            <p className="text-gray-500">Profil</p>
          </a>
          <a href="addresses">
            <p className="text-[#41B06E]">Alamat</p>
          </a>
          <a href="orders">
            <p className="text-gray-500">Histori Pemesanan</p>
          </a>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="h-96 w-full gap-10 rounded-xl border p-5">
            <div className="flex justify-between pb-6">
              <h3 className="flex items-center text-xl font-semibold text-gray-500">Alamat Saya</h3>
              <button
                className="flex items-center gap-2 rounded-xl bg-[#41B06E] p-3 font-semibold text-white"
                onClick={() => {
                  setShowModal(true);
                }}
                type="button"
              >
                <Plus />
                Tambah Alamat
              </button>
            </div>
            <div className="border" />
            {address?.map((address, index) => (
              <div key={index} className="flex justify-between">
                <div className="w-3/6 pt-6">
                  <div className="flex gap-6">
                    <h3 className="font-semibold">{address.recipientName}</h3>
                    <div className="border border-gray-500" />
                    <h3>{address.phoneNumber}</h3>
                  </div>
                  <div className="pt-3">
                    <p>{address.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center rounded-lg bg-green-500 p-1 text-white">
                    <FilePenLine />
                  </button>
                  <button className="flex items-center rounded-lg bg-red-500 p-1 text-white">
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
            {address?.length === 0 && (
              <p className="text-center text-xl font-semibold">
                Belum ada alamat yang ditambahkan.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
