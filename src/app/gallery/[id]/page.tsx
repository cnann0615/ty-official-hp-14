import Link from "next/link";

import { client } from "../../../../libs/client";
import Contents from "./Contents";

// 個々のギャラリー

// SSR設定
export const revalidate = 0;

export default async function photo(context: any) {
  let selectBlog = null;
  const id = context.params.id;
  let error = null;

  try {
    // microCMSからブログ情報を取得し、idが一致するものを抽出
    const data = await client.get({ endpoint: "blog" });
    const blog = data.contents;
    blog.forEach((blog: any) => {
      if (blog.id === id) {
        selectBlog = blog;
      }
    });

    if (!selectBlog) {
      throw new Error("Photo not found.");
    }
  } catch (err) {
    console.error("Failed to fetch blog data or photo not found:", err);
    error =
      "Failed to fetch blog data or photo not found. Please try again later.";
  }

  return (
    <div className="mx-auto my-8 p-6 max-w-4xl">
      {/* ギャラリー一覧へのリンク */}
      <button className="bg-black text-white font-bold hover:bg-yellow-500 hover:text-black rounded-md py-1 px-2 mb-2 ">
        <Link href={"/gallery"}>Gallery →</Link>
      </button>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Contents blog={selectBlog} />
      )}
    </div>
  );
}
