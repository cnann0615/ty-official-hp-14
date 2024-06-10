"use client";
import Link from "next/link";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 18;

function ImagesList({ blog }: any) {
  // ページネーション関連
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedBlogPosts = blog.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(blog.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {selectedBlogPosts.map((blog: any) => (
          <div key={blog.id} className="">
            <Link href={`gallery/${blog.id}`}>
              <img
                src={blog.photo.url}
                alt={blog.title}
                className="object-cover w-full h-full aspect-square border-4 border-black hover:border-yellow-500 "
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
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
