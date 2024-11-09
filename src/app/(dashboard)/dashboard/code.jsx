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
    <section className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="w-full max-w-4xl bg-white text-black rounded-lg shadow-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Create a New Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title (English) */}
          <div>
            <label
              htmlFor="title_english"
              className="block text-base font-medium mb-1"
            >
              Title (English)
            </label>
            <input
              type="text"
              name="title_english"
              placeholder="Enter title in English"
              value={formData.title_english}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Title (Bangla) */}
          <div>
            <label
              htmlFor="title_bangla"
              className="block text-base font-medium mb-1"
            >
              Title (Bangla)
            </label>
            <input
              type="text"
              name="title_bangla"
              placeholder="Enter title in Bangla"
              value={formData.title_bangla}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block text-base font-medium mb-1">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              required
            />
          </div>

          {/* Description (English) */}
          <div>
            <label
              htmlFor="description_english"
              className="block text-base font-medium mb-1"
            >
              Description (English)
            </label>
            <textarea
              name="description_english"
              placeholder="Enter description in English"
              value={formData.description_english}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              rows="4"
              required
            />
          </div>

          {/* Description (Bangla) */}
          <div>
            <label
              htmlFor="description_bangla"
              className="block text-base font-medium mb-1"
            >
              Description (Bangla)
            </label>
            <textarea
              name="description_bangla"
              placeholder="Enter description in Bangla"
              value={formData.description_bangla}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              rows="4"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-base font-medium mb-1"
            >
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
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
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Createblog;
