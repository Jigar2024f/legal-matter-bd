import Description from "@/app/CustomComponent/Ui/Description/Description";
import Heading from "@/app/CustomComponent/Ui/Heading/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function BlogTab({ blog }) {
  const { title, cover, description, author, category } = blog || {};
  return (
    <Tabs defaultValue="Bangla" className="">
      <div className="flex justify-center my-12 sm:my-14 lg:my-16 2xl:my-20">
        <TabsList className="grid grid-cols-2 w-fit">
          <TabsTrigger value="Bangla">Bangla</TabsTrigger>
          <TabsTrigger value="English">English</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="English">
        <section className="my-12 sm:my-14 lg:my-16 2xl:my-20">
          <h1 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-4xl font-extrabold leading-[30px] md:leading-tight">{title?.en}</h1>
          <div className="flex gap-10 flex-wrap my-2 sm:my-4 lg:my-6 2xl:my-8">
            <Description>
              <span className="text-[#6B7280]">Author: </span>

              {author?.en}
            </Description>
            <Description>
              <span className="text-[#6B7280]">Category: </span>
              {author?.en}
            </Description>
          </div>
          <figure className="h-52 sm:h-80 lg:h-[500px]  my-10 sm:my-14 lg:my-18 2xl:my-24">
            <Image
              src={cover}
              height={730}
              width={505}
              alt={title?.en}
              className="h-full w-full object-cover rounded"
              priority
            />
          </figure>
          <Description>{description?.en}</Description>
        </section>
      </TabsContent>
      <TabsContent value="Bangla">
        <section className="my-12 sm:my-14 lg:my-16 2xl:my-20 noto-serif-bengali-font">
          <h1 className="text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold leading-[22px] md:leading-tight">{title?.bn}</h1>
          <div className="flex gap-10 flex-wrap my-2 sm:my-4 lg:my-6 2xl:my-8">
            <Description>
              <span className="text-[#6B7280]">লেখক: </span>
              {author?.bn}
            </Description>
            <Description>
              <span className="text-[#6B7280]">বিভাগ: </span>
              {author?.bn}
            </Description>
          </div>
          <figure className="h-52 sm:h-80 lg:h-[500px]  my-10 sm:my-14 lg:my-18 2xl:my-24">
            <Image
              src={cover}
              height={730}
              width={505}
              alt={title?.bn}
              className="h-full w-full object-cover rounded"
              priority
            />
          </figure>
          <Description>{description?.bn}</Description>
        </section>
      </TabsContent>
    </Tabs>
  );
}
