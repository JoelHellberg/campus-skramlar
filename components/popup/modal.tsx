import { Dialog } from "@headlessui/react";
import { useRef, ReactNode } from "react";

type PopUpProps = {
  onClose?: () => void;
  children: ReactNode;
};

export function Modal({ onClose = () => {}, children }: PopUpProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-50 flex
      flex-col-reverse lg:flex-row lg:items-center lg:justify-center"
    >
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-gray-800/60"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="relative flex items-center justify-center z-20">
        {children}
      </div>
    </Dialog>
  );
}
