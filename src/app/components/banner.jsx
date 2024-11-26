import React from "react";
import style from "../../styles/banner.module.scss";

const Banner = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.text}>
          <div className={style.headerText}>
            <h1>SOLUTIONS AT YOUR DOORSTEP</h1>
          </div>
          <div className={style.pText}>
            <p>
              We render Technology based services and solutions. Just say the
              problem and we are sure to offer the solutions. You get the
              solution with Ease. That's why we are <span ><b>TechRite</b></span>
            </p>
          </div>
        </div>

     
      </div>
    </main>
  );
};

export default Banner;
