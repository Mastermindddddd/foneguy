import React from "react";

const ApplicationSuccessMessage = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-r bg-cyan-700 py-8 text-center text-white">
        <h2 className="text-xl md:text-3xl font-medium italic">
          🎉 Thank You for <span className="font-bold not-italic">Applying!</span>
        </h2>
      </div>
    <div className="w-full min-h-screen bg-[#0086A7] flex flex-col justify-center items-center text-white px-4 text-center">
      <div className="border border-white rounded-2xl p-6 md:p-20 max-w-lg mt-[-180px]">
        <h2 className="text-white text-xl md:text-3xl leading-relaxed">
          Your <span className="font-semibold italic">application</span> has been
          successfully <span className="font-semibold italic">submitted</span>.<br />
          We’re reviewing your details and one of our <span className="font-semibold italic">friendly agents</span> will be in touch with
          you shortly to finalize the process.
        </h2>
      </div>
    </div>
    </div>
  );
};

export default ApplicationSuccessMessage;
