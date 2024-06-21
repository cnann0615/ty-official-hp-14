import React from "react";

// ブログ表示部分

function Contents({ blog }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
      <div
        className="text-black prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      ></div>
    </div>
  );
}

export default Contents;
