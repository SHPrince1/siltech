import React from "react";
import Card from "../components/card";
import style from "../../styles/why-choose.module.scss";



const WhyChoose = () => {
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
        <div className={style.TextCard} >
          <h3>Why Choose us?</h3><br/>
          <div>
            <h1>WE ARE THE RIGHT TECHNOLOGY FOR A REASON</h1>
          </div>
        </div>

        <div className={style.cardBox}>
          {data.map((data, index) => {
              return (
                <Card
                  key={index}
                  //  title={data.title}
                  image={data.image}
                  title={data.title}
                  content={data.content}
                  roleplayed={data.roleplayed}
                  url={data.url}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default WhyChoose;
