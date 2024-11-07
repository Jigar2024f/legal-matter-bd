import AboutUs from "../CustomComponent/Home/AboutUs/AboutUs";
import Banner from "../CustomComponent/Home/Banner/Banner";
import Contact from "../CustomComponent/Home/Contact/Contact";
import OurAssociateMembers from "../CustomComponent/Home/OurAssociateMembers/OurAssociateMembers";
import OurBlogs from "../CustomComponent/Home/OurBlogs/OurBlogs";
import OurServices from "../CustomComponent/Home/OurServices/OurServices";
import OurTeam from "../CustomComponent/Home/Team/OurTeam";
import YourJustice from "../CustomComponent/Home/YourJustice/YourJustice";


export default function Home() {

  return (
    <main>
      <Banner />
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <OurAssociateMembers />
      {/* <OurTeam /> */}
      {/* <YourJustice /> */}
      <OurBlogs />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
