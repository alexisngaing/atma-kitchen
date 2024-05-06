import React from "react";

const Address = () => {
  return (
    <>
      <div className="py-16 md:px-24 lg:px-64">
        <h1 className="text-center font-medium text-3xl pb-6">Alamat</h1>
        <div className="flex gap-6 justify-center items-center">
          <div className="bg-[#E5C287] max-w-md rounded-xl overflow-hidden shadow-lg">
            <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
              Jl. Raya Ciputat Parung No. 10
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
