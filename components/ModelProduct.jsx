"use client";
import React from "react";
import { GoX } from "react-icons/go";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import SetModelProduct from "@/store/ProductModel";
import SetModelProductInfo from "@/store/ProductModelInfo";
const ModelProduct = () => {
  let lastPrice;
  let totalGrand;
  const [options, setOptions] = useState(0);
  const { status, hide } = SetModelProduct();
  const { productInfo } = SetModelProductInfo();
  const [numProduct, setNumProduct] = useState(1);
  let salePrice = Math.floor(
    (productInfo?.product?.price * (100 - productInfo?.product?.sale)) / 100
  );
  salePrice = salePrice.toLocaleString();
  if (productInfo?.product?.sale > 0) {
    lastPrice = Math.floor(
      (productInfo?.product?.price * (100 - productInfo?.product?.sale)) / 100
    );
  } else {
    lastPrice = productInfo?.product?.price;
  }
  totalGrand = lastPrice * numProduct + options;
  return (
    <dialog
      onClick={() => {
        hide();
      }}
      className={`fixed inset-0 h-[100dvh] w-[100dvw] model items-center justify-center bg-[rgba(0,0,0,0.4)] z-[99999] ${
        status ? "flex" : "hidden"
      } `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white flex relative items-center justify-between  shadow-lg z-50   h-[500px] w-[950px]"
      >
        <div className="w-1/2 h-full">
          <img
            src={productInfo?.product?.image}
            alt="img"
            className="w-full h-full object-cover"
          />
          {productInfo?.product?.stock <= 0 ? (
            <span className="w-12 h-12 absolute flex items-center justify-center top-2 left-2   text-center rounded-full bg-redcolor text-white font-extrabold">
              <p className="leading-4 text-xs uppercase">Sold Out</p>
            </span>
          ) : (
            <span className="w-12 h-12 absolute flex items-center justify-center top-2 left-2  text-center rounded-full bg-bluecolor text-white font-semibold text-sm">
              <p className="">-{productInfo?.product?.sale}%</p>
            </span>
          )}
        </div>
        <div className="overflow-y-scroll flex flex-col items-start justify-start h-full relative w-1/2 scrollbar-thin px-8 py-10">
          <GoX
            onClick={() => {
              hide();
            }}
            className="text-black w-8 h-8 cursor-pointer fixed top-32 right-80 hover:rotate-180 duration-200"
          />
          <p className="font-[500] text-4xl  text-black">
            {productInfo?.product?.name.en}
          </p>
          <p className="flex flex-wrap text-xl my-8  items-center justify-center gap-2">
            <span
              className={`text-bluecolor ${
                productInfo?.product?.sale
                  ? " line-through  font-light"
                  : "font-semibold"
              }`}
            >
              {productInfo?.product?.price?.toLocaleString()} AED
            </span>
            {productInfo?.product?.sale && (
              <span className="font-semibold text-bluecolor">
                {salePrice} AED
              </span>
            )}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: productInfo?.product?.description?.en,
            }}
            className="description"
          />
          {productInfo?.product?.stock > 0 ? (
            <div className="flex items-center justify-start my-5 gap-2 font-bold text-greencolor ">
              <FaRegCheckCircle className=" w-5 h-5" />{" "}
              <p className="">In Stock</p>
            </div>
          ) : (
            <div className="flex items-center justify-start gap-2 my-10 font-bold text-redcolor ">
              <FaRegTimesCircle className=" w-5 h-5" />
              <p className="">Out of Stock</p>
            </div>
          )}
          {productInfo?.product?.stock > 0 && (
            <div className="flex flex-col items-start justify-start mt-3 text-black mb-8 gap-3">
              <p className="text-sm">
                Installation Charges <span className="text-redcolor">*</span>
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-2 border-redcolor rounded-full flex items-center justify-center !cursor-pointer">
                  <input
                    type="radio"
                    className="appearance-none  w-3 h-3 border-0 cursor-pointer !inline-block checked:!bg-redcolor border-redcolor rounded-full"
                    name="one"
                    onClick={() => setOptions(0)}
                    value="one"
                  />
                </div>
                <label htmlFor="one" className=" text-sm ">
                  No Thanks
                </label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-2 border-redcolor rounded-full flex items-center justify-center !cursor-pointer">
                  <input
                    onClick={() => setOptions(450)}
                    type="radio"
                    className="appearance-none  w-3 h-3 border-0 cursor-pointer !inline-block checked:!bg-redcolor border-redcolor rounded-full"
                    name="one"
                  />
                </div>
                <label htmlFor="two" className=" text-sm ">
                  Installation Charge{" "}
                  <span className="text-graycolor">(+450 AED)</span>
                </label>
              </div>
            </div>
          )}
          {productInfo?.product?.stock > 0 && (
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="flex items-start justify-start gap-3">
                <p className="text-gray-500 font-semibold  text-sm">
                  Product total :
                </p>
                <p className="text-redcolor text-sm font-semibold ">
                  {(lastPrice * numProduct).toLocaleString()} AED
                </p>
              </div>
              <div className="flex items-start text-gray-500 font-b justify-start gap-3">
                <p className="text-gray-500 font-semibold  text-sm">
                  Options total :
                </p>
                <p className="text-redcolor font-semibold  text-sm option">
                  {options} AED
                </p>{" "}
              </div>
              <div className="options flex items-start justify-start gap-3">
                <p className="text-gray-500 font-semibold  text-sm">
                  Grand total :
                </p>
                <p className="text-redcolor text-sm font-semibold ">
                  {totalGrand.toLocaleString()} AED
                </p>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-start items-start gap-3 mt-3">
            {productInfo?.product?.stock > 0 && (
              <div className="flex items-center h-[45px] my-5 justify-center">
                <button
                  onClick={() => setNumProduct((prev) => ++prev)}
                  className="border-2 px-1 h-full border-gray-300"
                >
                  <PlusIcon className="text-gray-500 w-4 h-4 " />
                </button>
                <p className=" border-y-2 px-3 border-gray-300 text-gray-500 text-center flex items-center justify-center h-full">
                  {numProduct}
                </p>
                <button
                  onClick={() => {
                    numProduct <= 1
                      ? setNumProduct(1)
                      : setNumProduct((prev) => --prev);
                  }}
                  className="border-2 border-gray-300 px-1 h-full"
                >
                  <MinusIcon className="text-gray-500  w-4 h-4" />
                </button>
                <button className="px-7 ml-4 h-[45px] bg-redcolor text-white font-bold text-sm uppercase hover:bg-bluecolor duration-200 ease-linear">
                  add to cart
                </button>
              </div>
            )}
            {/* <div className="flex items-center gap-1 w-full  justify-between text-bluecolor mt-2 text-sm font-bold">
                <div className="hover:text-redcolor flex items-center gap-1  justify-start">
                  <RiShuffleFill className=" cursor-pointer peer" />
                  <p className="  cursor-pointer">Compare</p>
                </div>
                <div className="flex items-center gap-1 hover:text-redcolor  justify-start">
                  <RiHeartLine className=" cursor-pointer" />
                  <p className=" cursor-pointer">Add to wishlist</p>
                </div>
              </div> */}
          </div>
          <hr className="text-gray-500 h-1 my-1 w-full" />
          <div className="flex flex-col justify-start mt-5 text-sm  items-start gap-3 text-black font-bold mb-28">
            <p className="">
              Product Code:{"\n "}
              <span className="text-graycolor font-normal">
                {productInfo?.product?.code}
              </span>
            </p>
            <p className="">
              Categories:{" "}
              <Link href="#" className="text-graycolor font-normal">
                {" "}
                {productInfo?.product?.category?.name?.en} ,{" "}
              </Link>
              {productInfo?.product?.sale > 0 && (
                <Link href="#" className="text-graycolor  font-normal">
                  Year End Sale
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModelProduct;
