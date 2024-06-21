import { client } from "../../../libs/client";
import BlogList from "./component/BlogList";

// ブログページ

export default async function Blog() {
  // microCMSからブログ情報を取得
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;
  return (
    <div className="container mx-auto p-5">
      {/* タイトル */}
      <h1 className=" m-2 md:m-4 font-bold text-gray-100 text-3xl lg:text-5xl italic">
        🥍 Blog 🥍
      </h1>
      {/* ブログ情報を渡す */}
      <BlogList blog={blog} />
    </div>
  );
}
