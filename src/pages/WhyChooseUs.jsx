import React from "react";
import Footer from "../components/Footer/Footer.jsx";
import FoneGuyPromo from "../components/FoneGuyPromo.jsx";
import DeviceProtection from "../components/DeviceProtection.jsx";


const WhyChooseUs = () => {
  return (
    <div>
      <div className="w-full h-14 bg-blue-600"></div>
      <section id="foneguy-promo" className="pt-18">
        <FoneGuyPromo />
      </section>
      <section id="device-protection" className="pt-18">
        <DeviceProtection />
      </section>
      <section id="footer" className="pt-18">
        <Footer />
      </section>
    </div>
  );
};

export default WhyChooseUs;
