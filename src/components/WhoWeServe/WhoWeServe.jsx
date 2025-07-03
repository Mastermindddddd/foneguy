import React from "react";

const WhoWeServe = () => {
  const segments = [
    {
      title: "People Living with Disabilities",
      description:
        "People living with disabilities are often underrepresented and excluded from various interventions, including skills development and entrepreneurship development. Our focus is on developing and implementing programs that ensure their inclusion.",
      image: "/serve-1.png",
    },
    {
      title: "Rural and Semi-Urban Communities",
      description:
        "Many opportunities, such as entrepreneurship development and skills development, are concentrated in predominantly urban settings. Our focus is on providing these underserved communities with access and exposure to life-changing programs that can lead to socio-economic improvements and inclusion.",
      image: "/serve-2.png",
    },
    {
      title: "Youth",
      description:
        "South Africa is grappling with a significant unemployment problem, and the youth are the most affected category. We believe that our quality-driven programs can make a positive impact on their lives.",
      image: "/serve-3.png",
    },
    {
      title: "Women",
      description:
        "Women have historically faced extended periods of exclusion and limited access to programs that provide them with competitive skills.",
      image: "/serve-4.png",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800 text-center font-poppins">
      <div className="max-w-6xl mx-auto">
      <div className="w-16 h-1 bg-teal-700 mx-auto mb-6"></div>
        <h2 className="text-3xl font-semibold mb-4">WHO DO WE SERVE</h2>
        <p className="text-gray-700 text-justify leading-relaxed mb-8">
          The Foundation is resolute in bridging the gap between the underserved and mainstream socio-economic 
          channels. Significant disparities exist within township and rural communities, where many individuals 
          lack the resources to access or create opportunities. Our mission, as the Foundation, is to provide the 
          tools that will enable beneficiaries to navigate the intricacies of identifying and accessing opportunities. 
          Our Foundation’s efforts and resources are organized around key segments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {segments.map((segment, index) => (
          <div key={index} className="border border-black shadow-lg overflow-hidden">
            <img src={segment.image} alt={segment.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{segment.title}</h3>
              <p className="text-gray-600 text-sm text-justify">{segment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeServe;
