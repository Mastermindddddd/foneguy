import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSupport = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      recipient: "kenn@techcafe.co.za",
    };

    emailjs
      .send("service_4adi92g", "template_6q39ajp", templateParams, "A3HheLfZyBCVci9Tn")
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-white overflow-hidden">

      {/* Header */}
      <div className="text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact & Support</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We're here to assist you. Whether it's inquiries, consultations, or support, don't hesitate to reach out.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 py-8 relative z-10">
        {/* Full section spiral background covering entire section */}
      <img src="/spiral-bg.png" alt="Background Spiral" className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch with Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@company.com" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+11 000 000 000" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Leave us a Message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>

        <div className="flex flex-col justify-center space-y-6 text-gray-800 ml-12">
          <div>
            <h4 className="text-lg font-semibold">Call Us</h4>
            <p className="font-medium mt-1">+27 (0)752 081 799</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email Support</h4>
            <p className="text-gray-600">Email us & we will get back to you within 24 hours</p>
            <p className="font-bold underline mt-1">kenn@techcafe.co.za</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="">We're centrally located. Use the map below to get directions.</p>
            <p className="font-medium underline mt-1">Woodlands Office Park, 20 Woodlands Dr, Woodlands, Sandton, 2080</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mt-16">
        <img src="/Joburg-map.png" alt="Johannesburg Map" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ContactSupport;
