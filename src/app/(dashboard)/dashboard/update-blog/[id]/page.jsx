"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { servicesData } from "../../../../../../public/data/services";
import QuillEditor from "../../Component/QuillEditor";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const EditBlog = ({ params }) => {
  const services = servicesData;
  const { id } = params;
  const [formData, setFormData] = useState({
    title_english: "",
    title_bangla: "",
    image: "",
    description_english: "",
    description_bangla: "",
    category_english: "",
    category_bangla: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://legalmatterbd-server.vercel.app/api/v1/blog/${id}`
          );
          if (response.data.success) {
            setFormData(response.data.data);
            setPreviewImage(response.data.data.image); // Set the initial image preview
          } else {
            setError("Failed to load blog data");
          }
          setLoading(false);
        } catch (error) {
          console.error("Error fetching blog:", error);
          setError("Failed to load blog data");
          setLoading(false);
        }
      }
    };

    fetchBlogData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreviewImage(URL.createObjectURL(file)); // Set preview URL for selected image
  };

  const handleImageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const apiKey = "4c33fed168c7c87fe3c27db1cd78341b"; // ImgBB API key

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: false,
        }
      );

      return response.data.data.display_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "An error occurred while uploading the image.",
      });
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let uploadedImageUrl = formData.image;
    if (typeof formData.image === "object") {
      uploadedImageUrl = await handleImageUpload(formData.image);
    }

    if (!uploadedImageUrl) {
      setLoading(false);
      return;
    }

    const updatedData = { ...formData, image: uploadedImageUrl };

    try {
      const response = await axios.put(
        `https://legalmatterbd-server.vercel.app/api/v1/blog/${id}`,
        updatedData,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast({
          title: "Blog updated successfully!",
          description: "Blog has been updated successfully!",
        });
        router.push("/dashboard/all-blog");
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Failed to update blog",
        });
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "An error occurred while updating the blog.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-6xl p-8 bg-white text-gray-900 rounded-lg shadow-lg mx-[5%]">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title (English) */}
          <div>
            <label
              htmlFor="title_english"
              className="block text-sm font-medium text-gray-700"
            >
              Title (English)
            </label>
            <input
              type="text"
              name="title_english"
              placeholder="Enter title in English"
              value={formData.title_english}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Title (Bangla) */}
          <div>
            <label
              htmlFor="title_bangla"
              className="block text-sm font-medium text-gray-700"
            >
              Title (Bangla)
            </label>
            <input
              type="text"
              name="title_bangla"
              placeholder="Enter title in Bangla"
              value={formData.title_bangla}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image (Upload)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
            />
            {previewImage && (
              <div className="mt-4">
                <Image
                  src={previewImage}
                  alt="Image Preview"
                  className="h-40 w-fit rounded-md shadow-md"
                  width={160} // You can set the width and height according to your needs
                  height={160}
                />
              </div>
            )}
          </div>

          {/* Description (English) */}
          <div>
            <label
              htmlFor="description_english"
              className="block text-sm font-medium text-gray-700"
            >
              Description (English)
            </label>
            <QuillEditor
              value={formData.description_english}
              onChange={(value) =>
                setFormData({ ...formData, description_english: value })
              }
            />
          </div>

          {/* Description (Bangla) */}
          <div>
            <label
              htmlFor="description_bangla"
              className="block text-sm font-medium text-gray-700"
            >
              Description (Bangla)
            </label>
            <QuillEditor
              value={formData.description_bangla}
              onChange={(value) =>
                setFormData({ ...formData, description_bangla: value })
              }
            />
          </div>

          {/* Category (English) */}
          <div>
            <label
              htmlFor="category_english"
              className="block text-sm font-medium text-gray-700"
            >
              Category (English)
            </label>
            <select
              name="category_english"
              value={formData.category_english}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              required
            >
              {services?.map((service) => (
                <option value={service.title.en} key={service.title.en}>
                  {service.title.en}
                </option>
              ))}
            </select>
          </div>

          {/* Category (Bangla) */}
          <div>
            <label
              htmlFor="category_bangla"
              className="block text-sm font-medium text-gray-700"
            >
              Category (Bangla)
            </label>
            <select
              name="category_bangla"
              value={formData.category_bangla}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              required
            >
              {services?.map((service) => (
                <option value={service.title.bn} key={service.title.bn}>
                  {service.title.bn}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 mt-6 text-white bg-primary rounded-md hover:bg-opacity-90 transition duration-300 ease-in-out"
          >
            {loading ? "Updating..." : "Update Blog"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditBlog;
