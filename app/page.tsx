"use client";
import { useEffect } from "react";

import Image from "next/image";

import DialogProvince from "@/components/shared/dialogProvince";
import Map from "@/components/shared/map";

export default function Home() {
  useEffect(() => {
    if (window.screen.width < 900) {
      alert(
        "Website ini hanya tersedia untuk desktop atau ukuran layar lebih dari 900px"
      );
    }
  }, []);

  return (
    <main className="flex flex-col justify-center relative items-center min-h-screen w-full bg-white text-white">
      <h1 className="font-semibold text-5xl text-[#ff0000] absolute top-14 z-10">
        Pusaka Cakrawala
      </h1>
      <div className="w-[80%] z-10">
        <Map />
      </div>
      <DialogProvince />
      <Image
        src={"/images/bg.png"}
        alt="background"
        fill
        className="absolute object-cover object-center opacity-80"
      />
    </main>
  );
}
