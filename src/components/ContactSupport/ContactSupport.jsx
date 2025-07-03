import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      recipient: "info@blackandforth.co.za", // Receiver's email
    };

    emailjs
      .send(
        "service_4adi92g", // Replace with EmailJS Service ID
        "template_6q39ajp", // Replace with EmailJS Template ID
        templateParams,
        "A3HheLfZyBCVci9Tn" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (err) => {
          setError("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-10">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Contact & Support
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              We're here to assist you. Whether it's inquiries, consultations,
              <br /> or support, don't hesitate to reach out.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Left - Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Get in Touch with Us
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@company.com"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+11 000 000 000"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Leave us a Message"
                    rows="4"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white font-semibold p-3 rounded-lg  transition"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && <p className="text-teal-600 mt-2">{success}</p>}
                {error && <p className="text-red-600 mt-2">{error}</p>}
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="underline font-medium text-xl">
                  +27 (0) 82 319 8549
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Email Support
                </h3>
                <p className="text-gray-600">
                  Email us & we will get back to you within 24 hours
                </p>
                <p className="underline font-medium text-lg mt-1">
                  info@blackandforth.co.za
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Image Section */}
      <div className="w-full h-[350px]">
        <img
          src="/Joburg-map.png"
          alt="Johannesburg Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-teal-700 text-white text-center py-20">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Building Sustainable Futures, One Strategy at a Time.
        </h2>
        <Link to="/contact-us">
          <button className="mt-4 px-6 py-2 border border-white rounded-lg bg-teal-700 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSupport;
