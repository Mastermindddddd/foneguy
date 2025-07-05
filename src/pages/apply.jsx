import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import CommunicationPreferences from "../components/CommunicationPreferences";

const Apply = () => {
  return (
    <div>
      <div className="w-full h-14 bg-blue-600"></div>
      <ApplicationForm />
      <section id="communication-preference" className="pt-18">
        <CommunicationPreferences />
      </section>
    </div>
  );
};


export default Apply;