"use client";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API requests
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
import Loading from "../CustomComponent/Shared/Loading";

export default function Page() {
  const blogsPerPage = 10; // Show 6 blogs per page
  const [blogs, setBlogs] = useState([]); // State to store blog data
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch blogs data from API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://legalmatterbd-server.vercel.app/api/v1/blog",
        ); // Replace with your API URL
        if (response.data.success) {
          setBlogs(response.data.data); // Assuming response.data.data contains blog data
        } else {
          setError("Failed to fetch blogs.");
        }
      } catch (error) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs(); // Call the fetch function
  }, []);
if(loading){
  return <Loading/>
}
  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get the blogs to be displayed on the current page
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage,
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <BreadcrumbSection pageName={"Blogs"} />
      <section className="mx-[5%] my-12 sm:my-14 lg:my-16 2xl:my-20 text-center">
        <div className="max-w-screen-xl mx-auto">
          <Heading>
            <span className="text-secondary">Our</span> Blogs
          </Heading>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-14 sm:my-16 lg:my-20 2xl:my-24 text-start">
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
