import Description from "@/app/CustomComponent/Ui/Description/Description";
import { IoCheckbox } from "react-icons/io5";
import Heading from "@/app/CustomComponent/Ui/Heading/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function ServicesTab({ service }) {
  const { title, image, description, options } = service || {};
  return (
    <Tabs defaultValue="English" className="max-w-screen-xl mx-auto">
      <div className="flex justify-center my-12 sm:my-14 lg:my-16 2xl:my-20">
        <TabsList className="grid grid-cols-2 w-fit">
          <TabsTrigger value="English">English</TabsTrigger>
          <TabsTrigger value="Bangla">Bangla</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="English">
        <section className="my-12 sm:my-14 lg:my-16 2xl:my-20 px-[5%]">
          <figure className="h-52 sm:h-80 lg:h-[500px] my-12 sm:my-14 lg:my-16 2xl:my-20">
            <Image
              src={image}
              height={730}
              width={505}
              alt={title?.en}
              className="h-full w-full object-cover rounded"
              priority
            />
          </figure>
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold md:leading-tight">{title?.en}</h1>
          <div className=" my-2 sm:my-4 lg:my-6 2xl:my-8">
            <Description>{description?.en}</Description>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-1">
                <IoCheckbox className="bg-white text-primary text text-sm sm:text-base lg:text-lg 2xl:text-xl" />
                <Description>{option.en}</Description>
              </div>
            ))}
          </div>
        </section>
      </TabsContent>
      <TabsContent value="Bangla">
        <section className=" my-12 sm:my-14 lg:my-16 2xl:my-20 px-[5%] noto-serif-bengali-font">
          <figure className="h-52 sm:h-80 lg:h-[500px]  my-12 sm:my-14 lg:my-16 2xl:my-20">
            <Image
              src={image}
              height={730}
              width={505}
              alt={title?.bn}
              className="h-full w-full object-cover rounded"
              priority
            />
          </figure>
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold md:leading-tight ">{title?.bn}</h1>
          <div className=" my-2 sm:my-4 lg:my-6 2xl:my-8">
            <Description>{description?.bn}</Description>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-1">
                <IoCheckbox className="bg-white text-primary text text-sm sm:text-base lg:text-lg 2xl:text-xl" />
                <Description>{option.bn}</Description>
              </div>
            ))}
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
}
