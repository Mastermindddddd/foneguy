import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaHeart } from "react-icons/fa";

const phones = [
  { name: "OPPO A74", price: "R1 750,00", deposit: "R1 000,00", image: "/a74.png" },
  { name: "RealMe C51", price: "R1 750,00", deposit: "R1 000,00", image: "/c51.png" },
  { name: "OPPO A38", price: "R2 495,00", deposit: "R700,00", image: "/a38.png" },
  { name: "OPPO A58", price: "R2 595,00", deposit: "R700,00", image: "/a58.png" },
  { name: "OPPO C55", price: "R2 995,00", deposit: "R900,00", image: "/c55.png" },
  { name: "OPPO A25", price: "R2 995,00", deposit: "R900,00", image: "/a25.png" },
];

const PhoneCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 4, spacing: 15 },
    slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
        "(max-width: 1024px)": { slides: { perView: 3, spacing: 10 } },
        "(max-width: 768px)": { slides: { perView: 2, spacing: 10 } },
        "(max-width: 480px)": { slides: { perView: 1, spacing: 10 } },
    },
    rubberband: false, // disables bouncy effect on end
    animation: {
        duration: 800, // slower (default is 500)
        easing: (t) => t, // linear easing, adjust as needed
    },
});


  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div ref={sliderRef} className="keen-slider">
        {phones.map((phone, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
          >
            <div className="relative flex justify-center items-center mb-4">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-[150px] h-auto transition-transform duration-300 hover:scale-105"
              />
              <FaHeart className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>
            <h3 className="font-semibold text-center">{phone.name}</h3>
            <p className="text-center text-gray-600 text-sm">{phone.price}</p>
            <p className="text-center text-red-600 text-sm font-semibold">
              Minimum Deposit {phone.deposit}
            </p>
            <button className="mt-3 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
              Add to bag
            </button>
          </div>
        ))}
      </div>

      {/* Functional Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {phones.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhoneCarousel;
