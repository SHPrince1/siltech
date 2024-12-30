import React from "react";
// import DetailedServiceCard from "../components/detailed-service components/detailed-service-card";
import DetailedCardBanner from "../components/detailed-service components/detailed-card-banner";
import Solar from '../solar-inverter/solar.jpg'
import Solar2 from '../solar-inverter/solar2.jpg'
const SolarInverter = () => {
  const data = [
    {
        intro:"Solar Inverter Installation Services",
    //   title: "IT Consulting & Advisory",
    image1:Solar,
    image:Solar2,
      head: "Solar Inverter Installation Services",
      titledetails: "At EssAge Technologies, we provide professional solar inverter installation services designed to maximize energy efficiency and sustainability. Our team specializes in the installation of reliable and high-performance solar inverters tailored to meet residential, commercial, and industrial energy needs. From system design and installation to testing and maintenance, we ensure seamless integration with your solar power systems for optimal performance. With a focus on quality, safety, and customer satisfaction, we help you harness the power of the sun to reduce energy costs and support a greener future.",
      
    subtitle:'Our Solar Inverter Installation Process',
    description: "Consultation and Site Assessment",
    contentdetails:" We begin with a detailed consultation to understand your energy requirements. Our team conducts a site assessment to evaluate factors like space, sunlight availability, and existing electrical systems.",
    description2: "Customized System Design",
    contentdetails2:"Based on the assessment, we design a solar inverter solution optimized for your specific needs. We ensure the system is scalable, efficient, and compliant with industry stand",
    description3: "Installation and Integration",
    contentdetails3:" Our skilled technicians handle the installation process with precision, ensuring seamless integration with your solar panels and electrical infrastructure. Safety and quality are our top priorities.",
    description4:"Testing, Handover, and Support",
    contentdetails4:"Once installed, we thoroughly test the system to confirm functionality and efficiency. After handover, we provide user training, detailed documentation, and ongoing support to ensure your system performs optimally for years to come. With EssAge Technologies, transitioning to solar energy is simple, reliable, and rewarding. Let us help you achieve sustainable energy goals today!",
    },

   
  ];

  return (
    <div>
      <div>
      {data.map((data, index) => {
          return (
            <DetailedCardBanner
            key={index}
            intro={data.intro}
            titledetails={data.titledetails}
            subtitle={data.subtitle}
            image={data.image}
            image1={data.image1}
            head={data.head}
            contentdetails={data.contentdetails}
            description={data.description}
            contentdetails2={data.contentdetails2}
            description2={data.description2}
            contentdetails3={data.contentdetails3}
            description3={data.description3}
            contentdetails4={data.contentdetails4}
            description4={data.description4}
          
          />
          );
        })}
      </div>
    </div>
  );
};

export default SolarInverter;
