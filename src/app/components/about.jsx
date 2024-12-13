import React from "react";
import Image from "next/image";
import style from "../../styles/about.module.scss";
import computerImage from "../../images/abt us.png";
// import AboutCard from "../components/about-card";

// import Blackatisfaction from "../../images/black-satisfaction.webp";
// import Customer from "../../images/customer-service-efficiency-jpg.webp";
// import Quality from "../../images/quality-service-GKMXY2.jpg";

const About = () => {
  // const data = [
  //   {
  //     title: "EFFICIENT SERVICE",
  //     content:
  //       " Lorem ipsum dolor sit amet consectetur adipisicin officiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
  //     details: "Frontend Implementations",
  //     image: Customer,
  //     url: "https://sh-linkdln.netlify.app/",
  //   },
  //   {
  //     title: "QUALITY PRODUCT",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumofficiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
  //     details: "Design and Development",
  //     image: Quality,
  //     url: "https://benevolent-bombolone-c31318.netlify.app/",
  //   },

  //   {
  //     title: "SATISFIED CUSTOMERS",
  //     content:
  //       " Lorem ipsum dolor sit amet consectetur adipisicin officiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
  //     details: "Design and Development",
  //     image: Blackatisfaction,
  //   },
  // ];

  return (
    <main>
      {/* <div className={style.container}>
        <div className={style.imageDiv}>
          <Image
            src={computerImage}
            width={500}
          
            alt="computer Image"
          />
        </div>
        <div className={style.textBox}>
          <h2>ABOUT US</h2>
          <div className={style.offerText}>
            <h1>WE OFFER THE RIGHT TECHNOLOGY SOLUTIONS</h1>
          </div>
          <div className={style.pText}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex alias
              quos ab aut voluptatibus cum impedit officiis, animi placeat modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, rem!
            </p>
          </div>

          <div className={style.aboutCardContent}>  
          {data.map((data, index) => {
              return (
                <AboutCard
                  key={index}
                  //  title={data.title}
                  image={data.image}
                  content={data.content}
                  title={data.title}
                  roleplayed={data.roleplayed}
                  url={data.url}
                />
              );
            })}
          </div>

          <div className={style.btnDiv}>
            <button>READ MORE</button>
          </div>
        </div>
      </div> */}

      <div className={style.container}>
        {/* <div>
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            atque autem modi necessitatibus odio eveniet ut.
          </p>
        </div> */}
        <div className={style.contentDiv}>
          <div className={style.imgDiv}>
            <Image src={computerImage} alt="computer Image" />
          </div>
          <div className={style.textDiv}>
            <h3>WHO WE ARE</h3>
            <p>
              ESAGE, a child of vision and mission ESAGE is the SOLUTIONS
              HUB which was incorporated to amongst other engagements; builds
              Premium, Top Notch and user friendly websites and mobile
              Applications for industrial and commercial purposes to corporate
              bodies in Nigeria. The DIGITAL firm was founded and run by
              seasoned technology enthusiast and practitioners, people keen and
              passionate about taking advantage of technology to render long
              lasting solutions to corporate organizations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
