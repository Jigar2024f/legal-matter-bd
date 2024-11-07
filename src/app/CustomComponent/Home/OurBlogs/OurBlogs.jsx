"use client"

import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making API requests
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  FitnessCarouselNext,
  FitnessCarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import BlogCard from "../../Card/BlogCard/BlogCard";

export default function OurBlogs() {
  const [blogs, setBlogs] = useState([]); // State to store blog data
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch blogs data from API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/blog");
        if (response.data.success) {
          setBlogs(response.data.data.slice(0, 5)); // Limit to 5 blogs
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

    fetchBlogs(); // Call the fetch function
  }, []); // Empty dependency array to run the effect once when the component mounts

  if (loading) return <div>Loading...</div>; // Show loading message while data is being fetched
  if (error) return <div>{error}</div>; // Show error message if any

  return (
    <section className="relative bg-lightGray my-12 sm:my-14 lg:my-16 2xl:my-20 text-justify overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-[5%] py-10 sm:py-14 lg:py-16 2xl:py-20">
        <SubHeading>
          <span>More About Our Law and Legal Works</span>
        </SubHeading>
        <Heading>
          <span className="text-secondary">Our </span>Blogs
        </Heading>
        <Carousel className="w-full max-w-screen-xl mx-auto mt-5 sm:mt-7 lg:mt-9 2xl:mt-12">
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
