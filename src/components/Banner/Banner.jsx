import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-teal-700 text-white text-center py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-3 text-gray-200">
          Partner with us for expert guidance and strategies that drive growth and success.
        </p>
        <Link to="/contact-us">
          <button className="mt-6 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-full border-2 border-white">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
