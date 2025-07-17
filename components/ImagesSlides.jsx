"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const ImagesSlides = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, EffectFade, Navigation]}
      className="h-[75dvh]  [@media(max-width:1050px)]:h-[50dvh] sliderImages z-10 mb-[7dvh] mySwiper"
    >
      <SwiperSlide>
        <Link href="#" className="w-full h-full">
          <img
            alt="image"
            className="w-[100dvw] h-full  [@media(max-width:1050px)]:object-fill object-cover"
            src="hero1.jpg"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#" className="w-full h-full">
          <img
            alt="image"
            className="w-[100dvw] h-full  [@media(max-width:1050px)]:object-fill object-cover"
            src="hero2.jpg"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#" className="w-full h-full">
          <img
            alt="image"
            className="w-[100dvw] h-full  [@media(max-width:1050px)]:object-fill object-cover"
            src="hero3.jpg"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#" className="w-full h-full">
          <img
            alt="image"
            className="w-[100dvw] h-full  [@media(max-width:1050px)]:object-fill object-cover"
            src="hero4.jpg"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#" className="w-full h-full">
          <img
            alt="image"
            className="w-[100dvw] h-full  [@media(max-width:1050px)]:object-fill object-cover"
            src="hero5.jpg"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#" className="w-full h-full">
          <img
            alt="image"
            className="w-[100dvw] h-full  [@media(max-width:1050px)]:object-fill object-cover"
            src="hero6.jpg"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#" className="w-full h-full">
          <img
            alt="image"
            className="w-[100dvw] h-full  [@media(max-width:1050px)]:object-fill object-cover"
            src="hero7.jpg"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImagesSlides;
