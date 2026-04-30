"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const initialLogos = [
  "/images/logo-1.png",
  "/images/logo-2.png",
  "/images/logo-3.png",
  "/images/logo-4.png",
  "/images/logo-5.png",
  "/images/logo-6.png",
];

export default function LogoSliderSection() {
  const [logos, setLogos] = useState(initialLogos);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) {
        return;
      }

      slider.style.transition = "transform 0.6s ease";
      slider.style.transform = "translateX(-180px)";

      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0px)";
        setLogos((current) => {
          const [first, ...rest] = current;
          return [...rest, first];
        });
      }, 600);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#e4e7ee] py-6">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div ref={sliderRef} className="flex items-center gap-10">
          {logos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex min-w-[180px] justify-center">
              <Image
                src={logo}
                alt="Client logo"
                width={180}
                height={96}
                className="h-14 w-auto object-contain brightness-90 contrast-150 transition hover:opacity-100 md:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
