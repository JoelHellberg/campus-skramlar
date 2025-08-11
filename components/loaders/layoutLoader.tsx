"use client";

import { useEffect, useState } from "react";

export default function LayoutLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  // After first render, wait a bit then show content
  useEffect(() => {
    // Use requestAnimationFrame + timeout to wait for paint/layout
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);
  return (
    <div
      className="bg-[#FFF0D9]"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transition: "opacity 0.5s ease",
        opacity: isLoaded ? 0 : 1,
        pointerEvents: "none",
      }}
    >
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
