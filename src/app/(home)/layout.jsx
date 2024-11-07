import Footer from "../CustomComponent/Shared/Footer/Footer";
import Navbar from "../CustomComponent/Shared/Navbar/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div>

      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
