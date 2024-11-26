import AboutUs from "../CustomComponent/Home/AboutUs/AboutUs";
import Banner from "../CustomComponent/Home/Banner/Banner";
import Contact from "../CustomComponent/Home/Contact/Contact";
import OurAssociateMembers from "../CustomComponent/Home/OurAssociateMembers/OurAssociateMembers";
import OurBlogs from "../CustomComponent/Home/OurBlogs/OurBlogs";
import OurServices from "../CustomComponent/Home/OurServices/OurServices";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner Section */}
      <Banner />

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services">
        <OurServices />
      </section>

      {/* Associate Members Section */}
      <section id="associateMembers">
        <OurAssociateMembers />
      </section>

      {/* Blogs Section */}
      <section>
        <OurBlogs />
      </section>

      {/* Contact Section */}
      <section id="contact" >
        <Contact />
      </section>
    </main>
  );
}
