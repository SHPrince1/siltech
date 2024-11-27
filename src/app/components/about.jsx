import React from "react";
import Image from "next/image";
import style from "../../styles/about.module.scss";
import computerImage from '../../images/compimage.jpg';

const About = () => {
  return (
    <main>
      <div className={style.container}>
        <div>
          <Image src='/images/compimage.jpg' alt="computer Image" width={200} height={100} />
          
        </div>
        <div className={style.textBox}>
          <h1>ABOUT US</h1>
          <div className={style.offerText}>
            <h1>WE OFFER THE RIGHT TECHNOLOGY SOLUTIONS</h1>
          </div>
          <div className={style.pText}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex alias
              quos ab aut voluptatibus cum impedit officiis, animi placeat modi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, rem!
            </p>
          </div>

          <div>
            <div className={style.qualityBox}>
              <div>IMAGE</div>
              <div className={style.captionText}>
                <h3>QUALITY PRODUCT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  officiis doloribus, architecto ipsum sapiente possimus
                  delectus animi ducimus doloremque perferendis!
                </p>
              </div>

              
            </div>
            <div className={style.qualityBox}>
              <div>IMAGE</div>
              <div className={style.captionText}>
                <h3>EFFICIENT SERVICE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  officiis doloribus, architecto ipsum sapiente possimus
                  delectus animi ducimus doloremque perferendis!
                </p>
              </div>

              
            </div>

            <div className={style.qualityBox}>
              <div>IMAGE</div>
              <div className={style.captionText}>
                <h3>SATISFIED CUSTOMERS</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  officiis doloribus, architecto ipsum sapiente possimus
                  delectus animi ducimus doloremque perferendis!
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
