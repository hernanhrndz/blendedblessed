import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/Carousel.css";

// import './styles.css';

// import required modules
import { EffectCoverflow, Navigation, Pagination, Scrollbar} from 'swiper/modules';

import sample1 from "../assets/sample1.png";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";
import sample4 from "../assets/sample4.png";

export const ImgCarousel = () => {
    return (
        
        <>
        <h1 className='fs-headings'>Our Work</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
        //   modules={[]}
          pagination={{el:'.swiper-pagination',clickable:true}}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={sample1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sample2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sample3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sample4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sample4} />
          </SwiperSlide>

          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>

            <div className="swiper-pagination"></div>
          </div>

        </Swiper>
      </>
    );
};

export default ImgCarousel;