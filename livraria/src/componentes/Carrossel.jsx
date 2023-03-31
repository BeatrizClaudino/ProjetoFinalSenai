import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Carrossel = (props) => {
    return (
        <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        {props.imagens.map((image) => (
          <SwiperSlide className="w-4/5 flex justify-center items-center !important "><img src={image} alt="" /></SwiperSlide>  
        ))}
      </Swiper>
    );
}
 
export default Carrossel;