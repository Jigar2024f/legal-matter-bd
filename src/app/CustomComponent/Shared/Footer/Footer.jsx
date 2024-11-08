import Image from "next/image";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import LegalMatterBD from "./LegalMatterBD";
import { MdEmail } from "react-icons/md";

export default function Footer(params) {
  return (
    <footer className="bg-primary text-white mt-12 sm:mt-14 lg:mt-16 2xl:mt-20  pt-12 pb-4 md:pb-10 sm:pt-14 lg:pt-16 2xl:pt-20 px-[5%]">
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
              <h1 className="text-xl 2xl:text-2xl font-medium">
                <LegalMatterBD />
              </h1>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-base 2xl:text-lg flex items-center gap-1">
                <MdEmail className="text-3xl" /> Email Us
              </h1>
            </div>

            <a
              href="mailto:info@legalmatterbd.com"
              className="text-lg 2xl:text-xl text-white hover:text-secondary transition-colors duration-300"
            >
              info@legalmatterbd.com
            </a>
          </div>
        </div>
        <div className="space-y-3 text-lg">
          <h1 className="text-xl lg:text-2xl font-semibold underline mb-5">
            Useful Links
          </h1>
          <a
            href="https://www.epassport.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> E- passport
          </a>
          <a
            href="https://www.brta.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> BRTA
          </a>
          <a
            href="https://www.ldtax.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> IDtax
          </a>
          <a
            href="https://www.barcouncil.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> Bangladesh Bar Council
          </a>
          <a
            href="https://www.ibanet.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> International Bar Association
          </a>
        </div>

        <div className="space-y-3 text-lg">
          <h1 className="text-xl lg:text-2xl font-semibold underline mb-5">
            Quick Links
          </h1>
          <a
            href="https://www.supremecourt.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> Supreme Court of Bangladesh
          </a>
          <a
            href="https://lawjusticediv.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> Ministry of Law
          </a>
          <a
            href="https://mha.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> Ministry of Home Affairs
          </a>
          <a
            href="https://nbr.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> National Board of Revenue
          </a>
          <a
            href="https://lawjusticediv.gov.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary hover:underline transition-colors duration-300"
          >
            <FaChevronRight /> Law and Justice Division
          </a>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-[5%] xl:px-0 flex flex-col sm:flex-row justify-between gap-5 mt-5">
        <div className="sm:w-1/3">
          <h1 className="text-lg 2xl:text-xl mb-2 sm:mb-4">Payment Partner</h1>
          <div className="flex items-center gap-3">
            <figure>
              <Image
                src="/images/footer/bkash.png"
                height={730}
                width={505}
                alt="Home page banner image"
                className="h-fit w-full object-cover object-center transition-transform transform hover:scale-110 hover:rotate-3"
                priority
              />
            </figure>
            <figure>
              <Image
                src="/images/footer/nagad.png"
                height={730}
                width={505}
                alt="Home page banner image"
                className="h-fit w-full object-cover object-center transition-transform transform hover:scale-110 hover:rotate-3"
                priority
              />
            </figure>
            <figure>
              <Image
                src="/images/footer/rocket.png"
                height={730}
                width={505}
                alt="Home page banner image"
                className="h-fit w-full object-cover object-center transition-transform transform hover:scale-110 hover:rotate-3"
                priority
              />
            </figure>
          </div>
        </div>
        <div className="flex items-end justify-center sm:justify-end w-full gap-3 lg:gap-4 my-5 sm:my-0">
          <FaFacebook className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-blue-600 p-[3px] transition duration-500 border hover:border-blue-600 cursor-pointer" />
          <FaTwitter className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-blue-400 p-[3px] transition duration-500 border hover:border-blue-400 cursor-pointer" />
          <FaLinkedin className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-blue-700 p-[3px] transition duration-500 border hover:border-blue-700 cursor-pointer" />
          <FaInstagramSquare className="text-3xl lg:text-4xl bg-white text-black rounded hover:text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px] transition duration-500 border hover:border-yellow-500 cursor-pointer" />
        </div>
      </div>
      <hr className="max-w-screen-xl mx-auto my-4 sm:my-6 lg:my-8 2xl:my-10" />
      <div className="max-w-screen-xl mx-auto px-[5%] xl:px-0 flex flex-row justify-between items-center gap-2">
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-xs sm:text-sm lg:text-base 2xl:text-lg flex items-center gap-2 transition-colors duration-300">
            <span className="text-white text-opacity-80">Website made by</span>
            <Image
              src="/images/footer/Qrinux.png"
              height={100}
              width={90}
              alt="logo"
              className="h-5 sm:7 w-fit"
            />
          </h1>
        </div>
        <a
          href="https://www.qrinux.com/"
          target="_blank"
          className="text-xs sm:text-sm lg:text-base 2xl:text-lg hover:text-secondary hover:underline "
        >
          www.qrinux.com
        </a>
      </div>
    </footer>
  );
}
