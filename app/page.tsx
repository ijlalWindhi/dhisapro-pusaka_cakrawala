import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center relative items-center min-h-screen w-full bg-black text-white">
      <h1 className="font-semibold text-2xl absolute top-14">
        Pusaka Cakrawala
      </h1>
      <Image
        src="/images/map.svg"
        alt="Pusaka Cakrawala"
        layout="fill"
        objectFit="contain"
        priority
      />
    </main>
  );
}
