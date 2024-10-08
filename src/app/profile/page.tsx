"use client";
import Image from "next/image";

import { Animation, TimeFadeIn } from "../components/Animation";

// プロフィールページ

export default function Profile() {
  return (
    <div className="container mx-auto px-4 mb-28">
      {/* タイトル */}
      <div className="text-center mt-12 mb-16 md:mb-24">
        <h1 className="font-bold underline underline-offset-4 decoration-yellow-500 decoration-4 text-xl md:text-4xl">
          2028 LAオリンピックを目指す
          <br className="md:hidden" />
          ラクロス選手のカナダ挑戦🇨🇦
        </h1>
      </div>

      {/* プロフィール画像＋プロフィール */}
      <div className="text-md md:text-xl flex flex-col xl:flex-row xl:space-x-8 mb-28 ">
        {/* プロフィール画像 */}
        <div className="xl:w-1/2">
          <TimeFadeIn time="500" direction="left">
            <Image
              src={"/images/top/img9.jpg"}
              alt={"athlete"}
              layout="responsive"
              width={700}
              height={500}
              className="rounded-lg shadow-lg border-4 border-black"
              priority={true}
            />
          </TimeFadeIn>
        </div>
        {/* プロフィール */}
        <div className="text-left mt-8 xl:mt-0 xl:w-1/2">
          <TimeFadeIn time="500" direction="right">
            {/* 画面サイズがlg以上の時 */}
            <table className="border-collapse hidden lg:block table-auto w-full ">
              <tbody>
                <tr>
                  <th className="text-yellow-400 px-4 py-6 ">名前</th>
                  <td className=" px-4 py-6">山田　哲也</td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">生年月日</th>
                  <td className=" px-4 py-6">2000年11月20日</td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">血液型</th>
                  <td className=" px-4 py-6">B型</td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">現所属</th>
                  <td className=" px-4 py-6">
                    <p className="font-bold text-yellow-300">日本</p>
                    <p>FALCONS　LACROSSE　CLUB</p>
                    <p className="font-bold text-yellow-300">カナダ</p>
                    <p>Hamilton　Sr.B　Bengals</p>
                  </td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">ポジション</th>
                  <td className=" px-4 py-6">フォワード</td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">出身地</th>
                  <td className=" px-4 py-6">東京都　江戸川区</td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">身長 / 体重</th>
                  <td className=" px-4 py-6">188cm / 100kg</td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">出身校</th>
                  <td className=" px-4 py-6">
                    <p className="font-bold text-yellow-300">中学</p>
                    <p className="pb-3">江戸川区立　篠崎第二中学校</p>
                    <p className="font-bold text-yellow-300">高校</p>
                    <p className="pb-3">法政大学第二高等学校　硬式テニス部</p>
                    <p className="font-bold text-yellow-300">大学</p>
                    <p>法政大学　経済学部　体育会ラクロス部</p>
                  </td>
                </tr>
                <tr>
                  <th className=" text-yellow-400 px-4 py-6">戦績</th>
                  <td className=" px-4 py-6">
                    <p className="font-bold text-yellow-300">大学</p>
                    <p>関東学生リーグ部1部</p>
                    <p className="pb-3">昇格22歳以下日本代表</p>
                    <p className="font-bold text-yellow-300">社会人</p>
                    <p>2023</p>
                    <p>男子ラクロス日本代表 (練習生)</p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* 画面サイズがlg以下の時 */}
            <div className="border-collapse table-auto w-full lg:hidden ">
              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0">
                  名前
                </h3>
                <p className=" px-4 pb-6">山田　哲也</p>
              </div>
              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0">
                  生年月日
                </h3>
                <p className=" px-4 pb-6">2000年11月20日</p>
              </div>
              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0">
                  血液型
                </h3>
                <p className=" px-4 pb-6">B型</p>
              </div>
              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0 pb-3">
                  現所属
                </h3>
                <p className="font-bold text-yellow-300 px-4 pb-3">日本</p>
                <p className="px-4 pb-3">FALCONS　LACROSSE　CLUB</p>
                <p className="font-bold text-yellow-300 px-4 pb-3">カナダ</p>
                <p className="px-4 pb-6">Hamilton　Sr.B　Bengals</p>
              </div>
              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0">
                  ポジション
                </h3>
                <p className=" px-4 pb-6">フォワード</p>
              </div>

              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0">
                  出身地
                </h3>
                <p className=" px-4 pb-6">東京都　江戸川区</p>
              </div>
              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0">
                  身長 / 体重
                </h3>
                <p className=" px-4 pb-6">188cm / 100kg</p>
              </div>
              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0 pb-3">
                  出身校
                </h3>
                <p className=" font-bold text-yellow-300 px-4 pb-3">中学</p>
                <p className=" px-4 pb-3">江戸川区立　篠崎第二中学校</p>
                <p className=" font-bold text-yellow-300 px-4 pb-3">高校</p>
                <p className=" px-4 pb-3">法政大学第二高等学校　硬式テニス部</p>
                <p className=" font-bold text-yellow-300 px-4 pb-3">大学</p>
                <p className=" px-4 pb-6">
                  法政大学　経済学部　経済学科　体育会ラクロス部
                </p>
              </div>

              <div>
                <h3 className=" text-yellow-400 font-bold underline px-4 py-0 pb-3">
                  戦績
                </h3>
                <p className=" font-bold text-yellow-300 px-4 pb-3">大学</p>
                <p className=" px-4 pb-3">
                  関東学生リーグ部1部　昇格、22歳以下日本代表
                </p>
                <p className=" font-bold text-yellow-300 px-4 pb-3">社会人</p>
                <p className=" px-4 pb-6">
                  2023　男子ラクロス日本代表 (練習生)
                </p>
              </div>
              <div></div>
            </div>
          </TimeFadeIn>
        </div>
      </div>

      {/* メッセージ */}
      <div
        className="text-lg md:text-2xl space-y-8 text-center "
        style={{ lineHeight: "2em" }}
      >
        {/* タイトル */}
        <h1 className="text-yellow-400 font-bold text-3xl md:text-5xl my-20 ">
          キッカケ
        </h1>

        {/* 内容 */}
        <Animation animation="fadeInUp" rootMargin="-100px">
          <p>
            高校時代に所属していたテニス部では一度も団体戦に出たことがありません。
            <br />
            練習中は時間が過ぎるのをただ待っていました。
            <br />
            マイナスな発言ばかりで周りにも迷惑を掛けていました。
          </p>
          <br />
        </Animation>
        <Animation animation="fadeInUp" rootMargin="-100px">
          <p>
            そんな過去がある弱い自分でも、大学から始めたスポーツでオリンピックメダリストになることを目指しています。
          </p>
          <br />
        </Animation>
        <Animation animation="fadeInUp" rootMargin="-100px">
          <p className=" text-xl md:text-3xl ">
            <span className="block font-semibold">『夢中を大切に』</span>
            <br />
            <span className="block font-semibold">
              『夢を持ち、実現に向け一歩踏み出す勇気』
            </span>
            <br />
            <span className="block font-semibold">
              『人はいつからでも何にでもなれる』
            </span>
          </p>
          <br />
          <br />
        </Animation>
        <Animation animation="fadeInUp" rootMargin="-100px">
          <p>
            目標達成に向けて挑戦する姿、成長や思考、環境が変化する過程を発信することで
            <br />
            1人でも多くの人に自分の想いを伝えられたら嬉しいです。
            <br />
            誰かの人生が豊かになるキッカケになれることを願います。
          </p>
          <br />
        </Animation>
        <Animation animation="fadeInUp" rootMargin="-100px">
          <p className="italic text-center mr-4">by Tetsuya.Y</p>
          <br />
        </Animation>
        <Animation animation="fadeInUp" rootMargin="-100px">
          <div className="mb-6 flex justify-center">
            <Image
              src={"/images/top/img4.jpg"}
              alt={"athlete"}
              width={450}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
        </Animation>
      </div>
    </div>
  );
}
