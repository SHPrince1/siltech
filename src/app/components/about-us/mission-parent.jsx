import React from "react";
import style from "../about-us/styles/mission-parent.module.scss";
// import { MdLightbulbOutline } from "react-icons/md";
// import ValuesCard from '../about-us/values-card'
import MissionCard from './mission-card'
const MissionParent = () => {
    return (
      <main>
       <div className={style.container}>
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
        
       </div>

      
      </main>
    );
  };
  
  export default MissionParent;