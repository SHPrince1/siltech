import React from "react";
import style from "../../styles/card.module.scss";

const Card = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.imgBox}>
          <h1>IMAGE</h1>
        </div>
        <div className={style.titleBox}>
          <h4>EFFICIENCY</h4>
        </div>
        <div className={style.textBox}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            rerum necessitatibus aperiam sequi, animi nostrum maiores ea iste
            nulla quibusdam ut tempore distinctio magnam eaque quidem omnis
            dolores, vitae dicta?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Card;
