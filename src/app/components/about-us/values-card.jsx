import React from "react";
import style from '../about-us/styles/values-card.module.scss'

const ValuesCard = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.title}>
          <h5>Integrity</h5>
        </div>
        <div className={style.content}>
          <p>
            We believe in the importance of maintaining consistency between our
            words and actions. We understand that trust and respect are the
            foundation of any successful relationship
          </p>
        </div>
      </div>
    </main>
  );
};

export default ValuesCard;
