import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function SlideImage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='images/main-banner-4.jpg' alt='main banner' className='img-fluid rounded-3'/>
          <div className='main-banner-content position-absolute'>
              <h4>SUPER DRESS</h4>
              <h5>AFRICAN Woman Dress</h5>
              <p>From $50</p>
              <Link className='button'>BUY NOW</Link>
            </div>
            
          </SwiperSlide>
        <SwiperSlide>
          <img src='images/main-banner-1.jpg' alt='main banner' className='img-fluid rounded-3'/>
          <div className='main-banner-content position-absolute'>
              <h4>SUPER DRESS</h4>
              <h5>AFRICAN Woman Dress</h5>
              <p>From $50</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <img src='images/main-banner-2.jpg' alt='main banner' className='img-fluid rounded-3'/>
          <div className='main-banner-content position-absolute'>
              <h4>SUPER DRESS</h4>
              <h5> Woman cloth</h5>
              <p>From $50</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <img src='images/background.jpg' alt='main banner' className='img-fluid rounded-3'/>
          <div className='main-banner-content position-absolute'>
              <h4>Don't wait things are limited</h4>
              <h5>Men's OUTFiT</h5>

            </div>
          </SwiperSlide>
        
      </Swiper>
    </>
  );
}
