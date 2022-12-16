import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Autoplay } from 'swiper';
import dell from "../assets/dell-logo.jpg"
import hp from "../assets/hp-logo.jpg"
import lenovo from "../assets/lenovo-logo.jpg"
import nable from "../assets/nable-logo.jpg"
import netgear from "../assets/netgear-logo.jpg"
import office365 from "../assets/office-365-logo.jpg"
import microsoft from "../assets/microsoft-logo.jpg"
import mimecast from "../assets/mimecast-logo.jpg"

const SliderSwiper = () => {

    return (
        <div className='h-60'><Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}


        >
            <SwiperSlide><img src={dell} alt="" /></SwiperSlide>
            <SwiperSlide><img src={hp} alt="" /></SwiperSlide>
            <SwiperSlide><img src={lenovo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={nable} alt="" /></SwiperSlide>
            <SwiperSlide><img src={netgear} alt="" /></SwiperSlide>
            <SwiperSlide><img src={office365} alt="" /></SwiperSlide>
            <SwiperSlide><img src={microsoft} alt="" /></SwiperSlide>
            <SwiperSlide><img src={mimecast} alt="" /></SwiperSlide>

        </Swiper></div>
    )
}

export default SliderSwiper