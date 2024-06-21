"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "animate.css";

// 画像スライドショー

// スライドショーする画像のパスを配列で受け取る
export const ImageSlider = ({ images }: { images: string[] }) => {
  // 表示する画像のindexを管理
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 4秒おきに画像を切り替える（現在のindex+1を画像の数で割ることでループする）
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    // ページを離れるときにインターバル内の処理を終了する（これがないとずっと裏でインターバルが動いてしまう。）
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-[250px] md:h-[400px] lg:h-[800px]">
      {/* 画像を展開し、indexがcurrentImageIndexと一致した場合にopacity-100となり画像が表示される。 */}
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
