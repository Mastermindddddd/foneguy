import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <img
          src="/vite.png"
          alt="FONEGUY Logo"
          className="h-20 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 font-medium">
        <li>
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/why-choose-us"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Why Choose Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-600 transition uppercase"
          >
            Apply Now!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
