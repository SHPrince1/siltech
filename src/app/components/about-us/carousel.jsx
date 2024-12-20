'use client';
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../components/about-us/card';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
// Import Swiper styles
import 'swiper/css';
import style from '../../components/about-us/styles/carousel.module.scss';

const Carousel = () => {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={style.cardWrapper}>
              <Card />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={170}
          modules={[Pagination, Navigation]}
          initialSlide={3}
          slidesPerView={4}
          slideToClickedSlide={false}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: `.${style.swiperButtonNext}`,
            prevEl: `.${style.swiperButtonPrev}`,
          }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 4, spaceBetween: 50 },
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {!isMobile && (
        <>
          {/* Custom Navigation Buttons */}
          <div className={style.swiperButtonNext}>
            <GrFormNextLink  size={40}/>
          </div>
          <div className={style.swiperButtonPrev}>
          <GrFormPreviousLink size={40}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
