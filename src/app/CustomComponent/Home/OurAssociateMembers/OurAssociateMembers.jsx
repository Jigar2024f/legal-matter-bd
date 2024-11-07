import Image from "next/image";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";

export default function OurAssociateMembers(params) {
  return (
    <section className="relative bg-black text-white my-12 sm:my-14 lg:my-20 2xl:my-40 px-[5%] py-5">
      <div className="absolute bg-white -bottom-1  lg:top-0 h-1/2 sm:h-3/4 lg:h-full w-full lg:w-1/2 2xl:w-1/3 z-10 right-0 "></div>
      <div className="relative max-w-screen-xl mx-auto flex flex-col lg:flex-row w-full">
        <div className="lg:w-2/5 2xl:w-3/5 my-auto">
          <h2 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl mb-1 lg:mb-2 ">
            We Are Here For You
          </h2>
          <Heading>
            <span className="text-[#ffffff2f]"> Our</span> Associate Members
          </Heading>
        </div>
        <div className="lg:w-1/2 2xl:w-2/5 flex flex-col sm:flex-row gap-0 sm:gap-5 sm:items-center relative z-20 ">
          <div className="my-5 lg:-my-10 2xl:-my-20">
            <div className="w-full h-fit lg:h-[350px] 2xl:h-[400px] sm:w-fit">
              <Image
                src="/images/home/our-associate-members.png"
                height={730}
                width={505}
                alt="our Associate Members"
                className="lg:h-full lg:w-fit border-2 border-black"
                priority
              />
            </div>
          </div>
          <div className="text-[#6B7280]">
            <h1 className="text-primary font-semibold text-xl mb-1">
              Syed Jigar Saad Alam
            </h1>
            <p>LL.B (Hon&#39;s)</p>
            <p>LL.M (Master’s)</p>
            <p>Sylhet International University.</p>
            <p>Advocate</p>
            <p>Judge&#39;s Court, Sylhet.</p>
            <p>Apprentice,</p>
            <p>Supreme Court Of Bangladesh,</p>
            <p>High Court Division.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
