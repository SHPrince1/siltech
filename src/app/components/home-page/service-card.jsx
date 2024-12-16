import React from "react";
// import Image from "next/image";
import style from "../../../styles/service-card.module.scss";

const ServiceCard = (props) => {
  return (
    <main>
      <div>
        <div className={style.serviceItem}>
      
          <div className={style.headerText}>
            <h4>{props.description}</h4>
          </div>
         
          <div className={style.detailsDiv}>
            <p>{props.details}</p>
          </div>
          <div className={style.urlDiv}>
            <a href={props.url}>
              <p> Read More</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceCard;
