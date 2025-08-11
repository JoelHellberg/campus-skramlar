"use client";
import DefaultLoader from "@/components/loaders/defaultLoader";
import { useEffect, useState } from "react";
import { useLoaderData } from "./loaderData";

type Props = { delay?: number };

export default function ClientLoader({ delay = 0 }: Props) {
  const loading = useLoaderData((state) => state.loading);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (loading) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [loading]);
  return <>{isActive && <DefaultLoader />}</>;
}
