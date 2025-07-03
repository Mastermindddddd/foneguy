import React from "react";
import { Link } from "react-router-dom";

const ResearchDevelopment = () => {
  return (
    <div className="bg-gray-100">
  {/* Hero Section */}
  <div
    className="relative bg-cover bg-center min-h-[400px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[400px] flex flex-col items-center justify-center text-white px-6"
    style={{ backgroundImage: "url('/counseling-session.jpg')" }}
  >
    {/* Overlay to match the greenish color */}
    <div className="absolute inset-0 bg-[#156760] bg-opacity-80"></div>

    <div className="relative text-center lg:text-justify max-w-6xl px-6">
      <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
        RESEARCH AND DEVELOPMENT
      </h1>
      <p className="mt-2 text-sm sm:text-base mb-6">
        Research is a fundamental aspect of understanding phenomena. An effective research project requires
        the application of relevant scientific methodologies and techniques, which play a crucial role in
        delivering accurate research outcomes. Our research capabilities encompass a range of methodologies,
        including qualitative, quantitative, and mixed methods. Additionally, we have robust data collection
        capabilities, including surveys and questionnaires, focus groups, interviews, desktop research, and
        observations. Furthermore, we manage the entire research process, from data collection and analysis
        to synthesis and report writing.
      </p>
      <div className="mt-6 flex justify-center">
        <Link to="/contact-us">
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition">
            FIND OUT MORE
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Contact Section */}
  <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-12 mt-12">
    {/* Contact Info */}
    <div>
      <h2 className="text-lg font-semibold">Please feel free to complete the form and we’ll get back to you as soon as possible</h2>
      <div className="mt-6">
        <p className="font-semibold">Call Us</p>
        <a href="tel:+27821398549" className="text-black underline">+27 (0) 82 319 8549</a>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Email Support</p>
        <h3>Email us & we will get back to you within 24 hours</h3>
        <a href="mailto:foundation@blackandforth.co.za" className="text-black font-bold underline">
          foundation@blackandforth.co.za
        </a>
      </div>
    </div>

    {/* Contact Form */}
    <div className="bg-white shadow-md p-6 rounded-md">
      <h3 className="text-lg font-semibold">Contact Us</h3>
      <form className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First name" className="border p-2 w-full rounded-md" />
          <input type="text" placeholder="Last name" className="border p-2 w-full rounded-md" />
        </div>
        <input type="email" placeholder="Email address" className="border p-2 w-full mt-4 rounded-md" />
        <textarea placeholder="Message" className="border p-2 w-full mt-4 rounded-md" rows="4"></textarea>
        <button className="mt-4 bg-teal-700 text-white px-6 py-2 rounded-lg w-full hover:bg-green-700 transition">
          Proceed
        </button>
      </form>
    </div>
  </div>

  {/* Footer */}
  <footer className="flex justify-between text-center text-xs text-gray-600 py-4 px-6 border-t">
    <p>&copy; 2025 Black and Forth. All rights reserved.</p>
    <div className="flex justify-center gap-4 mt-2 text-sm">
      <a href="#" className="hover:text-gray-900">Privacy Policy</a>
      <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
      <a href="#" className="hover:text-gray-900">Cookie Policy</a>
    </div>
  </footer>
</div>

  );
};

export default ResearchDevelopment;
