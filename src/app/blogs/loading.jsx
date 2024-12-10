export default function Loading() {
  return (
    <div className="mx-[5%] my-12 sm:my-14 lg:my-16 2xl:my-20 text-center">
      <div className="max-w-screen-xl mx-auto">
        {/* Title Skeleton */}
        <div className="h-20 bg-gray-300 w-96 mx-auto animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-14 sm:my-16 lg:my-20 2xl:my-24">
          {Array.from({ length: 6 }).map((_, index) => (
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
