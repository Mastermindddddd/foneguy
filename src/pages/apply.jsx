import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import CommunicationPreferences from "../components/CommunicationPreferences";

const Apply = () => {
  return (
    <div>
      <div className="w-full h-14 bg-blue-600"></div>
      <div className="w-full bg-gradient-to-r bg-cyan-700 py-6 text-center text-white mb-40">
        <h2 className="text-xl md:text-3xl font-medium italic">
          Start your application now & <br />
          Join <span className="font-bold not-italic">FoneGuy</span> Today
        </h2>
      </div>
      <ApplicationForm />
      <section id="communication-preference" className="pt-18">
        <CommunicationPreferences />
      </section>
    </div>
  );
};


export default Apply;