import React from "react";
import Image from "next/image";
import style from "../../styles/service-card.module.scss";

const ServiceCard = (props) => {
  return (
    <main>
      <div>
        <div className={style.serviceItem}>
          <div className={style.imgBox}>
            <div>
              {" "}
              <Image src={props.image} alt="image" className={style.pImage} />
            </div>
          </div>
          <div className={style.headerText}>
            <h4>{props.description}</h4>
          </div>
          <div>
            <p>
            {props.details}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceCard;
