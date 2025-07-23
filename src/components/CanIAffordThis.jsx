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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-5xl font-bold mb-2">Can I afford this?</h1>
      <p className="mb-16">Choose the device value with the slider below:</p>

      <div className="bg-gray-100 p-6 rounded-lg w-full max-w-7xl">
        {/*<div className="flex mb-4">
          <div className="text-sm text-teal-600">Deposit<br /><span className="text-black font-semibold">R{deposit.toLocaleString()}</span></div>
          <div className="text-sm text-teal-600 ml-8">First Payment<br /><span className="text-black font-semibold">R{firstPayment.toLocaleString()}</span></div>
        </div>*/}

        <div className="bg-teal-300 p-20 rounded-lg flex flex-col">
          <div className="text-md text-white mb-8 font-bold">Deposit<br /><span className="text-black font-semibold text-md text-gray-800">R{deposit.toLocaleString()}</span></div>
          <p className="text-white mb-4">Total repayment</p>
          <p className="text-5xl font-bold mb-4 text-gray-800">
            (Total price - R1000 - R500 ) / 4 = R{repayment}
          </p>
          <p className="text-md text-white mb-8">Then 4 payments after that. Within 60 days.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition max-w-[14rem]">4 months</button>
        </div>
      </div>

      <div className="w-full max-w-md mt-6 px-4">
        <Slider
          value={deviceValue}
          onChange={handleSliderChange}
          min={1000}
          max={10000}
          step={100}
          valueLabelDisplay="on"
        />
        <div className="flex justify-between text-sm text-teal-700 mt-2">
          <span>R1,000</span>
          <span>R10,000</span>
        </div>
      </div>
    </div>
  );
};

export default CanIAffordThis;
