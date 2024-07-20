"use client";
import React, { useState } from "react";
import Link from "next/link";

import { formatDate } from "@/app/topFeatures/RecentBlog";
import { Animation } from "../components/Animation";

// ブログリスト

// 1ページに表示する記事の数を定義
const ITEMS_PER_PAGE = 9;

// 親コンポーネントからブログ情報を受け取る
export default function BlogList({ blog }: any) {
  // ページネーション関連

  // 現在のページをStateで管理（初期値は１）
  const [currentPage, setCurrentPage] = useState(1);

  // ページ切り替え関数
  const handlePageChange = (pageNumber: number) => {
    // ページが切り替わったらwindowの表示をトップまでスライドさせる。
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(pageNumber);
  };
  // ページに表示されるトップのindexを取得
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // ブログ情報のうち、ページに表示するもののみを切り抜く
  const selectedBlogPosts = blog.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  // ページ数を取得
  const totalPages = Math.ceil(blog.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-colos-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {/* ブログ情報を展開 */}
        {selectedBlogPosts.map((blog: any, index: number) => (
          <div key={blog.id}>
            <Animation
              animation={index < 5 ? "bounceInRight" : "bounceInLeft"}
              rootMargin="-100px"
            >
              <article className="bg-yellow-300 text-black shadow-lg rounded-lg overflow-hidden h-auto border-4 border-black hover:border-yellow-500">
                {/* 個々のブログへのリンク */}
                <Link href={`blog/${blog.id}`}>
                  <div className="relative">
                    <img
                      src={blog.photo.url}
                      alt={blog.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 h-40 relative">
                      <h3 className="text-xl font-semibold">{blog.title}</h3>
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
      {/* ページネーション */}
      <div className="flex justify-center mt-8">
        {/* ページ数の分ボタンを作成 */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 ${
              i + 1 === currentPage
                ? "bg-yellow-500 text-black"
                : "bg-gray-300 text-black"
            } rounded`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
