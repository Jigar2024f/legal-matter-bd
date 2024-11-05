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
    <section className="my-12 sm:my-14 lg:my-16 2xl:my-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-5 px-[5%]">
        <Heading>
          Your Problem,
          <br />
          The <span className="text-secondary">headache </span>
          <br />
          of solving it <br /> is ours
        </Heading>
        <div>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </Description>
          <button
            onClick={scrollToContact}
            className="text-base sm:text-lg px-6 py-2 border border-primary rounded-full flex justify-center items-center gap-1 mt-4 hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            Let’s Talk <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
      {/* Image Section */}
      <figure className="max-w-screen-xl mx-auto mt-5 sm:mt-7 lg:mt-9 2xl:mt-12 sm:px-[5%] h-44 sm:h-80 lg:h-96 2xl:h-[500px] px-[5%]">
        <Image
          src="/images/home/banner.png"
          height={730}
          width={505}
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
