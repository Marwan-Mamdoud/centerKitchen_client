"use client";
import { RiHeartLine, RiSearchLine, RiShuffleFill } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModelProduct from "./ModelProduct";
import SetModelProduct from "@/store/ProductModel";
import SetModelProductInfo from "@/store/ProductModelInfo";
import SetProductsToWishlist from "@/store/setProductsToWishlist";
import { useRouter } from "next/navigation";
import setProductsCompare from "@/store/SetProductsCompare";
import SetId from "@/store/SetId";

const NewProduct = ({ link, product }) => {
  let lastPrice;
  const { setId } = SetId();
  let totalGrand;
  const [options, setOptions] = useState(0);
  const { status, show, hide } = SetModelProduct();
  const { setProductInfo } = SetModelProductInfo();
  const { addProductCompare, productsCompare } = setProductsCompare();
  const router = useRouter();
  const { addProduct, products } = SetProductsToWishlist();
  const [numProduct, setNumProduct] = useState(1);
  let salePrice = Math.floor((product?.price * (100 - product?.sale)) / 100);
  salePrice = salePrice.toLocaleString();
  if (product?.sale > 0) {
    lastPrice = Math.floor((product?.price * (100 - product?.sale)) / 100);
  } else {
    lastPrice = product?.price;
  }
  totalGrand = lastPrice * numProduct + options;
  return (
    <>
      <div
        className="flex flex-col items-center h-full w-full  justify-center group [@media(max-width:1050px)]:mx-0 mx-5 gap-3"
        onClick={() => setId(product._id)}
      >
        <Link href={link}>
          <div className="w-full relative h-[250px] [@media(max-width:1050px)]:h-[350px]">
            <img
              src={product?.image}
              alt="img"
              className="object-cover [@media(max-width:1050px)]:object-fill rounded-xl w-full h-full"
            />
            {product?.stock <= 0 ? (
              <span className="w-12 h-12 absolute flex items-center justify-center top-2 left-2   text-center rounded-full bg-redcolor text-white font-extrabold">
                <p className="leading-4 text-xs uppercase">Sold Out</p>
              </span>
            ) : (
              <span className="w-12 h-12 absolute flex items-center justify-center top-2 left-2  text-center rounded-full bg-bluecolor text-white font-semibold text-sm">
                <p className="">-{product?.sale}%</p>
              </span>
            )}
            <div
              id="icons"
              className="absolute  z-50 flex duration-300 shadow-lg flex-col  [@media(max-width:1050px)]:hidden items-center group-hover:right-[12px] invisible group-hover:visible group-hover:opacity-100 gap-5 justify-center p-3 top-3 -right-12 opacity-0 bg-white"
            >
              {productsCompare.some(
                (item) => item.product._id === product._id
              ) ? (
                <AiOutlineCheck
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/compare");
                  }}
                  className=" w-6 h-6 text-redcolor "
                />
              ) : (
                <RiShuffleFill
                  onClick={(e) => {
                    e.preventDefault();
                    addProductCompare({
                      product: {
                        link: link,
                        ...product,
                      },
                    });
                  }}
                  className=" w-6 h-6 hover:text-redcolor"
                />
              )}
              <RiSearchLine
                onClick={(e) => {
                  e.preventDefault();
                  setProductInfo({
                    link: link,
                    product,
                  });
                  show();
                }}
                className=" w-6 h-6 hover:text-redcolor "
              />
              {products.some((item) => item.product._id === product._id) ? (
                <AiOutlineCheck
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/wishlist");
                  }}
                  className=" w-6 h-6 text-redcolor "
                />
              ) : (
                <RiHeartLine
                  onClick={(e) => {
                    e.preventDefault();
                    addProduct({
                      product: {
                        link: link,
                        ...product,
                      },
                    });
                    console.log(products);
                  }}
                  className=" w-6 h-6 hover:text-redcolor"
                />
              )}
            </div>
            <div className=" [@media(max-width:1050px)]:visible bg-white w-9 h-9 shadow-xl flex items-center justify-center rounded-full  [@media(max-width:1050px)]:opacity-100 invisible opacity-0 absolute top-5 right-5">
              {products.some((item) => item.product._id === product._id) ? (
                <AiOutlineCheck
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/wishlist");
                  }}
                  className=" w-6 h-6 text-redcolor "
                />
              ) : (
                <RiHeartLine
                  onClick={(e) => {
                    e.preventDefault();
                    addProduct({
                      product: {
                        link: link,
                        ...product,
                      },
                    });
                    console.log(products);
                  }}
                  className=" w-6 h-6 hover:text-redcolor"
                />
              )}
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-start gap-1">
            <p className="text-center w-9/12 px-3  text-black hover:text-graycolor duration-150 font-medium uppercase text-sm">
              {product?.name.en}
            </p>
            {product?.category.name.en && (
              <div className="text-black py-2 text-sm">
                {product?.category?.name?.en}
              </div>
            )}
            <p className="flex flex-wrap items-center justify-center gap-2">
              <span
                className={`text-bluecolor ${
                  product?.sale ? " line-through  font-light" : "font-semibold"
                }`}
              >
                {product?.price.toLocaleString()} AED
              </span>
              {product?.sale && (
                <span className="font-semibold text-bluecolor">
                  {salePrice} AED
                </span>
              )}
            </p>
          </div>
        </Link>
        <ModelProduct />
      </div>
    </>
  );
};

export default NewProduct;
