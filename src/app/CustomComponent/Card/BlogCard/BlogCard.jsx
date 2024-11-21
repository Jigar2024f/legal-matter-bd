import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function BlogCard({ blog }) {
  const { _id, slug, image, description_bangla, title_bangla } = blog || {};

  return (
    <div className="flex flex-col sm:flex-row lg:flex-col justify-center gap-6 noto-serif-bengali-font ">
      <figure className="sm:w-1/2 lg:w-auto">
        <Image
          src={image}
          height={730}
          width={505}
          alt={title_bangla}
          className="h-full w-full object-cover object-top md:object-cover"
          priority
        />
      </figure>
      <div className="flex-1 flex flex-col">
        <h1 className="text-lg lg:text-xl mb-1 lg:mb-2 2xl:mb-3 font-medium">
          <span className="sm:hidden lg:block 2xl:hidden">
            {title_bangla?.length > 42
              ? `${title_bangla?.slice(0, 42)}...`
              : title_bangla}
          </span>
          <span className="hidden sm:block lg:hidden">
            {title_bangla?.length > 48
              ? `${title_bangla?.slice(0, 48)}...`
              : title_bangla}
          </span>
          <span className="hidden 2xl:block">
            {title_bangla?.length > 35
              ? `${title_bangla?.slice(0, 35)}...`
              : title_bangla}
          </span>
        </h1>
        <p className="text-sm lg:text-base text-[#6B7280] text-justify flex-1">
          <span
            className="sm:hidden lg:block 2xl:hidden"
            dangerouslySetInnerHTML={{
              __html:
                description_bangla?.length > 150
                  ? `${description_bangla?.slice(0, 150)}...`
                  : description_bangla,
            }}
          ></span>

          <span
            className="hidden sm:block lg:hidden"
            dangerouslySetInnerHTML={{
              __html:
                description_bangla?.length > 380
                  ? `${description_bangla?.slice(0, 380)}...`
                  : description_bangla,
            }}
          ></span>

          <span
            className="hidden 2xl:block"
            dangerouslySetInnerHTML={{
              __html:
                description_bangla?.length > 150
                  ? `${description_bangla?.slice(0, 180)}...`
                  : description_bangla,
            }}
          ></span>
        </p>

        <div>
          <Link href={`/blogs/${slug}`}>
            <button className="mt-4 text-xs sm:text-sm px-4 py-1 border border-primary rounded-full flex justify-center items-center gap-1 hover:bg-primary hover:text-white transition-transform duration-500 ease-in-out group">
              আরও পড়ুন{" "}
              <FaArrowRight className="text-xs transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
