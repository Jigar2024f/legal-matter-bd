"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  if (pathname === "/dashboard") {
    return null;
  }

  return (
    <div className="relative w-full z-50 sm:px-[5%] sm:py-4">
      <div className="max-w-screen-xl mx-auto container">
        <div className="relative hidden md:flex justify-between items-center overflow-x-hidden">
          <div className="flex justify-center items-center gap-3">
            <Link href={"/"}>
              <Image
                src="/images/navbar/logo.svg"
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

          <nav className="py-4 px-6 ubuntu-font">
            <ul className="flex space-x-8">
              {["Home", "About", "Services", "Blogs", "Contact"].map(
                (item, index) => (
                  <li key={index} className="group relative pb-2 text-xl">
                    {item === "Blogs" ? (
                      <Link href="/blogs">
                        <span className="hover:text-[#000000] transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-[#000000] after:transition-all after:duration-300 after:hover:w-full">
                          {item}
                        </span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavigation(item.toLowerCase())}
                        className="cursor-pointer hover:text-[#000000] transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-[#000000] after:transition-all after:duration-300 after:group-hover:w-full"
                      >
                        {item}
                      </button>
                    )}
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="relative md:hidden z-50 flex justify-between items-center px-[5%] py-4 sm:py-8 bg-white overflow-x-hidden">
          <Link className="flex flex-col items-center" href="/">
            <Image
              src="/images/navbar/logo.svg"
              height={100}
              width={90}
              alt="logo"
              className="relative z-50"
              quality={100}
            />
            <span className="text-sm">Legal Matter BD</span>
          </Link>

          <button
            className="text-3xl p-1.5 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 mt-24 z-0"
          ></div>
        )}

        <div className="md:hidden relative">
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
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", id: "contact" },
              ].map((item, index) => (
                <li key={index} className="w-full">
                  {item.href ? (
                    <Link
                      className="text-lg font-medium text-gray-700 hover:text-secondary hover:underline"
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        handleNavigation(item.id);
                        setIsMenuOpen(false);
                      }}
                      className="text-lg font-medium text-gray-700 hover:text-secondary hover:underline w-full"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
