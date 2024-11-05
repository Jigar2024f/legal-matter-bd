import * as React from "react";

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
import { allBlogs } from "../../../../../public/data/blogs";
import BlogCard from "../../Card/BlogCard/BlogCard";

export default function OurBlogs() {
  const blogs = allBlogs.slice(0, 5); // Limit blogs to 5 items

  return (
    <>
      <section className="relative bg-lightGray my-12 sm:my-14 lg:my-16 2xl:my-20 text-justify overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-[5%] py-10 sm:py-14 lg:py-16 2xl:py-20">
          <SubHeading>
            <span>More About Our Law and Legal Works</span>
          </SubHeading>
          <Heading>
            <span className="text-secondary">Our </span>Blogs
          </Heading>
          <Carousel className="w-full max-w-screen-xl mx-auto my-5 sm:my-7 lg:my-9 2xl:my-12">
            <CarouselContent>
              {blogs.map((blog, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/2 "
                >
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <FitnessCarouselPrevious />
            <FitnessCarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
