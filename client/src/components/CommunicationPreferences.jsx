import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CommunicationPreferences = ({ preferences, setPreferences }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const togglePreference = (channel, value) => {
    setPreferences((prev) => ({ ...prev, [channel]: value }));
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
    <div className="max-w-7xl w-full px-4 md:px-6 mx-auto space-y-6 text-gray-800 text-sm">
      <p>
        I would like to receive communication from the Pepkor Group of Companies and its business partners, as indicated in the FoneGuy Group of companies'{" "}
        <a href="#" className="text-blue-600 underline">
          External Privacy Statement
        </a>
        , to tell me about their promotions, products, and services via:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
  {[
    { key: "email", label: "Email" },
    { key: "sms", label: "SMS" },
    { key: "phone", label: "Phone" },
    { key: "messaging", label: "Instant Messaging (e.g. WhatsApp)" },
  ].map(({ key, label }) => (
    <div key={key} className="flex flex-col items-center space-y-2 text-center">
      <span className="h-10 flex items-center justify-center text-sm leading-snug px-2">
        {label}
      </span>
      <div className="flex space-x-2">
        {renderToggleBox(preferences[key], () => togglePreference(key, true), "Y")}
        {renderToggleBox(!preferences[key], () => togglePreference(key, false), "N")}
      </div>
    </div>
  ))}
</div>


      <div className="space-y-4 mt-8">
        <label className="flex items-start space-x-2">
          <input type="checkbox" className="mt-6" />
          <span>
            Join <strong>+more</strong>, the rewards programme that unlocks instant savings and great benefits at 15+ retailers.
            <br />
            Opt in and we will be in contact with next steps.
          </span>
        </label>

        <label className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1" />
          <span>
            I accept and consent that:
            <ul className="list-decimal list-inside mt-1 space-y-1">
              <li>
                My personal information will be processed during the application and in future as set out in the FoneGuy Group of Companies’{" "}
                <a href="#" className="text-blue-600 underline">
                  External Privacy Statement
                </a>
              </li>
              <li>
                A credit enquiry may be conducted on me for the purpose of setting a limit for my device rental agreement;
              </li>
              <li>
                My details may be confirmed with any credit bureau or third party; and
              </li>
              <li>
                My details, including the manner in which I conduct my rental payments, may be provided to credit bureaus and crime prevention organisations.
              </li>
            </ul>
          </span>
        </label>
      </div>

      {/* Uncomment when ready */}
      {/* 
      <div className="mt-4">
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={handleCaptchaChange}
        />
      </div>
      */}
    </div>
  );
};

export default CommunicationPreferences;
