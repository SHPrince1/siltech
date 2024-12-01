import React from "react";
import Image from "next/image";
import style from "../../styles/card.module.scss";

const Card = (props) => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.imgBox}>
          <div><Image src={props.image} alt="image" className={style.pImage} /></div>
        </div>
        <div className={style.titleBox}>
          <h4>{props.title}</h4>
        </div>
        <div className={style.textBox}>
          <p>
           {props.content}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Card;
