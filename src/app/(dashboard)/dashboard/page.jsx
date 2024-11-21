"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { servicesData } from "../../../../public/data/services";
import QuillEditor from "./Component/QuillEditor";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const CreateBlog = () => {
  const [contentEnglish, setContentEnglish] = useState("");
  const [contentBangla, setContentBangla] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const services = servicesData;
  const [formData, setFormData] = useState({
    title_english: "",
    title_bangla: "",
    image: "",
    description_english: "",
    description_bangla: "",
    category_english: "",
    category_bangla: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      description_english: contentEnglish,
      description_bangla: contentBangla,
    }));
  }, [contentEnglish, contentBangla]);

  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    const apiKey = "4c33fed168c7c87fe3c27db1cd78341b";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file)); // Generate image preview
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedImageUrl = await handleImageUpload(formData.image);
    if (!uploadedImageUrl) {
      setLoading(false);
      return;
    }

    const updatedFormData = {
      ...formData,
      image: uploadedImageUrl,
    };

    try {
      const response = await axios.post(
        "https://legalmatterbd-server.vercel.app/api/v1/blog",
        updatedFormData,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      if (response.data.success) {
        toast({
          title: "Blog created successfully!",
          description: "Blog has been created successfully!",
        });
        setFormData({
          title_english: "",
          title_bangla: "",
          image: "",
          description_english: "",
          description_bangla: "",
          category_english: "",
          category_bangla: "",
        });
        setContentEnglish("");
        setContentBangla("");
        router.push("/dashboard/all-blog");
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Failed to create blog",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error creating blog:", error);
      if (error.response?.status === 401) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "You are not authorized. Please log in again.",
        });
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "An error occurred while creating the blog.",
        });
      }
    }
  };

  return (
    <section className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-6xl p-8 bg-white text-gray-900 rounded-lg shadow-lg mx-[5%]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create a New Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              required
            />
            {imagePreview && (
              <div className="mt-4">
                <Image
                  src={imagePreview}
                  alt="Image Preview"
                  className="h-40 w-fit rounded-md shadow-md"
                  width={160} // You can set the width and height according to your needs
                  height={160}
                />
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="description_english"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description (English)
            </label>
            <div className="mb-5">
              <QuillEditor
                value={contentEnglish}
                onChange={setContentEnglish}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description_bangla"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description (Bangla)
            </label>
            <div className="mb-5">
              <QuillEditor value={contentBangla} onChange={setContentBangla} />
            </div>
          </div>

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

          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-primary rounded-lg hover:bg-primary-dark transition"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Blog"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;
