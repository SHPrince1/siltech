'use client';
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../components/about-us/card';
// import { GrFormNextLink } from "react-icons/gr";
// import { GrFormPreviousLink } from "react-icons/gr";
// Import Swiper styles
import 'swiper/css';
import style from '../../components/about-us/styles/carousel.module.scss';

const Carousel = () => {
  const data = [

    
    {
        title:"Business Empowerment",
        details:"We empower businesses with tailored solutions and expert support to boost efficiency, drive growth, and ensure scalability. Partner with us to turn challenges into opportunities and achieve lasting success."
       
    //   title: "IT Consulting & Advisory",
      
    },
    {
        title:"Customer Satisfaction",
        details:"Customer satisfaction is our top priority. We are committed to delivering quality solutions and exceptional service that exceed expectations, ensuring lasting trust and loyalty."
       
    //   title: "IT Consulting & Advisory",
      
    },
    {
        title:"Quality and Efficient Service",
        details:"We deliver high-quality, efficient services tailored to meet your needs. Our commitment to excellence ensures reliable solutions and outstanding results every time."
       
    //   title: "IT Consulting & Advisory",
      
    },
    {
        title:"Cooperate Partnerships",
        details:"We've achieved a competitive edge among indigenous technology firms through strategic partnerships with global OEMs. These collaborations enable us to deliver exceptional value, drive client success, and achieve impactful results."
      
    },
   
   

   
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set mobile state for screens < 768px
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isMobile ? (
        <div className={style.mobileContainer}>
          {data.map((data, index) => (
            <div key={index} className={style.cardWrapper}>
              <Card
              key={index}
              title={data.title}
              details={data.details}
              
              />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={9}
          modules={[Pagination, Navigation]}
          initialSlide={4}
          slidesPerView={3}
          slideToClickedSlide={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: `.${style.swiperButtonNext}`,
            prevEl: `.${style.swiperButtonPrev}`,
          }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
          }}
        >
          {data.map((data, index) => (
            <SwiperSlide key={index}>
              <Card
               key={index}
               title={data.title}
               details={data.details}
              
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {!isMobile && (
        <>
          {/* Custom Navigation Buttons */}
          {/* <div className={style.swiperButtonNext}>
            <GrFormNextLink  size={40}/>
          </div>
          <div className={style.swiperButtonPrev}>
          <GrFormPreviousLink size={40}/>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Carousel;
