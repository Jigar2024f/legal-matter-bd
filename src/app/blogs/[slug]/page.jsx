import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Heading from "@/app/CustomComponent/Ui/Heading/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  FitnessCarouselNext,
  FitnessCarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "@/app/CustomComponent/Card/BlogCard/BlogCard";
import { BlogTab } from "./BlogTab";

// Fetch data server-side
async function fetchBlogs() {
  const response = await fetch(
    "https://legalmatterbd-server.vercel.app/api/v1/blog"
  );
  const data = await response.json();
  return data.success ? data.data : [];
}

export default async function Page({ params }) {
  const slug = params?.slug;

  // Fetch all blogs and the specific blog based on the slug
  const blogs = await fetchBlogs();
  const blog = blogs.find((b) => b.slug === slug);
  const otherBlogs = blogs
    .filter((b) => b.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  if (!blog) {
    return (
      <p className="text-center mt-12 text-red-700">Blog post not found.</p>
    );
  }

  const src = `https://legalmatterbd.com/blogs/${slug}`;

  return (
    <section className="overflow-x-hidden">
      {/* Main Blog Content */}
      <div className="max-w-screen-lg mx-auto px-[5%] xl:px-0 overflow-x-hidden">
        <BlogTab blog={blog} />
        <div className="flex items-center space-x-2 my-12 sm:my-14 lg:my-16 2xl:my-20">
          <h1 className="text-lg lg:text-xl font-medium">Share :</h1>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${src}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaFacebook className="text-2xl lg:text-4xl bg-black text-white rounded p-1 transition-transform duration-500 transform  hover:text-primary hover:bg-white border hover:border-primary" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${src}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaTwitter className="text-2xl lg:text-4xl bg-black text-white rounded p-1 transition-transform duration-500 transform  hover:text-primary hover:bg-white border hover:border-primary" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${src}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaLinkedin className="text-2xl lg:text-4xl bg-black text-white rounded p-1 transition-transform duration-500 transform  hover:text-primary hover:bg-white border hover:border-primary" />
          </a>
          <a
            href="https://www.instagram.com/yourprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaInstagramSquare className="text-2xl lg:text-4xl bg-black text-white rounded p-1 transition-transform duration-500 transform  hover:text-primary hover:bg-white border hover:border-primary" />
          </a>
        </div>
      </div>

      {/* Other Blogs Carousel */}
      <div className="max-w-screen-xl mx-auto pb-10 sm:pb-14 lg:pb-16 2xl:pb-20 overflow-x-hidden px-[5%]">
        <Heading>
          <span className="text-secondary">More </span>Blogs
        </Heading>
        <Carousel
          className="w-full max-w-screen-xl mx-auto mt-5 sm:mt-7 lg:mt-9 2xl:mt-12"
          aria-label="Our Blogs Carousel"
        >
          <CarouselContent role="list">
            {otherBlogs.map((blog, index) => (
              <CarouselItem
                key={index}
                role="listitem"
                className="lg:basis-1/3"
              >
                <BlogCard blog={blog} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <FitnessCarouselPrevious aria-label="Previous Blog" />
          <FitnessCarouselNext aria-label="Next Blog" />
        </Carousel>
      </div>
    </section>
  );
}
