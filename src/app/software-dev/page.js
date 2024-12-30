import React from 'react'
import Software from "../software-dev/software-dev.webp"
import DetailedCardBanner from "../components/detailed-service components/detailed-card-banner";
const SoftWareDevPage = () => {

    const data = [
        {
            intro:"SOFTWARE DEVELOPMENT",
            image:Software,
            image1:Software,
        //   title: "IT Consulting & Advisory",
          head: "SOFTWARE DEVELOPMENT",
          titledetails: "At Essage Technologies, we specialize in delivering custom software solutions tailored to your unique business needs. Our expertise spans the entire software development lifecycle, from ideation and design to deployment and maintenance. We leverage modern technologies and agile methodologies to create efficient, scalable, and user-friendly applications. Whether it’s a web app, mobile solution, or enterprise software, our goal is to empower your business with innovative tools that drive productivity and growth. Partner with us to transform your ideas into powerful software solutions that deliver real value.",
          
          subtitle:'Software Development Process with EssAge Technologies',
          description: "Requirement Analysis and Planning",
          contentdetails:" We begin by understanding your business objectives and gathering detailed requirements. Through consultations and workshops, we define the project scope, timelines, and deliverables, ensuring alignment with your vision.",
          description2: "Design and Prototyping",
          contentdetails2:"Our team creates intuitive designs and prototypes, focusing on user experience and functionality. Feedback loops during this phase ensure that the solution meets your expectations before development begins.",
          description3: "Development and Testing",
          contentdetails3:" Using agile methodologies, we build the software in iterative cycles, ensuring flexibility and timely updates. Rigorous testing at every stage guarantees performance, security, and reliability.",
          description4:"Deployment and Maintenance",
          contentdetails4:"Once approved, the software is deployed seamlessly into your environment. We provide ongoing support, updates, and enhancements to ensure the solution remains effective and adaptable to your evolving needs."
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
       {/* <DetailedServiceCard /> */}
       {/* <Contact />
       <Footer /> */}
    </div>
  )
}

export default SoftWareDevPage