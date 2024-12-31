import React from 'react'
import ValuesCard from '../about-us/values-card'
import style from '../about-us/styles/value-card-parent.module.scss'
const ValueCardParent = () => {

  const data = [

    
    {
        title:"Integrity",
        details:"We believe in the importance of maintaining consistency between our words and actions. We understand that trust and respect are the foundation of any successful relationship"
       
    //   title: "IT Consulting & Advisory",
      
    },
    {
        title:"Client-Centered",
        details:"We prioritize all our clients and remain readily available to provide them with superior and dependable service."
       
    //   title: "IT Consulting & Advisory",
      
    },
    {
        title:"Quality",
        details:"We continuously surpass standard expectations and actively enhance the caliber of our services."
       
    //   title: "IT Consulting & Advisory",
      
    },
    {
        title:"Innovation",
        details:"Innovation is the cornerstone of our approach. We strive to discover superior, expedited, and more efficient methods for achieving our objectives."
      
    },
    {
        title:"Team Work",
        details:"Collaboratively, we strive to surpass expectations and deliver exceptional outcomes that delight our clients."
      
    },
   
   

   
  ];
  return (
    <div>
        <div className={style.container}>
        <div className={style.header}><h4>Our Core Values</h4></div>
            <div className={style.containerContent}>

            {data.map((data, index) => {
          return (
            < ValuesCard 
            key={index}
            icon={data.icon}
            title={data.title}
            details={data.details}
            
           
          
          />
          );
        })}
        
    
            </div>
        </div>
    </div>
  )
}

export default ValueCardParent