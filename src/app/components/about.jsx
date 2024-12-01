import React from "react";
import Image from "next/image";
import style from "../../styles/about.module.scss";
import computerImage from "../../images/compimage.jpg";
import AboutCard from "../components/about-card";

const About = () => {
  const data = [
    {
      title: "EFFICIENT SERVICE",
      content: " Lorem ipsum dolor sit amet consectetur adipisicin officiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
      details: "Frontend Implementations",
      // image: pm,
      url: "https://sh-linkdln.netlify.app/",
    },
    {
      title: "QUALITY PRODUCT",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumofficiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
      details: "Design and Development",
      // image: webapp,
      url: "https://benevolent-bombolone-c31318.netlify.app/",
    },

    {
      title: "SATISFIED CUSTOMERS",
      content: " Lorem ipsum dolor sit amet consectetur adipisicin officiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
      details: "Design and Development",
      // image: cyber,
    },
  ];

  return (
    <main>
      <div className={style.container}>
        <div>
          <Image
            src={computerImage}
            width={500}
            height={600}
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

          <div>  
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
      </div>
    </main>
  );
};

export default About;
