"use client";
import { formatDate } from "@/app/component/RecentBlog";
import React from "react";

function Contents({ blog }: any) {
  return (
    <div>
      <img
        src={blog.photo.url}
        alt={blog.title}
        className="w-auto h-auto mx-auto border-4 border-black"
      />
      <p className="text-white text-end">
        {formatDate(blog.publishedAt).split(" ")[0]}
      </p>
    </div>
  );
}

export default Contents;
