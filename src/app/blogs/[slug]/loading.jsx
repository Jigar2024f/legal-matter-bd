export default function Loading() {
  return (
    <div className="max-w-screen-lg mx-auto px-[5%] xl:px-0 space-y-8  my-12 sm:my-14 lg:my-16 2xl:my-20">
      <div className="h-8 bg-gray-300 rounded w-60 mx-auto animate-pulse mb-20"></div>
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>

      {/* Image Skeleton */}
      <div className="h-80 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>

      {/* Social Media Skeleton */}
      <div className="flex space-x-4 items-center">
        <div className="w-28 h-8 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Other Blogs Carousel Skeleton */}
      <div className="my-8 space-y-4">
        <div className="h-16 bg-gray-300 rounded w-1/4 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-14 sm:my-16 lg:my-20 2xl:my-24">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="h-48 bg-gray-300 animate-pulse w-full"></div>
              <div className="h-6 bg-gray-300 animate-pulse w-full"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-full"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-full"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-full"></div>
              <div className="h-6 bg-gray-300 rounded-xl animate-pulse w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
