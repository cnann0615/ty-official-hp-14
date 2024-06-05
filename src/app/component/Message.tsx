"use client";
import Earth from "./Earth";
import { Animation } from "./Animation";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Message() {
  const [selectImg, setSelectImg] = useState(true);

  return (
    <div className=" text-gray-100 font-bold mt-10 mb-16 md:mb-36 ">
      <Animation animation="fadeInUp" rootMargin="-200px">
        <h1 className=" mt-12 mb-20 xl:mt-28 xl:mb-40 text-center text-lg sm:text-4xl lg:text-5xl xl:text-7xl">
          ”人はいつからでも、何にでもなれる。”
        </h1>
      </Animation>
      <div>
        <Animation animation="fadeInUp" rootMargin="-300px">
          <div className=" xl:flex -mb-[100px] xl:-mb-[200px]">
            <div className=" mb-20 lg:mb-36 w-full xl:w-1/2 flex items-center justify-center ">
              <div className=" md:hidden relative">
                <Image
                  src="/images/top/img7.jpeg"
                  alt="Athlete"
                  width={290}
                  height={190}
                  className={`rounded-xl border-4 border-black rotate-12 absolute top-0 left-0 ${
                    selectImg ? "z-10" : "z-0"
                  }`}
                  onClick={() => setSelectImg(!selectImg)}
                ></Image>
                <Image
                  src="/images/top/img8.jpeg"
                  alt="Athlete"
                  width={290}
                  height={190}
                  className="rounded-xl border-4 border-black -rotate-12"
                  onClick={() => setSelectImg(!selectImg)}
                ></Image>
              </div>
              <div className=" hidden md:block relative">
                <Image
                  src="/images/top/img7.jpeg"
                  alt="Athlete"
                  width={400}
                  height={300}
                  className={`rounded-xl border-4 border-black rotate-12 absolute top-0 left-0 ${
                    selectImg ? "z-10" : "z-0"
                  }`}
                  onClick={() => setSelectImg(!selectImg)}
                ></Image>
                <Image
                  src="/images/top/img8.jpeg"
                  alt="Athlete"
                  width={400}
                  height={300}
                  className="rounded-xl border-4 border-black -rotate-12"
                  onClick={() => setSelectImg(!selectImg)}
                ></Image>
              </div>
            </div>

            <div className="w-full xl:w-1/2 flex items-center">
              <div className=" mx-auto xl:mx-0 text-center xl:text-left">
                <h1 className=" mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:leading-relaxed">
                  2028年{selectImg}
                  <br />
                  <span className=" text-yellow-500">LAオリンピック</span>
                  日本代表を
                  <br />
                  目指して挑戦中。
                </h1>
                <Link
                  href="/profile"
                  className="rounded-lg py-2 px-4 text-lg sm:text-lg md:text-3xl lg:text-4xl font-bold bg-black hover:bg-yellow-500 hover:text-black"
                >
                  Profile　　→
                </Link>
              </div>
            </div>
          </div>
        </Animation>
        <div className="mb-12 xl:mb-24">
          <div className=" relative ">
            <div className=" md:truncate">
              <Earth />
            </div>
            <div className=" text-center xl:text-left absolute  top-[35%] lg:top-[40%] xl:top-[34%] left-0">
              <Animation animation="fadeInUp" rootMargin="-200px">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:leading-relaxed">
                  新卒入社後
                  <span className="text-yellow-500">9ヶ月で退職</span>し
                  <br />
                  <span className="text-yellow-500">カナダ🇨🇦</span>に出発。
                  <br />
                  半年間、日本を離れ、
                  <br />
                  国を超え、
                  <span className="text-yellow-500">ラクロスの本場</span>
                  である<span className="text-yellow-500">カナダ</span>
                  での修行を決意。
                </h1>
              </Animation>
            </div>
          </div>
        </div>

        <div className=" xl:flex -mt-[150px]  xl:-mt-[100px]">
          <div className="w-full xl:w-1/2">
            <Animation animation="zoomIn" rootMargin="-300px">
              <Image
                src="/images/top/img3.jpeg"
                alt="Athlete"
                layout="responsive"
                width={250}
                height={120}
                className="rounded-xl border-4 border-black"
              ></Image>
            </Animation>
          </div>
          <div className="w-full xl:w-1/2 xl:pl-20 mt-20 xl:mt-0 flex items-center ">
            <div className=" mx-auto xl:mx-0 text-center xl:text-left">
              <Animation animation="fadeInUp" rootMargin="-300px">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:leading-relaxed">
                  目標達成に向けて
                  <br />
                  <span className="text-yellow-500">挑戦する姿</span>、
                  <br />
                  <span className="text-yellow-500">成長</span>や
                  <span className="text-yellow-500">思考</span>、
                  <br />
                  <span className="text-yellow-500">環境が変化する過程</span>
                  を発信。
                </h1>
              </Animation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
