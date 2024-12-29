// 'use client'
import React from "react";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import Card from '../components/about-us/card'
// import Carousel from '../../app/components/about-us/carousel'
import ServiceBanner from "../components/services/banner";
import Services from "../components/home-page/services";
import Contact from "../components/home-page/contact";
import Footer from "../components/footer";
// Import Swiper styles
// import 'swiper/css';

const ServicesPage = () => {
  return (
    <main>



      <ServiceBanner />

      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default ServicesPage;
