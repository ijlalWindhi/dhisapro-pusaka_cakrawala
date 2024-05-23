"use client";
import React from "react";
import { useGlobalStore } from "@/providers/global-store-providers";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function DialogTutorial() {
  const { isModalTutorialOpen, setIsModalTutorialOpen } = useGlobalStore(
    (state) => state
  );

  return (
    <Dialog
      open={isModalTutorialOpen}
      onOpenChange={() => setIsModalTutorialOpen(!isModalTutorialOpen)}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl font-semibold font-vast-shadow text-red-500">
            Informasi
          </DialogTitle>
          <DialogDescription>
            <span className="font-semibold">Halo, Penjelajah Budaya!</span>
            <br />
            <br />
            Selamat datang di website{" "}
            <span className="text-red-500 font-vast-shadow font-medium">
              Pusaka Cakrawala
            </span>
            <br />
            Senang bertemu Anda di Pusaka Cakrawala. Mari bersama-sama
            mengungkap pesona budaya Indonesia yang kaya dan beragam.
            <br />
            <br /> Cukup klik pulau di peta interaktif kami, dan biarkan diri
            Anda terpesona oleh keindahan Nusantara.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="default"
            onClick={() => setIsModalTutorialOpen(!isModalTutorialOpen)}
          >
            Mulai Jelajah
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogTutorial;
