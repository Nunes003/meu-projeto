import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

export default function MyTools() {
  const tools = [
    { name: 'Figma', img: '/tools/figma.png' },
    { name: 'Firebase', img: '/tools/firebase.png' },
    { name: 'Github', img: '/tools/github.png' },
    { name: 'Git-Lab', img: '/tools/gitlab.png' },
    { name: 'PhpMyAdmin', img: '/tools/phpmyadmin.png' }
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="my-tools">
      <div className="about-me">
        <img
          className="about-me-icon"
          src="/builder-code-design-svgrepo-com.svg"
          alt="eu"
        />
        <span className="about-me-text">Ferramentas</span>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={3} 
        modules={[Navigation, Autoplay]}
        navigation 
        autoplay={{ delay: 2000 }}
      >
        {tools.map((tool, index) => (
          <SwiperSlide key={tool.name}>
            <div className="tool-slide">
              <img src={tool.img} alt={tool.name} className='img-swipper' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
