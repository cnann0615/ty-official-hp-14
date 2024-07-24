"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "animate.css";

// 画像スライドショー（引数で受け取った画像をスライドショーで表示する）
export const ImageSlider = ({ images }: { images: string[] }) => {
  // 画像読み込みの未済をStateで管理
  const [imageLoaded, setImageLoaded] = useState<boolean[]>([]);

  // 画像読み込み状態の初期化
  useEffect(() => {
    setImageLoaded(new Array(images.length).fill(false));
  }, [images]);

  // 画像読み込みが完了したらこのメソッドが呼ばれる（CSSアニメーションが動く）
  const handleImageLoad = (index: number) => {
    setImageLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  // スライドショーの現在の画像のindexをStateで管理
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
      {images.map((image: string, index: number) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentImageIndex && imageLoaded[index]
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
            className="border-4 border-black rounded-xl"
            // 画像のロードが完了すると発火する
            onLoadingComplete={() => handleImageLoad(index)}
            priority={true}
          />
        </div>
      ))}
    </div>
  );
};
