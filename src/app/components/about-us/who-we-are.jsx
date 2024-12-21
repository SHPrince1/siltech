import React from "react";
import style from "./styles/who-we-are.module.scss";
// import Card from "../about-us/card";
// import CardParent from '../about-us/card-parent'
import Carousel from '../about-us/carousel'
// import MissionCard from '../about-us/mission-card'

const WhoWeAre = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.textDiv}>
          <h3>Forefront Leaders in Technology and Digital Consulting</h3>
          <p>
            Essage Technologies Limited is a reputable technology and digital
            consulting firm based in Lagos, Nigeria. Our mission is to provide
            comprehensive digital technology solutions that provide a high
            return on investment to our esteemed clients. We offer digital
            transformation programs that help address our client `&apos;`s pain points
            and position them for efficient and effective operation, resulting
            in increased revenue and profitability. At Essage Technologies
            Limited, the following are the heart of our business;
          </p>
        </div>

        
      </div>

      <div className={style.cardDiv}>
       <Carousel />
        
         
        </div>

        {/* <div>
          <MissionCard />
        </div> */}
    </main>
  );
};

export default WhoWeAre;
