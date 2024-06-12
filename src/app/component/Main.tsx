"use client";
import { TimeFadeIn } from "./Animation";
import { ImageSlider } from "./ImageSlider";

function Main() {
  // メイン画像
  const images = [
    "/images/top/img4.jpg",
    "/images/top/img5.jpg",
    "/images/top/img6.jpg",
  ];
  return (
    <div className=" relative">
      <div className=" w-full ">
        <ImageSlider images={images} />
      </div>
      <div className=" absolute bottom-4 left-2">
        <TimeFadeIn time="500">
          <div className=" animate-slide-in-left">
            <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-bold underline italic decoration-yellow-500 decoration-4 sm:decoration-8 lg:decoration-16">
              夢を持ち、
              <br />
              実現に向け一歩踏み出す勇気！！
            </h1>
          </div>
        </TimeFadeIn>
      </div>
    </div>
  );
}

export default Main;
