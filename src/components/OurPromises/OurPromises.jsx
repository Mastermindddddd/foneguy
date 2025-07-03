import React from "react";

const OurPromises = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6 md:px-20"
      style={{ backgroundImage: "url('/promise-background.jpg')" }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="z-10">
          {/* Shorter Line & Adjusted Color */}
          <div className="w-14 h-1 bg-teal-700 mb-6"></div>  
          <h2 className="text-4xl font-semibold text-teal-700">OUR PROMISES</h2>
          <p className="text-2xl font-bold mt-4">
            The Foundation is driven by <span className="font-bold text-teal-700">IMPACT</span>. We strive on making
            sustainable impact through measurable outcomes, thus living to our purpose breaking
            through barriers!
          </p>
        </div>

        {/* Right Side - Benefits Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefit Box 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Benefits to Beneficiaries</h3>
            <p className="text-sm">
              We collaborate with highly experienced and qualified Associates and Partners, providing 
              our Beneficiaries with access to the best-in-class experts with years of experience in diverse 
              skill sets and industries. We take pride in excellence and are delighted by the chance to tackle 
              complex challenges and execute tasks meticulously. We only employ proven methodologies and 
              tactics that have yielded positive results.
            </p>
          </div>

          {/* Benefit Box 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Benefits to Organisations</h3>
            <p className="text-sm">
              We forge long-term partnerships with organizations to assist them in achieving their 
              strategic objectives. We comprehend the intricacies of meeting compliance requirements, 
              which is why our processes are designed to help organizations navigate the complexities 
              of compliance. We collaborate with our organizations to comprehend their requirements 
              and ensure that our processes are adaptable and can accommodate the organization’s 
              anticipated outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromises;
