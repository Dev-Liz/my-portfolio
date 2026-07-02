import BlogCards from "../components/BlogCards";
import BlogHeader from "../components/BlogHeader";

const BlogSection = () => {
  return (
    <section id="articles" className="bg-cneutral-500 w-full h-auto py-10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col space-y-6">
          <BlogHeader />
          <BlogCards />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
