"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for button

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://legalmatterbd-server.vercel.app/api/v1/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      // If login is successful, redirect or handle token as needed
      const { data } = response;
      console.log("Login successful", data);
      setSuccess(data.message);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white text-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Logging In..." : "Login"} {/* Conditional text */}
          </button>
        </form>

        {/* Display success or error messages */}
        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
        {success && (
          <div className="mt-4 text-green-500 text-center">{success}</div>
        )}
      </div>
    </section>
  );
};

export default Login;
