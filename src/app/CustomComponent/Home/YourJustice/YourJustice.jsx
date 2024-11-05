import Image from "next/image";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import Heading from "../../Ui/Heading/Heading";
import Description from "../../Ui/Description/Description";

export default function YourJustice(params) {
  return (
    <section className="text-[#6B7280] my-12 sm:my-14 lg:my-16 2xl:my-20 text-justify overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-[5%] flex flex-col sm:flex-row gap-5">
        <div className="sm:w-1/3">
          <figure className="h-full w-full">
            <Image
              src="/images/blog/blog.png"
              height={730}
              width={505}
              alt="Your Justice, Our commitment"
              className="h-full w-full object-cover object-center"
              priority
            />
          </figure>
        </div>
        <div className="sm:w-2/3">
          <SubHeading>Our Vision</SubHeading>
          <Heading>
            <span className="text-primary">Your </span> Justice,
            <br />
            <span className="text-primary">Our commitment</span>
          </Heading>
          <div className=" space-y-3 2xl:space-y-5 mt-5 2xl:mt-8">
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </Description>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </Description>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}
