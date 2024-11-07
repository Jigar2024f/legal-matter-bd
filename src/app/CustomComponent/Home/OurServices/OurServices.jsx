import { servicesData } from "../../../../../public/data/services";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import OurServicesCard from "./OurServicesCard";

export default function OurServices(params) {
  const services = servicesData;
  return (
    <section className="mx-[5%] my-12 sm:my-14 lg:my-16 2xl:my-20 text-center">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <header>
          <SubHeading>How We Can Help</SubHeading>
          <Heading>
            <span className="text-secondary">Our</span> Services
          </Heading>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mt-7 lg:mt-9 2xl:mt-12">
          {services?.map((service) => (
            <article
              key={service?.id}
              className="transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <OurServicesCard service={service} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
