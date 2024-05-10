import { getAllProducts } from "@/services";

const Recommendations = async () => {
  const products = await getAllProducts();
  return (
    <div className="py-16 md:px-24 lg:px-64">
      <h1 className="pb-6 text-center text-3xl font-medium">Rekomendasi</h1>
      <div className="flex items-center justify-center gap-6 text-white">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="max-w-2xl overflow-hidden rounded-xl bg-[#41B06E] shadow-lg"
            >
              <a href="#">
                <img
                  className="h-64 w-64"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  src={`${process.env.NEXT_PUBLIC_API_URL as string}/assets/${product.image as string}`}
                />
                <div className="mb-2 px-6 py-6 text-center text-2xl first-line:font-semibold">
                  {product.name}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
