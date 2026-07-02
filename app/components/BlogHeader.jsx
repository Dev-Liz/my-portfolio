import Link from "next/link";

const BlogHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-heading4 md:text-heading3 font-kanit">Articles</h3>
      <Link href={"#"}>Read more</Link>
    </div>
  );
};

export default BlogHeader;
