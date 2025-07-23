import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";



const DocumentUploadForm = () => {
  const navigate = useNavigate();
  const [selfie, setSelfie] = useState(null);
  const [idPassport, setIdPassport] = useState(null);
  const [consent, setConsent] = useState(false);
  const [rewards, setRewards] = useState(false);
  const [communication, setCommunication] = useState({
    email: false,
    sms: true,
    phone: false,
    instant: true,
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

  const navigate = useNavigate();

  try {
    const formDetails = JSON.parse(localStorage.getItem("applicationFormData")) || {};

    const selfieBase64 = selfie ? await toBase64(selfie) : "";
    const idPassportBase64 = idPassport ? await toBase64(idPassport) : "";

    const communicationChannels = Object.entries(communication)
      .filter(([_, value]) => value)
      .map(([key]) => (key === "instant" ? "Instant Messaging" : key.charAt(0).toUpperCase() + key.slice(1)))
      .join(", ");

    const templateParams = {
      ...formDetails, // all application form fields
      selfie: selfieBase64,
      id_passport: idPassportBase64,
      communication_preferences: communicationChannels,
      join_rewards: rewards ? "Yes" : "No",
      consent_given: consent ? "Yes" : "No",
    };

    await emailjs.send(
      "service_lkwx8dh", // Your service ID
      "template_gzfzaaj", // New template with all fields
      templateParams,
      "09z4nZUsb7p5XukxJ" // Your public key
    );

    localStorage.removeItem("applicationFormData");
    navigate("/success");

  } catch (error) {
    console.error("Submission failed", error);
    alert("Failed to submit application. Please try again.");
  }
};


  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
        <div className="w-full bg-gradient-to-r bg-cyan-700 py-6 text-center text-white md:mb-40">
        <h2 className="text-xl md:text-3xl font-medium italic">
          Start your application now & <br />
          Join <span className="font-bold not-italic">FoneGuy</span> Today
        </h2>
      </div>
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 text-sm">
      <h2 className="text-lg font-semibold mb-4">Documents</h2>
      <p className="mb-6">
        Take a selfie and a picture of your ID or Passport by clicking on the
        icons below. To upload existing pictures select <b>CHOOSE FILE</b>
      </p>

      {/* Upload Cards */}
      <div className="flex gap-6 justify-center mb-6">
        {/* Selfie Card */}
        <label className="flex flex-col items-center w-48 h-64 p-6 bg-white rounded-xl shadow border cursor-pointer transition hover:shadow-md">
          <div className="flex items-center justify-center">
            <img
              src="/selfie-icon.png"
              alt="Selfie Icon"
              className="w-40 h-40"
            />
          </div>
          <span className="font-semibold text-base mb-2">SELFIE</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileChange(e, setSelfie)}
          />
          <span className="mt-auto text-blue-500 underline">CHOOSE FILE</span>
        </label>

        {/* ID/Passport Card */}
        <label className="flex flex-col items-center w-48 h-64 p-6 bg-white rounded-xl shadow border cursor-pointer transition hover:shadow-md">
          <div className="flex items-center justify-center">
            <img
              src="/idpassport-icon.png"
              alt="ID/Passport Icon"
              className="w-40 h-40s"
            />
          </div>
          <span className="font-semibold text-base mb-2">ID/Passport</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileChange(e, setIdPassport)}
          />
          <span className="mt-auto text-blue-500 underline">CHOOSE FILE</span>
        </label>
      </div>

      {/* Communication Preferences */}
      <p className="mb-3">
        I would like to receive communication from the Pepkor Group of Companies
        and its business partners, as indicated in the FoneGuy Group of
        companies’ <a href="#" className="text-blue-600 underline">External Privacy Statement</a>, to tell me about their
        promotions, products, and services via:
      </p>
      <div className="flex gap-6 mb-4">
        {Object.entries(communication).map(([key, value]) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={value}
              onChange={() =>
                setCommunication({ ...communication, [key]: !value })
              }
            />
            <span className="capitalize">{key === 'instant' ? 'Instant Messaging' : key}</span>
          </label>
        ))}
      </div>

      {/* Rewards Opt-in */}
      <label className="block mb-4">
        <input
          type="checkbox"
          checked={rewards}
          onChange={() => setRewards(!rewards)}
          className="mr-2"
        />
        Join <b>+more</b>, the rewards programme that unlocks instant savings
        and great benefits at TFG retailers.
      </label>

      {/* Consent Section */}
      <label className="block mb-4">
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
            limit for my device rental agreement.
          </li>
          <li>My details may be confirmed with any credit bureau or third party.</li>
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

      <div className="flex justify-between">
        <button className="bg-blue-600 px-6 py-2 rounded">BACK</button>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
  SUBMIT APPLICATION
</button>
      </div>
    </form>
    </div>
  );
};

export default DocumentUploadForm;
