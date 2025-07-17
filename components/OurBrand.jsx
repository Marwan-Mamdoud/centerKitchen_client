"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { getBrands } from "@/lib/APIS";
import Loading from "./Loading";

const OurBrand = () => {
  const [loading, setloading] = useState(true);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const getBrandss = async () => {
      setloading(true);
      const data = await getBrands();
      setBrands(data);
      setloading(false);
    };
    getBrandss();
  }, []);

  return (
    <div id="brands" className="max-w-[1200px] mx-auto ">
      <div className="w-full border-b-0 mt-28 flex-col border-gray-200 flex items-center justify-center">
        <span className="font-semibold text-3xl text-black z-10  border-b-redcolor border-b-2 pb-7 px-6 text-center">
          {" "}
          Our Brands & Partners
        </span>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="mx-auto"
          onMouseEnter={() => {
            document
              .querySelector(".brands .swiper-button-prev")
              .classList.add("button-prev");
            document
              .querySelector(".brands .swiper-button-next")
              .classList.add("button-next");
          }}
          onMouseLeave={() => {
            document
              .querySelector(".brands .swiper-button-prev")
              .classList.remove("button-prev");
            document
              .querySelector(".brands .swiper-button-next")
              .classList.remove("button-next");
          }}
        >
          <Swiper
            slidesPerView={6}
            slidesPerGroup={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
            dir="rtl"
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            breakpoints={{
              // when window width is >= 640px
              100: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              1051: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper  brands flex items-center mt-24 justify-center  h-full p-20"
          >
            {brands?.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="!flex items-center justify-center !h-full"
                >
                  <Link
                    target="_blank"
                    href={item.link}
                    className="h-full flex items-center justify-center w-full"
                  >
                    <img
                      alt="img"
                      src={item.image}
                      className="!object-contain !object-center w-full h-fit"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default OurBrand;
