import React from "react";
import Image from "next/image";
import style from "../../styles/about-card.module.scss";
const AboutCard = (props) => {
  return (
    <main>
      <div className={style.qualityBox}>
        <div>
          <Image src={props.image} alt="image" className={style.pImage} />
        </div>
        <div className={style.captionText}>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </main>
  );
};

export default AboutCard;
