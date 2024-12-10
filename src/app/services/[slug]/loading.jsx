export default function Loading() {
  return (
    <div className="max-w-screen-lg mx-auto px-[5%] xl:px-0 py-12 space-y-8">
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto animate-pulse"></div>

      {/* Image Skeleton */}
      <div className="h-64 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-4/5 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      </div>
      
      {/* Other Blogs Carousel Skeleton */}
      <div className="my-8 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-48 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-48 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-48 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
