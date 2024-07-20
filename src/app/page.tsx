import Main from "./topFeatures/Main";
import Message from "./topFeatures/Message";
import RecentBlog from "./topFeatures/RecentBlog";
import { client } from "../../libs/client";

// トップページ

export default async function Home() {
  // microCMSからブログ情報を取得;
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;

  return (
    <main className="px-[2.5%] md:px-[5%] ">
      <Main />
      <Message />
      {/* 取得したブログ情報を渡す */}
      <RecentBlog blog={blog} />
    </main>
  );
}
