import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/style.css';

const slides = [
  {
    // img: '/Images/magarpatta.jpg',
    img:"/Images/Swiper-Engine.jpg",//engine
    alt: 'Magarpatta city view',
    text: 'Experience the perfect blend of innovation and excellence.'
  },
  {
    // img: '/Images/Electronic drive-by.jpg',
    img: '/Images/Swiper-ElectricVehicle.jpg',//electric vehicle
    alt: 'Magarpatta city view',
    text: 'Experience the perfect blend of innovation and excellence.'
  },
  {
    // img: '/Images/head-office.jpg',
    img: '/Images/Swiper-Generators.jpg',//generators
    alt: 'Magarpatta city view',
    text: 'Experience the perfect blend of innovation and excellence.'
  }
];

const HeroBanner = () => {
  return (
    <section className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="overlay"></div>
              <img 
                src={slide.img} 
                alt={slide.alt} 
                className="image" 
              />
              <div className="image-data">
                <span className="text">{slide.text}</span>
                <h1>Madhura offers Controls & Solutions<br />for Engine, Vehicle, and Generator</h1>
                <a href="#content" className="button">Learn More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;