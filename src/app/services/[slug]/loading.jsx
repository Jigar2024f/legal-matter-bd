export default function Loading() {
  return (
    <div className="max-w-screen-lg mx-auto px-[5%] xl:px-0 my-12 sm:my-14 lg:my-16 2xl:my-20 ">
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-300 w-60 mx-auto animate-pulse"></div>

      {/* Image Skeleton */}
      <div className="my-12 sm:my-14 lg:my-16 2xl:my-20">
        <div className="h-64 bg-gray-300 rounded-lg mx-auto animate-pulse "></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-20 bg-gray-300 w-96 animate-pulse"></div>
        <div className="h-6 bg-gray-300 animate-pulse"></div>
        <div className="h-6 bg-gray-300 animate-pulse"></div>
        <div className="h-6 bg-gray-300 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="h-6 bg-gray-300 animate-pulse" key={index}></div>
          ))}
        </div>
      </div>

      {/* Other Blogs Carousel Skeleton */}
      <div className="space-y-4 my-12 sm:my-14 lg:my-16 2xl:my-20">
        <div className="h-20 bg-gray-300 w-96 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-48 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-48 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-48 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-20 bg-gray-300 w-96 animate-pulse"></div>
          <div className="h-96 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
}
