"use client";

import { useEffect, useRef, useState } from "react";

export default function Cloud() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    },
    { threshold: 1.0 }
  );

  const currentRef = ref.current;
  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, []);


  return (
    <div
      ref={ref}
      className={`absolute top-5 left-5 transform -translate-x-1/2 -translate-y-1/2
        w-60 h-50 bg-[url('/vectorGraphics/cloud.svg')] bg-contain bg-no-repeat bg-center z-20
        flex items-center justify-center text-center p-5 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${visible ? 'scale-100' : 'scale-0'}
      `}
    >
      <h2 className="!text-2xl !font-bold">Hur kan du bidra?</h2>
    </div>
  );
}
