"use client";
import { useGlobalStore } from "@/providers/global-store-providers";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CarouselProvince from "./carouselProvince";

export default function DialogProvince() {
  const { isModalOpen, setIsModalOpen, selectedProvince } = useGlobalStore(
    (state) => state
  );
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={() => setIsModalOpen(!isModalOpen)}
    >
      <DialogContent className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl overflow-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl font-semibold font-vast-shadow text-red-500">
            Provinsi <span className="capitalize">{selectedProvince}</span>
          </DialogTitle>
        </DialogHeader>
        <CarouselProvince />
      </DialogContent>
    </Dialog>
  );
}
