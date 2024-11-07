"use client"; // Make Home a client component
import { FaArrowRight } from "react-icons/fa";
import Description from "../../Ui/Description/Description";
import Heading from "../../Ui/Heading/Heading";
import Image from "next/image";

export default function Banner() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="my-6 sm:my-7 lg:my-8 2xl:my-10">
      <div className="  mx-[5%]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5 lg:gap-8">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl 2xl:text-7xl font-extrabold md:leading-tight">
            Your Problem,
            <br className="hidden lg:block" />
            The <span className="text-secondary">headache </span>
            <br className="hidden lg:block" />
            of solving it <br className="hidden sm:block" /> is ours
          </h1>
          <div>
            <Description>
              Legal Matter BD is here to help you with your legal issues. Our
              experienced team works by your side, making the process simpler,
              and giving you clear advice and practical solutions so you can
              feel confident moving forward.
            </Description>
            <button
              onClick={scrollToContact}
              className="text-base sm:text-lg px-6 py-2 border border-primary rounded-full flex justify-center items-center gap-1 mt-4 lg:mt-6 hover:bg-primary hover:text-white transition-transform duration-500 ease-in-out"
            >
              Let’s Talk <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <figure className="max-w-screen-xl mx-auto mt-6 sm:mt-8 lg:mt-10 2xl:mt-16 sm:px-[5%] px-[5%]">
        <Image
          src="/images/home/banner.png"
          height={626}
          width={638}
          alt="Home page banner image"
          className="h-full w-full object-cover object-center rounded sm:rounded-lg"
          priority
        />
      </figure>
      <div className="space-y-5 sm:space-y-12 lg:space-y-16 -mt-28 sm:-mt-52 lg:-mt-64 2xl:-mt-[300px] mb-28 sm:mb-52 lg:mb-64 2xl:mb-[300px]">
        <div className="border bg-[#C4C4C4] h-[2px]" />
        <div className="border bg-[#C4C4C4] h-[2px]" />
        <div className="border bg-[#C4C4C4] h-[2px]" />
      </div>
    </section>
  );
}
