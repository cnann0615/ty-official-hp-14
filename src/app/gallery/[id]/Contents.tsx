"use client";
import React from "react";

import { formatDate } from "@/app/topFeatures/RecentBlog";

// 画像表示部分

function Contents({ blog }: any) {
  return (
    <div>
      <img
        src={blog.photo.url}
        alt={blog.title}
        className="border-4 border-black w-auto h-auto mx-auto "
      />
      {/* 日付をYYYY/MM/DDで表示 */}
      <p className="text-white text-end">
        {formatDate(blog.publishedAt).split(" ")[0]}
      </p>
    </div>
  );
}

export default Contents;
