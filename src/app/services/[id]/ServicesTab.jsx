import Description from "@/app/CustomComponent/Ui/Description/Description";
import { IoCheckbox } from "react-icons/io5";
import Heading from "@/app/CustomComponent/Ui/Heading/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function ServicesTab({ service }) {
  const { title, image, description, options } = service || {};
  return (
    <Tabs defaultValue="Bangla" className="max-w-screen-lg mx-auto">
      <div className="flex justify-center my-12 sm:my-14 lg:my-16 2xl:my-20">
        <TabsList className="grid grid-cols-2 w-fit">
          <TabsTrigger value="Bangla">Bangla</TabsTrigger>
          <TabsTrigger value="English">English</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="English">
        <section className="my-12 sm:my-14 lg:my-16 2xl:my-20 px-[5%] xl:px-0">
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
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold md:leading-tight">
            {title?.en}
          </h1>
          <div className=" my-2 sm:my-4 lg:my-6 2xl:my-8">
            <p
              className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-justify"
              dangerouslySetInnerHTML={{ __html: description?.en }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {options.map((option, index) => (
              <div key={index} className="flex items-start -mt-2 gap-1">
                <div className="w-5 lg:w-8">
                  <IoCheckbox className="bg-white text-primary text text-sm sm:text-base lg:text-lg 2xl:text-xl " />
                </div>
                <div className="flex-1">
                  <Description>{option.en}</Description>
                </div>
              </div>
            ))}
          </div>
        </section>
      </TabsContent>
      <TabsContent value="Bangla">
        <section className=" my-12 sm:my-14 lg:my-16 2xl:my-20 px-[5%] xl:px-0 noto-serif-bengali-font">
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
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold md:leading-tight ">
            {title?.bn}
          </h1>
          <div className=" my-2 sm:my-4 lg:my-6 2xl:my-8">
            <p
              className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-justify"
              dangerouslySetInnerHTML={{ __html: description?.bn }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {options.map((option, index) => (
              <div key={index} className="flex items-start gap-1">
                <div className="w-5 lg:w-8">
                  <IoCheckbox className="bg-white text-primary text text-sm sm:text-base lg:text-lg 2xl:text-xl " />
                </div>
                <div className="flex-1">
                  <Description>{option.bn}</Description>
                </div>
              </div>
            ))}
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
}
