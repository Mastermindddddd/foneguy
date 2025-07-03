import React from "react";

const SkillsSection = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-12 px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 max-w-6xl w-full">
        {/* Professional Skills Programs */}
        <div className="bg-teal-800 text-white p-8 w-full sm:w-1/3 flex flex-col min-h-[400px]">
          <h2 className="text-lg font-semibold font-poppins">Professional Skills Programs</h2>
          <hr className="w-24 border-black mt-6 mb-6" />
          <ul className="mt-4 space-y-2">
            <li>Project Management</li>
            <li>Business Analysis</li>
          </ul>
        </div>

        {/* Technology Skills */}
        <div className="bg-white text-black p-8 w-full sm:w-1/3 flex flex-col shadow-lg min-h-[400px]">
          <h2 className="text-lg font-semibold font-poppins">Technology Skills</h2>
          <hr className="w-24 border-black mt-6 mb-6" />
          <ul className="mt-4 space-y-2">
            <li>AI Development</li>
            <li>Coding</li>
            <li>UX Design</li>
            <li>UI Design</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="bg-teal-800 text-white p-8 w-full sm:w-1/3 flex flex-col min-h-[400px]">
          <h2 className="text-lg font-semibold font-poppins">Technical Skills</h2>
          <hr className="w-24 border-black mt-6 mb-6" />
          <ul className="mt-4 space-y-2">
            <li>Artisan Training</li>
            <li>Agriculture Skills</li>
            <li>Circular Economy</li>
            <li>Manufacturing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
