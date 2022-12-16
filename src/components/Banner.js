import React from 'react'
import icons from "../ultis/icons"
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Autoplay } from 'swiper';


const { RiArrowDropLeftLine,
  RiArrowDropRightLine } = icons
const Banner = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <Swiper slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className='bg-banner1 h-[600px] flex relative'>
          <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center w-[80%] bg-black bg-opacity-50 rounded-3xl text-while p-5 '>
              <div className='mb-3 text-5xl'>Network Security Services</div>
              <div className='mb-3 text-3xl'>Eliminate wasted time and money by managing your security from one</div>
              <div className='mb-3 text-lg'>Standard point-of-service security solutions are highly difficult to institute, update, and manage. This can lead to complex operations and an increase to overhead cost. Global Tech Solutions wants to help you eliminate these issues with an All-In-One Security Solution, also known as Unified Threat Management (UTM).</div>
              <div className='mx-[20px] text-xl gap-10'>
                <button className='bg-main-100 m-4 p-3 rounded-md'>CONTACT US</button>
                <button className='bg-main-100 p-3 rounded-md'>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-banner2 h-[600px] flex relative '>
          <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center w-[80%] bg-black bg-opacity-50 rounded-3xl text-while p-5 '>
              <div className='mb-3 text-5xl'>Business Continuity Plans</div>
              <div className='mb-3 text-3xl'>It's important to implement a data recovery solution as part of a business continuity plan.</div>
              <div className='mb-3 text-lg'>Consider the files stored on your computer network. Everything is typically stored on a central hard drive or server to make the operation of the system simple and efficient for multiple users. The problem with this is that you face a higher-degree of risk by "putting all your eggs in one basket". Hard drives fail all the time, and tape backup is costly and inefficient, so having a dedicated backup system is a must for any size business that relies on data.</div>
              <div className='mx-[20px] text-xl gap-10'>
                <button className='bg-main-100 m-4 p-3 rounded-md'>CONTACT US</button>
                <button className='bg-main-100 p-3 rounded-md'>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-banner3 h-[600px] flex relative'>
          <div data-aos="zoom-out-left" className='flex justify-center items-center ' >
            <div className='flex flex-col justify-center items-center text-center w-[80%] bg-black bg-opacity-50 rounded-3xl text-while p-5 '>
              <div className='mb-3 text-5xl'>Consulting Services</div>
              <div className='mb-3 text-3xl'>Providing thorough and complete IT road maps for businesses.</div>
              <div className='mb-3 text-lg'>Every Business needs to be efficient to be competitive. At Global Tech Solutions, we deal in efficiency. We provide comprehensive IT Consulting services to companies that are looking to leverage their company's IT into higher degrees of productivity, and ultimately, profitability.</div>
              <div className='mx-[20px] text-xl gap-10'>
                <button className='bg-main-100 m-4 p-3 rounded-md'>CONTACT US</button>
                <button className='hover:bg-main-100 hover:border-none border border-while p-3 rounded-md'>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  )
}

export default Banner



