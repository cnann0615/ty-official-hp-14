import { client } from "../../../../libs/client";
import Link from "next/link";
import Contents from "./Contents";

export default async function photo(context: any) {
  let selectBlog;

  const id = context.params.id;
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;
  blog.map((blog: any) => {
    if (blog.id === id) {
      selectBlog = blog;
    }
  });

  return (
    <div className=" mx-auto my-8 p-6 max-w-4xl">
      <button className=" py-1 px-2 mb-2 rounded-md bg-black text-white font-bold hover:bg-yellow-500 hover:text-black">
        <Link href={"/gallery"}>Gallery　→</Link>
      </button>
      <Contents blog={selectBlog} />
    </div>
  );
}
