import Main from "./topFeatures/Main";
import Message from "./topFeatures/Message";
import RecentBlog from "./topFeatures/RecentBlog";
import { client } from "../../libs/client";

// トップページ

export default async function Home() {
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
    <main className="px-[2.5%] md:px-[5%] mb-24">
      <Main />
      <Message />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <RecentBlog blog={blog} />
      )}
    </main>
  );
}
