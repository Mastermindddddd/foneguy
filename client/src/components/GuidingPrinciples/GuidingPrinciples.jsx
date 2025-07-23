import React from "react";
import IDIcon from "/id-icon.png";
import CameraIcon from "/camera-icon.png";
import PaymentIcon from "/payment-icon.png";

const GuidingPrinciples = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
        {/* Card 1: Identification */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <img src={IDIcon} alt="ID Icon" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-teal-700 uppercase">Identification</h3>
          <p className="text-sm text-gray-800 font-semibold mt-2">
            Valid SA ID or a Passport
          </p>
          <p className="text-xs text-gray-600">you must be 18 years or older</p>
        </div>

        {/* Card 2: Photo */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <img src={CameraIcon} alt="Camera Icon" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-teal-700 uppercase">Photo</h3>
          <p className="text-sm text-gray-800 font-semibold mt-2">
            Your picture
          </p>
          <p className="text-xs text-gray-600">will be taken during <strong>application</strong></p>
        </div>

        {/* Card 3: Payment */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <img src={PaymentIcon} alt="Payment Icon" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-teal-700 uppercase">Payment</h3>
          <p className="text-sm text-gray-800 mt-2">
            Simply pay a <strong>small upfront deposit</strong> and collect your smartphone directly — <strong>quick</strong>,
            <strong> easy</strong>, and <strong>hassle-free</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuidingPrinciples;
