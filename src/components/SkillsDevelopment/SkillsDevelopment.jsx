import React from "react";
import { Link } from "react-router-dom";

const SkillsDevelopment = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto">
        <div className="w-12 h-1 bg-teal-600 mx-auto mb-4"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">SKILLS DEVELOPMENT</h2>
        <p className="text-gray-600 mt-6">
          To achieve socio-economic inclusion, we must focus on developing essential skills in key areas.
        </p>
      </div>

      {/* Skills Content */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left">
        {/* Technology Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 font-poppins mb-12">Technology Skills</h3>
          <div className="border-l-4 border-teal-600 pl-4 mt-3 text-gray-700 text-md font-poppins">
            The rapid advancement of technology has given rise to the Internet of Things (IoT), 
            Artificial Intelligence (AI), and Robotics. Our mission is to create a platform that 
            equips individuals with practical skills in these fields. This is essential in bridging 
            the gap by offering a comprehensive blend of theoretical knowledge and hands-on experience.
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 font-poppins mb-12">Technical Skills</h3>
          <div className="border-l-4 border-teal-600 pl-4 mt-3 text-gray-700 text-md font-poppins">
            There’s a pressing need to develop critical and highly sought-after technical skills in sectors 
            like mining, engineering, circular economy, and manufacturing. While there are some practical 
            applications in informal settings, there’s an opportunity to formalize these skills and establish 
            a robust pipeline of locally sourced, competent, and market-ready skills.
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link to="/contact-us">
        <button className="bg-teal-700 text-white px-32 py-3 rounded-full shadow-md hover:bg-teal-700 transition">
          FIND OUT MORE
        </button>
        </Link>
      </div>
    </section>
  );
};

export default SkillsDevelopment;
