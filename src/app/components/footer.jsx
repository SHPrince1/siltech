import React from "react";
import style from "../../styles/footer.module.scss";

const Footer = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.containerContent}>
        <div className={style.firstBox}>
          <div>
            
              <h4>Quick Links</h4>
            
          </div>
          <div>
            <a href="">
             Company
            </a>
          </div>
          <div>
            <a href="">
              Contact us
            </a>
          </div>
          <div>
            <a href="">
             Connect    
            </a>
          </div>
          <div>
            <a href="">
              Store
            </a>
          </div>
        </div>
        <div className={style.secondBox}>
        <div>
            <a href="">
              <h4>Industries</h4>
            </a>
          </div>
          <div>
            <a href="">
             Company
            </a>
          </div>
          <div>
            <a href="">
              Contact us
            </a>
          </div>
          <div>
            <a href="">
             Connect    
            </a>
          </div>
          <div>
            <a href="">
              Quick Links
            </a>
          </div>
        </div>
        <div className={style.thirdBox}>
        <div>
            <a href="">
              <h4>Contact Us</h4>
            </a>
          </div>
          <div>
            <a href="">
             Company
            </a>
          </div>
          <div>
            <a href="">
              Contact us
            </a>
          </div>
          <div>
            <a href="">
             Connect    
            </a>
          </div>
          <div>
            <a href="">
              Quick Links
            </a>
          </div>
        </div>
        <div className={style.fourthBox}>
        <div>
            <a href="">
              <h4>Quick Links</h4>
            </a>
          </div>
          <div>
            <a href="">
             Company
            </a>
          </div>
          <div>
            <a href="">
              Contact us
            </a>
          </div>
          <div>
            <a href="">
             Connect    
            </a>
          </div>
          <div>
            <a href="">
              Quick Links
            </a>
          </div>
        </div>
        </div>

        <div className={style.nameLogo}>
          <div> <h2>TechRite</h2></div>
          <div className={style.logo}><p>Logo</p><p>Logo</p> <p>Logo</p></div>
         
        </div>

        <div className={style.privacyPolicy}>
          <p>2024 TechRite Solutions Limited. All right reserved</p>
          <p>Privacy Policy</p>
        </div>
       
      </div>
    </main>
  );
};

export default Footer;
