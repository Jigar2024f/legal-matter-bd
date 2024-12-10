"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  FitnessCarouselNext,
  FitnessCarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import BlogCard from "../../Card/BlogCard/BlogCard";
import Loading from "../../Shared/Loading";

export default function OurBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://legalmatterbd-server.vercel.app/api/v1/blog"
        );
        if (response.data.success) {
          setBlogs(response.data.data.slice(0, 5));
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

    fetchBlogs();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <section className="relative bg-lightGray my-12 sm:my-14 lg:my-16 2xl:my-20 text-justify overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-[5%] py-10 sm:py-14 lg:py-16 2xl:py-20">
        <header>
          <SubHeading>
            <span>More About Our Law and Legal Works</span>
          </SubHeading>
          <Heading>
            <span className="text-secondary">Our </span>Blogs
          </Heading>
        </header>
        <Carousel
          className="w-full max-w-screen-xl mx-auto mt-5 sm:mt-7 lg:mt-9 2xl:mt-12"
          aria-label="Our Blogs Carousel"
        >
          {loading ? (
            <CarouselContent role="list">
              {[...Array(5)].map((_, index) => (
                <CarouselItem
                  key={index}
                  role="listitem"
                  className="lg:basis-1/3"
                >
                  <div className="lg:basis-1/3 bg-gray-200 animate-pulse rounded-lg p-5">
                    <div className="h-80 bg-gray-300 rounded mb-5"></div>{" "}
                    {/* Image Skeleton */}
                    <div className="h-5 bg-gray-300 rounded w-4/5 mb-3"></div>{" "}
                    {/* Title Skeleton */}
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>{" "}
                    {/* Excerpt Skeleton */}
                    <div className="h-3 bg-gray-300 rounded w-2/5"></div>{" "}
                    {/* Date Skeleton */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          ) : (
            <CarouselContent role="list">
              {blogs.map((blog, index) => (
                <CarouselItem
                  key={index}
                  role="listitem"
                  className="lg:basis-1/3"
                >
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
          )}
          <FitnessCarouselPrevious aria-label="Previous Blog" />
          <FitnessCarouselNext aria-label="Next Blog" />
        </Carousel>
      </div>
    </section>
  );
}
