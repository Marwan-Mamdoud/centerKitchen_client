"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import NewProduct from "./NewProduct";
import { getRelatedProducts } from "@/lib/APIS";
import SetId from "@/store/SetId";
import Loading from "./Loading";

const RelatedProducts = ({ idCategory }) => {
  const [relatedProducts, setNewRelatedProducts] = useState([]);
  const [loading, setloading] = useState(true);

  const { setId } = SetId();
  useEffect(() => {
    const getRelatedProds = async () => {
      setloading(true);
      const data = await getRelatedProducts(idCategory);
      setNewRelatedProducts(data);
      setloading(false);
    };
    getRelatedProds();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">
      <p className="text-2xl text-black font-semibold border-b-[5px] uppercase pb-1 border-redcolor">
        Related Products
      </p>
      <hr className="bg-graycolor w-full mb-8" />
      <div
        className="mx-auto w-full"
        onMouseEnter={() => {
          document
            .querySelector(".swiper-button-prev")
            .classList.add("button-prev");
          document
            .querySelector(".swiper-button-next")
            .classList.add("button-next");
        }}
        onMouseLeave={() => {
          document
            .querySelector(".swiper-button-prev")
            .classList.remove("button-prev");
          document
            .querySelector(".swiper-button-next")
            .classList.remove("button-next");
        }}
      >
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          speed={1000}
          dir="rtl"
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          breakpoints={{
            // when window width is >= 640px
            100: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1051: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper relatedProdcuts  flex items-center w-full gap-5 mb-24 justify-center  h-full p-20"
        >
          <div className="w-1/2 px-10">
            {loading ? (
              <Loading />
            ) : (
              relatedProducts?.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => setId(item._id)}
                    className=" !flex items-center px-2  h-full  justify-center"
                  >
                    <NewProduct
                      link={`/category_products/${item._id}`}
                      product={item}
                    />
                  </SwiperSlide>
                );
              })
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
