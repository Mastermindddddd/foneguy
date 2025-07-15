import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Apply Now!", href: "/apply" },
  ];

  return (
    <>
      <nav className="w-full px-6 py-4 border-b border-gray-200 bg-white shadow-sm z-50 relative">
        <div className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
            <img
              src="/vite.png"
              alt="FONEGUY Logo"
              className="h-16 md:h-20 w-auto"
            />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium items-center">
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

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar Menu (from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-52 md:w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <img src="/vite.png" alt="Logo" className="h-8 md:h-10" />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-4 py-6 space-y-4 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block transition ${
                  location.pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 hover:text-blue-600"
                } ${link.name === "Apply Now!" ? "uppercase" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
