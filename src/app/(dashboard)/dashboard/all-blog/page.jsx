"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdEdit, MdVisibility, MdDelete } from "react-icons/md"; // Import React icons
import { toast } from "react-toastify";

const GetBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  
  const handleDelete = async () => {
    if (selectedBlog) {
      try {
        await axios.delete(
          ` https://ligalmatter.vercel.app/api/v1/blog/${selectedBlog._id}`,
          {
            withCredentials: true,
          }
        );
        setBlogs(blogs.filter((blog) => blog._id !== selectedBlog._id));
        toast.success("Blog deleted successfully")
        setIsDialogOpen(false);
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast.error("Failed to delete blog. Please try again later.")
        setIsDialogOpen(false);
      }
    }
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          " https://ligalmatter.vercel.app/api/v1/blog",
          {
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setBlogs(response.data.data);
        } else {
          setError("Failed to load blogs");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="text-black text-2xl  bg-gray-100 w-[85vw] sm:w-[60vw] lg:w-[70vw] mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-10">Blog List</h1>
      <section className="flex justify-center items-center py-8">
        <div className="w-full max-w-6xl p-8 bg-white text-gray-900 rounded-lg shadow-lg mx-[5%]">
          <Table>
            <TableCaption>A list of your recent blogs.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Title (English)</TableHead>
                <TableHead>Title (Bangla)</TableHead>
                <TableHead>Category (English)</TableHead>
                <TableHead>Category (Bangla)</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog._id}>
                  <TableCell>
                    <Image
                      src={blog.image}
                      alt={blog.title_english}
                      width={100}
                      height={100}
                      className="w-full h-16 object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium whitespace-nowrap">
                    {blog.title_english.slice(0, 50)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {blog.title_bangla.slice(0, 50)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {blog.category_english}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {blog.category_bangla}
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    <div className="flex gap-1 justify-end">
                      <TableCell className="text-right">
                        <div className="flex gap-1 justify-end">
                          <Link href={`/dashboard/update-blog/${blog._id}`}>
                            <MdEdit className="text-2xl text-blue-500" />
                          </Link>
                          <Link href={`/blogs/${blog._id}`}>
                            <MdVisibility className="text-2xl text-blue-500 hover:text-blue-600 transition" />
                          </Link>
                          <Dialog
                            open={isDialogOpen}
                            onOpenChange={setIsDialogOpen}
                          >
                            <DialogTrigger  onClick={() => setSelectedBlog(blog)}>
                              <MdDelete className="text-2xl text-red-500 hover:text-red-600 transition" />
                            </DialogTrigger>
                            <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Confirm Deletion</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete this blog? This
                              action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button
                              variant="outline"
                              onClick={() => setIsDialogOpen(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={handleDelete}
                              className="bg-red-500 text-white hover:bg-red-600"
                            >
                              Confirm Delete
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                          </Dialog>
                        </div>
                      </TableCell>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default GetBlog;
