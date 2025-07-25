import React, { useState } from "react";
import { Slider } from "@mui/material";

const CanIAffordThis = () => {
  const [deviceValue, setDeviceValue] = useState(1000);

  const handleSliderChange = (event, newValue) => {
    setDeviceValue(newValue);
  };

  const deposit = 1000;
  const firstPayment = 500;
  const repayment = ((deviceValue - deposit - firstPayment) / 4).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen bg-white p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center">Can I afford this?</h1>
      <p className="mb-8 md:mb-16 text-center px-2">Choose the device value with the slider below:</p>

      <div className="bg-gray-100 p-4 md:p-6 rounded-lg w-full max-w-7xl">
        <div className="bg-teal-300 p-4 md:p-20 rounded-lg flex flex-col">
          <div className="text-md text-white mb-4 md:mb-8 font-bold text-center md:text-left">
            Deposit<br />
            <span className="text-black font-semibold text-gray-800 mt-4">
              R800
            </span>
          </div>
          <p className="text-white mb-2 md:mb-4 text-center md:text-left">Total repayment: <span className="text-gray-800 font-semibold">R{repayment}</span></p>
          <p className="text-xl md:text-5xl font-bold mb-2 md:mb-4 text-gray-800 text-center md:text-left">
            (Total price - R1000 - R500 ) / 4
          </p>
          <p className="text-sm md:text-md text-white mb-4 md:mb-8 text-center md:text-left">
            Then 4 payments after that. Within 60 days.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition w-full sm:w-auto md:w-[14rem]">
  4 months
</button>

          </div>
        </div>
        <p className="mt-12 text-blue-600">Deposit fee depending on phone you chose (See deposit amount inphone image you select)</p>
      </div>

      <div className="w-full max-w-md mt-6 px-2 md:px-4">
        <Slider
          value={deviceValue}
          onChange={handleSliderChange}
          min={1000}
          max={10000}
          step={100}
          valueLabelDisplay="on"
        />
        <div className="flex justify-between text-xs md:text-sm text-teal-700 mt-2">
          <span>R1,000</span>
          <span>R10,000</span>
        </div>
      </div>
    </div>
  );
};

export default CanIAffordThis;
