import React from "react";

function Contents({ blog }: any) {
  return (
    <div>
      <img
        src={blog.photo.url}
        alt={blog.title}
        className="w-auto h-auto mx-auto"
      />
    </div>
  );
}

export default Contents;
