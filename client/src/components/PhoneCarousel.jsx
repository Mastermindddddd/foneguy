import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const phones = [
  { name: "OPPO A74", price: "R1 750,00", deposit: "R800,00", image: "/a74.png" },
  { name: "RealMe C51", price: "R1 750,00", deposit: "R800,00", image: "/c51.png" },
  { name: "OPPO A38", price: "R2 495,00", deposit: "R800,00", image: "/a38.png" },
  { name: "OPPO A58", price: "R2 595,00", deposit: "R800,00", image: "/a58.png" },
  { name: "OPPO C55", price: "R2 990,00", deposit: "R800,00", image: "/c55.png" },
  { name: "OPPO A25", price: "R3 499,00", deposit: "R800,00", image: "/a25.png" },
];

const PhoneCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 15 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 3, spacing: 10 } },
      "(max-width: 768px)": { slides: { perView: 2, spacing: 10 } },
      "(max-width: 480px)": { slides: { perView: 1, spacing: 10 } },
    },
    animation: {
      duration: 2000, // slow transition
      easing: (t) => t,
    },
  });

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 4000); // slide every 4s
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <div ref={sliderRef} className="keen-slider">
        {phones.map((phone, idx) => (
          <motion.div
            key={idx}
            className="keen-slider__slide bg-white p-4 rounded-lg shadow border hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-[200px] h-[200px] object-contain object-center transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-[15px] text-gray-900">{phone.name}</h3>
              <FaHeart className="text-gray-300 hover:text-red-500 cursor-pointer" />
            </div>

            <div className="text-left space-y-1">
              <p className="text-gray-700 text-sm font-semibold">{phone.price}</p>
              <p className="text-red-600 text-sm font-semibold">
                Minimum Deposit {phone.deposit}
              </p>
            </div>

            <Link to="/apply">
              <button className="mt-4 w-full border border-gray-300 text-sm py-2 rounded-md hover:bg-gray-100 transition">
                Shop Now
              </button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {phones.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Our Deals Button */}
      <div className="mt-6 flex justify-end">
        <Link to="/products">
          <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition">
            Our Deals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhoneCarousel;
