import Footer from "../CustomComponent/Shared/Footer/Footer";
import Navbar from "../CustomComponent/Shared/Navbar/Navbar";

export default function layout({ children }) {
    return <section>
      <Navbar/>
      {children}
      <Footer/>
      </section>;
  }
  