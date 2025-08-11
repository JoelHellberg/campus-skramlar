"use client";
import { ReactNode, useState } from "react";
import { useLoaderData } from "./loaderData";

type Props = {
  children: ReactNode;
};

export default function LoaderTrigger({ children }: Props) {
  const startLoader = useLoaderData((state) => state.startLoader);
  return <div onClick={startLoader}>{children}</div>;
}
