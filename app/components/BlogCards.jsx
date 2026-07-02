import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "./BlogCard";
import Link from "next/link";

const BlogCards = async () => {
  const posts = await getAllPosts();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <Link href={`/posts/${post.slug}`} key={index}>
          <BlogCard
            image={post.frontMatter.image}
            title={post.frontMatter.title}
            category={post.frontMatter.category}
            excerpt={post.frontMatter.excerpt}
          />
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
