import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">

      {/* Blue Accent Bar */}
      <div className="w-full h-14 bg-blue-600"></div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-start max-w-7xl mx-auto px-6 py-12 lg:py-14">
  {/* Text Content */}
  <div className="flex-1 max-w-xl lg:max-w-lg text-center lg:text-left">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
      Need a New <br /> Smartphone?
    </h1>
    <p className="text-gray-600 text-lg sm:text-xl mb-6">
      Get access from as <span className="italic font-semibold text-black">little</span> as R162 per month
    </p>
    <Link to="/apply">
      <button className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-800 transition">
        Apply Now
      </button>
    </Link>
    <p className=" mt-4 text-bold text-lg">
      or apply via WhatsApp on 061 484 4378
    </p>
  </div>

  {/* Image */}
  <div className="w-full flex justify-center lg:justify-start mt-8 lg:mt-0 relative">
    <img
      src="/phones.png"
      alt="Smartphones"
      className="w-[40vw] max-w-none h-auto ml-[-60px]"
      loading="lazy"
    />
  </div>
</div>

      {/* Benefits Section */}
      <div className="bg-white max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-gray-50 p-5 rounded shadow-sm">
          <h3 className="font-semibold mb-2 text-lg">Protected</h3>
          <p className="text-gray-500 text-sm">
            ‘Opt’ for insurance and have peace of mind
          </p>
        </div>
        <div className="bg-gray-50 p-5 rounded shadow-sm">
          <h3 className="font-semibold mb-2 text-lg">Easy To Apply</h3>
          <p className="text-gray-500 text-sm">
            Easy to Apply – Take 3 mins to apply. Fast and Easy.
          </p>
        </div>
        <div className="bg-gray-50 p-5 rounded shadow-sm">
          <h3 className="font-semibold mb-2 text-lg">Affordable</h3>
          <p className="text-gray-500 text-sm">
            Pay a deposit, then settle over 60 days — your schedule
          </p>
        </div>
        <div className="bg-gray-50 p-5 rounded shadow-sm">
          <h3 className="font-semibold mb-2 text-lg">Secure</h3>
          <p className="text-gray-500 text-sm">
            Remote locking when device is lost or stolen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
