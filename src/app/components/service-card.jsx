import React from "react";
import Image from "next/image";
import style from "../../styles/service-card.module.scss";

const ServiceCard = (props) => {
  return (
    <main>
      <div>
        <div className={style.serviceItem}>
          
          <div className={style.headerText}>
            <h4>{props.description}</h4>
          </div>
          <div>
            <p>
            {props.details}
            </p>
          </div>
          <div>
            <a href= {props.url}>
          {props.url}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceCard;
