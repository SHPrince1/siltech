import React from "react";
import style from "../../styles/footer.module.scss";
import Image from "next/image";
import Insta from "../../images/instaa-removebg-preview.png";
import TwitX from "../../images/xlogo-removebg-preview.png";
import Linkdlnn from "../../images/lindn_img-removebg-preview.png";
import Logo from "../../images/essagelogo-removebg-preview.png";
// import Link from "next/link";

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
              <a href="">Services</a>
            </div>
            <div>
              <a href="">Contact us</a>
            </div>
            <div>
              <a href="">Connect</a>
            </div>
            <div>
              <a href="">Store</a>
            </div>
          </div>
          <div className={style.secondBox}>
            <div>
              <a href="">
                <h4>Industries</h4>
              </a>
            </div>
            <div>
              <p>Education</p>
            </div>
            <div>
              <p>Logistics & Transportation</p>
            </div>
            <div>
              <p>NGOs</p>
            </div>
            <div>
              <p>Fintech</p>
            </div>
          </div>
          <div className={style.thirdBox}>
            <div>
              <a href="">
                <h4>Contact Us</h4>
              </a>
            </div>
            <div>
              <a href="">info@essagetech.com</a>
            </div>
            <div>
              <p>+234 903 280 0274</p>
            </div>
            <div>
              <p>Okota Lagos</p>
            </div>
            {/* <div>
            <a href="">
              Quick Links
            </a>
          </div> */}
          </div>
        </div>

        <div className={style.nameLogo}>
          <div className={style.logoDiv} >
            {" "}
            {/* <h2>Essage Technologies</h2> */}
            <a href="https://essagetech.netlify.app">
              <Image img src={Logo} width={150} height={150} alt="s" />
            </a>
          </div>
          <div className={style.logo}>
            <a href="https://www.linkedin.com/company/siltechnologies/">
              <Image img src={Linkdlnn} width={30} alt="s" />
            </a>
            <a a href="x.com">
              <Image img src={TwitX} width={50} alt="s" />
            </a>
            <a href="https://www.instagram.com/essagetechnologies/">
              <Image img src={Insta} width={30} alt="s" />
            </a>
          </div>
        </div>

        <div className={style.privacyPolicy}>
          <p>2024 EsssgeTech Solutions Limited. All right reserved</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
