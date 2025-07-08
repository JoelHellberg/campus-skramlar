"use client";

import { useEffect, useState } from "react";

type Props = {
  target: number,
};

export default function Counter(props : Props) {
  const [count, setCount] = useState(0);
  const duration = 4000; // in ms

  useEffect(() => {
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * props.target);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <h1 className="text-5xl font-bold">
      {count.toLocaleString("sv-SE")} kr
    </h1>
  );
}
