import React from "react";
import Image from "next/image";
import style from "../about-us/styles/what-peope-say-card.module.scss";
import dImage from '../../components/about-us/images/abt-banner4.jpg'
const WhatPeopeSayCard = (props) => {
  return (
    <main>
      <div className={style.container}>
        <div>
            <Image src={dImage} alt="d" width={50} height={50}/>
        </div>
        <div className={style.namePerson}>
          <h5>{props.name}</h5>
          <h6>{props.company}</h6>
        </div>
        <div className={style.textTitle}>

        
          <p>
          {props.testimony}
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default WhatPeopeSayCard;
