import React from "react";
import WhatPeopeSayCard from "../about-us/what-peope-say-card";
import style from "../../components/about-us/styles/what-people-say-parent-card.module.scss";
const WhatPeopleSayParentCard = () => {

  const data = [

    
    {
        name:"Taiwo Victory",
        company:"CEO JustMove",
       testimony:" Essage Technologies is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"
   
      
    },
    {
      name:"Taiwo Victory",
      company:"CEO JustMove",
     testimony:" Essage Technologies is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"
 
    
  },
  {
    name:"Taiwo Victory",
    company:"CEO JustMove",
   testimony:" Essage Technologies is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"

  
},
{
  name:"Taiwo Victory",
  company:"CEO JustMove",
 testimony:" Essage Technologies is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"


},
{
  name:"Taiwo Victory",
  company:"CEO JustMove",
 testimony:" Essage Technologies is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"


},
{
  name:"Taiwo Victory",
  company:"CEO JustMove",
 testimony:" Essage Technologies is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"


},
   

   
  ];
  return (

    
    <main>
      <div className={style.container}>
        {" "}
        <div className={style.title}>
          <h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
          <p>
            Our passion for technology and innovation drives us to deliver
            exceptional results for our clients.
          </p>
        </div>
        <div className={style.containerContent}>
        {data.map((data, index) => {
          return (
            < WhatPeopeSayCard
            key={index}
            name={data.name}
            company={data.company}
            testimony={data.testimony}
            
           
          
          />
          );
        })}
        
          {/* < /> */}
        </div>
      </div>
    </main>
  );
};

export default WhatPeopleSayParentCard;
