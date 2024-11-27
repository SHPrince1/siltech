import React from "react";
import Card from "../components/card";
import style from "../../styles/why-choose.module.scss";



const WhyChoose = () => {
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
          <Card  />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
};

export default WhyChoose;
