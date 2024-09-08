"use client";
import Link from "next/link";

import { Animation } from "../components/Animation";

// トップページのブログ部分

// 日付をYYYY/MM/DD hh:mmにフォーマットする関数
export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(new Date(dateString));
};

// 親コンポーネントからブログ情報を受け取る
function RecentBlog({ blog }: any) {
  return (
    <div className="my-10 flex flex-col justify-center items-start gap-4 md:flex-row">
      <div className="w-full p-4">
        <Animation animation="rotateInUpLeft" rootMargin="-100px">
          <div className=" gap-10 mb-8 md:flex">
            {/* タイトル */}
            <h3 className="text-white font-bold underline underline-offset-8 decoration-yellow-500 decoration-4 sm:decoration-8 lg:decoration-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-0  ">
              Recent Blog Posts
            </h3>
            {/* Blogページへのリンク */}
            <Link
              href="/blog"
              className=" text-lg sm:text-lg md:text-3xl lg:text-4xl font-bold bg-black hover:bg-yellow-500 hover:text-black rounded-lg py-2 px-4"
            >
              View More　　→
            </Link>
          </div>
        </Animation>

        {/* ブログ表示部分 */}
        <div className="">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
            {/* 受け取ったブログ情報を展開 */}
            {blog.slice(0, 8).map((blog: any, index: number) => (
              <div key={blog.id}>
                <Animation
                  animation={
                    index < 4 ? "rotateInDownRight" : "rotateInDownLeft"
                  }
                  rootMargin="-100px"
                >
                  <article className="bg-yellow-300 text-black shadow-lg rounded-lg border-4 border-black hover:border-yellow-500 h-auto overflow-hidden">
                    {/* 個々のブログページへのリンク */}
                    <Link href={`blog/${blog.id}`}>
                      <div className=" flex h-40 sm:h-48 md:h-auto md:block">
                        <img
                          src={blog.photo.url}
                          alt={blog.title}
                          className="object-cover w-[40%] md:w-full md:h-64 "
                        />
                        <div className=" p-4 relative w-[60%] md:w-full">
                          <h3 className="font-semibold text-lg md:text-xl h-24">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm md:text-base absolute bottom-5">
                            {/* 日付をYYYY/MM/DD hh:mmにフォーマット */}
                            {formatDate(blog.publishedAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </article>
                </Animation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
