import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <div className="">
        <Image src="/images/info.jpg" alt="tes" width={500} height={400} />
      </div>
    </main>
  );
}
