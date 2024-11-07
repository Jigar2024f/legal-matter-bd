
import Image from "next/image";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import LegalMatterBD from "./LegalMatterBD";
import { MdEmail } from "react-icons/md";

export default function Footer(params) {
  return (
    <footer className="bg-primary text-white mt-12 sm:mt-14 lg:mt-16 2xl:mt-20  py-12 sm:py-14 lg:py-16 2xl:py-20">
      <div className=""></div>
      <div className="max-w-screen-xl mx-auto px-[5%] xl:px-0 flex flex-col sm:flex-row justify-between items-start gap-5">
        <div className="font-medium space-y-5">
          <div className="flex justify-between items-start gap-3 w-full ">
            <div className="block">
              <Image
                src="/images/footer/logo.png"
                height={100}
                width={90}
                alt="logo"
                className="h-16 w-fit mb-2"
              />
              <h1 className=" text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium">
                <LegalMatterBD />
              </h1>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg flex items-center gap-1">
              <MdEmail className="text-3xl"/> Email Us
              </h1>
            </div>
            <h1 className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
              Loremipsum@gmail.com
            </h1>
          </div>
        </div>
        <div className="space-y-3 text-lg">
          <h1 className="text-2xl font-semibold underline mb-5">Useful Links</h1>
          <p>E- passport</p>
          <p>BRTA</p>
          <p>IDtax</p>
          <p>Bangladesh Bar Council</p>
          <p>International Bar Association</p>
        </div>
        <div className="space-y-3 text-lg">
          <h1 className="text-2xl font-semibold underline mb-5">Quick Links</h1>
          <p>Supreme Court of Bangladesh</p>
          <p>Ministry of Law</p>
          <p>Ministry of Home Affairs </p>
          <p>National Board of Revenue</p>
          <p>Law and Justice Division</p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-[5%] xl:px-0 flex flex-col sm:flex-row justify-between gap-5 mt-5">
        <div className="sm:w-1/3">
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
        </div>
        <div className="flex items-end justify-center sm:justify-end w-full gap-3 lg:gap-4">
          <FaFacebook className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
          <FaTwitter className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
          <FaLinkedin className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
          <FaInstagramSquare className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-black p-[3px] translate duration-500 border hover:border-white cursor-pointer" />
        </div>
      </div>
      <hr className="max-w-screen-xl mx-auto my-4 sm:my-6 lg:my-8 2xl:my-10" />
      <div className="max-w-screen-xl mx-auto px-[5%] xl:px-0 flex flex-row justify-between items-center gap-2">
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg">
            Website made by{" "}
            <a href="www.qrinux.com" target="_blank">
              <b>Qrinux</b>
            </a>
          </h1>
        </div>
        <a
          href="www.qrinux.com"
          target="_blank"
          className="text-xs sm:text-sm lg:text-base 2xl:text-lg"
        >
          www.qrinux.com
        </a>
      </div>
    </footer>
  );
}
