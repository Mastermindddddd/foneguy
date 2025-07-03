import React from "react";
import AboutUs2 from "../components/AboutUs2/AboutUs2.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner/Banner.jsx";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe.jsx";
import OurPromises from "../components/OurPromises/OurPromises.jsx";
import SkillsDevelopment from "../components/SkillsDevelopment/SkillsDevelopment.jsx";
import SkillsSection from "../components/SkillsSection/SkillsSection.jsx";
import EntrepreneurshipDevelopment from "../components/EntrepreneurshipDevelopment/EntrepreneurshipDevelopment.jsx";
import ResearchDevelopment from "../components/ResearchAndDevelopment/ResearchAndDevelopment.jsx";


const WhyChooseUs = () => {
  return (
    <div>
      <section id="foundation-about" className="pt-18">
        <AboutUs2 />
      </section>
      <section id="banner" className="pt-18">
        <Banner />
      </section>
      <section id="Who-we-serve" className="pt-18">
        <WhoWeServe />
      </section>
      <section id="our-promises" className="pt-18">
        <OurPromises />
      </section>
      <section id="skills-development" className="pt-18">
        <SkillsDevelopment />
      </section>
      <section id="skill-section" className="pt-18">
        <SkillsSection />
      </section>
      <section id="entrepreneurship-development" className="pt-18">
        <EntrepreneurshipDevelopment />
      </section>
      <section id="research-development" className="pt-18">
        <ResearchDevelopment />
      </section>
    </div>
  );
};

export default WhyChooseUs;
