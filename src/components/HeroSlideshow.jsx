"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const photos = [
  { src: "/photos/solar-1.png", kb: "kb-1" },
  { src: "/photos/solar-2.png", kb: "kb-2" },
  { src: "/photos/solar-3.png", kb: "kb-3" },
  { src: "/photos/solar-4.png", kb: "kb-4" },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover ${photo.kb}`}
            aria-hidden="true"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
    </div>
  );
}
