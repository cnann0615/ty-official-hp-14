import React from "react";

function Contents({ article }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{article.date}</p>
      <div
        className="text-black prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.body }}
      ></div>
    </div>
  );
}

export default Contents;
