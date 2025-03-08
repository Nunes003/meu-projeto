import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

export default function MyTecnologics() {
  const technologies = [
    { name: 'HTML', img: '/tools/html.svg' },
    { name: 'CSS', img: '/tools/css.svg' },
    { name: 'SASS', img: '/tools/sass.svg' },
    { name: 'Javascript', img: '/tools/javascript.svg' },
    { name: 'Next js', img: '/tools/nextjs.svg' },
    { name: 'React', img: '/tools/react.svg' },
    { name: 'PHP', img: '/tools/php.svg' },
  ];

  return (
    <div className="my-tecnologics">
      <div className="about-me">
        <img
          className="about-me-icon"
          src="/tools-and-utensils-code-svgrepo-com.svg"
          alt="eu"
        />
        <span className="about-me-text">Tecnologias</span>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000 }}>
        {technologies.map((technologies, index) => (
          <SwiperSlide key={technologies.name}>
            <div className="tool-slide">
              <img
                src={technologies.img}
                alt={technologies.name}
                className="img-swipper"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
