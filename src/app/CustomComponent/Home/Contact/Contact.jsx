import { FaPhoneAlt } from "react-icons/fa";
import Heading from "../../Ui/Heading/Heading";
import SubHeading from "../../Ui/SubHeading/SubHeading";
import InputForm from "./InputForm";

export default function Contact(params) {
  return (
    <section className="my-12 sm:my-14 lg:my-16 2xl:my-20 text-center">
      <div className="max-w-screen-xl mx-auto px-[5%]">
        <SubHeading>Contact Us</SubHeading>
        <Heading>
          Connect <span className="text-secondary">With Us For </span>a{" "}
          <br className="hidden sm:block" /> Strong Legal Defense
        </Heading>
      </div>
      <InputForm />
      <div className="max-w-screen-xl mx-auto px-[5%] flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-5 text-start text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold">
        <h1>
          Your <span className="text-secondary">Legal Solution </span> <br /> Is
          Just a Call Away
        </h1>
        <div className="flex justify-center items-center gap-2 lg:gap-4">
          <FaPhoneAlt className="text-white bg-black rounded-full p-[7px] sm:p-[10px] lg:p-3 2xl:p-[15px] text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl " />{" "}
          <h1 className="text-2xl sm:text-3xl lg:text46xl 2xl:text-5xl">
            0123 456 789
          </h1>
        </div>
      </div>
    </section>
  );
}
