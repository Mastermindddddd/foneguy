import React from "react";
import Footer from "../components/Footer/Footer.jsx";
import ContactSupport from "../components/ContactSupport/ContactSupport.jsx";


const ContactUs = () => {
  return (
    <div>
      <div className="w-full h-14 bg-blue-600"></div>
      <ContactSupport />
      <section id="footer" className="pt-18">
        <Footer />
      </section>
    </div>
  );
};


export default ContactUs;