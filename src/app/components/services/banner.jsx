import React from "react";
import style from "../../components/services/styles/banner.module.scss";

const ServiceBanner = () => {
  return (
    // <main>
    //   <div className={style.container}>

    //     <div className={style.bannerDiv}>
    //       <div className={style.bannerText}>
    //         <h4>Essage Technologies</h4>

    //         <h3>About Us</h3>

    //         <p>
    //           Digitally transforming the core of your business for
    //           sustainability
    //         </p>
    //       </div>
    //     </div>

    //     <div><h1>TESTT</h1></div>
    //   </div>
    // </main>

    <main>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.text}>
              <div className={style.headerText}>
                {/* <h1>Essage Technologies</h1> */}
                <h1>Right Technologies Efficient Services </h1>
              </div>
              <div className={style.pText}>
                <p>
                  Digitally transforming the core of your business for
                  sustainability.
                </p>
                {/* <p>
                  Just say the problem and we are sure to offer the solutions.
                </p>
                <p> We Deliver what you demand for the with Ease. That is why we
                are    <span className={style.logoText}>The Right Technlogy</span> </p> */}
                <p>
                  We transform businesses for a sustainable future with digital
                  transformation. By leveraging cutting-edge technologies, we
                  optimize resources, reduce waste, and deliver innovative,
                  eco-friendly solutions.
                </p>
                <p>
                  We help stay ahead of the curve, meet customer demands for
                  sustainability, and build a resilient, future-proof
                  organization.
                </p>
                <p>
                  <span className={style.logoText}>
                    Let’s make sustainability your competitive advantage partner with us today!
                  </span>{" "}
                  
                </p>
              </div>

              <div className={style.btn}>
                <a href ='/contact-us'>
                <button>Partner with us today</button>
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

export default ServiceBanner;
