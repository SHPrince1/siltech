import React from 'react'
// import DetailedServiceCard from '../components/detailed-service components/detailed-service-card'
// import Contact from '../components/home-page/contact'
// import Footer from '../components/footer'
import DetailedCardBanner from "../components/detailed-service components/detailed-card-banner";
const LanNetworking = () => {

    const data = [
        {
            intro:"Lan Networking",
        //   title: "IT Consulting & Advisory",
          head: "Lan Networking",
          titledetails:
            " We have developed several web-based and mobile solutions for a  wide variety of clients from different commercial and public sectors. Tell us about your business requirements in the form below",
          
          subtitle:'A Structured Lan Networking process with EssAge Technologies ',
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
       {/* <DetailedServiceCard /> */}

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
       {/* <DetailedServiceCard /> */}
       {/* <Contact />
       <Footer /> */}
    </div>
  )
}

export default LanNetworking