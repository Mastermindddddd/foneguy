import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, Wallet, Lock } from "lucide-react"; // Add this to your imports
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-start max-w-7xl mx-auto px-6">
  {/* Text Content */}
  <div className="flex-1 max-w-xl lg:max-w-lg text-center lg:text-left mt-[-40px]">

    <h1 className="text-4xl sm:text-xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
      Need a New <br /> Smartphone?
    </h1>
    <p className="text-gray-600 text-lg sm:text-xl mb-8">
      Get access from as <span className="italic font-semibold text-black">little</span> as R162 per month
    </p>
    <Link to="/apply">
      <img
        src="/apply-button.png"
        alt="Apply Now"
        className="w-auto h-12 hover:opacity-90 transition"
      />
    </Link>

    <p className=" mt-6 italic font-semibold text-blackc">
      or apply via WhatsApp on 061 484 4378
    </p>
  </div>

  {/* Image */}
  <div className="w-full flex justify-center lg:justify-start mt-8 lg:mt-0 relative">
    <img
      src="/phones.png"
      alt="Smartphones"
      className="w-[50vw] max-w-none h-auto ml-[-60px]"
      loading="lazy"
    />
  </div>
</div>

      {/* Benefits Section */}
      <div className="bg-white max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {/* Card */}
  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center space-x-4">
    <div className="bg-gray-100 p-3 rounded-full">
      <ShieldCheck className="h-5 w-5 text-gray-600" />
    </div>
    <div className="text-left">
      <h3 className="font-semibold text-sm">Protected</h3>
      <p className="text-gray-500 text-xs">‘Opt’ for insurance and have peace of mind</p>
    </div>
  </div>

  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center space-x-4">
    <div className="bg-gray-100 p-3 rounded-full">
      <Clock className="h-5 w-5 text-gray-600" />
    </div>
    <div className="text-left">
      <h3 className="font-semibold text-sm">Easy To Apply</h3>
      <p className="text-gray-500 text-xs">Easy to Apply – Take 3mins to apply. Fast and Easy.</p>
    </div>
  </div>

  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center space-x-4">
    <div className="bg-gray-100 p-3 rounded-full">
      <Wallet className="h-5 w-5 text-gray-600" />
    </div>
    <div className="text-left">
      <h3 className="font-semibold text-sm">Affordable</h3>
      <p className="text-gray-500 text-xs">Pay a deposit, then settle over 60 days — your schedule</p>
    </div>
  </div>

  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center space-x-4">
    <div className="bg-gray-100 p-3 rounded-full">
      <Lock className="h-5 w-5 text-gray-600" />
    </div>
    <div className="text-left">
      <h3 className="font-semibold text-sm">Secure</h3>
      <p className="text-gray-500 text-xs">Remote locking when device is lost or stolen</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
