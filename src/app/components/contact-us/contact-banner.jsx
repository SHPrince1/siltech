import React from "react";
import style from "../contact-us/styles/banner.module.scss";

const ContactBanner = () => {
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
                <h1>CONTACT US</h1>
                <h1>LET&#39;S BUILD TOGETHER</h1>
              </div>
              <div className={style.pText}>
                {/* <p>
                 LET'S BUILD TOGETHER
                </p>
                
                <p>
                  We transform businesses for a sustainable future with digital
                  transformation. By leveraging cutting-edge technologies, we
                  optimize resources, reduce waste, and deliver innovative,
                  eco-friendly solutions.
                </p> */}
               
                
              </div>

             
            </div>
          </div>
         
        </div>
      </div>
    </main>
  );
};

export default ContactBanner;
