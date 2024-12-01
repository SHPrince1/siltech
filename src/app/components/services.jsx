import React from "react";
import Image from "next/image";
import style from "../../styles/services.module.scss";
import ServiceCard from "../components/service-card";

// Imported images
import enterprise from "../../images/enterprice.jpg";
import repair from "../../images/comprepair.jpg";
import cctv from "../../images/cctv.jpeg";
import pm from "../../images/pm.jpeg";
import webapp from "../../images/webapp.jpeg";
import cyber from "../../images/cyber.jpeg";

const Services = () => {
  const data = [
    {
      title: "SylTube",
      description: "Enterprise Services",
      details: "Design and Development",
      image: enterprise,
      url: "https://syltube.netlify.app/",
    },

    {
      title: "COD TRAVELS",
      description: "Computer sales, Hardware Repair and Maintenance",
      details: "Design and Development",
      image: repair,
      roleplayed: "Designed the frontend user-interface",
      url: "https://codtravels.com/",
    },
    {
      title: "Bankers Ware house",
      description: "CCTV Installation ",
      details: "Design and Development",
      image: cctv,
      url: "https://bw-clone.netlify.app/",
    },
    {
      title: "Bankers Ware house",
      description: "Project Planning and Management",
      details: "Frontend Implementations",
      image: pm,
      url: "https://sh-linkdln.netlify.app/",
    },
    {
      title: "Bankers Ware house",
      description: "WEB & Mobile Application Development  ",
      details: "Design and Development",
      image: webapp,
      url: "https://benevolent-bombolone-c31318.netlify.app/",
    },

    {
      title: "Bankers Ware house",
      description: "Cyber Security",
      details: "Design and Development",
      image: cyber,

      url: "https://transcendent-otter-8c4077.netlify.app/",
    },
  ];

  return (
    <main>
      <div className={style.container}>
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

          {/* <h1>SERVICES</h1> */}
          <div className={style.serviceBox}>
            {data.map((data, index) => {
              return (
                <ServiceCard
                  key={index}
                  //  title={data.title}
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
      </div>
    </main>
  );
};

export default Services;
