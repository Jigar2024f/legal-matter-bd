"use client";

import { BreadcrumbSection } from "@/app/CustomComponent/BreadcrumbSection/BreadcrumbSection";

import { useParams } from "next/navigation";
import { allBlogs } from "../../../../public/data/blogs";
import { BlogTab } from "./BlogTab";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Heading from "@/app/CustomComponent/Ui/Heading/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  FitnessCarouselNext,
  FitnessCarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "@/app/CustomComponent/Card/BlogCard/BlogCard";

export default function Page() {
  const { id } = useParams();
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSrc(window.location.href);
    }
  }, []);

  // Find the correct blog post using the slug
  const blog = allBlogs.find((b) => b.id === id);
  const blogs = allBlogs
    .filter((b) => b.id !== id) // Filter out the blog with the given id
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 5); // Select the first 5 items

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
      <div className=" max-w-screen-xl mx-auto px-[5%] overflow-x-hidden">
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
      <div className="max-w-screen-xl mx-auto px-[5%] pb-10 sm:pb-14 lg:pb-16 2xl:pb-20 overflow-x-hidden">
        <Heading>
          <span className="text-secondary">More </span>Blogs
        </Heading>
        <Carousel className="w-full max-w-screen-xl mx-auto mt-6 sm:mt-7 lg:mt-9 2xl:mt-10">
          <CarouselContent>
            {blogs.map((blog, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 ">
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
