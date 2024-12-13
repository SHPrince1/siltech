import React from "react";
import Card from "../components/card";
import style from "../../styles/why-choose.module.scss";

const WhyChoose = () => {
  const data = [
    {
      title: "SOLUTION WITH EASE ",
      // content: "Say the problem and we are commited to deliver the solution. And you don't have to move out of your home or office",
      details: "Frontend Implementations",
      // image: pm,
      url: "https://sh-linkdln.netlify.app/",
    },
    {
      title: "QUALITY PRODUCT",
      // content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumofficiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
      details: "Design and Development",
      // image: webapp,
      url: "https://benevolent-bombolone-c31318.netlify.app/",
    },

    {
      title: "EFFICIENT SERVICE",
      // content: " Lorem ipsum dolor sit amet consectetur adipisicin officiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
      details: "Design and Development",
      // image: cyber,
    },
    {
      title: "SATISFIED CUSTOMERS",
      // content: " Lorem ipsum dolor sit amet consectetur adipisicin officiis doloribus, architecto ipsum sapiente possimu delectus animi ducimus doloremque perferendis!",
      details: "Design and Development",
      // image: cyber,
    },
  ];

  return (
    <main>
      <div className={style.container}>
        <div className={style.col}>
          <div className={style.textCard}>
            <h1>Why Choose Us</h1>
            <p>
              We have a number of different teams within our company that
              specialise in different areas of technology and business so you
              can be rest assured of quality.
            </p>

            <p>
              We develop the best solutions that are innovative, practical and
              timely according to your requirements.
            </p>
          </div>
          <div className={style.cardDiv}>
            {data.map((data, index) => {
              return (
                <Card
                  key={index}
                  //  title={data.title}
                  // image={data.image}
                  title={data.title}
                  content={data.content}
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

export default WhyChoose;
