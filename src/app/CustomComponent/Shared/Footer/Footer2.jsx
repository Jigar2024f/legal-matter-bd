import Image from "next/image";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer2(params) {
  return (
    <footer className="bg-primary text-white mt-10 sm:mt-14 lg:mt-18 2xl:mt-24  py-10 sm:py-14 lg:py-18 2xl:py-24">
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
      <div className="max-w-screen-xl mx-auto px-[5%] grid grid-cols-1 sm:grid-cols-3 justify-between items-start sm:items-center gap-5 font-medium  mt-2 sm:mt-7 lg:mt-9 2xl:mt-12">
        <div className="flex justify-between items-start gap-3 w-full">
          <div className="hidden sm:block">
            <Image
              src="/images/footer/logo.png"
              height={100}
              width={90}
              alt="logo"
              className="sm:h-14 lg:h-16 w-fit mb-2"
            />
            <h1 className=" text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium">
              Legal Matter BD
            </h1>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-start gap-2">
            <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
              Email Us
            </h1>
          </div>
          <h1 className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
            Loremipsum@gmail.com
          </h1>
        </div>
        <div className="flex items-center justify-center sm:justify-start w-full gap-2 lg:gap-3 mt-4 sm:mt-0">
          <FaFacebook className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
          <FaTwitter className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
          <FaLinkedin className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
          <FaInstagramSquare className="text-2xl lg:text-3xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
