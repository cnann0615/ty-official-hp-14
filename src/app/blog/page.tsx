import { client } from "../../../libs/client";
import BlogList from "./component/BlogList";

export default async function Blog() {
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;
  return (
    <div className="container mx-auto p-5">
      <BlogList blog={blog} />
    </div>
  );
}
