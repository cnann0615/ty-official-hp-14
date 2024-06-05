import Main from "./component/Main";
import Message from "./component/Message";
import RecentBlog from "./component/RecentBlog";
import { client } from "../../libs/client";

export default async function Home() {
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;

  return (
    <main className=" w-[95%] md:w-[90%] mx-auto ">
      <Main />
      <Message />
      <RecentBlog blog={blog} />
    </main>
  );
}
