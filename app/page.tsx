"use client";
import { useEffect } from "react";

import Image from "next/image";

import DialogProvince from "@/components/shared/dialogProvince";
import DialogWarning from "@/components/shared/dialogWarning";
import DialogTutorial from "@/components/shared/dialogTutorial";
import Map from "@/components/shared/map";
import { useGlobalStore } from "@/providers/global-store-providers";

export default function Home() {
  const { setIsModalWarningOpen, setIsModalTutorialOpen } = useGlobalStore(
    (state) => state
  );
  useEffect(() => {
    if (window.screen.width < 900) {
      setIsModalWarningOpen(true);
    }
    setIsModalTutorialOpen(true);
  }, []);

  return (
    <main className="flex flex-col justify-center relative items-center min-h-screen w-full bg-white text-white">
      <h1 className="font-semibold text-5xl text-[#ff0000] absolute top-14 z-10 font-vast-shadow">
        Pusaka Cakrawala
      </h1>
      <div className="w-[80%] z-10">
        <Map />
      </div>
      <DialogProvince />
      <DialogWarning />
      <DialogTutorial />
      <Image
        src={"/images/bg.png"}
        alt="background"
        fill
        className="absolute object-cover object-center opacity-80"
      />
    </main>
  );
}
