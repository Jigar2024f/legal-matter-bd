export default function Heading({children}) {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold md:leading-tight">
      {children}
    </h1>
  );
}
