import React from "react";
import style from "../about-us/styles/mission-card.module.scss";
import { MdLightbulbOutline } from "react-icons/md";

const MissionCard = () => {
  return (
    <main>
      <div className={style.container}>
        
        <div>
        <MdLightbulbOutline  size={30}/>
        </div>
        <h4>Our Vision</h4>
        <div>
          <p>
            Our vision is to be a global leader in technology and cybersecurity
            solutions, fostering innovation and staying at the forefront of
            digital trends and technologies.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MissionCard;
