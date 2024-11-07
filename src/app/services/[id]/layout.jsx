import Footer from "@/app/CustomComponent/Shared/Footer/Footer";
import Navbar from "@/app/CustomComponent/Shared/Navbar/Navbar";

export default function layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
