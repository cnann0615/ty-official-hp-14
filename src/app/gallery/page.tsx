import { client } from "../../../libs/client";
import ImagesList from "./ImagesList";

// ギャラリーページ

// SSR設定（MicroCMS独自の書き方)
export const revalidate = 0;

export default async function Gallery() {
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
    <div className="container p-5 mx-auto mb-48">
      {/* タイトル */}
      <h1 className="font-bold text-gray-100 text-3xl lg:text-5xl italic m-2 md:m-4 ">
        🥍 Gallery 🥍
      </h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ImagesList blog={blog} />
      )}
    </div>
  );
}
