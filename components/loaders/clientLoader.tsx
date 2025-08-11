"use client";
import DefaultLoader from "@/components/loaders/defaultLoader";
import { useEffect, useState } from "react";
import { useLoaderData } from "./loaderData";

type Props = { delay?: number };

export default function ClientLoader({ delay = 0 }: Props) {
  const loading = useLoaderData((state) => state.loading);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (loading) {
      timeoutId = setTimeout(() => {
        setIsActive(true);
      }, delay * 1000);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      setIsActive(false);
    }
    return () => clearTimeout(timeoutId);
  }, [loading]);
  return <>{isActive && <DefaultLoader />}</>;
}
