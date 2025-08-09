"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoaded, setIsLoaded] = useState(false);

  // After first render, wait a bit then show content
  useEffect(() => {
    // Use requestAnimationFrame + timeout to wait for paint/layout
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 100); // 100ms delay to ensure stable layout
    });
  }, []);
  return (
    <div
      className="bg-yellow-400"
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
      <p>Loading...</p>
    </div>
  );
}
