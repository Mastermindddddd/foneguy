import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.jsx";
import PhoneCarousel from "../components/PhoneCarousel.jsx";
import GetStarted from "../components/GetStarted.jsx";
import Footer from "../components/Footer/Footer.jsx";
import DemoPromoCards from "../components/DemoPromoCards.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="phones" className="pt-18">
        <PhoneCarousel />
      </section>
      <section id="get-started" className="pt-18">
        <GetStarted />
      </section>
      <section id="demo-promo-cards">
        <DemoPromoCards />
      </section>
      <section id="track-record" className="pt-18">
        <Footer />
      </section>
    </div>
  );
};


export default Home;