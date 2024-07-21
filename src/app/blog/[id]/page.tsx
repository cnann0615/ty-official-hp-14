import { client } from "../../../../libs/client";
import Link from "next/link";
import Contents from "./Contents";

// 個々のブログ

export default async function Article(context: any) {
  let selectBlog = null;
  const id = context.params.id;
  let error = null;

  try {
    // microCMSからブログ情報を取得し、idが一致するものを抽出
    const data = await client.get({ endpoint: "blog" });
    const blog = data.contents;
    blog.map((blog: any) => {
      if (blog.id === id) {
        selectBlog = blog;
      }
    });

    if (!selectBlog) {
      throw new Error("Blog article not found.");
    }
  } catch (err) {
    console.error("Failed to fetch blog data or article not found:", err);
    error =
      "Failed to fetch blog data or article not found. Please try again later.";
  }

  return (
    <div className="mx-auto my-8 p-6 max-w-4xl">
      {/* ブログ一覧へのリンク */}
      <button className="py-1 px-2 mb-2 rounded-md bg-black text-white font-bold hover:bg-yellow-500 hover:text-black">
        <Link href={"/blog"}>Blog List →</Link>
      </button>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Contents blog={selectBlog} />
      )}
    </div>
  );
}
