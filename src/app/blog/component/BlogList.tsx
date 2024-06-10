"use client";
import { formatDate } from "@/app/component/RecentBlog";

import React, { useState } from "react";
import Link from "next/link";

const ITEMS_PER_PAGE = 9;

export default function BlogList({ blog }: any) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-colos-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {selectedBlogPosts.map((blog: any) => (
          <article
            key={blog.id}
            className="bg-yellow-300 text-black shadow-lg rounded-lg overflow-hidden h-auto border-4 border-black hover:border-yellow-500"
          >
            <Link href={`blog/${blog.id}`}>
              <div className="relative">
                <img
                  src={blog.photo.url}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-600">
                    {formatDate(blog.publishedAt)}
                  </p>
                </div>
              </div>
            </Link>
          </article>
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
