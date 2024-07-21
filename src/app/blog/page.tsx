import { client } from "../../../libs/client";
import BlogList from "./BlogList";

// ブログページ

// SSR設定（MicroCMS独自の書き方)
export const revalidate = 0;

export default async function Blog() {
  let blog = [];
  let error = null;

  try {
    // microCMSからブログ情報を取得
    const data = await client.get({ endpoint: "blog" });
    blog = data.contents;
  } catch (err) {
    console.error("Failed to fetch blog data:", err);
    error = "Failed to fetch blog data. Please try again later.";
  }

  return (
    <div className="container mx-auto p-5">
      {/* タイトル */}
      <h1 className="m-2 md:m-4 font-bold text-gray-100 text-3xl lg:text-5xl italic">
        🥍 Blog 🥍
      </h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <BlogList blog={blog} />
      )}
    </div>
  );
}
