"use client";
import Link from "next/link";
import React, { useState } from "react";

// ギャラリーリスト

// １ページに画像を何枚表示するか
const ITEMS_PER_PAGE = 18;

// 親コンポーネントからブログ情報を取得
function ImagesList({ blog }: any) {
  // ページネーション関連//////////////////////////////
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
      <div className="grid gap-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
        {/* ブログ情報を展開 */}
        {selectedBlogPosts.map((blog: any) => (
          // ブログの画像を表示
          <div key={blog.id} className="">
            {/* 個々の画像へのリンク */}
            <Link href={`gallery/${blog.id}`}>
              <img
                src={blog.photo.url}
                alt={blog.title}
                className="border-4 border-black hover:border-yellow-500 object-cover w-full h-full aspect-square "
              />
            </Link>
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

export default ImagesList;
