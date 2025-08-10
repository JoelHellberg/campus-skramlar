"use client";

import { useEffect, useState } from "react";

export default function LoadingSimple() {
  return (
    <div
      className="bg-yellow-400"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        transition: "opacity 0.5s ease",
        pointerEvents: "none",
      }}
    >
      <p>Loading...</p>
    </div>
  );
}
