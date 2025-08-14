"use client";
import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export default function PopupButton(props: Props) {
  return (
    <button
      className={`w-40 p-2 aspect-video cursor-pointer rounded-2xl outline-4 font-bold shadow-xl/20 transform transition-all duration-300 hover:scale-105 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
