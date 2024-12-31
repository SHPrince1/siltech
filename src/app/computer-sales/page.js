import React from "react";
// import DetailedServiceCard from "../components/detailed-service components/detailed-service-card";
import DetailedCardBanner from "../components/detailed-service components/detailed-card-banner";
import repair from '../computer-sales/repair.webp'
import laptop from '../computer-sales/laptop.avif'
import Contact from "../components/home-page/contact"
import Footer from "../components/footer"
const ComputerSales = () => {
  const data = [
    {
        intro:"COMPUTER SALES AND MAINTENANCE",
        image:laptop,
        image1:repair,
    //   title: "IT Consulting & Advisory",
      head: "COMPUTER SALES AND MAINTENANCE",
      titledetails: "At EssAge Technologies, we specialize in providing high-quality computers and peripherals in both large quantities and retail. Whether you’re an individual seeking a personal system or a company outfitting an entire office, we have tailored solutions to meet your needs.",
      
      subtitle:'COMPUTER SALES AND MAINTENANCE',
      description: "Bulk and Retail Sales",
      contentdetails:" We supply top-tier computers and hardware, offering competitive pricing for bulk orders and a wide selection for retail customers. Our products are sourced from trusted brands to ensure reliability and performance.",
      description2: "Maintenance Services",
      contentdetails2:"Our expert team offers comprehensive maintenance and support, ensuring your systems operate at peak efficiency. From routine servicing to urgent repairs, we’ve got you covered. With a commitment to quality and customer satisfaction, we’re your trusted partner for all computer sales and maintenance needs.",
      // description3: "Development and Testing",
      // contentdetails3:" Using agile methodologies, we build the software in iterative cycles, ensuring flexibility and timely updates. Rigorous testing at every stage guarantees performance, security, and reliability.",
      // description4:"Deployment and Maintenance",
      // contentdetails4:"Once approved, the software is deployed seamlessly into your environment. We provide ongoing support, updates, and enhancements to ensure the solution remains effective and adaptable to your evolving needs."
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
            // contentdetails3={data.contentdetails3}
            // description3={data.description3}
            // contentdetails4={data.contentdetails4}
            // description4={data.description4}
          
          />
          );
        })}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ComputerSales;
