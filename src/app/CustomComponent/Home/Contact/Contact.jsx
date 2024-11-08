import { FaPhoneAlt } from "react-icons/fa";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import InputForm from "./InputForm";

export default function Contact() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-[5%] text-center">
        <SubHeading>Make An Appointment</SubHeading>
        <Heading>
          Connect <span className="text-secondary">With Us For</span> a{" "}
          <br className="hidden sm:block" /> Strong Legal Defense
        </Heading>
      </div>
      <InputForm />
      <header className="max-w-screen-xl mx-auto mb-10 px-[5%] flex flex-col sm:flex-row justify-between items-center  gap-5 text-start">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold md:leading-tight">
          Your <span className="text-secondary">Legal Solution</span> <br /> Is
          Just a Call Away
        </h1>
        <div className="flex justify-center items-center gap-2 lg:gap-4">
          <FaPhoneAlt className="text-white bg-black rounded-full p-[7px] sm:p-[10px] lg:p-3 2xl:p-[15px] text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl transition-transform transform hover:scale-110 " />
          <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
            <a
              href="tel:+8801712581787"
              className="text-inherit font-extrabold hover:text-gray-600 transition-colors duration-300"
            >
              01712-581787
            </a>
          </p>
        </div>
      </header>

      <section className="max-w-screen-xl mx-auto px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-start sm:mt-16">
        {/* Chamber Address */}
        <article className="p-5 bg-lightGray rounded-sm transition-shadow hover:shadow-lg hover:bg-gray-100">
          <h2 className="text-lg font-semibold text-primary">
            Chamber Address
          </h2>
          <div className="h-[2px] w-full bg-mediumGray my-2" />
          <address className="not-italic">
            <p>Bar Hall No 03,</p>
            <p>1st floor Hall Room,</p>
            <p>Judge&#39;s Court, Sylhet</p>
          </address>
        </article>
        {/* Office Address */}
        <article className="p-5 bg-lightGray rounded-sm transition-shadow hover:shadow-lg hover:bg-gray-100">
          <h2 className="text-lg font-semibold text-primary">Office Address</h2>
          <div className="h-[2px] w-full bg-mediumGray my-2" />
          <address className="not-italic">
            <p>Migration Abroad,</p>
            <p>4th Floor (Lift-3),</p>
            <p>West World Shopping City,</p>
            <p>Jindabazar, Sylhet, Bangladesh</p>
          </address>
        </article>

        {/* Home Address */}
        <article className="p-5 bg-lightGray rounded-sm transition-shadow hover:shadow-lg hover:bg-gray-100">
          <h2 className="text-lg font-semibold text-primary">Home Address</h2>
          <div className="h-[2px] w-full bg-mediumGray my-2" />
          <address className="not-italic">
            <p>Mosobbir Villa,</p>
            <p>2 No Masjid, Baluchor,</p>
            <p>Sylhet</p>
          </address>
        </article>
      </section>
    </section>
  );
}
