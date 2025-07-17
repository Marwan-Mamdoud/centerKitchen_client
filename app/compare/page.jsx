"use client";
import setProductsCompare from "@/store/SetProductsCompare";
import Link from "next/link";
import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { GoX } from "react-icons/go";

const Page = () => {
  const { addProductCompare, productsCompare, deleteProductCompare } =
    setProductsCompare();

  return (
    <div>
      <div
        className={`bg-[url('/page_header.jpg')]  bg-contain bg-no-repeat bg-center bg-bluecolor flex w-full  items-center justify-center gap-4 flex-col h-[21dvh]`}
      >
        <p className="text-white font-bold text-5xl">Compare</p>
        <div className=" text-white font-semibold text-xs tracking-wider uppercase">
          <Link href="/">Home /</Link> Compare
        </div>
      </div>
      <div className="py-24 flex   scrollbar-thin items-start gap-0 justify-start overflow-x-scroll w-full">
        {productsCompare.map((item, index) => {
          return (
            <div
              key={index}
              className={` h-full ${
                index == 0 && "ml-[450px]"
              }  w-[350px]  flex flex-col gap-5 items-center justify-center  border-l-[1px] border-x-black/50`}
            >
              <div className="flex flex-col gap-3 w-[350px] items-center justify-center">
                <div
                  onClick={() => {
                    deleteProductCompare(item);
                  }}
                  className="flex items-center group gap-1 mb-5 cursor-pointer justify-center"
                >
                  <p className="font-extrabold text-xs tracking-wide uppercase">
                    Remove
                  </p>
                  <GoX className="w-5 h-5 font-bold hover:rotate-180  group-hover:rotate-180 duration-200 " />{" "}
                </div>
                <div className="w-full  h-[200px] px-5 ">
                  <img
                    src={item.product.image}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="w-10/12 px-5 mx-auto text-center text-black">
                  {item.product.name.en}
                </p>
                <p className="flex flex-wrap px-5 w-full items-center justify-center gap-2">
                  <span
                    className={`text-bluecolor ${
                      item.product?.sale
                        ? " line-through  font-light"
                        : "font-semibold"
                    }`}
                  >
                    {item.product?.price.toLocaleString()} AED
                  </span>
                  {item.product?.sale && (
                    <span className="font-semibold text-bluecolor">
                      {Math.floor(
                        (item.product.price * (100 - item.product.sale)) / 100
                      ).toLocaleString()}{" "}
                      AED
                    </span>
                  )}
                </p>
              </div>
              <div className="relative px-5 min-h-[200px] py-5 bg-gray-100 w-full text-center flex items-center justify-center">
                {index == 0 && (
                  <div className="w-[250px] px-5 h-full bg-gray-100 text-start flex items-center font-bold text-black uppercase absolute top-0 left-0 border-r-[1px] border-r-gray-300 -translate-x-full">
                    Description
                  </div>
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.product?.description?.en,
                  }}
                  className="description  px-5 min-h-[200px] py-5 bg-gray-100 w-full text-center flex items-center justify-center"
                ></div>
              </div>
              <div className=" w-full relative text-center flex items-center justify-center">
                {item.product.code}
                {index == 0 && (
                  <div className="w-[250px] px-5 h-full bg-white text-start flex items-center font-bold text-black uppercase absolute top-0 left-0 border-r-[1px] border-r-gray-300 -translate-x-full">
                    SKU
                  </div>
                )}
              </div>
              {item.product?.stock > 0 ? (
                <div className="flex relative bg-gray-100 w-full  items-center justify-center py-5 gap-2 font-bold text-greencolor ">
                  <FaRegCheckCircle className=" w-8 h-8" />{" "}
                  <p className="">In Stock</p>
                  {index == 0 && (
                    <div className="w-[250px] px-5 h-full bg-gray-100 text-start flex items-center font-bold text-black uppercase absolute top-0 left-0 border-r-[1px] border-r-gray-300 -translate-x-full">
                      Availability
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex relative bg-gray-100 w-full  items-center justify-center py-5 gap-2 font-bold text-redcolor ">
                  <FaRegTimesCircle className=" w-8 h-8 text-redcolor" />
                  <p className="">Out of Stock</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
