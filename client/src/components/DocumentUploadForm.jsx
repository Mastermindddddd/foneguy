import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";



const DocumentUploadForm = () => {
  const navigate = useNavigate();
  const [selfie, setSelfie] = useState(null);
  const [idPassport, setIdPassport] = useState(null);
  const [consent, setConsent] = useState(false);
  const [rewards, setRewards] = useState(false);
  const [preferences, setPreferences] = useState({
      email: true,
      sms: true,
      phone: true,
      messaging: true,
    });

  const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const formDetails = JSON.parse(localStorage.getItem("applicationFormData")) || {};

    const selfieBase64 = selfie ? await toBase64(selfie) : "";
    const idPassportBase64 = idPassport ? await toBase64(idPassport) : "";

    const communicationChannels = Object.entries(preferences)
      .filter(([_, value]) => value)
      .map(([key]) => (key === "instant" ? "Instant Messaging" : key.charAt(0).toUpperCase() + key.slice(1)))
      .join(", ");

    const dataToSend = {
      ...formDetails,
      selfie: selfieBase64,
      idPassport: idPassportBase64,
      communicationPreferences: communicationChannels,
      joinRewards: rewards ? "Yes" : "No",
      consentGiven: consent ? "Yes" : "No",
    };

    const response = await fetch('http://localhost:5000/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend)
    });

    if (!response.ok) throw new Error('Failed to submit');

    localStorage.removeItem("applicationFormData");
    alert("Application submitted successfully! Redirecting...");
    navigate("/success");

  } catch (error) {
    console.error("Submission failed", error);
    alert("Failed to submit application. Please try again.");
  }
};


  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const renderToggleBox = (active, onClick, label) => (
    <button
      onClick={onClick}
      type="button"
      className={`border-2 rounded w-10 h-10 flex items-center justify-center text-lg font-bold
        ${active ? "border-blue-500 bg-blue-50 text-blue-600" : "border-gray-300 text-gray-500"}`}
    >
      {label}
    </button>
  );

  return (
    <div>
        <div className="w-full bg-gradient-to-r bg-cyan-700 py-6 text-center text-white md:mb-40">
        <h2 className="text-xl md:text-3xl font-medium italic">
          Start your application now & <br />
          Join <span className="font-bold not-italic">FoneGuy</span> Today
        </h2>
      </div>
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 text-sm">
      <h2 className="text-2xl mb-4 text-gray-700">Documents</h2>
      <p className="mb-6 font-bold text-sm text-gray-900">
        Take a selfie and a picture of your ID or Passport by clicking on the
        icons below. To upload existing pictures select CHOOSE FILE
      </p>

      {/* Upload Cards */}
<div className="flex flex-col md:flex-row gap-6 justify-center mb-40">
  {/* Selfie Card */}
  <label className="relative w-60 h-80 cursor-pointer transition hover:scale-105">
    <img
      src="/selfie-card.png" // replace with your actual designed selfie card path
      alt="Selfie Upload Card"
      className="object-cover w-full h-full rounded-xl shadow border"
    />
    <input
      type="file"
      accept="image/*"
      className="absolute inset-0 opacity-0 cursor-pointer"
      onChange={(e) => handleFileChange(e, setSelfie)}
    />
    <span className="absolute bottom-4 left-0 right-0 text-center text-blue-500 underline text-sm">
      CHOOSE FILE
    </span>
  </label>

  {/* ID/Passport Card */}
  <label className="relative w-60 h-80 cursor-pointer transition hover:scale-105">
    <img
      src="/idpassport-card.xcf" // replace with your actual designed ID/Passport card path
      alt="ID/Passport Upload Card"
      className="object-cover w-full h-full rounded-xl shadow border"
    />
    <input
      type="file"
      accept="image/*"
      className="absolute inset-0 opacity-0 cursor-pointer"
      onChange={(e) => handleFileChange(e, setIdPassport)}
    />
    <span className="absolute bottom-4 left-0 right-0 text-center text-blue-500 underline text-sm">
      CHOOSE FILE
    </span>
  </label>
</div>


      {/* Communication Preferences */}
      <p className="mb-3 text-sm text-gray-600">
        I would like to receive communication from the Pepkor Group of Companies
        and its business partners, as indicated in the FoneGuy Group of
        companies’ <a href="#" className="text-blue-600 underline">External Privacy Statement</a>, to tell me about their
        promotions, products, and services via:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { key: "email", label: "Email" },
    { key: "sms", label: "SMS" },
    { key: "phone", label: "Phone" },
    { key: "messaging", label: "Instant Messaging (e.g. WhatsApp)" },
  ].map(({ key, label }) => (
    <div key={key} className="flex items-center justify-between space-x-2">
  <span className="text-sm text-gray-600">{label}</span>
  <div className="flex space-x-2">
    {renderToggleBox(preferences[key], () => togglePreference(key, true), "Y")}
    {renderToggleBox(!preferences[key], () => togglePreference(key, false), "N")}
  </div>
</div>

  ))}
</div>

      {/* Rewards Opt-in */}
      <label className="block mb-4 mt-12 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={rewards}
          onChange={() => setRewards(!rewards)}
          className="mr-2"
        />
        Join <b>+more</b>, the rewards programme that unlocks instant savings
        and great benefits at 15+ retailers.<br/>Opt in and we will in contact with next steps.
      </label>

      {/* Consent Section */}
      <label className="block mb-4 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={consent}
          onChange={() => setConsent(!consent)}
          className="mr-2"
        />
        I accept and consent that:
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>
            My personal information will be processed during the application and in
            future as set out in the FoneGuy Group of Companies’ <a href="#" className="text-blue-600 underline">External Privacy Statement</a>.
          </li>
          <li>
            A credit enquiry may be conducted on me for the purposes of setting a
            limit for my device rental agreement;
          </li>
          <li>My details may be confirmed with any credit bureau or third party; and</li>
          <li>
            My details, including the manner in which I conduct my rental payments,
            may be provided to credit bureaus and crime prevention organisations.
          </li>
        </ul>
      </label>

      {/* CAPTCHA & Buttons */}
      <div className="flex items-center gap-4 mb-6">
        <div className="border rounded p-2 bg-gray-100 text-center">
          <div className="mb-1">I'm not a robot</div>
          <div className="text-xs">[reCAPTCHA]</div>
        </div>
      </div>

     <div className="flex justify-end space-x-4 mt-6">
  <button className="bg-cyan-700 text-white px-6 py-2 rounded">
    BACK
  </button>
  <button type="submit" className="bg-cyan-700 text-white px-6 py-2 rounded">
    SUBMIT APPLICATION
  </button>
</div>

    </form>
    </div>
  );
};

export default DocumentUploadForm;
