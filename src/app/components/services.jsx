import React from "react";
// import Image from "next/image";
import style from "../../styles/services.module.scss";
import ServiceCard from "../components/service-card";

// Imported images
import enterprise from "../../images/enterprice.jpg";
import repair from "../../images/comprepair.jpg";
import cctv from "../../images/cctv.jpeg";
import pm from "../../images/pm.jpeg";
import webapp from "../../images/webapp.jpeg";
// import cyber from "../../images/cyber.jpeg";

const Services = () => {
  const data = [
    {
      title: "SylTube",
      description: "IT Consulting & Advisory",
      details:
        "We support organisations to make more effective use of technology and create successful digital transformations.",
      image: enterprise,
      url: "https://syltube.netlify.app/",
    },

    {
      title: "COD TRAVELS",
      description: "Software Development",
      details: "We develop software solutions accross various industries. Which enhance smooth and efficienntrunning of day to day business",
      image: repair,
      roleplayed: "Designed the frontend user-interface",
      url: "https://codtravels.com/",
    },
    {
      title: "Bankers Ware house",
      description: "LAN Networking & CCTV Installation ",
      details: "Our LAN networking and CCTV security camera installation, is sure to deliver seamless connectivity and top-notch survelance for your home or business",
      image: cctv,
      url: "https://bw-clone.netlify.app/",
    },
    {
      title: "Bankers Ware house",
      description: "Computer Sale & Maintenance",
      details: "We sell computers in bulk or single units, and also provide professional maintenance and repair services to keep your systems running smoothly",
      image: pm,
      url: "https://sh-linkdln.netlify.app/",
    },
    {
      title: "Bankers Ware house",
      description: " Solar Inverter installation",
      details: "We offer reliable solar and inverter installation services, providing sustainable energy solutions for homes and business",
      image: webapp,
      url: "https://benevolent-bombolone-c31318.netlify.app/",
    },

    // {
    //   title: "Bankers Ware house",
    //   description: "Cyber Security",
    //   details: "Design and Development",
    //   image: cyber,

    //   url: "https://transcendent-otter-8c4077.netlify.app/",
    // },
  ];

  return (
    <main>
      {/* <div className={style.container}>
        <div className={style.containerContent}>
          <div className={style.serviceLeft}>
            <div>
              <h2>OUR SERVICES</h2>
            </div>
            <div>
              <h3>WE DELIVER AS PROMISED YOU RECEIVE AS DEMANDED</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                exercitationem deleniti cum sequi architecto, dolor corporis
              </p>
            </div>

            <div className={style.btnDiv}>
              <button>Explore all services</button>
            </div>
          </div>
          <div className={style.emptyDiv}></div>

          <div className={style.serviceBox}>
            {data.map((data, index) => {
              return (
                <ServiceCard
                  key={index}
                  
                  image={data.image}
                  description={data.description}
                  details={data.details}
                  roleplayed={data.roleplayed}
                  url={data.url}
                />
              );
            })}
          </div>
        </div>
      </div> */}

      <div className={style.container}>
        <div className={style.textDiv}>
          <h3>OUR SERVICES</h3>
          <p>
            Whatever the project size or scope, our principles stay the same.
            Our Reseach, Design, Build framework is tried, tested and proven.
          </p>
        </div>
        <div>
          <div className={style.serviceBox}>
            {data.map((data, index) => {
              return (
                <ServiceCard
                  key={index}
                  image={data.image}
                  description={data.description}
                  details={data.details}
                  roleplayed={data.roleplayed}
                  url={data.url}
                />
              );
            })}
          </div>
        </div>
        <div className={style.textButtonDiv}>
          <h3>What can we help you with today?</h3>
          <button>Connect</button>
        </div>
      </div>
    </main>
  );
};

export default Services;
