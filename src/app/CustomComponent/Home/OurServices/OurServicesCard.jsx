import Link from "next/link";

export default function OurServicesCard({ service }) {
  const { id, title } = service || {};
  return (
    <div className="relative bg-lightGray rounded border-[.5px] border-mediumGray px-5 py-10 overflow-hidden">
      <div className="absolute h-10 bg-[#D9D9D9] w-full -rotate-45 -left-[40%] bg-opacity-35"></div>
      <div className="flex flex-col justify-center items-center gap-8 lg:gap-12">
        <h1 className="text-2xl font-semibold">{title?.en}</h1>
        <div className="h-[1.5px] w-[50%] bg-mediumGray"></div>
        <Link href={`/services/${id}`}>
          <button className="text-base sm:text-lg px-5 py-1 border border-primary font-light rounded-full flex justify-center items-center gap-1 hover:scale-105 transition-transform duration-500 ease-in-out">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}
