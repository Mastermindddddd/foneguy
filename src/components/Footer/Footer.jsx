import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101827] text-white text-sm">
      {/* Newsletter Section */}
      <div className="max-w-[1600px] mx-auto px-6 py-8 border-b border-gray-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Join our newsletter</h3>
          <p className="text-gray-300">We’ll send you a nice letter once per week. No spam.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded text-black"
          />
          <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <img src="/foneguy-logo.png" alt="FoneGuy Logo" className="mb-2 w-60" />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="underline">Home</a></li>
            <li><a href="#" className="underline">Why Choose Us</a></li>
            <li><a href="#" className="underline">Contact Us</a></li>
            <li><a href="#" className="underline">Apply Now!</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Get In Touch</h4>
          <ul className="space-y-2 text-gray-300">
            <li><span className="font-semibold text-white">Tel:</span> 075 208 1799</li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:kenn@techcafe.co.za" className="underline">kenn@techcafe.co.za</a>
            </li>
            <li><span className="font-semibold text-white">USSD:</span> *134*33011# (free)</li>
            <li><span className="font-semibold text-white">Address:</span> </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="underline">FoneGuy Terms & Conditions</a></li>
            <li><a href="#" className="underline">PAIA Manual</a></li>
            <li><a href="#" className="underline">Cookie Policy</a></li>
            <li><a href="#" className="underline">Website Privacy Policy</a></li>
            <li><a href="#" className="underline">External Privacy Statement</a></li>
            <li><a href="#" className="underline">Airtime & Voucher Promo Ts&Cs</a></li>
            <li><a href="#" className="underline">My Story Competition Ts&Cs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto px-6 py-4 border-t border-gray-700 text-gray-400 text-sm">
        All rights reserved. Terms and Conditions apply.
      </div>

    </footer>
  );
};

export default Footer;
