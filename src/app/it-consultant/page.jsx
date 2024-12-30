import React from "react";
// import DetailedServiceCard from "../components/detailed-service components/detailed-service-card";
import DetailedCardBanner from "../components/detailed-service components/detailed-card-banner";

const ItConsultPage = () => {
  const data = [
    {
        intro:"IT Consulting & Advisory",
    //   title: "IT Consulting & Advisory",
      head: "IT Consulting & Advisory",
      titledetails: "Welcome to EssAge Technologies, your trusted partner in delivering innovative and tailored IT solutions. As a leading consultancy firm, we specialize in empowering businesses through cutting-edge technology, strategic guidance, and unparalleled expertise. Our services span a wide range of IT disciplines,including: Custom Software Development Cloud Solutions Cybersecurity IT Strategy and Planning System Integration Data Analytics and Business Intelligence With a team of highly skilled professionals and a commitment to excellence, we aim to drive your organization toward achieving operational efficiency, scalability, and sustained growth. Partner with us to navigate the complexities of today’s digital landscape and transform your IT challenges into opportunities for success. Contact us today to learn how we can support your business goals.",
      
      subtitle:'A Structured Consultancy process with EssAge Technologies ',
      description: "IT Consulting & Advisory",
      contentdetails:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vita voluptas! Laboriosam sunt mollitia explicabo cumque illo? Repellendus earum est reiciendis. Placeat quasi dignissimos fugiat, voluptatem libero reprehenderit incidunt adipisci doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa.",
    },

    // {
    //   title: "COD TRAVELS",
    //   description: "Software Development",
    //   details: "We develop software solutions accross various industries. Which enhance smooth and efficienntrunning of day to day business",

    //   roleplayed: "Designed the frontend user-interface",

    // },
    // {
    //   title: "Bankers Ware house",
    //   description: "LAN Networking & CCTV Installation ",
    //   details: "Our LAN networking and CCTV security camera installation, is sure to deliver seamless connectivity and top-notch survelance for your home or business",

    // },
    // {
    //   head: "Bankers Ware house",
    //   description: "Computer Sale & Maintenance",
    //   details: "We sell computers in bulk or single units, and also provide professional maintenance and repair services to keep your systems running smoothly",

    // },
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
              head={data.head}
              contentdetails={data.contentdetails}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItConsultPage;
