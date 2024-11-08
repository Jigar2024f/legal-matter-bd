import Image from "next/image";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";

export default function OurAssociateMembers() {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white  px-[5%] py-10 sm:py-14 lg:py-16 2xl:py-20 overflow-hidden">
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative max-w-screen-xl mx-auto flex flex-col lg:flex-row  gap-8 lg:gap-16 z-20">
        {/* Left Section: Title and Subtitle */}
        <header className="">
          <div className="flex items-center gap-4 ">
            <SubHeading>
              <span className="text-white">We Are Here For You</span>
            </SubHeading>
            <figure className="mt-1 2xl:mt-0 flex-1">
              <Image
                src="/images/home/arrow.png"
                height={730}
                width={505}
                alt="Decorative arrow image for Who We Are section"
                className="h-full w-fit"
                priority
              />
            </figure>
          </div>
          <Heading>
            <span className="text-opacity-40 text-white">Our</span> Associate
            Members
          </Heading>
        </header>
        {/* <div className="lg:w-2/5 sm:text-center lg:text-left">
          <SubHeading>
            <span className="text-white">We Are Here For You</span>
          </SubHeading>
          <Heading>
            <span className="text-opacity-40 text-white">Our</span> Associate
            Members
          </Heading>
        </div> */}

        {/* Right Section: Member Profile Card */}
        <div className="lg:w-3/5 flex flex-col lg:flex-row  gap-6 lg:gap-10 items-start bg-white bg-opacity-5 backdrop-blur-md p-3 rounded-lg shadow-xl  transition-shadow duration-300 ease-in-out transform ">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 overflow-hidden shadow-lg transform transition-transform duration-500 ease-in-out">
            <Image
              src="/images/home/our-associate-members.jpg"
              height={730}
              width={505}
              alt="Associate Member"
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>

          {/* Information Section */}
          <div className="text-gray-200 ">
            <h1 className=" font-semibold text-2xl sm:text-4xl lg:text-2xl  mb-3">
              Syed Jigar Saad Alam
            </h1>
            <div className="space-y-1.5  sm:text-2xl lg:text-base">
              <p>LL.B (Hon&#39;s), LL.M (Master’s),</p>

              <p c>Sylhet International University.</p>
              <p>Advocate, Judge&#39;s Court, Sylhet.</p>

              <p>
                Apprentice, Supreme Court of Bangladesh, High Court Division.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
