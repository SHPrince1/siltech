import React from "react";
import style from "../about-us/styles/mission-parent.module.scss";
// import { MdLightbulbOutline } from "react-icons/md";
// import ValuesCard from '../about-us/values-card'
import { MdLightbulbOutline } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";

import { IoSettingsSharp } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import MissionCard from './mission-card'
const MissionParent = () => {


  const data = [
    {
        icon:<MdLightbulbOutline  size={30}/>,
      title: "Our Vision",
   
      details: "Our vision is to be a global leader in technology and cybersecurity solutions, fostering innovation and staying at the forefront of digital trends and technologies.",
      
    
    },
    {
        icon:<GiStairsGoal   size={30}/>,
      title: "Our Mission",
   
      details: "With focus on delivering great quality in every element of our work, our objective is to consistently provide dependable and creative information technology services to individuals, companies, and communities",
      
    
    },
    {
        icon:<IoSettingsSharp  size={30}/>,
      title: "Our Strategy",
   
      details: "To create effective and efficient solutions that improve our client's businesses, our organization places a high priority on knowing the specific needs and requirements of each of our clients.",
      
    
    },
    {
        icon:<FaHandsHelping  size={30}/>,
      title: "Need a Hand",
   
      details: "Our dedicated support team is available around the clock, 24/7, to provide prompt and effective assistance in resolving any digital problems or issues that our clients may encounter.",
      
    
    },

   
  ];
    return (
      <main>
       <div className={style.container}>
        {/* <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard /> */}


        {data.map((data, index) => {
          return (
            < MissionCard 
            key={index}
            icon={data.icon}
            title={data.title}
            details={data.details}
            
           
          
          />
          );
        })}
        
       </div>

      
      </main>
    );
  };
  
  export default MissionParent;