import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, Wallet, Lock } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-start max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* Text Content */}
        <div className="flex-1 max-w-xl lg:max-w-lg text-center lg:text-left mt-[-30px] sm:mt-[-40px] md:mt-[-60px]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Need a New <br /> Smartphone?
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8">
            Get access from as{" "}
            <span className="italic font-semibold text-black">little</span> as R162 per month
          </p>
          <Link to="/apply">
            <img
              src="/apply-button.png"
              alt="Apply Now"
              className="w-auto h-12 mx-auto lg:mx-0 hover:opacity-90 transition"
            />
          </Link>
          <p className="mt-6 italic font-semibold text-black">
            or apply via WhatsApp on 061 484 4378
          </p>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center lg:justify-start mt-8 lg:mt-[-20px] relative">
          <img
            src="/phones.png"
            alt="Smartphones"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50vw] max-w-xs sm:max-w-sm md:max-w-none h-auto ml-0 lg:ml-[-60px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-[-20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
          <div className="bg-gray-100 p-3 rounded-full shrink-0">
            <ShieldCheck className="h-5 w-5 text-gray-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-sm">Protected</h3>
            <p className="text-gray-500 text-xs">
              ‘Opt’ for insurance and have peace of mind
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
          <div className="bg-gray-100 p-3 rounded-full shrink-0">
            <Clock className="h-5 w-5 text-gray-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-sm">Easy To Apply</h3>
            <p className="text-gray-500 text-xs">
              Easy to Apply – Take 3mins to apply. Fast and Easy.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
          <div className="bg-gray-100 p-3 rounded-full shrink-0">
            <Wallet className="h-5 w-5 text-gray-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-sm">Affordable</h3>
            <p className="text-gray-500 text-xs">
              Pay a deposit, then settle over 60 days — your schedule
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-start space-x-4">
          <div className="bg-gray-100 p-3 rounded-full shrink-0">
            <Lock className="h-5 w-5 text-gray-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-sm">Secure</h3>
            <p className="text-gray-500 text-xs">
              Remote locking when device is lost or stolen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
