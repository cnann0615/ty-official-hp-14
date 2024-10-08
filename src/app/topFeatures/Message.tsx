"use client";
import Image from "next/image";
import Link from "next/link";

import Earth from "./Earth";
import { Animation } from "../components/Animation";

// トップページのメッセージ部分

function Message() {
  return (
    <div className=" text-gray-100 font-bold mt-10 mb-16 md:mb-24">
      {/* メッセージ１ */}
      <Animation
        animation="fadeInUp"
        rootMargin="-100px"
        data-testid="animation"
      >
        <h1 className=" text-lg sm:text-4xl lg:text-5xl xl:text-7xl text-center mt-16 mb-8 md:mt-28 md:mb-20 xl:my-28 ">
          ”人はいつからでも、何にでもなれる。”
        </h1>
      </Animation>

      {/* メッセージ２ */}
      <div className="z-0 mb-10 md:mb-28 ">
        <div className=" relative ">
          {/* 3Dモデル */}
          <div>
            <Earth />
          </div>
          <div className=" w-full absolute  top-[30%] lg:top-[20%] xl:top-[10%]  ">
            <Animation animation="fadeInUp" rootMargin="-100px">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:leading-relaxed text-center xl:text-left xl:ml-28 ">
                <div className="inline-block xl:block">
                  新卒入社後
                  <span className="text-yellow-500">9ヶ月で退職</span>し
                </div>
                <div className="inline-block xl:block">
                  <span className="text-yellow-500">カナダ🇨🇦</span>に出発。
                </div>
                <div className="inline-block xl:block">
                  半年間、日本を離れ、
                </div>
                <div className="inline-block xl:inline">
                  国を超え
                  <span className="text-yellow-500">ラクロスの本場</span>
                  である
                </div>
                <div className="inline-block xl:inline">
                  <span className="text-yellow-500">カナダ</span>
                  での修行を決意。
                </div>
              </h1>
            </Animation>
          </div>
        </div>
      </div>

      {/* メッセージ３ */}
      <div>
        <Animation animation="fadeInUp" rootMargin="-100px">
          <div className=" z-10 mt-18 xl:mt-24 xl:flex ">
            <div className=" flex items-center justify-center mb-20 lg:mb-36 w-full xl:w-1/2 ">
              {/* 画像サイズがmd以下の時 */}
              <div className="relative md:hidden ">
                <Link href={"/gallery"} className="">
                  <Image
                    src="/images/top/img7.jpeg"
                    alt="Athlete"
                    width={290}
                    height={190}
                    className=" rounded-xl border-4 border-black rotate-12 absolute top-0 left-0"
                  ></Image>
                  <div className="bg-black bg-opacity-60 opacity-100 rounded-xl rotate-12 w-[290px] h-[355px] absolute top-0 left-0 "></div>

                  <Image
                    src="/images/top/img8.jpeg"
                    alt="Athlete"
                    width={290}
                    height={190}
                    className="rounded-xl border-4 border-black -rotate-12"
                  ></Image>
                  {/* ホバーされた時に薄暗くするための要素 */}
                  <div className=" bg-black rounded-xl bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 -rotate-12 flex items-center justify-center w-[290px] h-[430px] absolute top-0 left-0 z-20">
                    <h2 className=" text-5xl rotate-12">Gallery</h2>
                  </div>
                </Link>
              </div>

              {/* 画像サイズがmd以上の時 */}
              <div className="relative hidden md:block ">
                <Link href="/gallery" className="relative inline-block">
                  <Image
                    src="/images/top/img7.jpeg"
                    alt="Athlete"
                    width={400}
                    height={300}
                    className="rounded-xl border-4 border-black rotate-12 absolute top-0 left-0"
                  />
                  <div className="bg-black rounded-xl bg-opacity-60 opacity-100 rotate-12 w-[400px] h-[493px] absolute top-0 left-0 "></div>
                  <Image
                    src="/images/top/img8.jpeg"
                    alt="Athlete"
                    width={400}
                    height={300}
                    className="rounded-xl border-4 border-black -rotate-12"
                  />
                  {/* ホバーされた時に薄暗くするための要素 */}
                  <div className="bg-black rounded-xl -rotate-12 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-[400px] h-[596px] absolute top-0 left-0 z-20">
                    <h2 className=" text-5xl rotate-12 ">Gallery</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex items-center mb-20 xl:mb-0 w-full xl:w-1/2 ">
              <div className=" text-center mx-auto xl:mx-0 xl:text-left">
                <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl:leading-relaxed mb-4">
                  2028年
                  <br />
                  <span className=" text-yellow-500">LAオリンピック</span>
                  日本代表を
                  <br />
                  目指して挑戦中。
                </h1>
                <Link
                  href="/profile"
                  className="text-lg sm:text-lg md:text-3xl lg:text-4xl font-bold bg-black hover:bg-yellow-500 hover:text-black rounded-lg py-2 px-4 "
                >
                  Profile　　→
                </Link>
              </div>
            </div>
          </div>
        </Animation>

        {/* メッセージ４ */}
        <div className=" xl:flex">
          <div className="w-full xl:w-1/2">
            <Animation animation="zoomIn" rootMargin="-100px">
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
          <div className="flex items-center w-full xl:w-1/2 xl:pl-20 mt-20 xl:mt-0 ">
            <div className=" mx-auto xl:mx-0 text-center xl:text-left">
              <Animation animation="fadeInUp" rootMargin="-100px">
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
