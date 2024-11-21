"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay className="opacity-0">
        <DialogContent className="overflow-y-hidden">
          <VisuallyHidden>
            <DialogTitle />
          </VisuallyHidden>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
