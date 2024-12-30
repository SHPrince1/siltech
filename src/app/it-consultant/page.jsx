import React from "react";
// import Image from "next/image";
// import DetailedServiceCard from "../components/detailed-service components/detailed-service-card";
import DetailedCardBanner from "../components/detailed-service components/detailed-card-banner";
import Consult from '../it-consultant/ITCONsult.jpg'
import Service from "../components/detailed-service components/images/service-resize.webp";

const ItConsultPage = () => {
  const data = [
    {
        intro:"IT Consulting & Advisory",
        image:Consult,
        image1:Service,
    //   title: "IT Consulting & Advisory",
      head: "IT Consulting & Advisory",
      titledetails: "Welcome to EssAge Technologies, your trusted partner in delivering innovative and tailored IT solutions. As a leading consultancy firm, we specialize in empowering businesses through cutting-edge technology, strategic guidance, and unparalleled expertise. Our services span a wide range of IT disciplines,including: Custom Software Development Cloud Solutions Cybersecurity IT Strategy and Planning System Integration Data Analytics and Business Intelligence With a team of highly skilled professionals and a commitment to excellence, we aim to drive your organization toward achieving operational efficiency, scalability, and sustained growth. Partner with us to navigate the complexities of today’s digital landscape and transform your IT challenges into opportunities for success. Contact us today to learn how we can support your business goals.",
      
      subtitle:'A Structured Consultancy process with EssAge Technologies ',
      description: "Discovery and Assessment",
      contentdetails:" We begin by conducting a thorough analysis of your existing systems, processes, and challenges. This involves engaging with your stakeholders, gathering requirements, and identifying areas for improvement. Our goal is to fully understand your business objectives and uncover opportunities for innovation.",
      description2: "Strategic Planning and Proposal",
      contentdetails2:" Based on our findings, we develop a customized strategy that aligns with your goals. We present a clear and detailed proposal outlining the scope of work, timelines, deliverables, and costs. This ensures transparency and allows us to collaborate with you to finalize the approach that best meets your expectations.",
      description3: "Monitoring and Continuous Support",
      contentdetails3:" After implementation, we don’t stop there. We closely monitor the solution’s performance to ensure it delivers the desired outcomes. Our commitment to your success extends beyond delivery, with ongoing support, maintenance, and periodic reviews to adapt to changing business needs and technology trends.",
      description4:"Implementation and Execution",
      contentdetails4:"Once the strategy is approved, we move forward with executing the plan. Our team ensures seamless deployment and integration of the solutions into your existing environment. We prioritize quality at every step and provide training and documentation to empower your team with the tools they need for success."
    }

   
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

export default ItConsultPage;
