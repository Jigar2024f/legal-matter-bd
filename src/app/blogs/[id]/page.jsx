"use client";

import { BreadcrumbSection } from "@/app/CustomComponent/BreadcrumbSection/BreadcrumbSection";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
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
import axios from "axios"; // Import axios for making API requests
import { BlogTab } from "./BlogTab";

export default function Page() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); // State to store the selected blog
  const [blogs, setBlogs] = useState([]); // State to store the other blogs
  const [src, setSrc] = useState(""); // State to store the current URL
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSrc(window.location.href);
    }

    // Fetch blog data from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://legalmatterbd-server.vercel.app/api/v1/blog",
        ); // Replace with your API endpoint
        console.log(response);
        if (response.data.success) {
          const allBlogs = response.data.data;
          const selectedBlog = allBlogs.find((b) => b._id === id); // Find the selected blog
          const otherBlogs = allBlogs
            .filter((b) => b._id !== id) // Filter out the selected blog
            .sort(() => 0.5 - Math.random()) // Shuffle the array
            .slice(0, 5); // Limit to 5 blogs

          setBlog(selectedBlog);
          setBlogs(otherBlogs);
        } else {
          setError("Failed to fetch blogs.");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs(); // Fetch the blog data
  }, [id]); // Re-fetch if the `id` parameter changes

  if (!blog) {
    return <p className="text-white text-center mt-12">Blog post not found.</p>;
  }

  return (
    <section className="overflow-x-hidden">
      <BreadcrumbSection
        pageName={"Blogs"}
        pagePath={"blogs"}
        dynamicPage={"Details"}
      />
      <div className=" max-w-screen-lg mx-auto  px-[5%] xl:px-0 overflow-x-hidden">
        <BlogTab blog={blog} />
        <div className="flex items-center space-x-2 my-12 sm:my-14 lg:my-16 2xl:my-20">
          <h1 className="text-lg lg:text-xl font-medium">Share :</h1>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${src}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl lg:text-3xl bg-black text-white rounded hover:text-primary hover:bg-white p-[3px] translate duration-500 border hover:border-black" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${src}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl lg:text-3xl bg-black text-white rounded hover:text-primary hover:bg-white p-[3px] translate duration-500 border hover:border-black" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${src}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl lg:text-3xl bg-black text-white rounded hover:text-primary hover:bg-white p-[3px] translate duration-500 border hover:border-black" />
          </a>
          <a
            href="https://www.instagram.com/yourprofile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-2xl lg:text-3xl bg-black text-white rounded hover:text-primary hover:bg-white p-[3px] translate duration-500 border hover:border-black" />
          </a>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto  px-[5%] xl:px-0 pb-10 sm:pb-14 lg:pb-16 2xl:pb-20 overflow-x-hidden">
        <Heading>
          <span className="text-secondary">More </span>Blogs
        </Heading>
        <Carousel className="w-full max-w-screen-xl mx-auto mt-6 sm:mt-7 lg:mt-9 2xl:mt-10">
          <CarouselContent>
            {blogs.map((blog, index) => (
              <CarouselItem key={index} className="lg:basis-1/2">
                <BlogCard blog={blog} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <FitnessCarouselPrevious />
          <FitnessCarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
