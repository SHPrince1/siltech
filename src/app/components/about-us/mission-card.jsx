import React from "react";
import style from "../about-us/styles/mission-card.module.scss";
// import { MdLightbulbOutline } from "react-icons/md";

const MissionCard = (props) => {
  return (
    <main>
      <div className={style.container}>
        
        <div>
        {props.icon}
        </div>
        <h4>{props.title}</h4>
        <div>
          <p>
           {props.details}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MissionCard;
