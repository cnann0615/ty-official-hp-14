import { client } from "../../../libs/client";
import ImagesList from "./component/ImagesList";

export default async function Gallery() {
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;

  return (
    <div className=" w-[95%] md:w-[90%] mx-auto mb-10">
      <ImagesList blog={blog}></ImagesList>
    </div>
  );
}
