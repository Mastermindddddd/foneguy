import React, { useState } from "react";
import ApplicationForm from "../components/ApplicationForm";
//import CommunicationPreferences from "../components/CommunicationPreferences";

const Apply = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    sms: true,
    phone: true,
    messaging: true,
  });

  return (
    <div>
      <div className="w-full bg-gradient-to-r bg-cyan-700 py-8 text-center text-white md:mb-40 md:mt-36 mt-20">
        <h2 className="text-xl md:text-3xl font-medium italic">
          Start your application now & <br />
          Join <span className="font-bold not-italic">FoneGuy</span> Today
        </h2>
      </div>

      <ApplicationForm preferences={preferences} setPreferences={setPreferences} />

      {/*<section id="communication-preference" className="pt-18">
        <CommunicationPreferences preferences={preferences} setPreferences={setPreferences} />
      </section>*/}
    </div>
  );
};

export default Apply;
