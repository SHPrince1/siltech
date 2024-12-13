import React from "react";

import style from "../../styles/contact.module.scss";
import ContactImage from "../../images/contact-us-image.png";
import Image from "next/image";

const Contact = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.imgDiv}>
          <Image src={ContactImage} alt="image" />
        </div>
        <div>
          <div>
            <h1>GET IN TOUCH</h1>
          </div>
          <div className={style.formDiv}>
            <form>
              <div className={style.names}>
                <input placeholder="First Name" type="text" />
                <input placeholder="Last Name" type="text" />
              </div>

              <div className={style.address}>
                <input placeholder="Phone Number" type="num" />
                <input placeholder="Email Address" type="email" />
              </div>
              <div className={style.textDiv}>
                <textarea
                  type="text"
                  placeholder="Type your message"
                  className={style.textSpace}
                />
              </div>

              <button className={style.send} type="submit">
                SEND
              </button>

              {/* <Button /> */}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
