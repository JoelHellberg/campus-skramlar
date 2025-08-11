"use client";
import DefaultLoader from "@/components/loaders/defaultLoader";
import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "./loaderData";

type Props = { delay?: number };

export default function ClientLoader({ delay = 0 }: Props) {
  const loading = useLoaderData((state) => state.loading);
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (loading) {
      timeoutRef.current = setTimeout(() => {
        setIsActive(true);
      }, delay * 1000);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsActive(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [loading, delay]);

  return <>{isActive && <DefaultLoader />}</>;
}
