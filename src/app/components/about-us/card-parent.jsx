'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Slider from "react-slick";
import Card from "../about-us/card";
import style from "../about-us/styles/card-parent.module.scss";
const CardParent = () => {
 
  return (
    <main>

      
      <div className={style.container}>
        <div className={style.containerDiv} >
         

          
        </div>

        {/* <div className={style.nextDiv}>
          <button>Prev</button>
        </div>
        <div div className={style.prevDiv}>
          <button>Next</button>
        </div> */}
      </div>
    </main>
  );
};

export default CardParent;
