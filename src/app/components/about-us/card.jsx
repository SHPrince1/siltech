import React from "react";
// import Image from "next/image";
import style from "./styles/card.module.scss";
// import Images from '../about-us/images/abt-banner.jpg'
// import { GrFormNextLink } from "react-icons/gr";
const Card = (props) => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.imageDiv}>
            {/* <Image src={Images} alt="image" /> */}
        </div>
        <div className={style.textDiv}>
            <h4>
            {props.title}</h4>
          <p>{props.details}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Card;
