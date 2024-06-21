import Main from "./component/Main";
import Message from "./component/Message";
import RecentBlog from "./component/RecentBlog";
import { client } from "../../libs/client";

// トップページ

export default async function Home() {
  // microCMSからブログ情報を取得;
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;

  return (
    <main className=" w-[95%] md:w-[90%] mx-auto ">
      <Main />
      <Message />
      {/* 取得したブログ情報を渡す */}
      <RecentBlog blog={blog} />
    </main>
  );
}
