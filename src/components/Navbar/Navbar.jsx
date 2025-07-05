import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Apply Now!", href: "/apply" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <img src="/vite.png" alt="FONEGUY Logo" className="h-20 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`transition ${
                location.pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-600"
              } ${link.name === "Apply Now!" ? "uppercase" : ""}`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
