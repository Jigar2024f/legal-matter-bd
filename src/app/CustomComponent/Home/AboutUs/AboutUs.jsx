import { FaArrowRight } from "react-icons/fa";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import Description from "../../Ui/Description/Description";
import Image from "next/image";

export default function AboutUs(params) {
  return (
    <section className="relative bg-primary text-white my-12 sm:my-14 lg:my-16 2xl:my-20 text-justify overflow-hidden">
      {/* < div className="absolute top-10 -rotate-45 -left-[50%] sm:-left-[20%] lg:-left-[10%] 2xl:-left-[5%] z-10 h-10 w-[500px] bg-white bg-opacity-10"></> */}
      <div className="max-w-screen-xl mx-auto px-[5%] py-10 sm:py-14 lg:py-18 2xl:py-24 flex flex-col sm:flex-row gap-5">
        <div className="sm:w-1/3 ">
          <div className="relative flex items-center gap-2 z-50">
            <SubHeading>
              <span className="text-white">Who We Are</span>
            </SubHeading>
            <figure className="mt-1 2xl:mt-0 flex-1">
              <Image
                src="/images/home/arrow.png"
                height={730}
                width={505}
                alt="Home page banner image"
                className="h-full w-fit"
                priority
              />
            </figure>
          </div>
          <Heading>
            About <span className="text-secondary">Us</span>
          </Heading>
        </div>
        <div className="sm:w-2/3">
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Description>
        </div>
      </div>
    </section>
  );
}
