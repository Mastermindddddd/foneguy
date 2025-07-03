import React from "react";

const DeviceProtection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 space-y-24 bg-white">

      {/* Secure Your Device Section */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-screen-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">Secure Your Device</h2>
        <p className="text-muted-foreground text-base md:text-lg">
          If your device is lost or stolen, we can lock it remotely — protecting your data and giving you peace of mind.
        </p>
        <img 
          src="/secure-device-illustration.png" 
          alt="Secure Device Illustration" 
          className="md:w-[900px] h-auto object-contain mt-6"
        />
      </div>

      {/* Optional Insurance Cover Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full space-y-10 md:space-y-0 md:space-x-16">
        <div className="text-center md:text-left max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Optional Insurance Cover</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            For an added layer of protection, you can choose to include FoneGuy’s insurance cover. It protects you in the event of Death, Disability, Loss of Income, or if your device is lost or stolen (Ts&Cs apply).
          </p>
        </div>
        <img 
          src="/guy-with-headphones.png" 
          alt="Guy with headphones using phone" 
          className="md:w-[900px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default DeviceProtection;
