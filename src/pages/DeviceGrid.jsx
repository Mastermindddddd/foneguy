import React from "react";
import { FaHeart } from "react-icons/fa";

const products = [
  { name: "Realme C51", price: "R1 750,00", info: "Minimum Deposit R800.00", image: "/realme-c51.png" },
  { name: "Realme C55", price: "R2 990,00", info: "Minimum Deposit R800.00", image: "/realme-c55.png" },
  { name: "OPPO A74", price: "R1 750,00", info: "Minimum Deposit R800.00", image: "/oppo-a74.png" },
  { name: "OPPO A38", price: "R2 495,00", info: "Minimum Deposit R800.00", image: "/oppo-a38.png" },
  { name: "OPPO A58", price: "R2 650,00", info: "Minimum Deposit R800.00", image: "/oppo-a58.png" },
  { name: "Samsung Galaxy A05s", price: "R1 999,00", info: "From R299.00 per month x 4", image: "/a05s.jpg" },
  { name: "Samsung Galaxy A06", price: "R1 899,00", info: "For 60-day payment plan R2 799.00", image: "/a06.png" },
  { name: "Samsung Galaxy S20FE", price: "R2 699,00", info: "For 60-day payment plan R3 499.00", image: "/s20fe.png" },
  { name: "Samsung Galaxy A16", price: "R2 899,00", info: "For 60-day payment plan R3 799.00", image: "/a16.png" },
  { name: "Samsung Galaxy A56 dual sim", price: "R2 999,00", info: "From R1 064.95 per month x 4", image: "/a56.png" },
  { name: "Samsung Galaxy A25 5G", price: "R3 499,00", info: "For 60-day payment plan R4 299.00", image: "/a25-5g.png" },
  { name: "Samsung Galaxy A35", price: "R5 499,00", info: "From R2 822.45 per month x 3", image: "/a35.png" },
  { name: "Samsung Galaxy A36", price: "R6 799,00", info: "For 60-day payment plan R7 599.00", image: "/a36.png" },
  { name: "iPhone 8", price: "R2 999,00", info: "For 60-day payment plan R3 799.00", image: "/iphone-8.png" },
  { name: "iPhone SE", price: "R3 099,00", info: "For 60-day payment plan R3 799.00", image: "/iphone-se.png" },
  { name: "iPhone 13", price: "R9 999,00", info: "For 60-day payment plan R10 799.00", image: "/iphone-13.png" },
];

const highlightPrice = (text) => {
  const priceRegex = /(R[\d\s,.]+)/g; // Matches R followed by digits, spaces, commas, periods
  const parts = text.split(priceRegex);

  return parts.map((part, i) =>
    priceRegex.test(part) ? (
      <span key={i} className="text-red-600 font-semibold">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};


const DeviceGrid = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Find Your Perfect Device</h2>
      <p className="text-center text-gray-600 mb-10">
        Explore best brands and models at competitive prices. Flexible payment plans available.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-all duration-300"
          >
            {/* Image */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-[150px] h-[150px] object-contain object-center hover:scale-105 transition-transform bg-white rounded"
              />
            </div>

            {/* Title and Heart */}
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-[15px] text-gray-900">{product.name}</h3>
              <FaHeart className="text-gray-300 hover:text-red-500 cursor-pointer" />
            </div>

            {/* Pricing Info */}
            <div className="text-left space-y-1">
              <p className="text-gray-700 text-sm">{product.price}</p>
              <p className="text-sm text-gray-700">{highlightPrice(product.info)}</p>
            </div>

            {/* Add to bag button */}
            <button className="mt-4 w-full border border-gray-300 text-sm py-2 rounded-md hover:bg-gray-100 transition">
              Add to bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceGrid;
