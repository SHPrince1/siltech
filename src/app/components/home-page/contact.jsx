"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import FormSuccess from "../../components/form-success"
import style from "../../../styles/contact.module.scss";
import ContactImage from "../../../images/contact-us-image.png";
import Image from "next/image";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzzyzzp");
  if (state.succeeded) {
    return <FormSuccess/>;
  }
  return (
    <main>
      <div className={style.container}>
        <div className={style.imgDiv}>
          <Image src={ContactImage} alt="image" />
        </div>
        <div>
          <div>
            <h1>GET IN TOUCH.</h1>
          </div>
          <div className={style.formDiv}>
            <form onSubmit={handleSubmit}>
              <div className={style.names}>
                <input placeholder="First Name" type="text" />
                <input placeholder="Last Name" type="text" />
              </div>

              <div className={style.address}>
                <input placeholder="Phone Number" name="num" type="num" />
                <ValidationError
                  prefix="Num"
                  field="num"
                  errors={state.errors}
                />

                <input placeholder="Email Address" name="email" type="email" />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className={style.textDiv}>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Type your message"
                  className={style.textSpace}
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button className={style.send} type="submit"  disabled={state.submitting}>
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
