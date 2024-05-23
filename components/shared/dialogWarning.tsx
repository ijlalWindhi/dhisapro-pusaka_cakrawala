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

function DialogWarning() {
  const { isModalWarningOpen, setIsModalWarningOpen } = useGlobalStore(
    (state) => state
  );

  return (
    <Dialog
      open={isModalWarningOpen}
      onOpenChange={() => setIsModalWarningOpen(!isModalWarningOpen)}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl font-semibold font-vast-shadow text-red-500">
            Peringatan
          </DialogTitle>
          <DialogDescription>
            Untuk kenyamanan tampilan, silahkan gunakan perangkat dengan ukuran
            layar lebih dari 900px
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="default"
            onClick={() => setIsModalWarningOpen(!isModalWarningOpen)}
          >
            Tutup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogWarning;
