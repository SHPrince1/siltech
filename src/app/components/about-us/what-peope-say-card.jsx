import React from "react";
import Image from "next/image";
import style from "../about-us/styles/what-peope-say-card.module.scss";
import dImage from '../../components/about-us/images/abt-banner4.jpg'
const WhatPeopeSayCard = () => {
  return (
    <main>
      <div className={style.container}>
        <div>
            <Image src={dImage} alt="d" width={50} height={50}/>
        </div>
        <div className={style.namePerson}>
          <h5>Taiwo Victory</h5>
          <h6>CEO JustMove NG</h6>
        </div>
        <div className={style.textTitle}>

        
          <p>
            "Essage Technologies is always reliable and fast, even with short notices, we
            can always count on them to get requests done. Thank you!"
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default WhatPeopeSayCard;
