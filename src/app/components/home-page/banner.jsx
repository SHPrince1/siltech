import React from "react";
import style from "../../../styles/banner.module.scss";

const Banner = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.text}>
              <div className={style.headerText}>
                <h1>Right Technologies for Efficient Services. </h1>
              </div>
              <div className={style.pText}>
                <p>
                  We render Technology based services and solutions.
                  </p>
                  <p>
                    Just say the problem and we are sure to offer the solutions.
                  </p>
                  <p> We Deliver what you demand for the with Ease. That is why we
                  are    <span className={style.logoText}>The Right Technlogy</span> </p>
                
                    
                  
               
                 
                
              </div>

              <div className={style.btn}>
                <a href='/contact-us'>
                <button>CONNECT</button>
                </a>
              </div>
            </div>
          </div>
          {/* <div className={style.col - 6}></div> */}
        </div>
      </div>
    </main>
  );
};

export default Banner;
