"use client"; // Make Home a client component

import { useEffect } from "react";
import AboutUs from "./CustomComponent/Home/AboutUs/AboutUs";
import Banner from "./CustomComponent/Home/Banner/Banner";
import Contact from "./CustomComponent/Home/Contact/Contact";
import OurBlogs from "./CustomComponent/Home/OurBlogs/OurBlogs";
import OurServices from "./CustomComponent/Home/OurServices/OurServices";
import OurTeam from "./CustomComponent/Home/Team/OurTeam";
import YourJustice from "./CustomComponent/Home/YourJustice/YourJustice";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main>
      <Banner />
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <OurTeam />
      <YourJustice />
      <OurBlogs />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
