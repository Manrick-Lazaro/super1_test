"use client";

import Image from "next/image";
import { useState, JSX, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Banner(): JSX.Element {
  const images = ["/images/banner1.png", "/images/banner2.png"];
  const imagesMobile = ["/images/bannerMobi01.jpg", "/images/bannerMobi02.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChevron, setShowChevron] = useState(false);

  function NextImage(): void {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function previousImage(): void {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      NextImage();
    }, 10000);

    return () => clearInterval(interval);
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-full h-300 overflow-hidden rounded-lg"
      onMouseEnter={() => setShowChevron(true)}
      onMouseLeave={() => setShowChevron(false)}
    >
      <div className="w-[98%] overflow-hidden rounded-lg">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {!isMobile ? (
            <>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={1300}
                  height={300}
                  alt="banner"
                  className="flex-shrink-0 w-full"
                />
              ))}
            </>
          ) : (
            <>
              {imagesMobile.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={664}
                  height={420}
                  alt="banner"
                  className="flex-shrink-0 w-full"
                />
              ))}
            </>
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 flex justify-between items-center px-4 transition-opacity duration-500 ease-in-out ${
          showChevron ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={previousImage}
          className="flex absolute left-0 justify-center items-center rounded-full p-2 bg-[#F47920] w-[28px] h-[63px]"
        >
          <FaChevronLeft color="white" />
        </button>
        <button
          onClick={NextImage}
          className="flex absolute right-0 justify-center items-center rounded-full p-2 bg-[#F47920] w-[28px] h-[63px]"
        >
          <FaChevronRight color="white" />
        </button>
      </div>
    </div>
  );
}
