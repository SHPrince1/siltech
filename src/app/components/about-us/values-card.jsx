import React from "react";
import style from '../about-us/styles/values-card.module.scss'

const ValuesCard = (props) => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.title}>
          <h5>{props.title}</h5>
        </div>
        <div className={style.content}>
          <p> {props.details}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ValuesCard;
