import React from "react";
import style from "../../components/about-us/styles/connect.module.scss";

const Connect = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.containerContent}>
          <div>
            <h1>Do you have a dream?</h1>
          </div>
          <div>
            <p>
              Allow us bring your dreams to life. We are ready to listen to your
              need and proffer solutions in different areas of technology and
              business
            </p>
          </div>

          <div className={style.btn}>
            <button>GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Connect;
