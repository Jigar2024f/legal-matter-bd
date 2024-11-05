import Image from "next/image";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer(params) {
  return (
    <footer className="bg-primary text-white mt-12 sm:mt-14 lg:mt-16 2xl:mt-20  py-12 sm:py-14 lg:py-16 2xl:py-20">
      <div className="max-w-screen-xl mx-auto px-[5%] flex flex-col sm:flex-row gap-5 text-sm sm:text-base lg:text-lg 2xl:text-xl font-medium">
        <div className="sm:hidden">
          <Image
            src="/images/footer/logo.png"
            height={100}
            width={90}
            alt="logo"
            className="md:h-20 w-fit mb-2"
          />
          <h1 className=" text-base sm:text-lg lg:text-xl font-medium">
            Legal Matter BD
          </h1>
        </div>
        <div>
          <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
            Address 1
          </h1>
          <p>
            House No. 56, Road No. 15/A, Block E, 4th Floor, Apartment 4B,
            Gulshan Model Town, Gulshan-2, Dhaka 1212, Bangladesh.
          </p>
        </div>
        <div>
          <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
            Address 2
          </h1>
          <p>
            House No. 56, Road No. 15/A, Block E, 4th Floor, Apartment 4B,
            Gulshan Model Town, Gulshan-2, Dhaka 1212, Bangladesh.
          </p>
        </div>
        <div>
          <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
            Address 3
          </h1>
          <p>
            House No. 56, Road No. 15/A, Block E, 4th Floor, Apartment 4B,
            Gulshan Model Town, Gulshan-2, Dhaka 1212, Bangladesh.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-[5%] grid grid-cols-1 sm:grid-cols-3 items-start sm:items-center gap-5 font-medium  mt-2 sm:mt-7 lg:mt-9 2xl:mt-12">
        <div className="flex justify-between items-start gap-3 w-full ">
          <div className="hidden sm:block">
            <Image
              src="/images/footer/logo.png"
              height={100}
              width={90}
              alt="logo"
              className="h-16 w-fit mb-2"
            />
            <h1 className=" text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium">
              Legal Matter BD
            </h1>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center justify-start gap-2">
            <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
              Email Us
            </h1>
          </div>
          <h1 className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
            Loremipsum@gmail.com
          </h1>
          <div className="flex items-center justify-center sm:justify-start w-full gap-2 lg:gap-3 mt-4">
            <FaFacebook className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
            <FaTwitter className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
            <FaLinkedin className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
            <FaInstagramSquare className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
          </div>
        </div>
        <div className="">
          <h1 className="text-base lg:text-lg 2xl:text-xl mb-2 sm:mb-4">
            Payment Partner
          </h1>
          <div className="flex items-center gap-3">
            <figure>
              <Image
                src="/images/footer/bkash.png"
                height={730}
                width={505}
                alt="Home page banner image"
                className="h-fit w-full object-cover object-center"
                priority
              />
            </figure>
            <figure>
              <Image
                src="/images/footer/nagad.png"
                height={730}
                width={505}
                alt="Home page banner image"
                className="h-fit w-full object-cover object-center"
                priority
              />
            </figure>
            <figure>
              <Image
                src="/images/footer/rocket.png"
                height={730}
                width={505}
                alt="Home page banner image"
                className="h-fit w-full object-cover object-center"
                priority
              />
            </figure>
          </div>

          <div className="mt-5 sm:hidden">
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-sm lg:text-base 2xl:text-lg">Email Us</h1>
            </div>
            <h1 className="text-base lg:text-lg 2xl:text-xl">
              Loremipsum@gmail.com
            </h1>
            <div className="flex items-center justify-start sm:justify-start w-full gap-2 lg:gap-3 mt-4">
              <FaFacebook className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
              <FaTwitter className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
              <FaLinkedin className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
              <FaInstagramSquare className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-screen-xl mx-auto my-4 sm:my-6 lg:my-8 2xl:my-10" />
      <div className="max-w-screen-xl mx-auto px-[5%] flex flex-row justify-between items-center gap-2">
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
            Website made by{" "}
            <a href="www.qrinux.com" target="_blank">
              <b>Qrinux</b>
            </a>
          </h1>
          {/* <Image
            src="/images/footer/Qrinux.png"
            height={100}
            width={90}
            alt="logo"
            className="h-6 sm:h-8 w-fit"
          /> */}
        </div>
        <a href="www.qrinux.com" target="_blank" className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
          www.qrinux.com
        </a>
      </div>
    </footer>
  );
}
