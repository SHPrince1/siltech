import React from "react";
import Image from "next/image";
import Service from "../detailed-service components/images/service-resize.webp";
import Software from "../detailed-service components/images/software-dev-australia.jpg";
import style from "../detailed-service components/styles/detailed-card-banner.module.scss";
const DetailedCardBanner = (props) => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.containerContent}>
          <div className={style.imageDiv}>
            <Image src={Service} alt={""} />
          </div>
          <div className={style.textDiv}>
            <h1>{props.intro}</h1>
          </div>
        </div>

        <div className={style.detailBox}>
          <div className={style.detailBoTxext}>
            <h2>{props.head}</h2>
            <p>{props.titledetails}</p>

            {/* <p>{props.titledetails}</p> */}
          </div>
          <div className={style.detailBoxImage}>
            <Image src={props.image} alt={""} width={"40%"} />
          </div>
        </div>

        <div className={style.processBox}>
          <div className={style.processBoxTitle}>
            <h2>{props.subtitle}</h2>
          </div>
          <div className={style.processBoxTextContentBox}>
            <div className={style.processBoxTextContent}>
              <h4>{props.description}</h4>

              <p>{props.contentdetails}</p>
            </div>

            <div className={style.processBoxTextContent}>
              <h4>{props.description2}</h4>

              <p>{props.contentdetails2}</p>
            </div>
            <div className={style.processBoxTextContent}>
              <h4>{props.description3}</h4>

              <p>{props.contentdetails3}</p>
            </div>
            <div className={style.processBoxTextContent}>
              <h4>{props.description4}</h4>

              <p>{props.contentdetails4}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailedCardBanner;
