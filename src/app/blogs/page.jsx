"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { allBlogs } from "../../../public/data/blogs";
import BlogCard from "../CustomComponent/Card/BlogCard/BlogCard";
import Heading from "../CustomComponent/Ui/Heading/Heading";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BreadcrumbSection } from "../CustomComponent/BreadcrumbSection/BreadcrumbSection";

export default function Page(params) {
  const blogsPerPage = 6; // Show 6 blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  // Get the blogs to be displayed on the current page
  const currentBlogs = allBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <BreadcrumbSection pageName={"Blogs"}/>
      <section className="mx-[5%] my-12 sm:my-14 lg:my-16 2xl:my-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <Heading>
            <span className="text-secondary">Our</span> Blogs
          </Heading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-14 sm:my-16 lg:my-20 2xl:my-24 text-start">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalPages > 3 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
}
