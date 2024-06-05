"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "animate.css";

export const ImageSlider = ({ images }: { images: string[] }) => {
  // 表示する画像のindexを管理
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // フェーディングを管理
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 4秒おきに画像を切り替える
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    // ページを離れるときにインターバル内の処理を終了する
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-[250px] md:h-[400px] lg:h-[800px]">
      {images.map((image: string, index: number) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
            className="border-4 border-black rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};
