import { client } from "../../../libs/client";
import ImagesList from "./component/ImagesList";

// ギャラリーページ

export default async function Gallery() {
  // microCMSからブログ情報を取得
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;

  return (
    <div className="  container p-5 mx-auto mb-10">
      {/* タイトル */}
      <h1 className=" m-2 md:m-4 font-bold text-gray-100 text-3xl lg:text-5xl italic">
        🥍 Gallery 🥍
      </h1>
      {/* ブログ情報を渡す */}
      <ImagesList blog={blog}></ImagesList>
    </div>
  );
}
