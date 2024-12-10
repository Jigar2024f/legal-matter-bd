export default function Loading() {
  return (
    <div className="">
      <div className="h-24 bg-gray-300 animate-pulse w-full"></div>{" "}
      <div className="mx-[5%]">
        <div className="max-w-screen-xl mx-auto my-12 sm:my-14 lg:my-16 2xl:my-20">
          {/* Title Skeleton */}
          <div className="flex flex-col lg:flex-row gap-5 animate-pulse">
            <div className="h-32 bg-gray-300 animate-pulse w-full"></div>{" "}
            {/* Added width */}
            <div className="h-32 bg-gray-300 animate-pulse w-full"></div>{" "}
            {/* Added width */}
          </div>
          {/* Image Skeleton */}
          <div className="h-96 bg-gray-300 rounded-lg max-w-screen-lg mx-auto animate-pulse w-full my-12 sm:my-14 lg:my-16 2xl:my-20"></div>{" "}
          {/* Added width for proper visibility */}
        </div>
      </div>
      <div className="h-96 bg-gray-300 animate-pulse w-full"></div>{" "}
    </div>
  );
}
