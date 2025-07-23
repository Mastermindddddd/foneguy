import React from "react";
import PhoneImage from "/phone.png"; // Replace with actual image path
import LaptopImage from "/laptop.png"; // Replace with actual image path
import TabletImage from "/tablet.png"; // Replace with actual image path

const DemoFonePromo = () => {
  return (
    <div className="space-y-6 px-6 py-10 lg:px-32">
      {/* Top Card */}
      <div className="bg-teal-300 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white max-w-md mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Certified Demo Devices at <br /> Half the Price
          </h2>
          <p className="mb-6 text-sm">
            Get access to the latest smartphone technology without paying outrageous contract prices. 
            Our certified pre-loved demo devices were previously used in-store for display and are now 
            available to you at a fraction of the cost.
          </p>
          <button className="bg-white text-black font-medium px-4 py-2 rounded-md">
            Shop now
          </button>
        </div>
        <img src={PhoneImage} alt="Smartphone" className="w-40 md:w-56" />
      </div>

      {/* Bottom Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-600 text-white rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Flexible Payments, <br /> No Credit Checks
            </h3>
            <p className="text-sm mb-6">
              Flexible Payments, No Credit Checks
            </p>
          </div>
          <div className="flex justify-between items-end">
            <button className="bg-white text-black font-medium px-4 py-2 rounded-md">
              Learn more
            </button>
            <img src={LaptopImage} alt="Laptop" className="w-32 md:w-40 mt-4" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-300 text-white rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Why Choose <br /> Demo Fone?
            </h3>
            <p className="text-sm mb-6">
              Affordable, fast, and contract-free. Get quality demo devices direct from the manufacturer.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <button className="bg-white text-black font-medium px-4 py-2 rounded-md">
              Learn more
            </button>
            <img src={TabletImage} alt="Tablet" className="w-32 md:w-40 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoFonePromo;
