"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Createblog = () => {
  const [formData, setFormData] = useState({
    title_english: "",
    title_bangla: "",
    image: "",
    description_english: "",
    description_bangla: "",
    category: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        " https://ligalmatter.vercel.app/api/v1/blog",
        formData,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        alert("Blog created successfully!");
        setFormData({
          title_english: "",
          title_bangla: "",
          image: "",
          description_english: "",
          description_bangla: "",
          category: "",
        });
      } else {
        alert("Failed to create blog: " + response.data.message);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      if (error.response?.status === 401) {
        alert("You are not authorized. Please log in again.");
        router.push("/login");
      } else {
        alert("An error occurred while creating the blog.");
      }
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-8 bg-white text-gray-900 rounded-lg shadow-lg mx-[5%]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create a New Blog
        </h2>
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
              Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              required
            />
          </div>

          {/* Description (English) */}
          <div>
            <label
              htmlFor="description_english"
              className="block text-sm font-medium text-gray-700"
            >
              Description (English)
            </label>
            <textarea
              name="description_english"
              placeholder="Enter description in English"
              value={formData.description_english}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              rows="3"
              required
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
            <textarea
              name="description_bangla"
              placeholder="Enter description in Bangla"
              value={formData.description_bangla}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              rows="3"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="nature">Nature</option>
              <option value="historical">Historical</option>
              <option value="cultural">Cultural</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-primary rounded-lg hover:bg-primary-dark transition"
          >
            Create Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default Createblog;
