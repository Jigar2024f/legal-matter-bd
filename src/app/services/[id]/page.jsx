"use client";

import { useParams } from "next/navigation";
import { ServicesTab } from "./ServicesTab";
import { servicesData } from "../../../../public/data/services";
import OurServicesCard from "@/app/CustomComponent/Home/OurServices/OurServicesCard";
import { BreadcrumbSection } from "../Component/BreadcrumbSection/BreadcrumbSection";
import InputForm from "@/app/CustomComponent/Home/Contact/InputForm";

export default function Page() {
  const { id } = useParams();
  console.log(id);

  // Find the correct services using the slug
  const service = servicesData.find((b) => b.id === id);
  const otherServices = servicesData.filter((b) => b.id !== id);

  const randomServices = otherServices
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!service) {
    return <p className="text-white text-center mt-12">Service not found.</p>;
  }

  return (
    <main className="overflow-x-hidden">
      <BreadcrumbSection dynamicPage={service?.title?.en} />
      <ServicesTab service={service} />
      <div className="max-w-screen-lg mx-auto px-[5%] xl:px-0">
        <hr className="mb-10 sm:mb-12 lg:mb-14 2xl:mb-16" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
          Our Other Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6 sm:my-7 lg:my-8 2xl:my-10">
          {randomServices?.map((service) => (
            <OurServicesCard key={service?.id} service={service} />
          ))}
        </div>
      </div>
      <div className="mt-12 sm:mt-14 lg:mt-16 2xl:mt-20">
        <div className="max-w-screen-lg mx-auto  px-[5%] xl:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold  -mb-5 sm:-mb-7 lg:-mb-9 2xl:-mb-12">
            Consult Now
          </h1>
        </div>
        <InputForm />
      </div>
    </main>
  );
}