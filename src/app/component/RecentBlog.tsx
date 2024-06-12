"use client";
import { Animation } from "./Animation";

import Link from "next/link";

// 日付をフォーマットする関数
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

function RecentBlog({ blog }: any) {
  return (
    <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-4">
      <div className="w-full p-4">
        <Animation animation="rotateInUpLeft" rootMargin="-100px">
          <div className="md:flex gap-10 mb-8">
            <h3 className="mb-6 md:mb-0 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold underline underline-offset-8 decoration-yellow-500 decoration-4 sm:decoration-8 lg:decoration-12">
              Recent Blog Posts
            </h3>
            <Link
              href="/blog"
              className="rounded-lg py-2 px-4 text-lg sm:text-lg md:text-3xl lg:text-4xl font-bold bg-black hover:bg-yellow-500 hover:text-black"
            >
              View More　　→
            </Link>
          </div>
        </Animation>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {blog.slice(0, 8).map((blog: any, index: number) => (
              <div key={blog.id}>
                <Animation
                  animation={index < 4 ? "fadeInRight" : "fadeInLeft"}
                  rootMargin="-100px"
                >
                  <article className="bg-yellow-300 text-black shadow-lg rounded-lg overflow-hidden h-auto border-4 border-black hover:border-yellow-500">
                    <Link href={`blog/${blog.id}`}>
                      <div className=" flex md:block h-40 sm:h-48 md:h-auto">
                        <img
                          src={blog.photo.url}
                          alt={blog.title}
                          className="w-[40%] md:w-full md:h-64 object-cover"
                        />
                        <div className="w-[60%] md:w-full p-4 relative">
                          <h3 className="text-lg md:text-xl font-semibold h-24">
                            {blog.title}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 absolute bottom-5">
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
