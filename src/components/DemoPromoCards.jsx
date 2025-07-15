import React from "react";
import { Link } from "react-router-dom";

const DemoPromoCards = () => {
  return (
    <div className="px-4 md:px-20 lg:px-80 py-12 space-y-8 bg-white">
      {/* Top Card */}
      <div className="bg-teal-300 rounded-xl flex flex-col md:flex-row items-center overflow-hidden py-2 px-12">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Certified Demo Devices at Half the Price
          </h2>
          <p className="text-white mb-5">
            Get access to the latest smartphone technology without paying outrageous contract prices.
            Our certified pre-loved demo devices were previously used in-store for display and are now
            available to you at a fraction of the cost.
          </p>
          <Link to="/products">
            <button className="bg-white text-teal-700 font-semibold px-5 py-2 rounded shadow hover:bg-gray-100">
              Shop now
            </button>
          </Link>
        </div>

        {/* Image aligned to bottom and full height */}
        <div className="flex-1 h-full flex items-end justify-end">
          <img
            src="/phone.png"
            alt="Smartphone"
            className="h-full max-h-[360px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Cards (Images Only) */}
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="/flexible-payments-card.png"
          alt="Flexible Payments Card"
          className="rounded-xl w-full"
        />
        <img
          src="/demo-fone-card.png"
          alt="Why Choose Demo Fone Card"
          className="rounded-xl w-full"
        />
      </div>
    </div>
  );
};

export default DemoPromoCards;
