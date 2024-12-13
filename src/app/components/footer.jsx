import React from "react";
import style from "../../styles/footer.module.scss";
import Image from "next/image";
import Insta from "../../images/insta.jpeg";
import TwitX from "../../images/twitx.jpeg";
import Linkdlnn from "../../images/link.png";
import Logo from '../../images/essagelogo-removebg-preview.png'
import Link from "next/link";

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
          <div>
            {" "}
            {/* <h2>Essage Technologies</h2> */}
            <a href="linkdli.com">
              <Image img src={Logo} width={200} height={160}  />
            </a>
          </div>
          <div className={style.logo}>
            <a href="linkdli.com">
              <Image img src={Linkdlnn} width={30} />
            </a>
            <Image img src={TwitX} width={50} />
            <Image img src={Insta} width={50} />
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
