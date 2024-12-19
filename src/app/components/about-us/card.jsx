import React from "react";
import Image from "next/image";
import style from "./styles/card.module.scss";
import Images from '../about-us/images/abt-banner.jpg'

const Card = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.imageDiv}>
            <Image src={Images} alt="image" />
        </div>
        <div className={style.textDiv}>
            <h4>
            Employee Empowerment </h4>
          <p>We prioritize customer-centricity and
            constantly empower our employees to engage deeply with our clients,
            all while optimizing and transforming our operations and products.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Card;
