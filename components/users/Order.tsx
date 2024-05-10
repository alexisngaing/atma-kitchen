"use client";

import TestImg from "@/public/images/info.jpg";
import { getOrders } from "@/services";
import { Order } from "@/types";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { z } from "zod";

const Schema = z.object({
  order_date: z.string(),
  total: z.number(),
  items: z.string(),
});

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken") as string;

  useEffect(() => {
    const fetch = async () => {
      const data = await getOrders(accessToken);
      setOrders(data);
      setFilteredOrders(data);
      setIsLoading(false);
    };

    fetch().catch(() => {});
  }, [accessToken]);

  useEffect(() => {
    // Filter orders based on search query
    const filtered = orders.filter((order) =>
      order.items.some((item) => item.item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    );
    setFilteredOrders(filtered);
  }, [searchQuery, orders]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("1234");

    // Perform search
    const filtered = orders.filter((order) =>
      order.items.some((item) => item.item.name.toLowerCase().includes(searchQuery.toLowerCase())),
    );

    console.log(filtered);
    setFilteredOrders(filtered);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // return <div>Hello {JSON.stringify(orders)}</div>;

  return (
    <div className="mx-auto w-9/12 py-32 lg:w-5/12">
      <div className="flex gap-4 pb-4 font-semibold">
        <a href="me">
          <p className="text-gray-500">Profil</p>
        </a>
        <a href="addresses">
          <p className="text-gray-500">Alamat</p>
        </a>
        <a href="orders">
          <p className="text-[#41B06E]">Histori Pemesanan</p>
        </a>
      </div>
      <div className="flex items-center justify-center gap-6 pb-60">
        <div className="w-full gap-10 rounded-xl border p-5">
          <form className="max-w-md pb-6" onSubmit={handleSearchSubmit}>
            <label
              className="sr-only mb-2 text-sm font-medium text-gray-900"
              htmlFor="default-search"
            >
              Search
            </label>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <input
                className="text-md w-96 rounded-xl border border-gray-300 bg-gray-50 bg-opacity-20 p-4 ps-10 focus:border-[#FDA403] focus:ring-[#FDA403]"
                id="default-search"
                onChange={handleSearchChange}
                name="default-search"
                placeholder="Cari histori pemesanan"
                type="text"
                value={searchQuery}
              />
            </div>
            {/* <button className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white" type="submit">
              Search
            </button> */}
          </form>
          <div className="mb-6 border" />
          {filteredOrders.map((order) => (
            <div key={order.id} className="pb-4">
              <div className="rounded-xl border shadow">
                <div className="flex justify-between p-4">
                  <h3 className="font-semibold">Belanja</h3>
                  <p className="text-gray-500">Tanggal: {order.orderDate}</p>
                </div>
                <div className="border" />
                <div className="flex w-3/6 gap-6 p-4">
                  <Image alt="product-img" className="max-w-20 rounded-xl" src={TestImg} />
                  <div>
                    {order.items.map((item, index) => (
                      <span className="font-semibold" key={index}>
                        {item.item.name}
                        {index !== order.items.length - 1 && ", "}
                      </span>
                    ))}
                    <p className="text-gray-500">Jumlah: {order.items.length}</p>
                    <p className="text-gray-500">Total: {order.total}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {orders.length === 0 && (
            <div className="pt-6 text-center">
              <p className="text-2xl font-bold">Kamu belum pernah belanja.</p>
              <p className="text-lg font-medium text-gray-500">Yuk mulai belanja!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
