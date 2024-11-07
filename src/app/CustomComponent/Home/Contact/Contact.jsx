import { FaPhoneAlt } from "react-icons/fa";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import InputForm from "./InputForm";

export default function Contact(params) {
  return (
    <section className="my-12 sm:my-14 lg:my-16 2xl:my-20 text-center">
      <div className="max-w-screen-xl mx-auto px-[5%]">
        <SubHeading>Make An Appointment</SubHeading>
        <Heading>
          Connect <span className="text-secondary">With Us For </span>a{" "}
          <br className="hidden sm:block" /> Strong Legal Defense
        </Heading>
      </div>
      <InputForm />
      <div className="max-w-screen-xl mx-auto px-[5%] xl:px-0 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-5 text-start text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold">
        <h1>
          Your <span className="text-secondary">Legal Solution </span> <br /> Is
          Just a Call Away
        </h1>
        <div className="flex justify-center items-center gap-2 lg:gap-4">
          <FaPhoneAlt className="text-white bg-black rounded-full p-[7px] sm:p-[10px] lg:p-3 2xl:p-[15px] text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl " />{" "}
          <h1 className="text-2xl sm:text-3xl lg:text46xl 2xl:text-5xl">
          01712581787
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-[5%] xl:px-0 text-start  sm:mt-16">
        <div className="p-5 bg-lightGray rounded-sm">
          <h1 className="text-lg font-semibold text-primary">Chamber</h1>
          <div className="h-[2px] w-full bg-mediumGray my-2" />
          <p>Bar Hall No 03, </p>
          <p>1st floor Hall Room, </p>
          <p>Judge&#39;s Court, Sylhet</p>
        </div>
        <div className="p-5 bg-lightGray rounded-sm">
          <h1 className="text-lg font-semibold text-primary">Office</h1>
          <div className="h-[2px] w-full bg-mediumGray my-2" />
          <p>Migration Abroad, </p>
          <p>4th Floor (Lift-3), </p>
          <p>West World Shopping City,</p>
          <p>Jindabazar, Sylhet, Bangladesh</p>
        </div>
        <div className="p-5 bg-lightGray rounded-sm">
          <h1 className="text-lg font-semibold text-primary">Home Address</h1>
          <div className="h-[2px] w-full bg-mediumGray my-2" />
          <p>Mosobbir villa, </p>
          <p>2no Masjid, Baluchor, </p>
          <p>Sylhet</p>
        </div>
      </div>
    </section>
  );
}
//  12345A@