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
              problem and we are sure to offer the solutions. We get what you
              demand for the with Ease. That's why we are{" "}
              <span>
                <b>TechRite</b>
              </span>
            </p>
          </div>

          <div className={style.btn}>
            <button>Connect</button>
          </div>
        </div>
        <div className={style.cover}>{/* <h1>HELLO</h1> */}</div>
      </div>
    </main>
  );
};

export default Banner;
