import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-screen w-full rounded-lg place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <Link
          href="/"
          className="mt-6 font-medium  text-lg  bg-primary rounded-lg text-white py-2.5 px-2 flex justify-center items-centertransition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105 hover:shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
