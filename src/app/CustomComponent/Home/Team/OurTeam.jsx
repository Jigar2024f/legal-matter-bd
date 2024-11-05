import Image from "next/image";
import { ourTeam } from "../../../../../public/data/team";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";

export default function OurTeam(params) {
  const members = ourTeam;
  return (
    <section className="relative bg-lightGray sm:bg-transparent text-secondary  text-justify overflow-hidden my-12 sm:my-14 lg:my-16 2xl:my-20">
      <div className="absolute sm:bg-lightGray top-1/3 w-full h-44 lg:h-48 2xl:h-60 -z-10"></div>
      <div className="relative max-w-screen-xl mx-auto flex flex-col sm:flex-row w-full overflow-hidden my-12">
        <div className="sm:w-1/3 my-auto pl-[5%] ">
          <SubHeading>We Are Here For You</SubHeading>
          <Heading>
            Our<span className="text-primary"> Team</span>
          </Heading>
        </div>
        <div className="sm:w-2/3 pr-[5%] pl-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {members?.map((member) => (
              <div className="" key={member.id}>
                <figure className="h-28 sm:h-32 lg:h-40 2xl:h-60">
                  <Image
                    src={member?.img}
                    height={730}
                    width={505}
                    alt={member?.name}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </figure>
                <h1 className="text-lg lg:text-xl font-semibold text-primary mt-1 lg:mt-2">
                  {member?.name}
                </h1>
                <p className="text-base lg:text-lg">{member?.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
