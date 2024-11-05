"use client"; // Required for Next.js App Router

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu state
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <div className="relative w-full z-50  sm:px-[5%] sm:py-8">
      {/* Main Content Container */}
      <div className="max-w-screen-xl mx-auto container">
        {/* Desktop Navbar: Visible on md+ screens */}
        <div className="relative hidden md:flex justify-between items-center  overflow-x-hidden">
          {/* Logo */}
          <div className="flex justify-center items-center gap-3">
            <Link href={"/"}>
              <Image
                src="/images/navbar/logo.png"
                height={100}
                width={90}
                alt="logo"
                className="md:h-8 w-fit"
              />
            </Link>
            <h1 className="text-2xl font-medium hidden lg:block">
              Legal Matter BD
            </h1>
          </div>

          {/* Navbar Menu for Desktop */}
          <nav className="py-4 px-6 ubuntu-font">
            <ul className="flex space-x-8">
              <li>
                <Link
                  className="relative pb-2 hover:text-secondary text-xl"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="relative pb-2 hover:text-secondary text-xl"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="relative pb-2 hover:text-gray-300 text-xl"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="relative pb-2 hover:text-gray-300 text-xl"
                  href="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="relative pb-2 hover:text-gray-300 text-xl"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navbar: Visible only on small screens */}
        <div className="relative md:hidden z-50 flex justify-between items-centers px-[5%] py-6 sm:py-8 bg-white  overflow-x-hidden">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/images/navbar/logo.png"
              height={100}
              width={90}
              alt="logo"
              className="h-10 w-fit relative z-50"
            />
          </Link>

          {/* Toggle Button for Mobile Menu */}
          <button
            className="text-3xl p-1.5 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navbar Menu */}
        <div className="md:hidden relative">
          {/* Overlay */}
          {isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 mt-24 z-0"
            ></div>
          )}

          {/* Navbar */}
          <nav
            className={`${
              isMenuOpen
                ? "translate-y-0 opacity-100 shadow-md"
                : "-translate-y-full opacity-100"
            } transform transition-all duration-500 ease-in-out overflow-hidden absolute top-0 w-full bg-lightGray py-6 border-t border-gray-200 z-10`}
          >
            <ul className="flex flex-col items-center text-center space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li key={index} className="w-full">
                  <Link
                    className="text-lg font-medium text-gray-700 hover:text-secondary hover:underline"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
