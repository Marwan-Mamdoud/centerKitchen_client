"use client";
import React, { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
import { getNewProducts } from "@/lib/APIS";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard, Pagination } from "swiper/modules";
import SetId from "@/store/SetId";
import Loading from "./Loading";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { setId } = SetId();
  const getNewProds = async () => {
    setLoading(true);
    const data = await getNewProducts();
    setNewProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    getNewProds();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="w-full border-b-0 py-16 flex-col border-gray-200 flex items-center justify-center">
        <span className="font-extrabold [@media(max-width:1050px)]:text-2xl text-4xl text-black z-10  border-b-redcolor border-b-2 pb-3 uppercase text-center">
          {" "}
          New Products
        </span>
        <hr className="h-[1px] -translate-y-[160%] -z-10 border-0 w-full bg-gray-200" />
      </div>
      <div className="grid grid-cols-5 grid-rows-1 [@media(max-width:1050px)]:hidden items-center justify-center gap-5">
        {loading ? (
          <Loading />
        ) : (
          newProducts?.map((item, index) => {
            return (
              <div key={index} onClick={() => setId(item._id)}>
                <NewProduct
                  link={`/category_products/${item._id}`}
                  product={item}
                />
              </div>
            );
          })
        )}
      </div>
      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        speed={2000}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="relatedProdcuts mySwiper items-center w-full gap-5 mb-24 justify-center opacity-0 invisible  [@media(max-width:1050px)]:flex [@media(max-width:1050px)]:opacity-100 [@media(max-width:1050px)]:visible [@media(max-width:1050px)]:h-full  h-0 p-20"
      >
        <div className="w-1/2 px-10">
          {loading ? (
            <Loading />
          ) : (
            newProducts?.map((item, index) => {
              return (
                <SwiperSlide
                  onClick={() => setId(item._id)}
                  key={index}
                  className=" !flex items-center h-full  justify-center"
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
  );
};

export default NewProducts;
