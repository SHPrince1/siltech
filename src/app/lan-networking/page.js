import React from 'react'
import Network from '../../app/lan-networking/network-lan.avif';
import Networkss from '../../app/lan-networking/networksss.webp';

import DetailedCardBanner from "../components/detailed-service components/detailed-card-banner";
import Contact from "../components/home-page/contact"
import Footer from "../components/footer"
const LanNetworking = () => {

    
        const data = [
            {
                intro:"LAN Networking & CCTV Installation",
                image:Network,
                image1:Networkss,
            //   title: "IT Consulting & Advisory",
              head: "LAN Networking & CCTV Installation",
              titledetails: "At EssAge Technologies, we provide reliable LAN Networking and CCTV Installation services to meet your connectivity and security needs. LAN Networking We design and implement scalable networks for seamless communication and data sharing, tailored to your business size and requirements. CCTV Installation Our advanced CCTV systems ensure effective monitoring with high-definition cameras, remote access, and real-time surveillance for enhanced security. With expert solutions and quality service, we deliver systems that are efficient, reliable, and built for your needs. With EssAge Technologies, you’re assured of expert solutions and a smooth implementation process for your LAN networking and CCTV needs.",
              
              subtitle:'LAN Networking & CCTV Installation process with EssAge Technologies ',
              description: "Needs Assessment and Planning",
              contentdetails:" EssAge Technologies begins by understanding your specific networking and security requirements. We assess your premises, identify challenges, and create a customized plan to address your needs effectively",
              description2: "Design and Proposal",
              contentdetails2:"Based on the assessment, we design a scalable LAN network layout and CCTV system blueprint. A detailed proposal outlining the scope, timeline, and cost ensures transparency and alignment with your expectations.",
              description3: "Installation and Configuration",
              contentdetails3:" Our experts handle the installation of structured cabling, networking hardware, and CCTV systems. We ensure seamless integration, optimal performance, and secure configurations tailored to your environment.",
              description4:"Testing, Training, and Support",
              contentdetails4:"After installation, we rigorously test the systems for reliability and efficiency. Comprehensive training is provided to your team, along with ongoing support and maintenance to ensure long-term performance."
            }
    
       
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
      <Contact />
      <Footer />
    </div>
  )
}

export default LanNetworking