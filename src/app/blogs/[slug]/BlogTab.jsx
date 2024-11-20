import Description from "@/app/CustomComponent/Ui/Description/Description";
import Heading from "@/app/CustomComponent/Ui/Heading/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function BlogTab({ blog }) {
  const {
    title_bangla,
    title_english,
    image,
    description_bangla,
    description_english,
    author,
    category_english,
    category_bangla,
  } = blog || {};

  return (
    <Tabs defaultValue="Bangla" className="">
      <div className="flex justify-center my-12 sm:my-14 ">
        <TabsList className="grid grid-cols-2 w-fit">
          <TabsTrigger value="Bangla">Bangla</TabsTrigger>
          <TabsTrigger value="English">English</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="English">
        <section className="my-12 sm:my-14 ">
          <h1 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-4xl font-extrabold leading-[30px] md:leading-tight">
            {title_english}
          </h1>
          <div className="flex gap-10 flex-wrap my-2 sm:my-4">
            <Description>
              <span className="text-[#6B7280]">Category: </span>
              {category_english}
            </Description>
          </div>
          <figure className="h-52 sm:h-80 lg:h-[500px]  my-5 sm:my-7 lg:my-8 2xl:my-10">
            <Image
              src={image}
              height={730}
              width={505}
              alt={title_english}
              className="h-full w-full object-cover rounded"
              priority
            />
          </figure>
          <p
            className="text-sm sm:text-base lg:text-lg 2xl:text-xl"
            dangerouslySetInnerHTML={{ __html: description_english }}
          ></p>
        </section>
      </TabsContent>
      <TabsContent value="Bangla">
        <section className="my-12 sm:my-14 lg:my-16 2xl:my-20 noto-serif-bengali-font">
          <h1 className="text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold leading-[22px] md:leading-tight">
            {title_bangla}
          </h1>
          <div className="flex gap-10 flex-wrap my-2 sm:my-4 ">
            <Description>
              <span className="text-[#6B7280]">বিভাগ: </span>
              {category_bangla}
            </Description>
          </div>
          <figure className="h-52 sm:h-80 lg:h-[500px]  my-5 sm:my-7 lg:my-8 2xl:my-10">
            <Image
              src={image}
              height={730}
              width={505}
              alt={title_bangla}
              className="h-full w-full object-cover rounded"
              priority
            />
          </figure>
          <p
            className="text-sm sm:text-base lg:text-lg 2xl:text-xl"
            dangerouslySetInnerHTML={{ __html: description_bangla }}
          ></p>
        </section>
      </TabsContent>
    </Tabs>
  );
}

