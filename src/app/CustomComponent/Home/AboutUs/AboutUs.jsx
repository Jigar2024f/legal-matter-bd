import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import Image from "next/image";

export default function AboutUs(params) {
  return (
    <section className="relative bg-primary text-white my-12 sm:my-14 lg:my-16 2xl:my-20 text-justify overflow-hidden px-[5%]">
      <div className="max-w-screen-xl mx-auto py-10 sm:py-14 lg:py-18 2xl:my-20  flex flex-col sm:flex-row gap-5">
        {/* Left Section with Heading and Image */}
        <header className="sm:w-1/3">
          <div className="relative flex items-center gap-2 z-50">
            <SubHeading>
              <span className="text-white">Who We Are</span>
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
            About <span className="text-opacity-20 text-white">Us</span>
          </Heading>
        </header>

        {/* Right Section with Content */}
        <article className="sm:w-2/3">
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-justify noto-serif-bengali-font">
            লিগ্যাল ম্যাটার বিডি&#34; ল ফার্মে স্বাগতম। এখানে আপনি পাবেন অভিজ্ঞ
            ও দক্ষ আইনজীবীদের কাছ থেকে যেকোনো আইনি বিষয়ে পরামর্শ। আপনি যদি
            দেওয়ানি, ফৌজদারি, কোম্পানি নিবন্ধন, আয়কর অথবা অন্য কোনো আইনি সমস্যার
            সমাধান খুঁজে থাকেন, তাহলে আমাদের &#34;লিগ্যাল ম্যাটার বিডি&#34; এর
            পেশাদার টিম সবসময় আপনার পাশে আছে।
            <br />
            আমাদের আইনজীবীরা সিলেট জজ কোর্ট, সুনামগঞ্জ জজ কোর্ট, হবিগঞ্জ জজ
            কোর্ট এবং ঢাকা জজ কোর্টে কাজ করেন। তারা সরাসরি মামলা পরিচালনা করে
            এবং আপনাকে সঠিক আইনি সহায়তা দিয়ে থাকেন।
            <br />
            আমাদের আরও কিছু বিশেষ সেবা রয়েছে, যার মধ্যে ভূমি জরিপ, ইমিগ্রেশন
            পরামর্শ, অভিজ্ঞ আর্কিটেক্ট ইঞ্জিনিয়ারের সহায়তা এবং অনলাইন ভূমি সেবা
            অন্তর্ভুক্ত। এছাড়া, ই-পাসপোর্ট এবং ড্রাইভিং লাইসেন্স আবেদন সহ
            বিভিন্ন অনলাইন সেবাও আমরা দিয়ে থাকি।
            <br />
            &#34;লিগ্যাল ম্যাটার বিডি&#34; আপনার আইনি ও ডিজিটাল সেবার
            নির্ভরযোগ্য সমাধান
          </p>
        </article>
      </div>
    </section>
  );
}
