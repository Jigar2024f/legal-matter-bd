/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import Image from "next/image";

export default function AboutUs(params) {
  return (
    <section className="relative bg-primary text-white my-12 sm:my-14 lg:my-16 2xl:my-20 text-justify overflow-hidden px-[5%]">
      <div className="max-w-screen-xl mx-auto py-10 sm:py-14 lg:py-16 2xl:py-20  flex flex-col sm:flex-row gap-5">
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
            "লিগ্যাল ম্যাটার বিডি" ল ফার্মে আপনাকে স্বাগতম। <br />
            আমাদের এখানে আপনি অভিজ্ঞ আইনজীবীদের সাথে আপনার আইন বিষয়ে যে কোন
            ধরনের পরামর্শ পেয়ে থাকবেন। যদি আপনি কোন ধরনের{" "}
            <b className="hover:underline">
              <Link href="/services/civil">দেওয়ানি,</Link>
            </b>{" "}
            <b className="hover:underline">
              <Link href="/services/civil">ফৌজদারি,</Link>
            </b>{" "}
            কোম্পানি রেজিষ্ট্রেশন করা,{" "}
            <b className="hover:underline">
              <Link href="/services/income-tax">আয়কর</Link>
            </b>{" "}
            বিষয় বা যে কোন ধরনের আইনি সমস্যায় পড়ে থাকেন বা সমস্যা থেকে প্রতিকার
            পেতে পরামর্শ নিতে চান সেক্ষেত্রে আপনাকে সহযোগিতা করতে সর্বদা
            প্রস্তুত আছে আমাদের "লিগ্যাল ম্যাটার বিডি" এর বিজ্ঞ আইনজীবীদের
            সমন্বয় টিম।
            <br /> সিলেট জজ কোর্ট, সুনামগঞ্জ জজ কোর্ট, হবিগঞ্জ জজ কোর্ট,
            মৌলভীবাজার জজ কোর্ট, ঢাকা জজ কোর্ট সহ বাংলাদেশ সুপ্রিম কোর্টের
            হাইকোর্ট বিভাগে আমাদের বিজ্ঞ আইনজীবীদের সমন্বয়ে এসোসিয়েট মেম্বারগণ
            সরাসরি মামলা মোকদ্দমায় আইনজীবী হিসেবে কাজ করে থাকেন।
            <br /> আমাদের এখান থেকে চাইলেই আপনি পাচ্ছেন,{" "}
            <b className="hover:underline">
              <Link href="/services/land-survey">ভূমি সার্ভে</Link>
            </b>{" "}
            করা, ইমিগ্রেশন বিষয়ে পরামর্শ, অভিজ্ঞ{" "}
            <b className="hover:underline">
              <Link href="/services/building-design">
                আর্কিটেক্ট ইঞ্জিনিয়ারের
              </Link>
            </b>{" "}
            পরামর্শ সহ অনলাইন এর ভূমি সেবা, ই পাসপোর্টের আবেদন করা, ড্রাইভিং
            লাইসেন্স এর আবেদন করা সহ ডিজিটাল সকল সুযোগ সুবিধা।
          </p>
        </article>
      </div>
    </section>
  );
}
