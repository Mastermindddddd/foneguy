import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-6 overflow-hidden md:mt-36 mt-24">
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-screen-2xl w-full px-6 md:px-12">
        <div className="space-y-6 md:max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Why <br/>Choose Us?</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-md md:max-w-lg mx-auto md:mx-0 mt-4 text-gray-600 italic">
            FoneGuy offers you a <span className="font-semibold text-gray-900">secure</span> and <span className="font-semibold text-gray-900">affordable</span> opportunity to rent to own a smartphone. Get access<br/>
            to a <span className="font-semibold text-gray-900">HIGH END DEMO FONE</span> from as little as R162 per month
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <img
        src="/apply-button.png"
        alt="Apply Now"
        className="w-auto h-16 hover:opacity-90 transition mt-8"
      />
          </div>
        </div>
        <img src="/man.png" alt="Guy holding phone" className="mt-10 md:mt-0 w-72 md:w-[1000px] h-auto object-contain drop-shadow-xl" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-screen-2xl w-full mt-20 px-6 md:px-12 space-y-12 md:space-y-0 md:space-x-16">
        <img src="/woman.png" alt="Girl using phone" className="w-72 md:w-[1000px] h-auto object-contain drop-shadow-xl" />
        <div className="space-y-6 md:max-w-2xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why Choose<br/>FoneGuy?</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            At FoneGuy, we believe everyone should have access to a reliable smartphone - without the high upfront costs. That’s why we offer a secure, flexible, and affordable rental solution.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            All you need is your valid South African ID - or a passport if you're a foreign national. No complex paperwork or credit history required.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Stay connected with a smartphone that suits your budget - just make a small upfront payment and enjoy a flexible 60-day payment plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
